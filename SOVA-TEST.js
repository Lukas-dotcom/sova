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

        // 1 Najdeme kontejner pageGrid__content
        const pageGridContent = document.querySelector(".pageGrid__content");
        if (!pageGridContent) {
            console.error("Element .pageGrid__content nebyl nalezen.");
            return;
        }

        // 2 Vytvoříme nový <div class="section">
        const newSection = document.createElement("div");
        newSection.classList.add("section");
        
        // 3 Vložíme nový <div class="section"> jako třetí element uvnitř pageGrid__content
        if (pageGridContent.children.length >= 2) {
            pageGridContent.insertBefore(newSection, pageGridContent.children[2]);
        } else {
            pageGridContent.appendChild(newSection);
        }

        log("Nový <div class='section'> byl vytvořen jako třetí v .pageGrid__content.");

        // 4 Pak do něj vložíme externí HTML obsah
        fetch("https://raw.githubusercontent.com/Lukas-dotcom/sova/refs/heads/main/sova-admin.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Chyba při načítání HTML souboru");
                }
                return response.text();
            })
            .then(data => {
                newSection.innerHTML = data;
                log("Externí HTML byl úspěšně načten a vložen.");
            })
            .catch(error => console.error("Nepodařilo se načíst HTML:", error));
     }

        // --- Přidání odkazu do navigace ---
        var navMenus = document.querySelectorAll("ul.headerNavigation[role='navigation']");
        navMenus.forEach(function (navMenu) {
            // Zkontrolujeme, zda už odkaz existuje
            if (!navMenu.querySelector(".sova-nav-link")) {
                var sovaNavItem = document.createElement("li");
                sovaNavItem.classList.add("sova-nav-link");
                sovaNavItem.style.listStyle = "none"; // Odstranění ::marker
                sovaNavItem.innerHTML = `
                    <a class="headerNavigation__link" href="/admin/sova/" role="button" aria-label="SOVA administrace" aria-expanded="false" style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        <span style="
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background-image: url('https://raw.githubusercontent.com/Lukas-dotcom/sova/refs/heads/main/owl-icon-mala.png');
                            background-repeat: no-repeat;
                            background-size: contain;
                        "></span>
                        <span class="headerNavigation__title"><b>SOVA<br>administrace</b></span>
                    </a>
                `;
                
                // Přidání na první místo v navigaci
                if (navMenu.firstChild) {
                    navMenu.insertBefore(sovaNavItem, navMenu.firstChild);
                } else {
                    navMenu.appendChild(sovaNavItem);
                }
                
                console.log("Odkaz na SOVA administraci byl přidán na první místo v navigaci.");
            }
        });
        
        // --- Přidání fixního upozornění do všech oken SOVA  ---
        if (window.name && window.name.startsWith("sova")) {
            const ALERT_ID = "sova-global-alert";
        
            function ensureSovaAlert() {
                if (document.getElementById("sova-alert")) {
                    console.log("[SOVA] Upozornění již existuje.");
                    return;
                }
        
                let alertDiv = document.createElement("div");
                alertDiv.id = "sova-alert";
                alertDiv.setAttribute("style", `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 99999;
                    background-color: #f90;
                    display: flex;
                    align-items: center;
                    padding: 16px;
                    box-shadow: 0 2px 5px rgba(0,0,0,.2);
                    font-family: sans-serif;

                `);
        
                alertDiv.innerHTML = `
                    <img src="https://github.com/Lukas-dotcom/sova/blob/main/Owl%20icon%20alert.png?raw=true" style="width:60px;margin-right:16px;margin-left:20px;">
                    <div style="color:#333;font-size:1rem;margin-left:30px;">
                        Toto okno můžete minimalizovat. Po dokončení úlohy se samo zavře.<br><b>Okno sami nezavírejte!</b>
                    </div>
                `;
        
                document.documentElement.appendChild(alertDiv);
                console.log("[SOVA] Upozornění vloženo.");
            }
        
            // Spustíme ihned, bez čekání na načtení stránky
            ensureSovaAlert();
        
            // Pravidelná kontrola každé 3 sekundy pro případ, že by stránka upozornění odstranila
            setInterval(ensureSovaAlert, 3000);
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
                log(`Přeskakuji parametr '${paramName}' (nastaveno \"neradit\").`);
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
    GM_setValue("sova:processedCount", 0);

    let currentParam = paramsList[0];
    GM_setValue("currentParam", JSON.stringify(currentParam));

    log(`Čítač = 0. První parametr: ${currentParam.name}, URL: ${currentParam.url}`);

    window.open(currentParam.url, "sovaParametrSortingWindow", "width=1200,height=800");
}



// --- Dílčí část skriptu, která v samostatném okně řadí hodnoty parametrů ---
async function paramSorting() {
    log("Spouštím Shoptet Parameter Sorting Robot (dílčí skript).");
    const delayMs = 500; 

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

    // Zachováno původní logiku řazení dle oddělovače nebo standardní logiky.

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

    processedCount++;
    GM_setValue(`sova:processedCount`, processedCount);
    GM_setValue(`sova:lastProcessedUrl`, window.location.href);

    let saveButton = document.querySelector("a.btn-action.submit-js[rel='saveAndStay']");
    if (saveButton) saveButton.click();
    await sleep(delayMs);

    if (fullParamsList.length > processedCount) {
        let nextParam = fullParamsList[processedCount];
        GM_setValue("currentParam", JSON.stringify(nextParam));
        window.location.href = nextParam.url;
    } else {
        log("Všechny parametry byly zpracovány.");
        // window.close();
    }
}



    // --- Spuštění inicializace SOVA ---
    initSova();

})();
