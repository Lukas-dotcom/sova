// sova.js  
// Modulární základ skriptu SOVA s podporou rozšiřování o další funkce
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
        
        sidebarHide();
        rychleOdkazy();
        odkazyKdekoliv();

        if (window.location.href.includes("/admin/ceny/")){
        pridatStitikyvPrehledu ();
        pridatParametry();
      //doplneniCeniku();
        priznakEmail();
        }
        

        if (window.location.href.includes("/admin/clanek-rubrika-detail/")){
            sablonyClanky ()
            }
        
        if (window.location.href.includes("/admin/objednavky-detail/")){
            adminDeliveryHelper();
            mazatTrackingPriOdstraneniZasilky();
            priznakyVobjednavkach();
            priznakEmail();
            ulozZobrazbezSkl();

        }

        if (window.location.href.includes("/admin/produkty-detail/?id")){
    //    doplneniCeniku();
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
    const isSK = location.hostname.endsWith(".sk");
    const effectiveSource = isSK ? `${settingSource}-SK` : settingSource;

    /* --- DEBUG: informace o doméně a URL souboru --- */
    console.log(
      "[SOVA] getRulesFor:",
      "feature =", featureName,
      "| doména =", location.hostname,
      "| isSK =", isSK,
      "| source =", effectiveSource,
      "| URL =", `https://raw.githubusercontent.com/Lukas-dotcom/sova/main/${effectiveSource}-sova-settings.json`
    );

    const rulesUrl = `https://raw.githubusercontent.com/Lukas-dotcom/sova/main/${effectiveSource}-sova-settings.json`;

    const response = await fetch(rulesUrl);
    if (!response.ok) {
        throw new Error(`Nelze načíst ${effectiveSource}-sova-settings.json`);
    }

    const rulesList = await response.json();
    const allRules =
        rulesList[featureName] && rulesList[featureName].rules
          ? rulesList[featureName].rules
          : null;

    if (!allRules) return null;

    /* ---------- filtrování podle "Kdo" ---------- */
    const rulesWithKdo = allRules.filter(r => r.Kdo && r.Kdo.trim() !== "");

    // 🚀 pokud nikdo nepoužívá "Kdo", vrať rovnou vše
    if (rulesWithKdo.length === 0) {
        return allRules;
    }

    // ⏳ jinak čekáme na jméno uživatele
    const userName = await getUserName();
    const rulesForUser = rulesWithKdo.filter(r => r.Kdo.trim() === userName);

    return rulesForUser.length > 0
        ? rulesForUser
        : allRules.filter(r => !r.Kdo || r.Kdo.trim() === "");
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

function priznakEmail () {
    const LOG = (...a) => console.log('[SOVA-EMAIL]', ...a);

    /* 1️⃣  Detekce podporované stránky */
    const pageKey = location.pathname.startsWith('/admin/objednavky-detail/')
        ? 'objednavka'
        : location.pathname.startsWith('/admin/ceny/')
        ? 'ceny'
        : null;

    if (!pageKey) return;          // na jiných stránkách nic neděláme
    LOG('INIT:', pageKey);

    /* 2️⃣  Načti pravidla (lazy) */
    let emailRules = null;
    (async () => { emailRules = await getRulesFor('priznakEmail'); })();

    /* 3️⃣  Vytvoř cache 1. tabulky (objednávka) */
    const firstTabCache = new Map();
    if (pageKey === 'objednavka') {
        document.querySelectorAll(
            '.tableWrapper table.table.checkbox-table:not(#orderCompletionTable) tbody tr'
        ).forEach(tr => {
            const codeA = tr.querySelector("td[data-testid='cellOrderItemCode'] a");
            const nameA = tr.querySelector("td[data-testid='cellOrderItemDescr'] a");
            if (!codeA || !nameA) return;
            firstTabCache.set(codeA.textContent.trim(), {
                code: codeA.textContent.trim(),
                name: nameA.firstChild?.textContent.trim() || '',
                url : codeA.href
            });
        });
    }

    /* 4️⃣  Funkce – z řádku získat {name,code,url} */
    async function rowData(btn) {
        const tr = btn.closest('tr');
        if (!tr) return null;

        /* objednávka – 1. tabulka */
        if (pageKey === 'objednavka') {
            const codeA = tr.querySelector("td[data-testid='cellOrderItemCode'] a");
            if (codeA) {
                const nameA = tr.querySelector("td[data-testid='cellOrderItemDescr'] a");
                return { code: codeA.textContent.trim(),
                         name: nameA?.firstChild?.textContent.trim() || '',
                         url : codeA.href };
            }
            /* objednávka – 2. tabulka (doplň z cache) */
            const codeCell = tr.querySelector("td[data-testid='cellCompletionItemCode']");
            const codeStr  = codeCell?.textContent.trim();
            if (!codeStr) return null;

        // máme data z cache první tabulky?
        const cached = firstTabCache.get(codeStr);
        if (cached) return cached;           // {code,name,url}

        // fallback: vyčti jméno přímo z druhé tabulky
        const nameB = tr.querySelector("td[data-testid='cellCompletionItemDescription'] a")
                        ?.firstChild?.textContent.trim() || '';
        return { code: codeStr, name: nameB, url: null };
                }

        /* ceny */
        if (pageKey === 'ceny') {
            const tds  = [...tr.children];
            const code = tds[2]?.innerText.trim();
            const name = tds[3]?.querySelector('strong')?.innerText.trim() || '';
            const urlA = tds[3]?.querySelector('a');
            return { code, name, url: urlA?.href };
        }
        return null;
    }

    /* 5️⃣  Klik listener */
    document.body.addEventListener('click', async e => {
        const btn = e.target.closest('a.bool-property');
        if (!btn?.dataset?.values) return;

        if (!emailRules) emailRules = await getRulesFor('priznakEmail');
        if (!emailRules) return;

        const [nextVal, paramIdStr] = btn.dataset.values.split(',');
        const willEnable = nextVal === '1';
        const paramId    = +paramIdStr;

        const rule = emailRules.find(r => +r.ID === paramId);
        if (!rule || !rule[pageKey]) return;

        const variant = willEnable ? 'active' : 'passive';
        const to   = rule[`${variant}-email-komu`];
        const subj = rule[`${variant}-email-predmet`];
        const body = rule[`${variant}-email-obsah`];
        if (!to?.length || !subj || !body) return;

        const data = await rowData(btn);
        if (!data) { LOG('⛔ Chybí data řádku'); return; }

        const user = await getUserName();
        const replace = s => s
            .replace(/\|\|name\|\|/g,        data.name || '')
            .replace(/\|\|code\|\|/g,        data.code || '')
            .replace(/\|\|product-url\|\|/g, data.url  || '')
            .replace(/\|\|user\|\|/g,        user      || '');

        const mailto =
            `mailto:${to.join(',')}` +
            `?subject=${encodeURIComponent(replace(subj))}` +
            `&body=${encodeURIComponent(replace(body).replace(/\n/g, '\r\n'))}`;

        LOG('✉️ Otevírám mailto →', mailto);
        window.open(mailto, '_blank');
    });
}    



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

async function ulozZobrazbezSkl(){
    'use strict';

    function prepareAndSubmit() {
        let form = document.querySelector('form[action*="produkty-detail"]') || document.forms[0];
        if (!form) return alert('❌ Formulář nenalezen.');

        // Vynutit viditelnost
        const vis = form.querySelector('select[name="visibility"]');
        if (vis) vis.value = '1';

        // Odstranit zásobové prvky
        const selectors = [
            'input[name^="stocksAmount"]',
            'input[name^="stocksLocation"]',
        ];
        selectors.forEach(sel => {
            form.querySelectorAll(sel).forEach(el => {
                el.disabled = true;
                el.removeAttribute('name');
            });
        });

        // Zrušit onbeforeunload dialog
        window.onbeforeunload = null;

        form.submit();
    }

function injectLink() {
    const container = document.querySelector('p.content-buttons');
    if (!container) return;
    if (container.querySelector('#tm-save-link')) return;

    // 1) Vytvoříme link
    const link = document.createElement('a');
    link.href = '#';
    link.id   = 'tm-save-link';
    link.title = 'Uložit, zobrazit (bez skl.)';
    link.textContent = 'Uložit, zobrazit (bez skl.)';
    link.className = 'btn btn-sm btn-action submit-js';

    // 2) Inline styly
    Object.assign(link.style, {
        cursor: 'pointer',               // místo inherit
        backgroundColor: 'rgb(68,205,0)'
    });
    link.addEventListener('click', e => {
        e.preventDefault();
        prepareAndSubmit();
    });

    // 3) Přidat jako první
    container.insertBefore(link, container.firstChild);

    // 4) Injektovat hover CSS (jen jednou)
    if (!document.getElementById('tm-save-link-style')) {
        const style = document.createElement('style');
        style.id = 'tm-save-link-style';
        style.textContent = `
            #tm-save-link:hover {
                background-color: rgb(41,122,0) !important;
            }
        `;
        document.head.appendChild(style);
    }
}


    window.addEventListener('load', injectLink);
}



async function priznakyVobjednavkach() {
    'use strict';
    const LOG = (...a) => console.log('[SOVA-Příznaky]', ...a);

    /**********************************************************************
     * 1) getRulesFor (neměněná verze) + getUserName (stub)
     *********************************************************************/
    async function getRulesFor(featureName, settingSource = 'BE') {
        const isSK = location.hostname.endsWith('.sk');
        const effectiveSource = isSK ? `${settingSource}-SK` : settingSource;

        LOG('getRulesFor →', {
            feature: featureName,
            isSK,
            source: effectiveSource
        });

        const rulesUrl =
            `https://raw.githubusercontent.com/Lukas-dotcom/sova/main/` +
            `${effectiveSource}-sova-settings.json`;

        const r = await fetch(rulesUrl);
        if (!r.ok) throw new Error(`Nelze načíst ${effectiveSource}-sova-settings.json`);
        const rulesList = await r.json();

        const allRules =
            rulesList[featureName] && rulesList[featureName].rules
                ? rulesList[featureName].rules
                : null;
        if (!allRules) return null;

        const withKdo = allRules.filter(r => r.Kdo && r.Kdo.trim() !== '');
        if (withKdo.length === 0) return allRules;

        const userName = await getUserName();               // tvoje globální funkce
        const forMe = withKdo.filter(r => r.Kdo.trim() === userName);
        return forMe.length ? forMe : allRules.filter(r => !r.Kdo || r.Kdo.trim() === '');
    }
    async function getUserName() { return 'Lukáš Tejral'; } // stub

    /**********************************************************************
     * 2) Načtení pravidel
     *********************************************************************/
    const rules = await getRulesFor('priznakyVobjednavkach', 'BE');
    if (!rules?.length) return LOG('❌ Nebyla nalezena žádná pravidla');

    LOG('✅ Načtená pravidla', rules);

    /**********************************************************************
     * 3) Pomocné funkce
     *********************************************************************/
    const selectorFirstTable =
        '.tableWrapper table.table.checkbox-table:not(#orderCompletionTable)';
    const selectorSecondTable = '#orderCompletionTable';

    /** Vrátí produktId z href "?id=181028" */
    const href2id = href => (href.match(/id=(\d+)/) || [])[1];

    /** Převod dd.mm.rrrr na Date */
    const parseDate = d => (d ? new Date(d.split('.').reverse().join('-')) : null);

    /** Je příznak platný dle od-do? */
    const isValidByDate = (from, to) => {
        const today = new Date(); today.setHours(0,0,0,0);
        if (from && from > today) return false;
        if (to &&   to   < today) return false;
        return true;
    };

/**********************************************************************
 * 4) Injektáž sloupců  (OPRAVENO)
 *********************************************************************/
function injectColumns(tableSel, mode /* 'first' | 'second' */) {
    const table = document.querySelector(tableSel);
    if (!table) return LOG('⚠️ Tabulka nenalezena', tableSel);

    const headerRow = table.querySelector('thead tr');
    const sysTh     = headerRow.lastElementChild;

    let insertRef, place, rulesIter;
    if (mode === 'first') {                // 1. tabulka
        insertRef = sysTh;
        place     = 'before';
        rulesIter = rules;                 // přirozené pořadí
    } else {                               // 2. tabulka
        insertRef = headerRow.children[5]; // „Mn.“
        place     = 'after';
        rulesIter = rules;                 // ⬅️ už NEreverse!
    }

    /* --- HLAVIČKY --- */
    rulesIter.forEach(r => {
        const th = document.createElement('th');
        th.className  = `table__cell--actions priz-h-${r.ID}`;
        th.textContent = r.Název;

        place === 'before'
            ? insertRef.before(th)
            : insertRef.after(th);

        if (place === 'after') insertRef = th;  // posunout referenci pro správné pořadí
    });

    /* --- ŘÁDKY --- */
    table.querySelectorAll('tbody tr').forEach(tr => {
        const sysTd = tr.lastElementChild;
        rulesIter.forEach(r => {
            const td = document.createElement('td');
            td.className = `table__cell--actions priz-c-${r.ID}`;
            td.innerHTML = '';
            sysTd.before(td);                  // před systémový sloupec
        });
    });

    LOG('➡️ Sloupce injektovány do', tableSel);
}


// ▼▼ původní volání nahradit:
injectColumns(selectorFirstTable,  'first');   // 1. tabulka
injectColumns(selectorSecondTable, 'second');  // 2. tabulka


    /**********************************************************************
     * 5) Zjištění stavů příznaků a mapování podle kódu produktu
     *********************************************************************/
    const codeMap = new Map();        // productCode ➜ { productId, stavy }

    async function fetchStatesForRow(tr) {
        const codeLink = tr.querySelector("td[data-testid='cellOrderItemCode'] a");
        if (!codeLink) return;                             // např. doprava / dobírka
        const codeStr  = codeLink.textContent.trim();
        const productId = href2id(codeLink.href);
        if (!productId) return;

        // už máme pro tento kód?
        if (codeMap.has(codeStr)) return;

        LOG('⏳ Načítám příznaky pro', codeStr, '→ id', productId);
        try {
            const resp = await fetch(`/admin/produkty-detail/?id=${productId}`);
            const html = await resp.text();
            const doc  = new DOMParser().parseFromString(html, 'text/html');

            const stavy = {};
            rules.forEach(r => {
                const chk  = doc.querySelector(`input[name="doubledot[${r.ID}]"]`);
                const inOd = doc.querySelector(`input[name="doubledotValidFrom[${r.ID}]"]`);
                const inDo = doc.querySelector(`input[name="doubledotDate[${r.ID}]"]`);

                const from = parseDate(inOd?.value);
                const to   = parseDate(inDo?.value);
                stavy[r.ID] = chk?.checked && isValidByDate(from, to);
            });

            codeMap.set(codeStr, { productId, stavy });
            LOG('✅ Stav příznaků', codeStr, stavy);
        } catch (e) {
            LOG('❌ Chyba při fetch produktu', productId, e);
        }
    }

    // – paralelně pro všechny řádky v 1. tabulce
    await Promise.all(
        [...document.querySelectorAll(`${selectorFirstTable} tbody tr`)].map(fetchStatesForRow)
    );

    /**********************************************************************
     * 6) Render tlačítek do obou tabulek
     *********************************************************************/
    function renderButtonsForTable(tableSel, codeCellQuery, hasLink) {
        document.querySelectorAll(`${tableSel} tbody tr`).forEach(tr => {
            const codeCell = tr.querySelector(codeCellQuery);
            const codeStr  = (hasLink ? codeCell?.querySelector('a')?.textContent
                                       : codeCell?.textContent)?.trim();

            const mapEntry = codeMap.get(codeStr);

            rules.forEach(r => {
                const td = tr.querySelector(`.priz-c-${r.ID}`);
                if (!td) return;

                if (!mapEntry) {                         // kód prázdný nebo není produkt
                    td.innerHTML = '';
                    return;
                }

                const isActive = mapEntry.stavy[r.ID];
                const btn = document.createElement('a');
                btn.href = '#';
                btn.className =
                    `csrf-post-js csrf-post-ajax-js bool-property shoptet-icon ` +
                    (isActive ? 'enabled' : 'disabled');
                btn.title = (isActive ? 'Deaktivovat' : 'Aktivovat') + ` ${r.Název}`;
                btn.dataset.url    = '/admin/produkty/?action=setParameter';
                btn.dataset.names  = 'enabled,parameterId,productId';
                btn.dataset.values = `${isActive ? 0 : 1},${r.ID},${mapEntry.productId}`;

                td.textContent = ''; td.append(btn);
            });
        });

        LOG('🖊️ Tlačítka vykreslena v', tableSel);
    }

    renderButtonsForTable(selectorFirstTable, "td[data-testid='cellOrderItemCode']", true);
    renderButtonsForTable(selectorSecondTable, "td[data-testid='cellCompletionItemCode']", false);

    /**********************************************************************
     * 7) Klik – toggle příznaku
     *********************************************************************/
    document.body.addEventListener('click', async e => {
        const btn = e.target.closest('a.bool-property');
        if (!btn) return;
        e.preventDefault();

        const [enabled, paramId, productId] = btn.dataset.values.split(',');
        LOG('🔄 Klik → měním', { enabled, paramId, productId });

        try {
            await fetch(btn.dataset.url, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `enabled=${enabled}&parameterId=${paramId}&productId=${productId}`
            });

            btn.classList.toggle('enabled');
            btn.classList.toggle('disabled');
            const newEnabled = btn.classList.contains('enabled') ? 0 : 1;
            btn.dataset.values = `${newEnabled},${paramId},${productId}`;
            btn.title = btn.classList.contains('enabled') ? 'Deaktivovat' : 'Aktivovat';

            LOG('✅ Přepnuto', { paramId, productId, active: !newEnabled });
        } catch (err) {
            LOG('❌ Chyba při POST', err);
        }
    });

    LOG('🏁 Init dokončen');
}


