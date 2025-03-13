// sova.js
// Modulární základ skriptu SOVA s podporou rozšiřování o další funkce.
(function() {
    'use strict';

    const log = (msg) => console.log(`[SOVA] ${msg}`);
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // --- Inicializace SOVA skriptu ---
    function initSova() {

        const buttonsConfig = [
            {
                buttonText: "Seřadit parametry",
                urlPattern: /parametry-pro-filtrovani-vypis/,
                onClick: () => {
                    log("Spouštím proces řazení parametrů.");
                    // Inicializace seznamu parametrů a otevření prvního URL
                    raditHodnotyFiltru(); 
                }
            }
        ];

        buttonsConfig.forEach(config => {
            if (config.urlPattern.test(window.location.href)) {
                injectSovaButton({
                    buttonText: config.buttonText,
                    onClick: config.onClick
                });
            }
        });

        // Pokud jde o detail parametru, automaticky spusť logiku řazení
        if (window.location.href.includes("parametry-pro-filtrovani-detail") && window.name === "sovaParametrSortingWindow") {
            paramSorting();
        }

         // --- Načtení externího HTML obsahu pro stránku admin/sova ---
        if (window.location.href.includes("admin/sova")) {
            const sectionToRemove = document.querySelector(".section.section-424");
            if (sectionToRemove) {
                sectionToRemove.remove();
            }

            // 1️⃣ Nejprve vytvoříme nový <div class="section">
            const newSection = document.createElement("div");
            newSection.classList.add("section");
            document.body.appendChild(newSection);
            log("Nový <div class='section'> byl vytvořen.");

            // 2️⃣ Pak do něj vložíme externí HTML obsah
            fetch("https://raw.githubusercontent.com/Lukas-dotcom/sova/refs/heads/main/sova-admin.html")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Chyba při načítání HTML souboru");
                    }
                    return response.text();
                })
                .then(data => {
                    newSection.innerHTML = data;
                    log("Externí HTML obsah byl úspěšně vložen do <div class='section'>.");
                })
                .catch(error => console.error("Nepodařilo se načíst HTML:", error));
        }
    }

    // --- Univerzální funkce pro vkládání tlačítek (upravená verze) ---
    function injectSovaButton({ buttonText, onClick }) {
        const container = document.querySelector("p.content-buttons");
        if (!container) return log("Nenalezen kontejner tlačítek.");

        const btn = document.createElement("a");
        btn.href = "#";
        btn.title = `${buttonText} 🦉`;
        btn.className = "btn btn-sm btn-primary";
        btn.target = "_blank";
        btn.style = "order: -1; margin-left: 15px; margin-right: auto;";
        btn.textContent = `${buttonText} 🦉`;
        btn.onclick = (e) => { e.preventDefault(); onClick(); };

        container.appendChild(btn);
        log(`Tlačítko '${buttonText}' vloženo.`);
    }


    // --- Funkce pro načtení CSV mappingu z univerzálního CSV ---
    function fetchFeatureRules(featureName = null) {
        const universalCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRufx0-X2OdjDVG1KAKx1QhC38JMxDj10hOYDGTBi6te9jYRXrBfRYazSpFHXglSKmcaQEs7tdvTOKV/pub?gid=775097961&single=true&output=csv";
    
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: universalCsvUrl,
                onload: (response) => {
                    if (response.status === 200) {
                        try {
                            const mapping = {};
                            const lines = response.responseText.split('\n').filter(line => line.trim() !== '');
    
                            lines.slice(1).forEach(line => {
                                const [scriptName, scriptCsvUrl] = line.split(',').map(col => col.trim());
                                mapping[scriptName] = scriptCsvUrl;
                            });
    
                            if (featureName) {
                                const rulesUrl = mapping[featureName];
                                if (!rulesUrl) {
                                    return reject(new Error(`Nenalezen mapping pro '${featureName}'.`));
                                }
                                GM_setValue(`sova:${featureName}RulesUrl`, rulesUrl);
                                resolve(rulesUrl);
                            } else {
                                resolve(mapping);
                            }
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(new Error("HTTP chyba: " + response.status));
                    }
                },
                onerror: (err) => reject(err)
            });
        });
    }
    
    // --- Hlavní část scriptu pro řazení hodnot filtrů - vyčítání URL a pravidel
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

    async function raditHodnotyFiltru() {
        log("Zpracovávám stránku s výpisem filtrů (pro nové okno)...");
        let rows = document.querySelectorAll("table.table tbody tr");
        if (!rows || rows.length === 0) {
            log("Na stránce nebyly nalezeny žádné řádky.");
            return;
        }
    
        // Název fičury pevně definován
    
        try {
            const rulesUrl = await fetchFeatureRules("raditHodnotyFiltru");
            log(`Načítám pravidla z: ${rulesUrl}`);
    
            let paramRules = await fetchSortingCSV(rulesUrl);
            log("CSV definice filtrů načtena: " + JSON.stringify(paramRules));
            GM_setValue("paramRules", JSON.stringify(paramRules));
        } catch (e) {
            console.error("Chyba při načítání CSV definice filtrů:", e);
            return;
        }
    
        let paramsList = [];
        rows.forEach(row => {
            let link = row.querySelector("a.table__detailLink");
            if (link) {
                let paramName = link.textContent.trim();
                let url = link.href;
                let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
                if (paramRules[paramName] && paramRules[paramName].oddelovac.toLowerCase() === "neradit") {
                    log(`Přeskakuji parametr '${paramName}' (nastaveno "neradit").`);
                } else {
                    paramsList.push({ name: paramName, url: url });
                }
            }
        });
    
        if (paramsList.length === 0) {
            log("Nebyl nalezen žádný parametr k zpracování.");
            return;
        }
        log(`Nalezeno ${paramsList.length} parametrů ke zpracování.`);
    
        paramsList.forEach((param, index) => param.counter = index);
    
        GM_setValue("fullParamsList", JSON.stringify(paramsList));
        GM_setValue("paramsList", JSON.stringify(paramsList.slice(1)));
        GM_setValue("sova:processedCount", 0);
    
        let currentParam = paramsList[0];
        GM_setValue("currentParam", JSON.stringify(currentParam));
    
        log(`Čítač = 0. První parametr: ${currentParam.name}, URL: ${currentParam.url}`);
    
        window.open(currentParam.url, "sovaParametrSortingWindow", "width=1200,height=800");
    }
    
    
    
    // --- Dílčí část skriptu, která v samostatném okně řadí hodnoty parametrů ---
    async function paramSorting() {
	 // Provedeme řazení pouze v okně, které bylo otevřeno skriptem
        log("Spouštím Shoptet Parameter Sorting Robot (dílčí skript).");
        const delayMs = 500;

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
        log(`Čítač = ${processedCount}. Očekávaná URL: ${expectedUrl}`);
        
        if (currentUrl !== expectedUrl) {
            log(`Aktuální URL (${currentUrl}) se neshoduje s očekávanou (${expectedUrl}). Přesměrovávám...`);
            window.location.href = expectedUrl;
            return;
        } else {
            log(`Aktuální URL odpovídá očekávané. Očekávaná URL: ${expectedUrl} | Aktuální URL: ${currentUrl}`);
        }

        let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
        let currentParam = JSON.parse(GM_getValue("currentParam", "{}"));
        log(`Zpracovávám detail parametru: ${currentParam.name}`);
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
            log(`Řazení s použitím oddělovače '${oddelovac}'`);
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
        GM_setValue(`sova:processedCount`, processedCount);
        GM_setValue(`sova:lastProcessedUrl`, window.location.href);
        log(`Zpracováno parametrů (po zvýšení čítače): ${processedCount}`);
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
                log(`Čítač = ${processedCount}. Následuje parametr: ${nextParam.name}, URL: ${nextParam.url}`);
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


    // --- Spuštění inicializace SOVA ---
    initSova();

})();
