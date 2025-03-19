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


   
    // --- Hlavní část scriptu pro řazení hodnot filtrů - vyčítání URL a pravidel
    async function getRulesFor(featureName) {
        // Předpokládáme, že rulesList je uložen jako JSON na dané URL, např.:
        const rulesUrl = "https://raw.githubusercontent.com/Lukas-dotcom/sova/main/sova-setting.json"  // URL, kde je uložený rulesList.json
        const response = await fetch(rulesUrl);
        if (!response.ok) throw new Error("Nelze načíst rulesList");
        const rulesList = await response.json();
        return rulesList[featureName] ? rulesList[featureName].rules : null;
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







    // --- Spuštění inicializace SOVA ---
    initSova();  

})();
