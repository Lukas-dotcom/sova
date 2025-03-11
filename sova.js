// sova.js
// Tento soubor obsahuje kompletní SOVA logiku i dílčí skript "Shoptet Parameter Sorting Robot".
// Aktualizace provedete pouze úpravou tohoto souboru v GIT repozitáři.
(function() {
    'use strict';

    // --- Debug logování URL a režimu ---
    const currentUrl = window.location.href;
    console.log("[SOVA] Aktuální URL: " + currentUrl);
    const isDetailPage = currentUrl.indexOf("parametry-pro-filtrovani-detail") !== -1;
    const isListingPage = currentUrl.indexOf("parametry-pro-filtrovani-vypis") !== -1;
    console.log("[SOVA] isDetailPage: " + isDetailPage);
    console.log("[SOVA] isListingPage: " + isListingPage);

    // --- Utility funkce ---
    function log(msg) {
        console.log("[SOVA] " + msg);
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // --- Funkce pro načtení CSV mappingu z univerzálního CSV ---
    function fetchUniversalCSV(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                onload: function(response) {
                    if (response.status === 200) {
                        try {
                            let data = response.responseText;
                            let lines = data.split('\n').filter(line => line.trim() !== '');
                            let mapping = {};
                            // První řádek jsou hlavičky – data začínají od 2. řádku
                            for (let i = 1; i < lines.length; i++) {
                                let cols = lines[i].split(',');
                                if (cols.length >= 2) {
                                    let scriptName = cols[0].trim();
                                    let scriptCsvUrl = cols[1].trim();
                                    mapping[scriptName] = scriptCsvUrl;
                                }
                            }
                            resolve(mapping);
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(new Error("HTTP error " + response.status));
                    }
                },
                onerror: function(err) {
                    reject(err);
                }
            });
        });
    }

    // --- Funkce pro načtení CSV definice filtrů pro řazení ---
    function fetchSortingCSV(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                onload: function(response) {
                    if (response.status === 200) {
                        try {
                            let data = response.responseText;
                            let lines = data.split('\n').filter(line => line.trim() !== '');
                            let result = {};
                            // Data začínají od 2. řádku (první řádek jsou hlavičky)
                            for (let i = 1; i < lines.length; i++) {
                                let cols = lines[i].split(',');
                                if (cols.length >= 2) {
                                    let paramName = cols[0].trim();
                                    let oddelovacValue = cols[1].trim();
                                    result[paramName] = { oddelovac: oddelovacValue };
                                }
                            }
                            resolve(result);
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(new Error("HTTP error " + response.status));
                    }
                },
                onerror: function(err) {
                    reject(err);
                }
            });
        });
    }

    // --- SOVA: Injektování tlačítka na stránkách s výpisem filtrů ---
    function injectSOVAButton() {
        const universalCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRufx0-X2OdjDVG1KAKx1QhC38JMxDj10hOYDGTBi6te9jYRXrBfRYazSpFHXglSKmcaQEs7tdvTOKV/pub?gid=775097961&single=true&output=csv";
        fetchUniversalCSV(universalCsvUrl)
            .then(mapping => {
                log("Univerzální CSV mapping načteno: " + JSON.stringify(mapping));
                if (!mapping["Shoptet Parameter Sorting Robot"]) {
                    log("Mapping neobsahuje 'Shoptet Parameter Sorting Robot'. Nastavuji ručně.");
                    mapping["Shoptet Parameter Sorting Robot"] = "https://raw.githubusercontent.com/Lukas-dotcom/sova/main/shoptet_parameter_sorting_robot.js";
                }
                GM_setValue("sovaMapping", JSON.stringify(mapping));
                let contentButtons = document.querySelector("p.content-buttons");
                if(contentButtons) {
                    let btn = document.createElement("a");
                    btn.href = "#";
                    btn.title = "Seřadit parametry 🦉";
                    btn.className = "btn btn-sm btn-primary";
                    btn.target = "_blank";
                    btn.textContent = "Seřadit parametry 🦉";
                    btn.style.marginLeft = "10px";
                    btn.addEventListener("click", function(e) {
                        e.preventDefault();
                        let mappingStr = GM_getValue("sovaMapping", "{}");
                        let mapping = JSON.parse(mappingStr);
                        log("Kliknuto, načtený mapping: " + JSON.stringify(mapping));
                        if(mapping["Shoptet Parameter Sorting Robot"]) {
                            let scriptCsvUrl = mapping["Shoptet Parameter Sorting Robot"];
                            GM_setValue("sova:SPSortingCSV", scriptCsvUrl);
                            log("CSV URL pro řazení filtrů uloženo: " + scriptCsvUrl);
                            // Nastavíme chainMode
                            GM_setValue("sova:chainMode", "true");
                            // Zpracujeme výpis a uložíme seznam detailních URL; čítač nastavíme na 0
                            processListingPageForNewWindow();
                        } else {
                            console.error("Mapping pro 'Shoptet Parameter Sorting Robot' nebyl nalezen.");
                        }
                    });
                    contentButtons.appendChild(btn);
                    log("Injektováno tlačítko 'Seřadit parametry 🦉'.");
                } else {
                    log("Element p.content-buttons nebyl nalezen.");
                }
            })
            .catch(err => {
                console.error("Chyba při načítání univerzálního CSV mappingu:", err);
            });
    }

    // --- Funkce pro zpracování výpisové stránky a vytvoření seznamu URL detailů ---
    async function processListingPageForNewWindow() {
        log("Zpracovávám stránku s výpisem filtrů (pro nové okno)...");
        let rows = document.querySelectorAll("table.table tbody tr");
        if (!rows || rows.length === 0) {
            log("Na stránce nebyly nalezeny žádné řádky.");
            return;
        }
        let paramsList = [];
        const csvUrl = GM_getValue("sova:SPSortingCSV", "XXXXXXXX");
        if (!csvUrl || csvUrl === "XXXXXXXX") {
            console.error("CSV URL pro řazení filtrů není nastaveno.");
            return;
        }
        try {
            let paramRules = await fetchSortingCSV(csvUrl);
            log("CSV definice filtrů načtena: " + JSON.stringify(paramRules));
            GM_setValue("paramRules", JSON.stringify(paramRules));
        } catch (e) {
            console.error("Chyba při načítání CSV definice filtrů:", e);
            return;
        }
        rows.forEach(row => {
            let link = row.querySelector("a.table__detailLink");
            if (link) {
                let paramName = link.textContent.trim();
                let url = link.href;
                let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
                if (paramRules[paramName] && paramRules[paramName].oddelovac.toLowerCase() === "neradit") {
                    log(Přeskakuji parametr '${paramName}' (nastaveno "neradit").);
                } else {
                    paramsList.push({ name: paramName, url: url });
                }
            }
        });
        if (paramsList.length === 0) {
            log("Nebyl nalezen žádný parametr k zpracování.");
            return;
        }
        log(Nalezeno ${paramsList.length} parametrů ke zpracování.);
        // Přidáme čítač pro každý parametr, počínaje od 0
        paramsList.forEach((param, index) => {
            param.counter = index;
        });
        // Uložíme kompletní seznam parametrů
        GM_setValue("fullParamsList", JSON.stringify(paramsList));
        // Uložíme zbytek parametrů kromě prvního
        GM_setValue("paramsList", JSON.stringify(paramsList.slice(1)));
        GM_setValue("sova:processedCount", 0);
													  
        let currentParam = paramsList[0];
															  
        GM_setValue("currentParam", JSON.stringify(currentParam));
        log(Čítač = 0. První parametr: ${currentParam.name}, URL: ${currentParam.url});
																				
        window.open(currentParam.url, "sovaSortingWindow", "width=1200,height=800");
    }
	 
					 
  

    // --- Dílčí skript: Shoptet Parameter Sorting Robot (chain mode) ---
    async function runSortingRobot() {
	 // Provedeme řazení pouze v okně, které bylo otevřeno skriptem
     if (window.name !== "sovaSortingWindow") {
        log("Toto okno není určeno pro řazení, skript se nevykoná.");
        return;
    }                                                            

        log("Spouštím Shoptet Parameter Sorting Robot (dílčí skript).");
        const delayMs = 2000;

        // Určíme očekávanou URL podle aktuálního počtu zpracovaných parametrů (sova:processedCount)
        let processedCount = GM_getValue("sova:processedCount", 0);
        let fullParamsList = JSON.parse(GM_getValue("fullParamsList", "[]"));
        if(fullParamsList.length <= processedCount) {
            console.error("Plný seznam parametrů je prázdný nebo nedostačující.");
            return;
        }
        let expectedParam = fullParamsList[processedCount];
        let expectedUrl = expectedParam.url;
        let currentUrl = window.location.href;
        log(Čítač = ${processedCount}. Očekávaná URL: ${expectedUrl});
        
        if (currentUrl !== expectedUrl) {
            log(Aktuální URL (${currentUrl}) se neshoduje s očekávanou (${expectedUrl}). Přesměrovávám...);
            window.location.href = expectedUrl;
            return;
        } else {
            log(Aktuální URL odpovídá očekávané. Očekávaná URL: ${expectedUrl} | Aktuální URL: ${currentUrl});
        }

        let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
        let currentParam = JSON.parse(GM_getValue("currentParam", "{}"));
        log(Zpracovávám detail parametru: ${currentParam.name});
        await sleep(delayMs);

        let table = document.querySelector("table.table");
        if (!table) {
            console.error("Nebyla nalezena tabulka s hodnotami.");
            return;
        }
        let tbody = table.querySelector("tbody");
        if (!tbody) {
            console.error("Nebyl nalezen obsah tabulky.");
            return;
        }
        let rows = Array.from(tbody.querySelectorAll("tr"));
        let rowsData = rows.map(row => {
            let a = row.querySelector("td:nth-child(2) a.table__detailLink");
            let text = a ? a.textContent.trim() : "";
            let input = row.querySelector("td.table__cell--actions input[name='priority[]']");
            let origValue = input ? input.value : null;
            return { row, text, origValue };
        });

        if (paramRules[currentParam.name] && paramRules[currentParam.name].oddelovac.toLowerCase() !== "neradit") {
            let oddelovac = paramRules[currentParam.name].oddelovac;
            log(Řazení s použitím oddělovače '${oddelovac}');
            rowsData.forEach(item => {
                let parts = item.text.split(oddelovac);
                if (parts.length === 2) {
                    let part1 = parseFloat(parts[0].trim().replace(/\s/g, ""));
                    let part2 = parseFloat(parts[1].trim().replace(/\s/g, ""));
                    if (isNaN(part1) || isNaN(part2)) {
                        item.valid = false;
                    } else {
                        item.valid = true;
                        item.num1 = part1;
                        item.num2 = part2;
                    }
                } else {
                    item.valid = false;
                }
            });
            rowsData.sort((a, b) => {
                if (a.valid && b.valid) {
                    return a.num1 !== b.num1 ? a.num1 - b.num1 : a.num2 - b.num2;
                }
                return a.valid ? -1 : b.valid ? 1 : 0;
            });
        } else {
            log("Standardní řazení (rozdělení podle čísla a písmena).");
            rowsData.forEach(item => {
                let text = item.text;
                if (text === "NE" || text === "-") {
                    item.sortKey = { group: 3, key: text };
                } else if (/^\d/.test(text)) {
                    let match = text.match(/^([\d\s.,]+)/);
                    if (match) {
                        let numStr = match[1].replace(/\s/g, "").replace(/,/g, ".");
                        let numVal = parseFloat(numStr);
                        item.sortKey = { group: 1, key: isNaN(numVal) ? Infinity : numVal };
                    } else {
                        item.sortKey = { group: 1, key: Infinity };
                    }
                } else if (/^[A-Za-z]/.test(text)) {
                    item.sortKey = { group: 2, key: text.toLowerCase() };
                } else {
                    item.sortKey = { group: 3, key: text };
                }
            });
            rowsData.sort((a, b) => {
                if (a.sortKey.group !== b.sortKey.group) {
                    return a.sortKey.group - b.sortKey.group;
                }
                return a.sortKey.key < b.sortKey.key ? -1 : a.sortKey.key > b.sortKey.key ? 1 : 0;
            });
        }
        log("Seřazené hodnoty: " + JSON.stringify(rowsData.map(item => item.text)));
        await sleep(delayMs);

        tbody.innerHTML = "";
        rowsData.forEach(item => {
            let input = item.row.querySelector("td.table__cell--actions input[name='priority[]']");
            if (input && item.origValue !== null) {
                input.value = item.origValue;
            }
            tbody.appendChild(item.row);
        });
        log("Tabulka byla přeuspořádána a původní hodnoty priority[] byly doplněny.");
        await sleep(delayMs);

        // --- Zvýšení čítače před kliknutím na Uložit ---
																   
	   
        log("Před zvýšením čítače: " + processedCount);
        processedCount++;
        GM_setValue("sova:processedCount", processedCount);
        GM_setValue("lastProcessedUrl", window.location.href);
        log(Zpracováno parametrů (po zvýšení čítače): ${processedCount});
        log("Aktuální URL: " + window.location.href);

        let saveButton = document.querySelector("a.btn-action.submit-js[rel='saveAndStay']");
        if (saveButton) {
            log("Klikám na tlačítko Uložit.");
            saveButton.click();

											 
																	  
											 
																	  
        } else {
            console.error("Tlačítko Uložit nebylo nalezeno.");
						   
        }
        await sleep(delayMs);

        // --- Načtení dalšího parametru v tom samém okně ---
        log("Hledám další parametr k řazení...");
        let storedList = GM_getValue("paramsList", null);
        if (storedList) {
            let paramsList = JSON.parse(storedList);
            if (paramsList.length > 0) {
                let nextParam = paramsList.shift();
                GM_setValue("paramsList", JSON.stringify(paramsList));
                GM_setValue("currentParam", JSON.stringify(nextParam));
                log(Čítač = ${processedCount}. Následuje parametr: ${nextParam.name}, URL: ${nextParam.url});
                await sleep(delayMs);
                window.location.href = nextParam.url;
            } else {
                log("Všechny parametry byly zpracovány. Čítač = " + processedCount);
                // Možnost: window.close();
            }
        } else {
            log("Seznam parametrů není dostupný.");
																			   
						   
        }
    }

    // --- Hlavní vstupní bod skriptu ---
    if (isListingPage) {
        injectSOVAButton();
    } else if (isDetailPage) {
        runSortingRobot();
    }

    // --- Konec sova.js NOVB ---
})();
