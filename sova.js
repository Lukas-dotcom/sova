// --- SOVA MODULÁRNÍ ZÁKLAD ---
(function() {
    'use strict';

    // --- Obecné utility funkce ---
    const log = (msg) => console.log(`[SOVA] ${msg}`);
    const sleep = (ms) => new Promise(res => setTimeout(res, ms));

    // --- Konfigurace fičur ---
    const features = [
        {
            name: "Řazení parametrů",
            buttonText: "Seřadit parametry",
            urlPattern: /parametry-pro-filtrovani-vypis/,
            action: sortingFeature
        }
        // Sem se budou přidávat další fičury.
    ];

    // --- Univerzální funkce pro vložení tlačítka ---
    function injectButton(text, onClick) {
        const buttonsContainer = document.querySelector("p.content-buttons");
        if (!buttonsContainer) return log("Nebyl nalezen kontejner tlačítek.");

        const btn = document.createElement("a");
        btn.href = "#";
        btn.title = `${text} 🦉`;
        btn.className = "btn btn-sm btn-primary";
        btn.style = "order: -1; margin-left: 15px; margin-right: auto;";
        btn.textContent = `${text} 🦉`;

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            onClick();
        });

        buttonsContainer.appendChild(btn);
        log(`Tlačítko '${text}' bylo vloženo.`);
    }

    // --- Inicializace všech fičur ---
    function initFeatures() {
        features.forEach(feature => {
            if (feature.urlPattern.test(window.location.href)) {
                injectButton(feature.buttonText, feature.action);
            }
        });
    }

    // --- KOMPLETNÍ FIČURA: Řazení parametrů ---
    async function sortingFeature() {
        log("Inicializuji řazení parametrů.");

        const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRufx0-X2OdjDVG1KAKx1QhC38JMxDj10hOYDGTBi6te9jYRXrBfRYazSpFHXglSKmcaQEs7tdvTOKV/pub?gid=775097961&single=true&output=csv";
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        const paramRules = {};
        csvText.split('\n').slice(1).forEach(line => {
            const [param, oddelovac] = line.split(',').map(x => x.trim());
            paramRules[param] = oddelovac;
        });

        const rows = document.querySelectorAll("table.table tbody tr");
        const paramsList = Array.from(rows).map(row => {
            const link = row.querySelector("a.table__detailLink");
            return { name: link.textContent.trim(), url: link.href };
        }).filter(p => paramRules[p.name] !== "neradit");

        GM_setValue("sortingParams", JSON.stringify(paramsList));
        GM_setValue("currentSortingIndex", 0);

        const sortingWindow = window.open(paramsList[0].url, "sovaSortingWindow", "width=1200,height=800");
    }

    // --- Dílčí skript: Řazení (spouští se v novém okně) ---
    async function runSortingScript() {
        if (window.name !== "sovaSortingWindow") return;

        let paramsList = JSON.parse(GM_getValue("sortingParams", "[]"));
        let index = GM_getValue("currentSortingIndex", 0);

        if (index >= paramsList.length) return log("Vše hotovo.");

        const currentParam = paramsList[index];
        if (!window.location.href.startsWith(currentParam.url)) {
            window.location.href = currentParam.url;
            return;
        }

        log(`Řadím parametr: ${currentParam.name}`);
        await sleep(2000);

        // Zde doplňte konkrétní řadicí logiku podle původního scriptu
        // Kompletní řadicí logika z původního SOVA scriptu:
        async function sortingLogic() {
            const delayMs = 2000;

            log("Spouštím Shoptet Parameter Sorting Robot.");

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
            }

            let paramRules = JSON.parse(GM_getValue("paramRules", "{}"));
            let currentParam = expectedParam;
            log(`Zpracovávám detail parametru: ${currentParam.name}`);
            await sleep(delayMs);

            let tbody = document.querySelector("table.table tbody");
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
                        item.valid = !(isNaN(part1) || isNaN(part2));
                        item.num1 = part1;
                        item.num2 = part2;
                    } else item.valid = false;
                });
                rowsData.sort((a, b) => a.valid && b.valid ? (a.num1 !== b.num1 ? a.num1 - b.num1 : a.num2 - b.num2) : a.valid ? -1 : b.valid ? 1 : 0);
            } else {
                log("Standardní řazení (rozdělení podle čísla a písmena).");
                rowsData.forEach(item => {
                    let text = item.text;
                    if (text === "NE" || text === "-") {
                        item.sortKey = { group: 3, key: text };
                    } else if (/^\d/.test(text)) {
                        let numVal = parseFloat(text.replace(/,/, "."));
                        item.sortKey = { group: 1, key: isNaN(numVal) ? Infinity : numVal };
                    } else if (/^[A-Za-z]/.test(text)) {
                        item.sortKey = { group: 2, key: text.toLowerCase() };
                    } else {
                        item.sortKey = { group: 3, key: text };
                    }
                });
                rowsData.sort((a, b) => (a.sortKey.group !== b.sortKey.group ? a.sortKey.group - b.sortKey.group : a.sortKey.key < b.sortKey.key ? -1 : 1));
            }

            tbody.innerHTML = "";
            rowsData.forEach(item => tbody.appendChild(item.row));

            log("Tabulka byla přeuspořádána.");
            await sleep(delayMs);

            processedCount++;
            GM_setValue("sova:processedCount", processedCount);
            log(`Zpracováno parametrů: ${processedCount}`);

            let saveButton = document.querySelector("a.btn-action.submit-js[rel='saveAndStay']");
            if (saveButton) {
                log("Klikám na tlačítko Uložit.");
                saveButton.click();
            } else {
                console.error("Tlačítko Uložit nebylo nalezeno.");
            }
            await sleep(delayMs);

            let paramsList = JSON.parse(GM_getValue("paramsList", "[]"));
            if (paramsList.length > 0) {
                let nextParam = paramsList.shift();
                GM_setValue("paramsList", JSON.stringify(paramsList));
                GM_setValue("currentParam", JSON.stringify(nextParam));
                log(`Další parametr: ${nextParam.name}`);
                window.location.href = nextParam.url;
            } else {
                log("Všechny parametry zpracovány.");
            }
        }


        document.querySelector("a.btn-action.submit-js[rel='saveAndStay']")?.click();
        await sleep(2000);

        GM_setValue("currentSortingIndex", index + 1);
        if (paramsList[index + 1]) {
            window.location.href = paramsList[index + 1].url;
        } else {
            log("Řazení dokončeno.");
            window.close();
        }
    }

    // --- Spuštění skriptu podle typu stránky ---
    if (/parametry-pro-filtrovani-detail/.test(window.location.href)) {
        runSortingScript();
    } else {
        initFeatures();
    }

})();
