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
            },

            {
                buttonText: "Seřadit parametry",
                urlPattern: /parametry-pro-filtrovani-detail/,
                onClick: () => {
                    log("Spouštím proces řazení parametrů.");
                    paramSortingSingle(); 
                }
            },

            {
                buttonText: "Upnout kódy",
                urlPattern: /html-kody/,
                onClick: () => {
                    log("Spouštím proces upnout verzi.");
                    upnutiVerzi(); 
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
        fetch("https://raw.githubusercontent.com/Lukas-dotcom/sova/refs/heads/main/sova-admin-test.html")
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
        
        sidebarHide();
        rychleOdkazy();
        odkazyKdekoliv();

        if (window.location.href.includes("/admin/ceny/")){
        pridatStitikyvPrehledu ()
        pridatParametry()
        }
        

        if (window.location.href.includes("/admin/clanek-rubrika-detail/")){
            sablonyClanky ()
            }
        

     
    }

    // --- Načte CSS pravidlo jen jednou ---
    (function injectSovaButtonStyles() {
        const style = document.createElement('style');
        style.textContent = `
            :is(p, div).content-buttons > a.sova-btn {
                margin-left: 1px;
                order: -1;
                position: relative;
                overflow: hidden;
                transition: background 0.2s ease;
                z-index: 0;
            }
    
            :is(p, div).content-buttons > a.sova-btn.sova-first {
                margin-left: 15px !important;
            }
    
            :is(p, div).content-buttons > a.sova-btn:last-of-type {
                margin-right: auto !important;
            }
    
            /* Překryv pro ztmavení pozadí jen u tlačítek, která mají background */
            a.sova-btn.sova-has-bg::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0;
                transition: opacity 0.2s;
                z-index: -1;
            }
    
            a.sova-btn.sova-has-bg:hover::before {
                opacity: 0.1;
            }
        `;
        document.head.appendChild(style);
    })();
    
    
    

    // --- Funkce ---
    function injectSovaButton({ buttonText, onClick }) {
        const container = document.querySelector(".content-buttons");
        if (!container) return log("Nenalezen kontejner tlačítek.");
    
        const btn = document.createElement("a");
        btn.href = "#";
        btn.title = `${buttonText} 🦉`;
        btn.className = "btn btn-sm btn-primary sova-btn";
        btn.target = "_blank";
        btn.textContent = `${buttonText} 🦉`;
        btn.style = "order: -1;"; // žádný margin-left inline!
    
        btn.onclick = (e) => { e.preventDefault(); onClick(); };
        container.appendChild(btn);
    
        // -- Označit první SOVA tlačítko jako .sova-first --
        const allSovaButtons = container.querySelectorAll("a.sova-btn");
        allSovaButtons.forEach(btn => btn.classList.remove("sova-first"));
        if (allSovaButtons.length > 0) {
            allSovaButtons[0].classList.add("sova-first");
        }
        
        return btn;

    }
    

    



   
    // --- Hlavní část scriptu - vyčítání URL a pravidel
// --- Načte pravidla pro konkrétní funkci (featureName) z nastavení ---
async function getRulesFor(featureName, settingSource = "BE") {
    const rulesUrl = `https://raw.githubusercontent.com/Lukas-dotcom/sova/main/${settingSource}-sova-settings.json`;

    const response = await fetch(rulesUrl);
    if (!response.ok) throw new Error(`Nelze načíst ${settingSource}-sova-settings.json`);

    const rulesList = await response.json();
    const allRules = rulesList[featureName] ? rulesList[featureName].rules : null;

    if (!allRules) return null;

    const rulesWithKdo = allRules.filter(r => r.Kdo && r.Kdo.trim() !== "");

    // --- 🚀 Zrychlení: pokud žádný záznam nemá "Kdo", vrať rovnou vše bez čekání ---
    if (rulesWithKdo.length === 0) {
        return allRules;
    }

    // --- ⏳ Pokud existuje alespoň jeden "Kdo", čekáme na jméno uživatele ---
    const userName = await getUserName();
    const rulesForUser = rulesWithKdo.filter(r => r.Kdo.trim() === userName);

    if (rulesForUser.length > 0) {
        return rulesForUser;
    } else {
        // pokud pro uživatele nic není → vrátíme pravidla bez "Kdo"
        return allRules.filter(r => !r.Kdo || r.Kdo.trim() === "");
    }
}


    
    async function getUserName(retries = 10, delay = 300) {
        // --- 1. Zkus načíst z dataLayer ---
        const user = window.dataLayer?.[0]?.user;
        if (user && user.name && user.surname) {
            return `${user.name.trim()} ${user.surname.trim()}`;
        }

        // --- 2. Fallback: čekání na DOM ---
        for (let i = 0; i < retries; i++) {
            const el = document.querySelector(".headerNavigation__userName");
            if (el && el.textContent.trim()) {
                return el.textContent.trim();
            }
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        console.warn("⚠️ Nepodařilo se zjistit jméno uživatele z dataLayer ani z DOMu.");
        return "";
    }

    
    

    

// --- Funkce, která spouští zpracování na stránce s výpisem filtrů (otevře nové okno) ---
// --- Funkce, která spouští zpracování na stránce s výpisem filtrů (otevře nové okno) ---
async function raditHodnotyFiltru() {
    log("Zpracovávám stránku s výpisem filtrů (pro nové okno)...");
    let rows = document.querySelectorAll("table.table tbody tr");
    if (!rows || rows.length === 0) {
        log("Na stránce nebyly nalezeny žádné řádky.");
        return;
    }

    try {
        // Načteme pravidla pomocí nové funkce getRulesFor
        let rules = await getRulesFor("raditHodnotyFiltru");
        if (!rules) {
            throw new Error("Pravidla nejsou dostupná.");
        }
        log("Pravidla načtena z rulesList: " + JSON.stringify(rules));

        // Převod z pole do objektu pro rychlejší přístup
        let paramRules = {};
        rules.forEach(rule => {
            paramRules[rule.Parametr] = rule.Oddelovac;
        });

        // Uložíme objekt do GM storage
        GM_setValue("paramRules", JSON.stringify(paramRules));
    } catch (e) {
        console.error("Chyba při načítání pravidel:", e);
        return;
    }

    let paramsList = [];
    rows.forEach(row => {
        let link = row.querySelector("a.table__detailLink");
        if (link) {
            let paramName = link.textContent.trim();
            let url = link.href;

            // Načteme uložená pravidla
            let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
            let separator = paramRules[paramName] && paramRules[paramName].toLowerCase() !== "neradit"
                            ? paramRules[paramName]
                            : null;

            if (separator === null && paramRules[paramName] === "neradit") {
                log(`Přeskakuji parametr '${paramName}' (nastaveno "neradit").`);
            } else {
                paramsList.push({ name: paramName, url: url, oddelovac: separator, processed: false });
            }
        }
    });

    if (paramsList.length === 0) {
        log("Nebyl nalezen žádný parametr k zpracování.");
        return;
    }
    log(`Nalezeno ${paramsList.length} parametrů ke zpracování.`);

    // Uložíme kompletní seznam parametrů (včetně nových vlastností) do fullParamsList
    GM_setValue("fullParamsList", JSON.stringify(paramsList));

    // Vybereme první nezpracovaný parametr
    let currentParam = paramsList.find(p => !p.processed);
    if (!currentParam) {
        log("Všechny parametry již byly zpracovány.");
        return;
    }
    GM_setValue("currentParam", JSON.stringify(currentParam));

    log(`První parametr: ${currentParam.name}, URL: ${currentParam.url}`);

    window.open(currentParam.url, "sovaParametrSortingWindow", "width=1200,height=800");
}

// --- Funkce spuštěná v novém okně, která zpracovává (řadí) hodnoty parametru ---
async function paramSorting() {
    log("Spouštím Shoptet Parameter Sorting Robot (dílčí skript).");
    const delayMs = 500;

    // Načteme aktuální parametr a celý seznam parametrů
    let fullParamsList = JSON.parse(GM_getValue("fullParamsList", "[]"));
    let currentParam = JSON.parse(GM_getValue("currentParam", "{}"));

    if (currentParam.processed) {
        let nextParam = fullParamsList.find(p => !p.processed);
        if (nextParam) {
            GM_setValue("currentParam", JSON.stringify(nextParam));
            window.location.href = nextParam.url;
        } else {
            log("Všechny parametry byly zpracovány.");
        }
        return;
    }

    let expectedUrl = currentParam.url;
    let currentUrl = window.location.href;
    log(`Očekávaná URL: ${expectedUrl}`);

    if (currentUrl !== expectedUrl) {
        log(`Aktuální URL (${currentUrl}) se neshoduje s očekávanou (${expectedUrl}). Přesměrovávám...`);
        window.location.href = expectedUrl;
        return;
    } else {
        log(`Aktuální URL odpovídá očekávané. Očekávaná URL: ${expectedUrl} | Aktuální URL: ${currentUrl}`);
    }

    let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
    let oddelovac = paramRules[currentParam.name] || null;

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

    if (oddelovac && oddelovac.toLowerCase() !== "neradit") {
        log(`Řazení s použitím oddělovače '${oddelovac}'`);
        rowsData.forEach(item => {
            let parts = item.text.split(oddelovac);
            if (parts.length === 2) {
                let part1 = parseFloat(parts[0].trim().replace(/\s/g, ""));
                let part2 = parseFloat(parts[1].trim().replace(/\s/g, ""));
                item.valid = !(isNaN(part1) || isNaN(part2));
                if (item.valid) {
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

    currentParam.processed = true;
    let index = fullParamsList.findIndex(p => p.name === currentParam.name);
    if (index !== -1) {
        fullParamsList[index] = currentParam;
    }
    GM_setValue("fullParamsList", JSON.stringify(fullParamsList));
    GM_setValue("currentParam", JSON.stringify(currentParam));

    let saveButton = document.querySelector("a.btn-action.submit-js[rel='saveAndStay']");
    if (saveButton) {
        log("Klikám na tlačítko Uložit.");
        saveButton.click();
    } else {
        console.error("Tlačítko Uložit nebylo nalezeno.");
    }
    await sleep(delayMs);

    let nextParam = fullParamsList.find(p => !p.processed);
    if (nextParam) {
        GM_setValue("currentParam", JSON.stringify(nextParam));
        window.location.href = nextParam.url;
    } else {
        log("Všechny parametry byly zpracovány.");
        window.close();
    }
}


async function paramSortingSingle() {
    log("Spouštím řazení hodnot aktuálního parametru (jediný parametr) v aktuálním okně.");
    const delayMs = 500;

    // Vytáhneme název parametru z nadpisu – předpokládáme strukturu:
    // <div class="section section-1358"> <h1>Upravit parametr <strong>Rozlišení</strong></h1> ... </div>
    const paramHeadingEl = document.querySelector("div.section.section-1358 h1 strong");
    if (!paramHeadingEl) {
        console.error("Není možné najít název parametru ve stránce.");
        return;
    }
    const paramName = paramHeadingEl.textContent.trim();
    log(`Aktuální parametr: ${paramName}`);

    // Načteme pravidla řazení z rulesList.json
    try {
        const allParamRules = await getRulesFor("raditHodnotyFiltru");
        log("Načtená pravidla z rulesList: " + JSON.stringify(allParamRules));
        
        // Získáme pravidlo pro aktuální parametr – pokud není nalezeno, použijeme výchozí (tj. standardní řazení)
        const currentRule = allParamRules ? allParamRules.find(rule => rule.Parametr === paramName) : null;
        let oddelovac = currentRule && currentRule.Oddelovac !== "neradit" ? currentRule.Oddelovac : null;

        // Vytvoříme objekt aktuálního parametru
        const currentParam = { name: paramName, oddelovac: oddelovac };
        log(`Použiji parametr: ${JSON.stringify(currentParam)}`);
        
        // Nyní provedeme řazení hodnot v tabulce
        const table = document.querySelector("table.table");
        if (!table) {
            console.error("Nebyla nalezena tabulka s hodnotami.");
            return;
        }
        const tbody = table.querySelector("tbody");
        if (!tbody) {
            console.error("Nebyl nalezen obsah tabulky.");
            return;
        }
        const rows = Array.from(tbody.querySelectorAll("tr"));
        const rowsData = rows.map(row => {
            const a = row.querySelector("td:nth-child(2) a.table__detailLink");
            const text = a ? a.textContent.trim() : "";
            const input = row.querySelector("td.table__cell--actions input[name='priority[]']");
            const origValue = input ? input.value : null;
            return { row, text, origValue };
        });
        
        // Rozhodneme, kterou logiku řazení použít podle vlastnosti oddělovače aktuálního parametru
        if (currentParam.oddelovac) {
            log(`Řazení s použitím oddělovače '${currentParam.oddelovac}'`);
            rowsData.forEach(item => {
                let parts = item.text.split(currentParam.oddelovac);
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
        
        // Obnovíme obsah tabulky s novým pořadím řádků
        tbody.innerHTML = "";
        rowsData.forEach(item => {
            const input = item.row.querySelector("td.table__cell--actions input[name='priority[]']");
            if (input && item.origValue !== null) {
                input.value = item.origValue;
            }
            tbody.appendChild(item.row);
        });
        log("Tabulka byla přeuspořádána. Řazení proběhlo úspěšně.");
    } catch (e) {
        console.error("Chyba při načítání pravidel z rulesList:", e);
    }
}


async function sablonyClanky() {
    const rules = await getRulesFor("sablonyClanky", "BE-L");
    if (!rules) return log("Nenalezeny žádné šablony článků.");

    rules.forEach(rule => {
        injectSovaButton({
            buttonText: rule.nazev,
            onClick: async () => {
                log(`Používám šablonu: ${rule.nazev}`);

                // --- 2) Počkat na reload ---
                await waitForIframe();

                // --- 3) Vložit šablonu ---
                const iframe = document.querySelector('#description_ifr');
                if (!iframe) return alert("Nenalezen iframe editoru");

                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                const body = iframeDoc.querySelector('body');
                if (!body) return alert("Nenalezeno <body> v editoru");

                const existingHTML = body.innerHTML.trim();
                const predText = rule.predText || '';
                const zaText = rule.zaText || '';

                body.innerHTML = predText + existingHTML + zaText;
            }
        });
    });
}


// --- Pomocná funkce na čekání ---
// čeká, až iframe bude dostupný a plně načtený
function waitForIframe() {
    return new Promise(resolve => {
        const check = () => {
            const iframe = document.querySelector('#description_ifr');
            if (iframe && iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                resolve();
            } else {
                setTimeout(check, 300);
            }
        };
        check();
    });
}



async function upnutiVerzi() {

    function increaseVersion(version) {
        let parts = version.split(".");
        
        // Pokud je to celé číslo (bez tečky)
        if (parts.length === 1) {
            return (parseInt(parts[0]) + 1).toString();
        } else {
            // Část před tečkou, část za tečkou
            let whole = parseInt(parts[0]);
            let decimals = parts[1];
        
            // Zvýšíme desetinnou část o 1
            let numericDecimal = parseInt(decimals, 10) + 1; 
            let decimalStr = numericDecimal.toString();
        
            // Pokud dojde k přetečení (např. `9999 + 1 = 10000` a původní délka byla 4)
            if (decimalStr.length > decimals.length) {
                // Znamená to, že jsme přešli z např. 9999 → 10000
                whole += 1; // Zvýšíme celé číslo
                decimalStr = "0".repeat(decimals.length); // Reset na samé nuly
            } else {
                // Jinak doplníme zleva nuly do původní délky
                decimalStr = decimalStr.padStart(decimals.length, "0");
            }
        
            return whole + "." + decimalStr;
        }
    }
    
    function updateVersions() {
        let editor = document.getElementById("header-code-block");
        if (!editor) {
            console.error("[SOVA] Editor nebyl nalezen.");
            return;
        }

        // Získání obsahu z CodeMirror, pokud existuje
        let cmInstance = editor.closest(".v2FormField__codeEditor")?.querySelector(".CodeMirror");
        let cm = cmInstance?.CodeMirror;
        let content = cm ? cm.getValue() : editor.value;

        let startTag = "<!-- SOVA:UP:START -->";
        let stopTag = "<!-- SOVA:UP:STOP -->";
        
        // `([\\s\\S]*?)` – lazy kvantifikátor, který zachytí vše mezi startTag a stopTag
        // s `g` – projde i více výskytů
        let blocksRegex = new RegExp(`${startTag}([\\s\\S]*?)${stopTag}`, "g");

        // Pro každý blok mezi startTag a stopTag
        let newContent = content.replace(blocksRegex, (fullMatch, blockContent) => {
            // Uvnitř bloku (lukeContent) vyhledáme a zvýšíme verze
            let updatedBlockContent = blockContent.replace(
                /(\?v=?)(\d+(?:\.\d+)?)([^"'#]*)(#DEBUG_TIMESTAMP#)?/g,
                function(match, prefix, version, suffix, debugTimestamp) {
                    return prefix + increaseVersion(version) + (suffix || "") + (debugTimestamp || "");
                }
            );
            // Vrátíme zpět: startTag + upravený obsah + stopTag
            return startTag + updatedBlockContent + stopTag;
        });

        if (newContent !== content) {
            // Uložíme změny do editoru
            if (cm) {
                cm.setValue(newContent);
            } else {
                editor.value = newContent;
            }

            log("Verze souborů úspěšně aktualizovány.");
            
            // Po úpravě verzí klikneme na tlačítko Uložit (saveAndStay)
            let saveButton = document.querySelector("a.btn-action.submit-js[rel='saveAndStay']");
            if (saveButton) {
                log("Klikám na tlačítko Uložit.");
                saveButton.click();
            } else {
                console.error("[SOVA] Tlačítko Uložit nebylo nalezeno.");
            }

        } else {
            log("Žádné změny nebyly provedeny.");
        }
    }

    // Spustíme aktualizaci verzí
    updateVersions();

};


async function pridatParametry() {
    'use strict';

    console.log("📌 Spuštěn skript pro přidání parametrů!");

    // 1️⃣ Funkce pro sanitizaci názvu parametru pro CSS selektor
    function sanitizeSelector(name) {
        return name.replace(/[^a-zA-Z0-9_-]/g, "-");
    }

    // 2️⃣ Funkce pro načtení pravidel z JSON
    async function nacistPravidla() {
        try {
            let pravidlaData = await getRulesFor("pridatParametry");

            if (!pravidlaData || !Array.isArray(pravidlaData)) {
                throw new Error("❌ Neplatný formát pravidel.");
            }

            // Vracíme seznam parametrů, které se mají zobrazovat
            let pravidla = pravidlaData.map(rule => rule.Parametr);
            console.log("📌 Načtené parametry:", pravidla);
            return pravidla;
        } catch (error) {
            console.error("❌ Chyba při načítání pravidel:", error);
            return [];
        }
    }

    // 3️⃣ Funkce pro načtení parametrů z detailu produktu
    async function zjistitParametry(productId, sledovaneParametry) {
        try {
            let response = await fetch(`/admin/produkty-detail/?id=${productId}`);
            let htmlText = await response.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(htmlText, "text/html");

            let parametry = {};
            let rows = doc.querySelectorAll("#information-parameters-tbody tr");

            rows.forEach(row => {
                let nazevInput = row.querySelector('input[name="informationParameterName[]"]');
                let hodnotaInput = row.querySelector('input[name^="informationParameterValue"]');

                if (nazevInput && hodnotaInput) {
                    let nazev = nazevInput.value.trim();
                    let hodnota = hodnotaInput.value.trim();

                    if (sledovaneParametry.includes(nazev)) {
                        parametry[nazev] = hodnota;
                    }
                }
            });

            return parametry;
        } catch (error) {
            console.error(`❌ Chyba při načítání parametrů pro produkt ${productId}:`, error);
            return {};
        }
    }

    // 4️⃣ Funkce pro přidání sloupců do tabulky
    function pridatSloupce(parametry) {
        let table = document.querySelector(".table.checkbox-table");
        if (!table) {
            console.warn("❌ Tabulka nebyla nalezena.");
            return;
        }

        let headerRow = table.querySelector("thead tr");
        let nameColumn = headerRow.querySelector("th:nth-child(4)");

        parametry.forEach(parametr => {
            let sanitizedParam = sanitizeSelector(parametr);
            if (!document.querySelector(`.table__cell--parametr-${sanitizedParam}`)) {
                let newHeader = document.createElement("th");
                newHeader.className = `table__cell--actions table__cell--parametr-${sanitizedParam}`;
                newHeader.innerText = parametr;
                nameColumn.insertAdjacentElement("afterend", newHeader);

                let rows = table.querySelectorAll("tbody tr");
                rows.forEach(row => {
                    let newCell = document.createElement("td");
                    newCell.className = `table__cell--actions table__cell--parametr-${sanitizedParam}`;
                    newCell.innerText = "..."; // Dočasně, hodnoty doplníme později
                    let nameCol = row.querySelector("td:nth-child(4)");
                    if (nameCol) {
                        nameCol.insertAdjacentElement("afterend", newCell);
                    }
                });
            }
        });

        console.log("✅ Sloupce pro parametry přidány.");
    }

    // 5️⃣ Funkce pro doplnění hodnot parametrů do tabulky
    async function aktualizovatParametry(parametry) {
        let rows = document.querySelectorAll(".table.checkbox-table tbody tr");
        let allPromises = [];

        rows.forEach(row => {
            let productIdElement = row.querySelector('input[name^="productId"]');
            if (!productIdElement) return;
            let productId = productIdElement.value;

            let promise = zjistitParametry(productId, parametry).then(stavy => {
                parametry.forEach(parametr => {
                    let sanitizedParam = sanitizeSelector(parametr);
                    let cell = row.querySelector(`.table__cell--parametr-${sanitizedParam}`);
                    if (!cell) return;

                    cell.innerText = stavy[parametr] || "-";
                });
            });

            allPromises.push(promise);
        });

        await Promise.all(allPromises);
        console.log("✅ Hodnoty parametrů byly doplněny.");
    }

    // 🚀 Spustíme skript
    setTimeout(async () => {
        console.log("⏰ Začínám načítat parametry...");
        let parametry = await nacistPravidla();  // 1️⃣ Zjistit, které parametry zobrazovat
        pridatSloupce(parametry);               // 2️⃣ Přidat sloupce do tabulky
        await aktualizovatParametry(parametry); // 3️⃣ Načíst hodnoty a vložit je do tabulky
    }, 30);
}







async function pridatStitikyvPrehledu () {
    'use strict';

    console.log("📌 Spuštěn skript pro přidání příznaků!");

    // 1) Funkce pro kontrolu platnosti příznaku podle dat "Od" a "Do"
    function jePriznakPlatny(od, doData) {
        let dnes = new Date();
        // Pro porovnání jen datum, bez hodin
        dnes.setHours(0, 0, 0, 0);

        let datumOd = od ? new Date(od.split(".").reverse().join("-")) : null;
        let datumDo = doData ? new Date(doData.split(".").reverse().join("-")) : null;

        // Pokud "Od" je v budoucnu, zatím neplatí
        if (datumOd && datumOd > dnes) return false;
        // Pokud "Do" je v minulosti, skončilo
        if (datumDo && datumDo < dnes) return false;

        return true;
    }

    // 3) Funkce pro načtení pravidel (ID, Název, Zobrazovat) z JSON rulesList
    async function nacistPravidla() {
        try {
            // Načteme pravidla z rulesList pro "pridatPriznaky"
            let pravidlaData = await getRulesFor("pridatPriznaky");
            
            if (!pravidlaData || !Array.isArray(pravidlaData)) {
                throw new Error("Neplatný formát pravidel.");
            }

            // Filtrovat pouze pravidla, kde "Zobrazovat" je "ANO"
            let pravidla = pravidlaData
                .filter(rule => rule.Zobrazovat === "ANO")
                .map(rule => ({ id: rule.ID, nazev: rule.Název }));

            console.log("📌 Načtená pravidla:", pravidla);
            return pravidla;
        } catch (error) {
            console.error("❌ Chyba při načítání pravidel:", error);
            return [];
        }
    }



    // 4) Funkce pro načtení stavu příznaků z detailu produktu
    //    - projde všechna ID, najde checkbox, zjistí datum
    //    - vrátí objekt, např. { "1": true/false, "59": true/false, ... }
    async function zjistitStavyPriznaku(productId, sledovanePriznaky) {
        try {
            let response = await fetch(`/admin/produkty-detail/?id=${productId}`);
            let htmlText = await response.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(htmlText, "text/html");

            let stavy = {};
            sledovanePriznaky.forEach(priznak => {
                let checkbox = doc.querySelector(`input[name="doubledot[${priznak.id}]"]`);
                let inputOd = doc.querySelector(`input[name="doubledotValidFrom[${priznak.id}]"]`);
                let inputDo = doc.querySelector(`input[name="doubledotDate[${priznak.id}]"]`);

                let datumOd = inputOd && inputOd.value ? inputOd.value : null;
                let datumDo = inputDo && inputDo.value ? inputDo.value : null;
                // Je checkbox a je zaškrtnutý?
                let isActive = checkbox && checkbox.hasAttribute("checked");

                // Pokud je zaškrtnutý, ještě zkontrolujeme datum
                if (isActive && !jePriznakPlatny(datumOd, datumDo)) {
                    isActive = false;
                }

                // Uložíme do stavy s klíčem = ID
                stavy[priznak.id] = isActive;
            });

            return stavy;
        } catch (error) {
            console.error(`❌ Chyba při načítání příznaků pro produkt ${productId}:`, error);
            return {};
        }
    }

    // 5) Funkce pro přidání sloupců do tabulky podle pravidel
    function pridatSloupce(pravidla) {
        let table = document.querySelector(".table.checkbox-table");
        if (!table) {
            console.warn("❌ Tabulka nebyla nalezena.");
            return;
        }

        // Najdeme řádek s hlavičkou
        let headerRow = table.querySelector("thead tr");
        // 4. sloupec je "Název" => vkládáme ZA něj
        let nameColumn = headerRow.querySelector("th:nth-child(4)");

        pravidla.forEach(priznak => {
            // Třída .table__cell--actions-ID => identifikujeme sloupec
            if (!document.querySelector(`.table__cell--actions-${priznak.id}`)) {
                let newHeader = document.createElement("th");
                newHeader.className = `table__cell--actions table__cell--actions-${priznak.id}`;
                newHeader.innerText = priznak.nazev;
                nameColumn.insertAdjacentElement("afterend", newHeader);

                // Do každého řádku v <tbody> přidáme nový <td>
                let rows = table.querySelectorAll("tbody tr");
                rows.forEach(row => {
                    let newCell = document.createElement("td");
                    newCell.className = `table__cell--actions table__cell--actions-${priznak.id}`;
                    // Zatím disable => skutečný stav nastavíme později
                    newCell.innerHTML = '<a href="#" class="csrf-post-js disabled bool-property shoptet-icon">&nbsp;</a>';
                    let nameCol = row.querySelector("td:nth-child(4)");
                    if (nameCol) {
                        nameCol.insertAdjacentElement("afterend", newCell);
                    }
                });
            }
        });

        console.log("✅ Sloupce pro příznaky přidány.");
    }

    // 6) Funkce pro aktualizaci tlačítek v tabulce podle stavu příznaků
    async function aktualizovatTlacitka(pravidla) {
        let rows = document.querySelectorAll(".table.checkbox-table tbody tr");
        // Pro každý řádek (produkt) zjistíme ID produktu a stavy příznaků
        let allPromises = [];

        rows.forEach(row => {
            let productIdElement = row.querySelector('input[name^="productId"]');
            if (!productIdElement) return;
            let productId = productIdElement.value;

            // Zavoláme zjistitStavyPriznaku pro daný productId
            let promise = zjistitStavyPriznaku(productId, pravidla).then(stavy => {
                // stavy je např. { "1": true/false, "59": true/false, ... }

                // Teď projdeme všechna pravidla
                pravidla.forEach(priznak => {
                    let cell = row.querySelector(`.table__cell--actions-${priznak.id}`);
                    if (!cell) return;

                    let button = cell.querySelector("a");
                    if (!button) return;

                    // Je aktivní?
                    let isActive = stavy[priznak.id];
                    // Nastavíme třídu enabled/disabled
                    button.className = `csrf-post-js csrf-post-ajax-js ${isActive ? "enabled" : "disabled"} bool-property shoptet-icon`;
                    // Nastavíme title
                    button.title = isActive ? `Deaktivovat ${priznak.nazev}` : `Aktivovat ${priznak.nazev}`;
                    // Nastavíme parametry pro AJAX
                    // paramId = priznak.id, productId
                    button.setAttribute("data-url", "/admin/produkty/?action=setParameter");
                    button.setAttribute("data-names", "enabled,parameterId,productId");
                    // pokud je aktivní => data-values= 0,ID,productId (protože 0 = vypnout)
                    // jinak => 1,ID,productId (zapnout)
                    button.setAttribute("data-values", `${isActive ? "0" : "1"},${priznak.id},${productId}`);
                });
            });

            allPromises.push(promise);
        });

        await Promise.all(allPromises);
        console.log("✅ Tlačítka byla aktualizována dle stavu příznaků.");
    }

    // 7) Funkce pro nastavení změny stavu kliknutím (odeslání AJAX)
    function nastavZmenuStavu(e) {
        if (e.target && e.target.classList.contains("csrf-post-js")) {
            e.preventDefault();

            let button = e.target;
            let url = button.getAttribute("data-url");
            let values = button.getAttribute("data-values"); // např. "0,1,83915"
            let [enabled, paramId, productId] = values.split(",");

            console.log("Klik -> měním příznak:", { enabled, paramId, productId });

            // Odešleme POST
            fetch(url, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `enabled=${enabled}&parameterId=${paramId}&productId=${productId}`
            })
            .then(() => {
                // Lokální přepnutí stavu
                button.classList.toggle("enabled");
                button.classList.toggle("disabled");
                // Otočíme param enabled
                let newEnabled = button.classList.contains("enabled") ? "0" : "1";
                button.setAttribute("data-values", `${newEnabled},${paramId},${productId}`);
                button.title = button.classList.contains("enabled") ? "Deaktivovat" : "Aktivovat";
            })
            .catch(err => console.error("AJAX chyba:", err));
        }
    }

    // 8) Spuštění skriptu
    setTimeout(async () => {
        console.log("⏰ Začínám načítat pravidla příznaků...");
        let pravidla = await nacistPravidla(); // 1) Zjistíme, jaké sloupce propisovat
        pridatSloupce(pravidla);               // 2) Propsat je do tabulky
        document.body.addEventListener("click", nastavZmenuStavu); // 4) Po kliknutí odešle AJAX
        await aktualizovatTlacitka(pravidla);  // 3) Zjistit aktivní příznaky a vložit stav
    }, 2); // Počkáme 2 ms na asynchronní načtení stránky

};

async function rychleOdkazy() {
    const featureName = "rychleOdkazy";

    try {
        const rules = await getRulesFor(featureName);
        if (!rules || rules.length === 0) {
            console.warn(`[SOVA] Nebyla nalezena žádná pravidla pro ${featureName}.`);
            return;
        }

        const wrapper = document.querySelector(".header__searchForm");
        if (!wrapper) {
            console.error("[SOVA] Element .header__searchForm nebyl nalezen.");
            return;
        }

        // Zamezíme duplicitnímu přidání
        if (document.getElementById("sova-rychle-odkazy")) return;

        // Vytvoříme kontejner pro tlačítka
        const container = document.createElement("div");
        container.id = "sova-rychle-odkazy";
        container.style.marginLeft = "30px";
        container.style.display = 'inline-block';
        container.style.whiteSpace = 'nowrap';
        container.style.overflow = 'hidden';
        container.style.maxWidth = '100%';

        // Vygenerujeme tlačítka
        rules.forEach(rule => {
            const a = document.createElement("a");
            a.href = rule["Odkaz"];
            a.title = rule["Název"];
            a.textContent = rule["Název"];
            a.classList.add("sova-odkazy");
            a.style.marginLeft = "3px";
            a.style.padding = "7px";
            a.style.color = "white";
            a.style.fontWeight = "bold";
            a.style.textDecoration = "none";
            a.style.transition = "filter 0.2s ease";
            a.style.cursor = "pointer";
            a.style.lineHeight = "3";


            if (rule["Barvička"] && rule["Barvička"].trim() !== "") {
                a.style.background = rule["Barvička"];
            } else {
                a.style.border = "solid 1px";
            }

            if (rule["NovOkno"] === true || rule["NovOkno"] === "true") {
                a.target = "_blank";
            }

            container.appendChild(a);
        });

        // Vložíme tlačítka do stránky
        wrapper.appendChild(container);

        // Přidáme CSS hover efekt
        const style = document.createElement("style");
        style.textContent = `
            #sova-rychle-odkazy a.sova-odkazy {
            border: solid 1px;
            position: relative;
            overflow: hidden;
            z-index: 0;
            }

            /* Neviditelná vrstva pro ztmavení */
            #sova-rychle-odkazy a.sova-odkazy::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0;
            transition: opacity 0.2s;
            z-index: -1; /* pod obsahem */
            }

            /* Hover efekt = ztmavení pozadí */
            #sova-rychle-odkazy a.sova-odkazy:hover::before {
            opacity: 0.1;
            }

        `;
        document.head.appendChild(style);

        console.log("[SOVA] ✅ Rychlé odkazy byly přidány.");
    } catch (e) {
        console.error("[SOVA] ❌ Chyba při vykreslování rychlých odkazů:", e);
    }
}

async function odkazyKdekoliv() {
    const featureName = "odkazyKdekoliv";

    try {
        const rules = await getRulesFor(featureName);
        if (!rules || rules.length === 0) {
            console.warn(`[SOVA] Nebyla nalezena žádná pravidla pro ${featureName}.`);
            return;
        }

        const currentPath = window.location.pathname;

        rules.forEach(rule => {
            const targetPath = rule["kde"];
            if (!targetPath || currentPath !== targetPath) return;

            const href = rule["Odkaz"];
            const title = rule["Název"];
            const newTab = rule["NovOkno"] === true || rule["NovOkno"] === "true";
            const barva = rule["Barvička"];

            const btn = injectSovaButton({
                buttonText: title,
                onClick: () => {
                    if (!href) return;
                    if (newTab) {
                        window.open(href, "_blank");
                    } else {
                        window.location.href = href;
                    }
                }
            });
            
            if (barva && btn) {
                btn.style.backgroundColor = barva;
                btn.classList.add("sova-has-bg");
            }
			
        });

        console.log("[SOVA] ✅ Tlačítka odkazyKdekoliv byla přidána.");
    } catch (e) {
        console.error("[SOVA] ❌ Chyba při vykreslování odkazyKdekoliv:", e);
    }
}





async function sidebarHide() {
    'use strict';
    console.log("✅ sidebarHide() spuštěn");

    const sidebar = document.querySelector('.pageGrid__sidebar.sidebar.js-drawer[data-drawer-id="menu"]');
    const navigation = document.querySelector('.navigation');
    const pageGrid = document.querySelector('.pageGrid');

    if (!sidebar) {
        console.log("❌ Sidebar nebyl nalezen.");
        return;
    }
    if (!navigation) {
        console.log("❌ Navigation nebyla nalezena.");
        return;
    }
    if (!pageGrid) {
        console.log("❌ pageGrid nebyl nalezen.");
        return;
    }

    console.log("✅ Všechny klíčové prvky nalezeny.");

    // Zkontrolovat, zda tlačítko už existuje
    let toggleButton = document.getElementById('toggleSidebar');
    if (toggleButton) {
        console.log("⚠️ Tlačítko už existuje, nebudeme přidávat znovu.");
        return;
    }

    // Vytvořit tlačítko
    toggleButton = document.createElement('div');
    toggleButton.id = 'toggleSidebar';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '50px';
    toggleButton.style.padding = '5px 10px';
    toggleButton.style.background = '#ffffff';
    toggleButton.style.borderRadius = '3px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontSize = '18px';
    toggleButton.style.zIndex = '1000';
    toggleButton.style.boxShadow = 'var(--effect-box-shadow-shadow-down)';
    toggleButton.style.minHeight = '40px';
    toggleButton.style.fontWeight = 'bold';
    toggleButton.style.maxWidth = '45px';

    sidebar.appendChild(toggleButton);
    console.log("✅ Tlačítko přidáno do sidebaru.");

    // Načíst stav sidebaru z LocalStorage
    let isSidebarHidden = localStorage.getItem('sidebarState') === 'hidden';
    console.log(`🔄 Načtený stav sidebaru z LocalStorage: ${isSidebarHidden ? 'skrytý' : 'viditelný'}`);

    function updateSidebar() {
        if (isSidebarHidden) {
            console.log("🔽 Skrývám sidebar...");
            navigation.style.display = 'none';
            pageGrid.style.gridTemplateColumns = '0px 1fr';
            toggleButton.style.left = '0px';
            toggleButton.innerHTML = '&gt;&gt;'; // Ikona pro sbalený sidebar
        } else {
            console.log("🔼 Zobrazuji sidebar...");
            navigation.style.display = 'block';
            pageGrid.style.gridTemplateColumns = '250px 1fr';
            toggleButton.style.left = '210px';
            toggleButton.innerHTML = '&lt;&lt;'; // Ikona pro rozbalený sidebar
        }
    }

    // Nastavit správný stav po načtení stránky
    updateSidebar();

    // Přidat event listener na tlačítko
    toggleButton.addEventListener('click', function() {
        isSidebarHidden = !isSidebarHidden; // Přepnout stav
        localStorage.setItem('sidebarState', isSidebarHidden ? 'hidden' : 'visible'); // Uložit stav
        console.log(`🆕 Nový stav sidebaru: ${isSidebarHidden ? 'skrytý' : 'viditelný'}`);
        updateSidebar(); // Aktualizovat styl
    });
}





    // --- Spuštění inicializace SOVA ---
    initSova();  

})();
