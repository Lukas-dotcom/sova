//zvýraznění výprodej jen pro některé adminy
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
  
    if (!body.classList.contains("admin-logged")) return;
  
    fetch("https://raw.githubusercontent.com/Lukas-dotcom/sova/main/BE-sova-settings.json")
      .then(response => response.json())
      .then(data => {
        const allowedNames = data?.FEzvyrazneniVyprodej?.rules?.map(item => item.jmena) || [];
        console.log("✅ Načtena jména:", allowedNames);
  
        // hledáme jméno kdekoliv v .admin-bar
        const adminBarText = document.querySelector('.admin-bar')?.innerText || '';
  
        // pokusíme se najít shodu
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
