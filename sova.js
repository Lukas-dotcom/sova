// sova.js
// Tento soubor obsahuje kompletní SOVA logiku i dílčí skript "Shoptet Parameter Sorting Robot".
// Aktualizace provedete pouze úpravou tohoto souboru v GITu.
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
                            // Předpokládáme, že první řádek obsahuje hlavičky – data začínají od 2. řádku
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
        // Univerzální CSV mapping – nastavte URL (např. z Google Sheets)
        const universalCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRufx0-X2OdjDVG1KAKx1QhC38JMxDj10hOYDGTBi6te9jYRXrBfRYazSpFHXglSKmcaQEs7tdvTOKV/pub?gid=775097961&single=true&output=csv";
        fetchUniversalCSV(universalCsvUrl)
            .then(mapping => {
                log("Univerzální CSV mapping načteno: " + JSON.stringify(mapping));
                // Pokud mapping neobsahuje klíč "Shoptet Parameter Sorting Robot", nastavíme jej ručně.
                if (!mapping["Shoptet Parameter Sorting Robot"]) {
                    log("Mapping neobsahuje 'Shoptet Parameter Sorting Robot'. Nastavuji ručně.");
                    mapping["Shoptet Parameter Sorting Robot"] = "https://raw.githubusercontent.com/Lukas-dotcom/sova/main/shoptet_parameter_sorting_robot.js";
                }
                GM_setValue("sovaMapping", JSON.stringify(mapping));
                // Injektujeme tlačítko do elementu p.content-buttons
                let contentButtons = document.querySelector("p.content-buttons");
                if (contentButtons) {
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
                        if (mapping["Shoptet Parameter Sorting Robot"]) {
                            // Uložíme CSV URL pro řazení filtrů (dílčí skript) do GM_setValue
                            let scriptCsvUrl = mapping["Shoptet Parameter Sorting Robot"];
                            GM_setValue("sova:SPSortingCSV", scriptCsvUrl);
                            log("CSV URL pro řazení filtrů uloženo: " + scriptCsvUrl);
                            // Zavoláme processListingPage() pro výběr prvního parametru a přesměrování na jeho detail
                            processListingPage();
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

    // --- Funkce pro zpracování výpisové stránky a výběr parametru ---
    async function processListingPage() {
        log("Zpracovávám stránku s výpisem parametrů...");
        let rows = document.querySelectorAll("table.table tbody tr");
        if (!rows || rows.length === 0) {
            log("Na stránce nebyly nalezeny žádné řádky.");
            return;
        }
        let paramsList = [];
        // Nejdříve načteme CSV definici filtrů pro řazení (CSV URL je uloženo pod "sova:SPSortingCSV")
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
        // Projdeme řádky a sestavíme seznam parametrů (vycházíme z odkazu v každém řádku)
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
        GM_setValue("paramsList", JSON.stringify(paramsList));
        // Vybereme první parametr a uložíme jej jako currentParam, poté přesměrujeme na jeho detail
        let currentParam = paramsList.shift();
        GM_setValue("paramsList", JSON.stringify(paramsList));
        GM_setValue("currentParam", J
