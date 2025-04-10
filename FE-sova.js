// ==========================================
// 🔶 1. ZVÝRAZNĚNÍ VÝPRODEJE PRO VYBRANÉ ADMINY
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    if (!body.classList.contains("admin-logged")) return;

    fetch("https://raw.githubusercontent.com/Lukas-dotcom/sova/main/BE-sova-settings.json")
        .then(response => response.json())
        .then(data => {
            const allowedNames = data?.FEzvyrazneniVyprodej?.rules?.map(item => item.jmena) || [];
            console.log("✅ Načtena jména:", allowedNames);

            const adminBarText = document.querySelector('.admin-bar')?.innerText || '';
            const matchedName = allowedNames.find(name => adminBarText.includes(name));

            if (matchedName) {
                body.classList.add("vyprodej-zvyrazneni-show");
                console.log("✅ Přidána třída vyprodej-zvyrazneni-show pro uživatele:", matchedName);
            } else {
                console.log("❌ Žádné oprávněné jméno nenalezeno v .admin-bar");
            }
        })
        .catch(err => {
            console.error("❌ Nepodařilo se načíst BE-sova-settings.json", err);
        });
});


// ==========================================
// 🎟️ 2. AUTOMATICKÉ UPLATNĚNÍ KUPÓNU
// ==========================================
(function () {
    const COUPON_KEY = 'kupon';
    const CART_WAS_EMPTY_KEY = 'kosik-byl-prazdny';

    // --- 1. Získání kupónu z URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const urlCoupon = urlParams.get('kupon');

    if (urlCoupon) {
        sessionStorage.setItem(COUPON_KEY, urlCoupon);
        console.log(`🎟️ Kupón ${urlCoupon} uložen do sessionStorage.`);
    }

    const COUPON_CODE = sessionStorage.getItem(COUPON_KEY);
    if (!COUPON_CODE) {
        console.log('ℹ️ Kupón není k dispozici, skript se ukončuje.');
        return;
    }

    console.log(`🎯 Kupón ${COUPON_CODE} připraven.`);

    // --- 2. Po načtení stránky zjisti stav košíku ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            const cartEl = document.querySelector('[data-testid="headerCartPrice"]');
            if (!cartEl) {
                console.warn('⚠️ Element pro košík nebyl nalezen.');
                return;
            }

            const rawText = cartEl.textContent || '';
            const cartText = rawText.replace(/\s+/g, ' ').trim().toLowerCase();
            console.log('🔍 Text v košíku po 1s:', `"${cartText}"`);

            const isCartEmpty = (
                cartText === 'prázdný košík' ||
                (cartText.includes('prázdný') && cartText.includes('košík'))
            );

            if (isCartEmpty) {
                sessionStorage.setItem(CART_WAS_EMPTY_KEY, 'true');
                console.log('🧺 Košík byl prázdný po načtení.');
            } else {
                sessionStorage.removeItem(CART_WAS_EMPTY_KEY);
                console.log('🧺 Košík už po načtení obsahoval položky.');
                tryAddCouponDirectly();
            }
        }, 1000);
    });

    // --- 3. Sleduj kliknutí na "Do košíku" ---
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('button.add-to-cart-button');
        if (!btn) return;

        console.log('🛒 Detekováno kliknutí na "Do košíku". Čekám na CSRF token...');

        setTimeout(() => {
            const csrfInput = document.querySelector('input[name="__csrf__"]');
            const csrfToken = csrfInput?.value;

            if (!csrfToken) {
                console.warn('❌ CSRF token nebyl nalezen.');
                return;
            }

            console.log('🔐 CSRF token získán:', csrfToken);
            applyCoupon(csrfToken);
        }, 1000);
    });

    // --- 4. Pokus o přidání kupónu po načtení stránky ---
    function tryAddCouponDirectly() {
        fetch('/action/Cart/GetExtendedOrder/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'x-requested-with': 'XMLHttpRequest',
                'x-shoptet-xhr': 'Shoptet_Coo7ai'
            }
        })
        .then(res => res.json())
        .then(data => {
            const currentCoupon = data?.payload?.discountCoupon?.code;
            if (currentCoupon && currentCoupon === COUPON_CODE) {
                console.log('🛑 Kupón už je v košíku, nebude znovu přidáván.');
                return;
            }

            const csrfInput = document.querySelector('input[name="__csrf__"]');
            const csrfToken = csrfInput?.value;

            if (!csrfToken) {
                console.warn('⚠️ CSRF token chybí pro přímé přidání kupónu.');
                return;
            }

            console.log('🚀 Přidávám kupón po načtení, nebyl nalezen v GetExtendedOrder...');
            applyCoupon(csrfToken);
        })
        .catch(err => {
            console.warn('⚠️ Chyba při kontrole kupónu v košíku:', err);
        });
    }

    // --- 5. Aplikuj kupón ---
    function applyCoupon(csrfToken) {
        const params = new URLSearchParams();
        params.append('discountCouponCode', COUPON_CODE);
        params.append('__csrf__', csrfToken);

        console.log('📤 Odesílám požadavek na uplatnění kupónu...');

        fetch('/action/Cart/addDiscountCoupon/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'x-requested-with': 'XMLHttpRequest',
                'x-shoptet-xhr': 'Shoptet_Coo7ai'
            },
            body: params.toString()
        })
        .then(res => res.json())
        .then(data => {
            if (data.code === 200 && data.message?.includes('úspěšně')) {
                console.log('✅ Kupón byl úspěšně uplatněn.');
                sessionStorage.removeItem(COUPON_KEY);

                const wasEmpty = sessionStorage.getItem(CART_WAS_EMPTY_KEY);
                if (wasEmpty) {
                    const priceEl = document.querySelector('[data-testid="headerCartPrice"]');
                    if (priceEl) {
                        priceEl.innerHTML = 'Kupón <br>aktivní';
                        priceEl.style = 'line-height: 1.0; text-align: right;';
                        console.log('🎨 Košík byl prázdný → upraveno vizuálně.');
                    } else {
                        console.warn('⚠️ Element pro košík nebyl nalezen pro vizuální úpravu.');
                    }
                    sessionStorage.removeItem(CART_WAS_EMPTY_KEY);
                } else {
                    console.log('🎨 Košík nebyl prázdný → žádná vizuální úprava.');
                }
            } else {
                console.warn('❌ Kupón se nepodařilo uplatnit:', data);
            }
        })
        .catch(err => {
            console.error('❌ Chyba při fetchi kupónu:', err);
        });
    }
})();



//zobrazení DIVů s kupóny
window.addEventListener("DOMContentLoaded", function () {
    const kuponValue = sessionStorage.getItem("kupon");

    // Pokud kupon existuje a není prázdný
    if (kuponValue && kuponValue.trim() !== "") {
        document.querySelectorAll(".sova-kupon").forEach(el => {
            el.style.display = "block"; 
        });
    }
});