async function adminDeliveryHelper() {
  /* ---------- utils ---------- */
  const num = t => (t ? parseFloat(t.replace(/[^0-9,\.]/g, '').replace(',', '.')) || 0 : 0);
  const fmt = n => n.toFixed(2).replace('.', ',');
  const norm = s => s.replace(/\s+/g, ' ').trim().toLowerCase();

  /* ---------- css ---------- */
  document.head.insertAdjacentHTML(
    'beforeend',
    `<style>
.pod-product-row{display:flex;align-items:center;padding:5px 0;width:min(700px,100%)}
.pod-product-name{width:50%;text-align:right;font-size:12px;margin-right:10px}
.pod-product-price{display:flex;align-items:center;gap:5px}
.pod-add-link{display:inline-block;margin-left:3px;width:35px;text-align:center;padding:5px 0;border:1px solid var(--colors-forms-border);background:transparent;border-radius:5px;cursor:pointer;text-decoration:none;color:inherit}
.pod-ghost-link{display:inline-block;width:55px;text-align:center;padding:5px 0;border:1px solid var(--colors-forms-border);background:transparent;border-radius:5px;cursor:pointer;text-decoration:none;color:inherit}
.pod-ghost-link:hover,.pod-add-link:hover{background:var(--user-color);border:1px solid var(--user-color);color:#fff}
.systemMessage.systemMessage--notice.alert{background:#d93025;border:#d93025;margin-top:5px}
.systemMessage__text.sova-system-message-text.alert{color:#fff}
#sova-info{display:flex;flex-direction:column;gap:5px;margin-bottom:15px}
</style>`
  );

 /* ---------- fetch settings přes SOVA ---------- */
 const RULES = await getRulesFor('adminDeliveryHelper');
 console.log(`🔎 RULES získáno: ${Array.isArray(RULES) ? RULES.length : 0}`);
 main(RULES || []);

  /* ---------- MAIN ---------- */
  function main(RULES) {
    const prodTbl = [...document.querySelectorAll('table')].find(t => t.querySelector('[data-testid="cellOrderItemDescr"]'));
    if (!prodTbl) return;
    const form = document.querySelector('#document-update');
    if (!form) return;

    /* allNames */
    const allNames = [...prodTbl.querySelectorAll('tbody tr')].map(tr => {
      const td = tr.querySelector('[data-testid="cellOrderItemDescr"]');
      const a = td?.querySelector('a.table__detailLink');
      return norm(a ? a.childNodes[0].textContent : td?.textContent || '');
    });

    /* products (price per unit) */
    const products = [...prodTbl.querySelectorAll('tbody tr')].flatMap(tr => {
      const codeTD = tr.querySelector('[data-testid="cellOrderItemCode"]');
      if (!codeTD) return [];
      const td = tr.querySelector('[data-testid="cellOrderItemDescr"]');
      const a = td?.querySelector('a.table__detailLink');
      const name = (a ? a.childNodes[0].textContent : td?.textContent).trim();

      const qtyTxt = tr.querySelector('[data-testid="cellOrderItemAmount"]')?.textContent || '';
      const qty = num(qtyTxt) || 1;

      const priceWithVat = num(tr.querySelector('[data-testid="cellOrderItemPriceWithVat"]')?.textContent);
      const pricePerUnit = priceWithVat / qty;

      return pricePerUnit ? [{ name, price: pricePerUnit }] : []; // filtr 0
    });
    const maxPrice = products.reduce((m, p) => Math.max(m, p.price), 0);
    const total = num(document.querySelector('[data-testid="textTotalPriceWithVat"]')?.textContent);

    /* shipments diff */
    let codSum = 0, nonHidden = 0;
    const shipTbl = [...document.querySelectorAll('table')].find(t => t.textContent.includes('Číslo a datum zásilky'));
    if (shipTbl) shipTbl.querySelectorAll('tbody tr').forEach(tr => {
      if (tr.classList.contains('table__row--hidden')) return;
      nonHidden++; codSum += num(tr.querySelector('.table__cell--price')?.textContent);
    });
    const diff = +(total - codSum).toFixed(2);

    /* helpers */
    const matchList = (list, hay) => !list || !list.length ? true : hay.some(n => list.some(x => x && n.includes(norm(x))));
    const matchLabelInput = wanted => {
      if (!wanted) return null;
      const w = norm(wanted);
      return [...document.querySelectorAll('label')].find(l =>
        norm(l.querySelector('.v2FormField__labelText')?.textContent || '').includes(w)
      )?.querySelector('input');
    };

/* ---------- DEBUG výpis každého pravidla ---------- */
RULES.forEach((rule, idx) => {
  const needShip = Array.isArray(rule.doprava) ? rule.doprava :
                   rule.doprava ? [rule.doprava] : [];
  const needPay  = Array.isArray(rule.platba)  ? rule.platba  :
                   rule.platba  ? [rule.platba]  : [];
  const needPole = rule.vlastniPole || '';

  /* RAW hodnoty z nastavení */
  console.log(`RAW → Rule ${idx}`, { doprava: rule.doprava, platba: rule.platba, vlastniPole: rule.vlastniPole });

  /* co jsme našli v DOMu */
  const matchedShip = needShip.filter(s => allNames.some(n => n.includes(norm(s))));
  const matchedPay  = needPay.filter(p  => allNames.some(n => n.includes(norm(p))));
  const inp         = needPole ? matchLabelInput(needPole) : null;
  const poleVal     = inp?.value.trim() || '';

  /* logické vyhodnocení */
  const shipOK = needShip.length ? matchedShip.length > 0 : true;
  const payOK  = needPay.length  ? matchedPay.length  > 0 : true;
  const poleOK = needPole        ? !!poleVal          : true;
  const passed = shipOK && payOK && poleOK;

  /* Pěkně formátovaný souhrn */
  console.log(
    `%cRule #${idx}`,
    'color:#888',
    '| uprava:', rule.uprava?.join(',') ?? '—',
    '| hledá(doprava):', needShip.join(' | ') || '—',
    '| nalezeno:',       matchedShip.join(' | ') || '—',
    '| dopravaOK:', shipOK ? '✅' : '❌',
    '| hledá(platba):',  needPay.join(' | ')  || '—',
    '| nalezeno:',       matchedPay.join(' | ') || '—',
    '| platbaOK:',  payOK ? '✅' : '❌',
    '| vlastniPole:', needPole || '—',
    '| poleVal:',    poleVal   || '—',
    '| poleOK:',     poleOK ? '✅' : '❌',
    '| passed:',     passed ? '✔️' : ''
  );
});




    /* -------- vyber pravidlo -------- */
    const firstRule = RULES.find(rule => {
      const shipOK = matchList(rule.doprava, allNames);
      const payOK  = matchList(rule.platba,  allNames);
      if (!shipOK || !payOK) return false;
      if (rule.vlastniPole) {
        const inp = matchLabelInput(rule.vlastniPole);
        return !!(inp && inp.value.trim());
      }
      return true;
    });
    if (!firstRule) return;

    /* -------- okamžitý vicekusSK -------- */
    if (firstRule.uprava.includes('vicekusSK')) {
      insertInfo();
      if (nonHidden > 0 && diff !== 0) insertDiff();
    }
    if (firstRule.uprava.includes('skrytPridatZasilkuBaliky')) {
        skryjPridatZasilkuBaliky();
    }

    /* -------- modal listener -------- */
    document.addEventListener('click', e => {
      if (!e.target.closest('a.open-modal[href*="pridat-specifickou-zasilku"]')) return;
      openModal();
    });

    function openModal() {
      let attempts = 0;
      const int = setInterval(() => {
        attempts++;
        const modal = document.querySelector('#modal.modal');
        if (!modal) return attempts > 40 && clearInterval(int);

        const codLabel = modal.querySelector('label.cod-value:not(.hidden-js)');
        if (!codLabel) return;
        const codInput = codLabel.querySelector('input[name="cod"]');
        if (!codInput) return;

        /* ctx pro všechna ACTIONS */
        let ctx = {
          modal,
          codInput,
          currentValue: num(codInput.value) || 0,
          total,
          maxPrice,
          diff,
          nonHidden,
          poleVal: firstRule.vlastniPole ? num(matchLabelInput(firstRule.vlastniPole)?.value) : null,
        };

        for (const id of firstRule.uprava) {
          const fn = ACTIONS[id];
          if (typeof fn === 'function') {
            const res = fn(ctx);
            if (typeof res === 'number') ctx.currentValue = res;
          }
        }

        codInput.value = fmt(ctx.currentValue);
        codInput.dispatchEvent(new Event('input', { bubbles: true }));
        clearInterval(int);
      }, 250);
    }

    /* -------- ACTIONS -------- */
    const ACTIONS = {
      doplneniCastkyKuhrade: ({ total }) => total,

      dobirkaSepare: ({ poleVal, currentValue }) => poleVal ?? currentValue,

      vicekusSK: ({ modal, codInput, nonHidden, maxPrice, diff, currentValue }) => {
        const val = nonHidden === 0 ? maxPrice : diff;
        addGhost(modal, codInput, diff);
        return val ?? currentValue;
      },
       skrytPridatZasilkuBaliky: ctx => ctx.currentValue
    };

/* ---------- UI helpers ---------- */
function skryjPridatZasilkuBaliky(){
  document.querySelectorAll('li').forEach(li=>{
    const a=li.querySelector('a');
    if(a&&a.textContent.includes('Přidat zásilku (Balíky)')){
      li.style.display='none';
    }
  });
}


function ensureWrapper(){
  let wrap=document.getElementById('sova-info');
  if(!wrap){
    form.insertAdjacentHTML('afterbegin','<div id="sova-info" class="systemMessage__wrapper"></div>');
    wrap=document.getElementById('sova-info');
  }
  return wrap;
}

function insertInfo(){
  const wrap=ensureWrapper();
  if(!wrap.querySelector('.sova-msg-vksk'))
    wrap.insertAdjacentHTML('beforeend',
      `<div class="systemMessage systemMessage--notice sova-msg-vksk">
         <div class="systemMessage__content">
           <div class="systemMessage__text sova-system-message-text">
             <strong>Vícekus s dobírkou na Slovensko: přidej více zásilek s dobírkami podle obsahu balíků + k jedné zásilce přičti cenu dopravy a platby</strong>
           </div>
         </div>
       </div>`);
}

function insertDiff(){
  if(nonHidden===0||diff===0) return;
  const wrap=ensureWrapper();
  if(!wrap.querySelector('.sova-msg-diff'))
    wrap.insertAdjacentHTML('beforeend',
      `<div class="systemMessage systemMessage--notice alert sova-msg-diff">
         <div class="systemMessage__content">
           <div class="systemMessage__text sova-system-message-text alert">
             <strong>Celková hodnota zásilky nesedí na sumu dobírek. Rozdíl: ${fmt(diff)}</strong>
           </div>
         </div>
       </div>`);
}

    function addGhost(modal, codInput, rest) {
      if (modal.querySelector('.sova-cod-products')) return;
      const v2 = modal.querySelector('h2 + .v2form');
      if (!v2) return;
      const wrap = document.createElement('div');
      wrap.className = 'sova-cod-products';
      wrap.style.marginTop = '10px';
      products.forEach(p => {
        wrap.insertAdjacentHTML(
          'beforeend',
          rowHTML(p.name, p.price)
        );
      });
      wrap.insertAdjacentHTML('beforeend', rowHTML('<strong>Zbytek</strong>', rest));
      v2.after(wrap);

      wrap.addEventListener('click', e => {
        const ghost = e.target.closest('.pod-ghost-link');
        const plus  = e.target.closest('.pod-add-link');
        if (ghost) {
          e.preventDefault();
          codInput.value = fmt(num(ghost.dataset.val));
          codInput.dispatchEvent(new Event('input', { bubbles: true }));
        } else if (plus) {
          e.preventDefault();
          const addVal = num(plus.dataset.val);
          const cur = num(codInput.value);
          codInput.value = fmt(cur + addVal);
          codInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    }

 const rowHTML = (name, price) => `
 <div class="pod-product-row">
   <div class="pod-product-name">${name}</div>
   <div class="pod-product-price">
     <a href="#" class="pod-ghost-link" data-val="${price}">${fmt(price)}</a>
     ${
       /zbytek/i.test(name.replace(/<[^>]+>/g, ''))  /* pokud text obsahuje "Zbytek" */
         ? ''
         : `<a href="#" class="pod-add-link" data-val="${price}">+</a>`
     }
   </div>
 </div>`;
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

function mazatTrackingPriOdstraneniZasilky() {
    'use strict';

    const STORAGE_KEY = 'deleteShipmentNumber';

    document.addEventListener('click', function(e) {
        const btn = e.target.closest('a.delete-item');
        if (!btn) return;

        const shipmentId = btn.getAttribute('data-values');
        if (!shipmentId) return;

        const rowLink = document.querySelector(`a[href*="/admin/zasilka/?id=${shipmentId}"]`);
        if (!rowLink) return;

        const strong = rowLink.querySelector('strong');
        if (!strong) return;

        const shipmentNumber = strong.textContent.trim();

        const input = document.querySelector('input#package-number');
        if (!input) return;

        // 💡 Uložíme do storage pouze pokud číslo zásilky odpovídá inputu
        if (input.value.trim() === shipmentNumber) {
            sessionStorage.setItem(STORAGE_KEY, shipmentNumber);
            console.log(`[SCRIPT] Uložen identifikátor ${shipmentNumber} pro vymazání po reloadu.`);
        } else {
            console.log(`[SCRIPT] Číslo zásilky ${shipmentNumber} neodpovídá inputu – identifikátor neukládám.`);
        }
    }, true);

    // Po načtení stránky zkontrolujeme existenci identifikátoru
    window.addEventListener('load', function() {
        const deleteNumber = sessionStorage.getItem(STORAGE_KEY);
        if (!deleteNumber) return;

        const input = document.querySelector('input#package-number');
        if (input && input.value.trim() === deleteNumber) {
            console.log(`[SCRIPT] Načten identifikátor ${deleteNumber}, mažu input a klikám na Uložit.`);

            // Vyprázdníme input
            input.value = '';

            // Odstraníme identifikátor
            sessionStorage.removeItem(STORAGE_KEY);

            // Klikneme na tlačítko Uložit
            const saveBtn = document.querySelector('a[rel="saveAndStay"]');
            if (saveBtn) {
                saveBtn.click();
            } else {
                console.warn('[SCRIPT] Tlačítko Uložit nenalezeno.');
            }
        }
    });
};


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



async function doplneniCeniku() {
    'use strict';

    /* ---------- sdílené utily ---------- */
    const dealerToId = { 'DEALER A': '12', 'DEALER B': '15', 'DEALER C': '18' };
    const dealers    = Object.keys(dealerToId);                       // pevné pořadí A→B→C
    const fmt        = v => Number(v).toLocaleString('cs-CZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const urlFor     = (d, code) => `/admin/ceny/673/?f[code]=${encodeURIComponent(code)}&f[pricelistId]=${dealerToId[d]}`;

    /* === detekce slave === */
    const isSlave = window.name.startsWith('sova-add-vo-price-') ||
                    sessionStorage.getItem('sova_code');   // marker s kódem

    /* *****************************************************************
       MASTER – detail produktu
    ***************************************************************** */
    if (location.pathname.includes('/admin/produkty-detail/')) {

        /* --- DOM reference --- */
        const h2 = [...document.querySelectorAll('h2')].find(h => h.textContent.includes('Jiné ceníky'));
        if (!h2) return;
        const detailTab = h2.nextElementSibling.querySelector('table');
        if (!detailTab) return;
        const kod = document.querySelector('#product-code')?.value.trim();
        if (!kod) return;

        /* ---- per-produkt identifikátory ---- */
        const LS_KEY  = `sova-vo-q-${kod}`;          // fronta v localStorage
        const WINNAME = `sova-add-vo-price-${kod}`;  // slave-tab name
        const MARKER  = `sova_slave_${kod}`;         // sessionStorage marker

        const logM = (...m) => console.log('[SOVA-MASTER]', ...m);

        /* ---------- VO tabulka ---------- */
        const vo = document.createElement('table');
        vo.className = 'table checkbox-table';
        vo.innerHTML = `
          <thead>
            <tr>
              <th>Ceník</th><th>Cena podle koef.</th>
              <th>Akční cena</th><th>Akční od&nbsp;(D.MM.YYYY)</th><th>Akční do&nbsp;(D.MM.YYYY)</th>
            </tr>
          </thead>
          <tbody>
            ${dealers.map(() => `
              <tr><td></td><td></td>
                <td><input type="text" class="numberField xs"></td>
                <td><input type="text" class="dateField date-pick-simple"></td>
                <td><input type="text" class="dateField date-pick-simple"></td>
              </tr>`).join('')}
            <tr><td>Hlavní ceník</td><td></td><td></td><td></td><td></td></tr>
          </tbody>`;
        detailTab.after(vo);
        const rows = vo.querySelectorAll('tbody tr');
        dealers.forEach((d, i) => rows[i].children[0].textContent = d);

        /* ---- cena podle koef. ---- */
        const koefPrice = id => {
            const r = [...detailTab.querySelectorAll('tbody tr')]
                .find(row => row.querySelector(`input[value="${id}"]`));
            if (!r) return '';
            const c = parseFloat(r.querySelector(`input[name="pricelistPrice[${id}]"]`)?.value.replace(',','.'));
            const k = parseFloat(r.querySelector(`input[name="pricelistPriceRatio[${id}]"]`)?.value.replace(',','.'));
            return (c && k) ? fmt(c * k) : '';
        };
        rows[0].children[1].textContent = koefPrice('12');
        rows[1].children[1].textContent = koefPrice('15');
        rows[2].children[1].textContent = koefPrice('18');

        const mainP = parseFloat(document.querySelector('input[name="pricelistPrice[1]"]')?.value.replace(',','.'));
        const mainK = parseFloat(document.querySelector('input[name="pricelistPriceRatio[1]"]')?.value.replace(',','.'));
        if (mainP && mainK) rows[3].children[1].textContent = fmt(mainP * mainK);

/* ---- akční ceny (fetch) ---- */
const fetchAkce = async (dealer, row) => {
    const html = await fetch(
        urlFor(dealer, kod),
        {
            credentials: 'same-origin',
            headers: { 'X-Requested-With': 'XMLHttpRequest' } // 👈
        }
    ).then(r => r.text());
    const doc  = new DOMParser().parseFromString(html, 'text/html');

    doc.querySelectorAll('table.table tbody tr').forEach(tr => {
        if (tr.querySelector('td:nth-child(3) span')?.textContent.trim() === kod) {
            row.children[2].querySelector('input').value =
                tr.querySelector('input[name^="actionPrice"]')?.value || '';
            row.children[3].querySelector('input').value =
                tr.querySelector('input[name^="actionFrom"]')?.value  || '';
            row.children[4].querySelector('input').value =
                tr.querySelector('input[name^="actionUntil"]')?.value || '';
        }
    });
};

/* ========== jedno IIFE, které:
      1️⃣  načte A → B → C,
      2️⃣  doplní hlavní ceník z detail-inputů,
      3️⃣  tichým GETem nastaví „poslední navštívený“ ceník na ID 1
   ========== */
(async () => {

    await fetchAkce('DEALER A', rows[0]);
    await fetchAkce('DEALER B', rows[1]);
    await fetchAkce('DEALER C', rows[2]);

    /* hlavní ceník – hodnoty už máme v detailech */
    rows[3].children[2].textContent =
        fmt(document.querySelector('#settings-product-action-price-value')?.value || '');
    rows[3].children[3].textContent =
        document.querySelector('input[name="actionFrom"]')?.value || '';
    rows[3].children[4].textContent =
        document.querySelector('input[name="actionUntil"]')?.value || '';

    /* --- nastav „posledně navštívený“ ceník na maloobchodní (ID 1) --- */
    try {
        await fetch('/admin/ceny/673/?f[pricelistId]=1', {
            credentials: 'same-origin',
            cache: 'no-store'
        });
        console.log('[SOVA-MASTER] Prefetch pricelistId=1 — Shoptet si jej zapamatuje.');
    } catch (err) {
        console.warn('[SOVA-MASTER] Prefetch pricelistId=1 selhal:', err);
    }

})();


        /* ---- Tlačítko ------------------------------------------------- */
        const div = document.createElement('div');
        div.style.textAlign = 'right';
        div.innerHTML = `
          <span style="margin-right:10px;">Drž&nbsp;CTRL&nbsp;+&nbsp;klikni</span>
          <a href="#" class="btn btn-sm btn-action submit-js">
            Aktualizovat akční ceny dealerů
          </a>`;
        vo.after(div);

        div.querySelector('a').addEventListener('click', e => {
            e.preventDefault();

            const queue = { done: [], data: { kodProduktu: kod } };
            dealers.forEach((d, i) => {
                queue.data[d] = {
                    actionPrice: rows[i].children[2].querySelector('input').value,
                    actionFrom : rows[i].children[3].querySelector('input').value,
                    actionUntil: rows[i].children[4].querySelector('input').value
                };
            });
            localStorage.setItem(LS_KEY, JSON.stringify(queue));
            logM('Queue uložen', queue);

            vo.querySelectorAll('input').forEach(inp => inp.defaultValue = inp.value);
            sessionStorage.setItem(MARKER, '1');
            sessionStorage.setItem('sova_code', kod);   // fallback pro slave
            const slaveWin = window.open(urlFor(dealers[0], kod), WINNAME, 'noopener');
            setTimeout(() => { slaveWin?.blur(); window.focus(); }, 50);
        });

        /* ---- Master poslouchá dokončení fronty ---- */
        window.addEventListener('storage', e => {
            if (e.key === LS_KEY && e.newValue === null) {
                logM('Slave dokončil frontu – reload detailu.');
                window.onbeforeunload = null;
                if (window.jQuery) window.jQuery(window).off('beforeunload');
                location.reload();
            }
        });
    }

/* *****************************************************************
   SLAVE OKNO  –  logika “A → B → C → FINISH → zavřít”
***************************************************************** */
if (isSlave && location.pathname.includes('/admin/ceny/')) {

    const params   = new URLSearchParams(location.search);
    const curId    = params.get('f[pricelistId]');
    const curDealer = Object.keys(dealerToId).find(d => dealerToId[d] === curId) || 'FINISH';

    /* ================= FINISH – nic nevyplňuj, jen zavři ============= */
    if (curDealer === 'FINISH') {
        console.log('[SOVA-SLAVE] FINISH stránka – zavírám okno.');
        /* fronta může být už smazaná, ale pro jistotu vymažeme zbytky */
        Object.keys(localStorage)
              .filter(k => k.startsWith('sova-vo-q-'))
              .forEach(k => localStorage.removeItem(k));

        sessionStorage.removeItem('sova_code');
        setTimeout(() => window.close(), 150);      // mírné zpoždění
        return;
    }

    /* ==== odtud už potřebujeme kód produktu ========================= */
    let kod = params.get('f[code]') || sessionStorage.getItem('sova_code');
    if (!kod) {
        console.warn('[SOVA-SLAVE] Kód produktu nenalezen');
        return;
    }

    const LS_KEY = `sova-vo-q-${kod}`;
    const queue  = JSON.parse(localStorage.getItem(LS_KEY));
    if (!queue) {
        console.warn('[SOVA-SLAVE] Queue nenalezena');
        return;
    }

    const { done, data } = queue;
    const logS = (...m)=>console.log('[SOVA-SLAVE]', ...m);

    logS('Dealer', curDealer, '| done:', done);

    /* --- pokud už hotovo → skok / FINISH ---------------------------- */
    if (done.includes(curDealer)) {
        const next = dealers.find(d => !done.includes(d)) || 'FINISH';
        logS(`${curDealer} hotový → přecházím na ${next}`);
        location.href = next === 'FINISH'
              ? '/admin/ceny/673/?f[pricelistId]=1'
              : urlFor(next, kod);
        return;
    }

    /* --- běžný dealer (A/B/C) -------------------------------------- */
    const info = data[curDealer];
    document.querySelectorAll('table.table tbody tr').forEach(r=>{
        if (r.querySelector('td:nth-child(3) span')?.textContent.trim() === kod) {
            r.querySelector('input[name^="actionPrice"]').value  = info.actionPrice;
            r.querySelector('input[name^="actionFrom"]').value   = info.actionFrom;
            r.querySelector('input[name^="actionUntil"]').value  = info.actionUntil;
        }
    });
    logS('Vyplněno', info);

    done.push(curDealer);
    localStorage.setItem(LS_KEY, JSON.stringify({ done, data }));
    logS('Queue uložen', { done });

    /* klikni „Uložit“ – Shoptet stránku sám reloadne */
    document.querySelector('a.submit-js[rel="saveAndStay"]')?.click();
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