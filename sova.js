// sova.js
// Tento soubor obsahuje kompletní SOVA logiku i dílčí skript "Shoptet Parameter Sorting Robot".
// Aktualizujte tento soubor v repozitáři a Tampermonkey loader načte vždy nejnovější verzi.

(function() {
    'use strict';

    // --- Utility funkce ---
    function log(msg) {
        console.log("[SOVA] " + msg);
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // --- Rozlišení stránek ---
    const isDetailPage = window.location.href.indexOf("parametry-pro-filtrovani-detail") !== -1;
    const isListingPage = window.location.href.indexOf("parametry-pro-filtrovani-vypis") !== -1;

    // --- Dílčí skript: Shoptet Parameter Sorting Robot --- 
    // Tento kód se spustí pouze na detailní stránce, pokud URL obsahuje query parametr "sova_run=1".
    async function runSortingRobot() {
        // Pokud query parametr chybí, přesměrujeme
        if (!window.location.search.includes("sova_run=1")) {
            let newUrl = window.location.href + (window.location.href.indexOf('?') === -1 ? '?' : '&') + "sova_run=1";
            log("Detailní stránka bez 'sova_run=1'. Přesměrovávám na: " + newUrl);
            window.location.href = newUrl;
            return;
        }
        log("Spouštím Shoptet Parameter Sorting Robot (dílčí skript).");
        const delayMs = 2000;
        
        async function fetchCSV(url) {
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
                                // Data začínají od druhého řádku (první řádek jsou hlavičky)
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
                                console.error("Chyba při parsování CSV:", e);
                                reject(e);
                            }
                        } else {
                            reject(new Error("Chyba načtení CSV: " + response.status));
                        }
                    },
                    onerror: function(err) {
                        console.error("Chyba při načítání CSV:", err);
                        reject(err);
                    }
                });
            });
        }
        
        // Pokud jsme na výpisové stránce, sestavíme seznam parametrů
        async function processListingPage() {
            log("Zpracovávám stránku s výpisem parametrů...");
            let storedList = GM_getValue("paramsList", null);
            if (!storedList) {
                const csvUrl = GM_getValue("sova:SPSortingCSV", "XXXXXXXX");
                if (!csvUrl || csvUrl === "XXXXXXXX") {
                    console.error("CSV URL pro Sorting Robot není nastaveno (používá se placeholder 'XXXXXXXX').");
                    return;
                }
                try {
                    let paramRules = await fetchCSV(csvUrl);
                    log("CSV data úspěšně načtena a zpracována.");
                    GM_setValue("paramRules", JSON.stringify(paramRules));
                } catch (e) {
                    console.error("Chyba při načítání CSV:", e);
                    return;
                }
                let rows = document.querySelectorAll("table.table tbody tr");
                let paramsList = [];
                let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
                rows.forEach(row => {
                    let link = row.querySelector("a.table__detailLink");
                    if (link) {
                        let paramName = link.textContent.trim();
                        let url = link.href;
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
                GM_setValue("paramsList", JSON.stringify(paramsList));
            }
            processNextParameter();
        }
    
        function processNextParameter() {
            let storedList = GM_getValue("paramsList", null);
            if (!storedList) {
                log("Seznam parametrů není nastaven.");
                return;
            }
            let paramsList = JSON.parse(storedList);
            if (paramsList.length === 0) {
                log("Všechny parametry byly zpracovány.");
                GM_setValue("paramsList", null);
                return;
            }
            let currentParam = paramsList.shift();
            GM_setValue("paramsList", JSON.stringify(paramsList));
            GM_setValue("currentParam", JSON.stringify(currentParam));
            log(`Přecházím na detail parametru: ${currentParam.name}`);
            window.location.href = currentParam.url;
        }
    
        async function processDetailPage() {
            let lastProcessedUrl = GM_getValue("lastProcessedUrl", null);
            if (lastProcessedUrl && window.location.href === lastProcessedUrl) {
                log("Tato stránka již byla zpracována, přecházím na další parametr.");
                window.location.href = "/admin/parametry-pro-filtrovani-vypis/";
                return;
            }
            let currentParamStr = GM_getValue("currentParam", null);
            if (!currentParamStr) {
                console.error("Nebyl nalezen aktuální parametr.");
                return;
            }
            let currentParam = JSON.parse(currentParamStr);
            let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
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
                        if (a.num1 !== b.num1) {
                            return a.num1 - b.num1;
                        } else {
                            return a.num2 - b.num2;
                        }
                    } else if (a.valid) {
                        return -1;
                    } else if (b.valid) {
                        return 1;
                    } else {
                        return 0;
                    }
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
                    if (a.sortKey.key < b.sortKey.key) return -1;
                    if (a.sortKey.key > b.sortKey.key) return 1;
                    return 0;
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
    
            let processedCount = GM_getValue("processedCount", 0);
            processedCount++;
            GM_setValue("processedCount", processedCount);
            GM_setValue("lastProcessedUrl", window.location.href);
            log(`Zpracováno parametrů: ${processedCount}`);
    
            let saveButton = document.querySelector("a.btn-action.submit-js[rel='saveAndStay']");
            if (saveButton) {
                log("Klikám na tlačítko Uložit.");
                saveButton.click();
            } else {
                console.error("Tlačítko Uložit nebylo nalezeno.");
            }
            await sleep(delayMs);
            log("Návrat na výpis parametrů.");
            window.location.href = "/admin/parametry-pro-filtrovani-vypis/";
        }
    
        if (window.location.href.indexOf("parametry-pro-filtrovani-vypis") !== -1 &&
            window.location.href.indexOf("parametry-pro-filtrovani-detail") === -1) {
            await processListingPage();
        } else if (window.location.href.indexOf("parametry-pro-filtrovani-detail") !== -1) {
            await processDetailPage();
        }
    }

    // --- Spuštění dílčího skriptu ---
    // Pokud jsme na detailní stránce, spustíme sorting robot
    if (isDetailPage) {
        runSortingRobot();
    }

    // --- Konec sova.js ---
})();
