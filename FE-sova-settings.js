window.injectFunctions = [
  {
    "function": "additionalSale",
    "pageType": "productDetail"
  },
  {
    "function": "additionalSaleCart",
    "pageType": "cart"
  },
  {
    "function": "deliveryOptions",
    "pageType": "billingAndShipping"
  }
];

window.injectVariables = {
  "zarVylouceneCastiNazvu": [
    "Z Fold",
    "Z Flip",
    "Fujitsu H760",
    "Fujitsu H770"
  ],
  "RAMvylouceneCastiNazvu": [
    "Lenovo ThinkPad X1 Yoga 1st",
    "Lenovo ThinkPad X1 Yoga 2nd",
    "Lenovo ThinkPad X1 Yoga 3rd",
    "Lenovo ThinkPad X1 Yoga 4th",
    "Lenovo ThinkPad X1 Yoga 5th",
    "Lenovo ThinkPad X1 Yoga 6th",
    "Lenovo ThinkPad X1 Yoga 7th",
    "Lenovo ThinkPad X13 Yoga Gen 1",
    "Lenovo ThinkPad X13 Yoga Gen 2",
    "Lenovo ThinkPad X1 Carbon 1st",
    "Lenovo ThinkPad X1 Carbon 2nd",
    "Lenovo ThinkPad X1 Carbon 3rd",
    "Lenovo ThinkPad X1 Carbon 4th",
    "Lenovo ThinkPad X1 Carbon 5th",
    "Lenovo ThinkPad X1 Carbon 6th",
    "Lenovo ThinkPad X1 Carbon 7th",
    "Lenovo ThinkPad X1 Carbon 8th",
    "Lenovo ThinkPad X1 Carbon 9th",
    "Lenovo ThikPad X380 Yoga",
    "Lenovo Ideapad Flex 5",
    "Lenovo ThinkPad X280",
    "Lenovo ThinkPad X390",
    "Lenovo ThinkPad T490s",
    "Lenovo ThinkPad T495s",
    "HP OMEN Transcend",
    "HP ENVY x360",
    "HP EliteBook x360",
    "HP Spectre x360",
    "Dell Latitude 9430",
    "Dell Latitude 7400 2-IN-1",
    "Dell Latitude 5320",
    "Dell Latitude 7420",
    "Dell Latitude 7430",
    "Dell Latitude 7320 Detachable",
    "MSI Modern",
    "MSI Prestige 13 AI Evo A1MG",
    "MSI Prestige 13Evo A13M",
    "MSI Prestige 14Evo B13M",
    "MSI Summit E16FLIPEVO",
    "MSI Summit E14Evo A12M",
    "Acer TravelMate Spin B311",
    "Acer Swift Go 14 SFG14",
    "Acer Aspire Switch 11 SW5",
    "Acer Swift X zpravidla všechny",
    "ASUS ZenBook 14 UX434FAC",
    "ASUS Zenbook UX5401Z"
  ],
  "DISKvylouceneCastiNazvu": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  ]
};

window.additionalSale = [
  {
    "code": "NET0034",
    "name": "Přidat wifi",
    "price": "129 Kč",
    "pairText": "wifi",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND category = \"Počítače\" AND parametroptdisableupgradewifi != \"true\" AND parametrWifi !=\"ANO\")"
  },
  {
    "code": "NET0033",
    "name": "Přidat bluetooth",
    "price": "149 Kč",
    "pairText": "bluetooth",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND category = \"Počítače\" AND parametroptdisableupgradebluetooth != \"true\" AND parametrBluetooth !=\"ANO\")"
  },
  {
    "code": "BLESK1",
    "name": "Blesková výměna bez čekání",
    "price": "499 Kč",
    "pairText": "BLESK1",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (( ( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) OR (category = \"Telefony\" OR category=\"Telefony, mobily\") ) AND ( CONTAINS(parametrTypproduktu, \"Repasovaný\"))))"
  },
  {
    "code": "BLESK2",
    "name": "Předinstalace programů",
    "price": "649 Kč",
    "pairText": "BLESK2",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\"))) AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND (parametroptdisableupgradeblesk = \"false\") AND (CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\")) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") AND (parametrKapacitadisku = \"16 GB\" OR parametrKapacitadisku = \"32 GB\") )))"
  },
  {
    "code": "SERVIS006",
    "name": "Aplikace ochranného skla",
    "price": "249 Kč",
    "pairText": "SERVIS006",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((category = \"Telefony\" OR CONTAINS(productCurrentCategory, \"Telefony\")) AND (productManufacturer = \"Apple\") AND ( CONTAINS(productName, \"iPhone\") OR CONTAINS(productCurrentCategory, \"iPhone\") )))"
  },
  {
    "code": "LIC0005",
    "name": "Office 2019 Pro Plus",
    "price": "799 Kč",
    "pairText": "LIC0005",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") )))"
  },
  {
    "code": "LIC0004",
    "name": "Office 2021 Pro Plus",
    "price": "1 290 Kč",
    "pairText": "LIC0004",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") )))"
  },
  {
    "code": "MAR0012",
    "name": "Windows 10 Home",
    "price": "499 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrOperacnisystem, \"Windows 7 Home\")))"
  },
  {
    "code": "MAR0013",
    "name": "Windows 10 PRO",
    "price": "499 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\")))"
  },
  {
    "code": "MAR0008",
    "name": "Windows 10 PRO",
    "price": "899 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Ultimate\") OR CONTAINS(parametrOperacnisystem, \"Windows 10 Home\") )))"
  },
  {
    "code": "MAR0018",
    "name": "Windows 11 Home",
    "price": "449 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND CONTAINS(parametrOperacnisystem, \"Windows 10 Home\")))"
  },
  {
    "code": "MAR0019",
    "name": "Windows 11 Home",
    "price": "599 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") )))"
  },
  {
    "code": "MAR0020",
    "name": "Windows 11 PRO",
    "price": "449 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND CONTAINS(parametrOperacnisystem, \"Windows 10 Pro\")))"
  },
  {
    "code": "MAR0021",
    "name": "Windows 11 PRO",
    "price": "899 Kč",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 10 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 11 Home\") )))"
  },
  {
    "code": "VRP0022",
    "name": "+ 2GB RAM",
    "price": "549 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0024",
    "name": "+ 4GB RAM",
    "price": "890 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0026",
    "name": "+ 8GB RAM",
    "price": "1 590 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0020",
    "name": "+ 16GB RAM",
    "price": "2 490 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0025",
    "name": "+ 4GB RAM",
    "price": "890 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0027",
    "name": "+ 8GB RAM",
    "price": "1 490 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0021",
    "name": "+ 16GB RAM",
    "price": "2 490 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0034",
    "name": "+ 8GB RAM",
    "price": "990 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0035",
    "name": "+ 16GB RAM",
    "price": "1 790 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0036",
    "name": "+ 32GB RAM",
    "price": "2 990 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0001",
    "name": "+ 2GB RAM",
    "price": "549 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0002",
    "name": "+ 4GB RAM",
    "price": "890 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0003",
    "name": "+ 8GB RAM",
    "price": "1 790 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0004",
    "name": "+ 16GB RAM",
    "price": "2 490 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0006",
    "name": "+ 4GB RAM",
    "price": "890 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0007",
    "name": "+ 8GB RAM",
    "price": "1 790 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0008",
    "name": "+ 16GB RAM",
    "price": "2 490 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0031",
    "name": "+ 8GB RAM",
    "price": "990 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0032",
    "name": "+ 16GB RAM",
    "price": "1 890 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0033",
    "name": "+ 32GB RAM",
    "price": "3 490 Kč",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0028",
    "name": "SSD 240GB",
    "price": "1 390 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (240 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0015",
    "name": "SSD 256GB",
    "price": "1 690 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (256 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0029",
    "name": "SSD 480GB",
    "price": "1 999 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (480 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0016",
    "name": "SSD 512GB",
    "price": "1 890 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (512 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0017",
    "name": "SSD 1TB",
    "price": "2 490 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (1000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0018",
    "name": "SSD 2TB",
    "price": "3 690 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (2000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0019",
    "name": "SSD 4TB",
    "price": "7 990 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT (category = \"Notebooky\" OR CONTAINS(productCurrentCategory,\"Notebooky\")) AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (4000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0009",
    "name": "HDD 320GB",
    "price": "999 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (320 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0010",
    "name": "HDD 500GB",
    "price": "1 599 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (500 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0011",
    "name": "HDD 1TB",
    "price": "1 990 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (1000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0012",
    "name": "HDD 2TB",
    "price": "2 990 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (2000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0013",
    "name": "HDD 4TB",
    "price": "3 990 Kč",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"CZK\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (4000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "ZAR2000DO2500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "249 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2000) AND (productPriceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2500DO3000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2500) AND (productPriceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3000DO3500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "349 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 3000) AND (productPriceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3500DO4000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 3500) AND (productPriceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4000DO4500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "449 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 4000) AND (productPriceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4500DO5000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 4500) AND (productPriceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5000DO5500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "549 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 5000) AND (productPriceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5500DO6000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 5500) AND (productPriceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6000DO6500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "649 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 6000) AND (productPriceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6500DO7000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 6500) AND (productPriceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7000DO7500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "749 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 7000) AND (productPriceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7500DO8000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 7500) AND (productPriceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8000DO8500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "849 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 8000) AND (productPriceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8500DO9000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 8500) AND (productPriceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9000DO9500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "949 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 9000) AND (productPriceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9500DO10000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 9500) AND (productPriceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR10000DO11000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 10000) AND (productPriceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR11000DO12000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 11000) AND (productPriceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR12000DO13000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 12000) AND (productPriceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR13000DO14000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 13000) AND (productPriceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR14000DO15000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 14000) AND (productPriceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR15000DO16000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 15000) AND (productPriceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR16000DO17000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 16000) AND (productPriceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR17000DO18000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 17000) AND (productPriceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR18000DO19000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 18000) AND (productPriceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR19000DO20000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 19000) AND (productPriceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR20000DO21000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 20000) AND (productPriceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR21000DO22000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 21000) AND (productPriceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR22000DO23000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 22000) AND (productPriceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR23000DO24000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 23000) AND (productPriceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR24000DO25000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 24000) AND (productPriceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR25000DO26000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 25000) AND (productPriceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR26000DO27000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 26000) AND (productPriceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR27000DO28000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 27000) AND (productPriceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR28000DO29000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 28000) AND (productPriceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR29000DO30000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 29000) AND (productPriceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR30000DO32000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 30000) AND (productPriceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR32000DO34000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 32000) AND (productPriceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR34000DO36000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 34000) AND (productPriceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR36000DO38000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 36000) AND (productPriceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR38000DO40000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 38000) AND (productPriceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR40000DO42000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 40000) AND (productPriceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR42000DO44000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 42000) AND (productPriceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR44000DO46000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 44000) AND (productPriceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR46000DO48000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 46000) AND (productPriceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR48000DO50000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 48000) AND (productPriceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR50000DO52000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 50000) AND (productPriceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR52000DO54000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 52000) AND (productPriceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR54000DO56000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 54000) AND (productPriceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR56000DO58000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 56000) AND (productPriceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR58000DO60000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 58000) AND (productPriceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR60000DO62000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 60000) AND (productPriceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR62000DO64000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 62000) AND (productPriceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR64000DO66000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 64000) AND (productPriceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR66000DO68000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 66000) AND (productPriceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR68000DO70000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 68000) AND (productPriceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2000DO2500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "374 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2000) AND (productPriceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2500DO3000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "449 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2500) AND (productPriceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3000DO3500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "524 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 3000) AND (productPriceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3500DO4000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 3500) AND (productPriceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4000DO4500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "674 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 4000) AND (productPriceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4500DO5000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "749 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 4500) AND (productPriceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5000DO5500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "824 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 5000) AND (productPriceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5500DO6000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 5500) AND (productPriceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6000DO6500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "974 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 6000) AND (productPriceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6500DO7000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 049 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 6500) AND (productPriceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7000DO7500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 124 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 7000) AND (productPriceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7500DO8000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 7500) AND (productPriceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8000DO8500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 274 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 8000) AND (productPriceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8500DO9000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 349 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 8500) AND (productPriceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9000DO9500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 424 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 9000) AND (productPriceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9500DO10000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 9500) AND (productPriceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR10000DO11000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 649 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 10000) AND (productPriceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR11000DO12000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 11000) AND (productPriceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR12000DO13000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 949 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 12000) AND (productPriceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR13000DO14000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 13000) AND (productPriceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR14000DO15000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 249 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 14000) AND (productPriceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR15000DO16000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 15000) AND (productPriceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR16000DO17000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 549 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 16000) AND (productPriceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR17000DO18000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 17000) AND (productPriceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR18000DO19000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 849 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 18000) AND (productPriceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR19000DO20000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 19000) AND (productPriceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR20000DO21000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 149 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 20000) AND (productPriceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR21000DO22000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 21000) AND (productPriceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR22000DO23000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 449 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 22000) AND (productPriceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR23000DO24000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 23000) AND (productPriceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR24000DO25000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 749 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 24000) AND (productPriceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR25000DO26000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 25000) AND (productPriceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR26000DO27000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 049 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 26000) AND (productPriceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR27000DO28000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 27000) AND (productPriceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR28000DO29000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 349 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 28000) AND (productPriceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR29000DO30000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 29000) AND (productPriceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR30000DO32000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 30000) AND (productPriceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR32000DO34000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 32000) AND (productPriceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR34000DO36000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 34000) AND (productPriceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR36000DO38000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 36000) AND (productPriceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR38000DO40000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 38000) AND (productPriceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR40000DO42000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "6 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 40000) AND (productPriceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR42000DO44000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "6 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 42000) AND (productPriceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR44000DO46000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "6 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 44000) AND (productPriceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR46000DO48000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "7 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 46000) AND (productPriceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR48000DO50000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "7 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 48000) AND (productPriceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR50000DO52000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "7 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 50000) AND (productPriceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR52000DO54000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 52000) AND (productPriceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR54000DO56000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 54000) AND (productPriceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR56000DO58000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 56000) AND (productPriceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR58000DO60000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 58000) AND (productPriceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR60000DO62000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "9 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 60000) AND (productPriceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR62000DO64000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "9 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 62000) AND (productPriceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR64000DO66000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "9 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 64000) AND (productPriceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR66000DO68000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "10 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 66000) AND (productPriceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR68000DO70000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "10 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 68000) AND (productPriceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "NET0034",
    "name": "Přidat wifi",
    "price": "€5,28",
    "pairText": "wifi",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND category = \"Počítače\" AND parametroptdisableupgradewifi != \"true\" AND parametrWifi !=\"ANO\")"
  },
  {
    "code": "NET0033",
    "name": "Přidat bluetooth",
    "price": "€6,01",
    "pairText": "bluetooth",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND category = \"Počítače\" AND parametroptdisableupgradebluetooth != \"true\" AND parametrBluetooth !=\"ANO\")"
  },
  {
    "code": "BLESK1",
    "name": "Blesková výměna bez čekání",
    "price": "€20,41",
    "pairText": "BLESK1",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (( ( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) OR (category = \"Telefony\" OR category=\"Telefony, mobily\") ) AND ( CONTAINS(parametrTypproduktu, \"Repasovaný\"))))"
  },
  {
    "code": "BLESK2",
    "name": "Předinstalace programů",
    "price": "€26,55",
    "pairText": "BLESK2",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\"))) AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND (parametroptdisableupgradeblesk = \"false\") AND (CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\")) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") AND (parametrKapacitadisku = \"16 GB\" OR parametrKapacitadisku = \"32 GB\") )))"
  },
  {
    "code": "SERVIS006",
    "name": "Aplikace ochranného skla",
    "price": "€10,19",
    "pairText": "SERVIS006",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((category = \"Telefony\" OR CONTAINS(productCurrentCategory, \"Telefony\")) AND (productManufacturer = \"Apple\") AND ( CONTAINS(productName, \"iPhone\") OR CONTAINS(productCurrentCategory, \"iPhone\") )))"
  },
  {
    "code": "LIC0005",
    "name": "Office 2019 Pro Plus",
    "price": "€32,69",
    "pairText": "LIC0005",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") )))"
  },
  {
    "code": "LIC0004",
    "name": "Office 2021 Pro Plus",
    "price": "€52,77",
    "pairText": "LIC0004",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") )))"
  },
  {
    "code": "MAR0012",
    "name": "Windows 10 Home",
    "price": "€20,41",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrOperacnisystem, \"Windows 7 Home\")))"
  },
  {
    "code": "MAR0013",
    "name": "Windows 10 PRO",
    "price": "€20,41",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\")))"
  },
  {
    "code": "MAR0008",
    "name": "Windows 10 PRO",
    "price": "€36,78",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Ultimate\") OR CONTAINS(parametrOperacnisystem, \"Windows 10 Home\") )))"
  },
  {
    "code": "MAR0018",
    "name": "Windows 11 Home",
    "price": "€18,37",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND CONTAINS(parametrOperacnisystem, \"Windows 10 Home\")))"
  },
  {
    "code": "MAR0019",
    "name": "Windows 11 Home",
    "price": "€24,50",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") )))"
  },
  {
    "code": "MAR0020",
    "name": "Windows 11 PRO",
    "price": "€18,37",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND CONTAINS(parametrOperacnisystem, \"Windows 10 Pro\")))"
  },
  {
    "code": "MAR0021",
    "name": "Windows 11 PRO",
    "price": "€36,78",
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 10 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 11 Home\") )))"
  },
  {
    "code": "VRP0022",
    "name": "+ 2GB RAM",
    "price": "€22,46",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0024",
    "name": "+ 4GB RAM",
    "price": "€36,41",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0026",
    "name": "+ 8GB RAM",
    "price": "€65,04",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0020",
    "name": "+ 16GB RAM",
    "price": "€101,86",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0025",
    "name": "+ 4GB RAM",
    "price": "€36,41",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0027",
    "name": "+ 8GB RAM",
    "price": "€60,95",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0021",
    "name": "+ 16GB RAM",
    "price": "€101,86",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0034",
    "name": "+ 8GB RAM",
    "price": "€40,50",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0035",
    "name": "+ 16GB RAM",
    "price": "€73,23",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0036",
    "name": "+ 32GB RAM",
    "price": "€122,32",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0001",
    "name": "+ 2GB RAM",
    "price": "€22,46",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0002",
    "name": "+ 4GB RAM",
    "price": "€36,41",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0003",
    "name": "+ 8GB RAM",
    "price": "€73,23",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0004",
    "name": "+ 16GB RAM",
    "price": "€101,86",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\")))"
  },
  {
    "code": "VRP0006",
    "name": "+ 4GB RAM",
    "price": "€36,41",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0007",
    "name": "+ 8GB RAM",
    "price": "€73,23",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0008",
    "name": "+ 16GB RAM",
    "price": "€101,86",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\")))"
  },
  {
    "code": "VRP0031",
    "name": "+ 8GB RAM",
    "price": "€40,50",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0032",
    "name": "+ 16GB RAM",
    "price": "€77,32",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0033",
    "name": "+ 32GB RAM",
    "price": "€142,77",
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(RAMvylouceneCastiNazvu, NOT CONTAINS(productName, RAMvylouceneCastiNazvu)))  AND (category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\")))"
  },
  {
    "code": "VRP0028",
    "name": "SSD 240GB",
    "price": "€56,86",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (240 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0015",
    "name": "SSD 256GB",
    "price": "€69,13",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (256 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0029",
    "name": "SSD 480GB",
    "price": "€81,78",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (480 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0016",
    "name": "SSD 512GB",
    "price": "€77,32",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (512 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0017",
    "name": "SSD 1TB",
    "price": "€101,86",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (1000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0018",
    "name": "SSD 2TB",
    "price": "€150,95",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (2000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0019",
    "name": "SSD 4TB",
    "price": "€326,86",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT (category = \"Notebooky\" OR CONTAINS(productCurrentCategory,\"Notebooky\")) AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (4000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0009",
    "name": "HDD 320GB",
    "price": "€40,87",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (320 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0010",
    "name": "HDD 500GB",
    "price": "€65,41",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (500 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0011",
    "name": "HDD 1TB",
    "price": "€81,41",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (1000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0012",
    "name": "HDD 2TB",
    "price": "€122,32",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (2000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "VRP0013",
    "name": "HDD 4TB",
    "price": "€163,22",
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(currency=\"EUR\" AND (NOT (contains (productName, \"Chromebook\") OR contains (parametrOperacnisystem, \"Chrome\") OR contains (productName, \"Apple\") OR contains (productName, \"Macbook\") OR contains (productName, \"iMac\") OR parametrVyrobce = \"Apple\" OR contains(productCode,\"AIO\")))  AND (ALL(DISKvylouceneCastiNazvu, NOT CONTAINS(productName, DISKvylouceneCastiNazvu)))AND (((category = \"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (4000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\"))))))"
  },
  {
    "code": "ZAR2000DO2500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€10,19",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 81.82) AND (productPriceWithVat <= 102.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2500DO3000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€12,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 102.27) AND (productPriceWithVat <= 122.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3000DO3500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€14,28",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 122.72) AND (productPriceWithVat <= 143.18) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3500DO4000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€16,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 143.18) AND (productPriceWithVat <= 163.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4000DO4500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€18,37",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 163.63) AND (productPriceWithVat <= 184.09) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4500DO5000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€20,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 184.09) AND (productPriceWithVat <= 204.54) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5000DO5500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€22,46",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 204.54) AND (productPriceWithVat <= 224.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5500DO6000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€24,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 224.99) AND (productPriceWithVat <= 245.45) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6000DO6500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€26,55",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 245.45) AND (productPriceWithVat <= 265.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6500DO7000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€28,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 265.90) AND (productPriceWithVat <= 286.36) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7000DO7500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€30,64",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 286.36) AND (productPriceWithVat <= 306.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7500DO8000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€32,69",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 306.81) AND (productPriceWithVat <= 327.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8000DO8500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€34,73",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 327.27) AND (productPriceWithVat <= 347.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8500DO9000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€36,78",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 347.72) AND (productPriceWithVat <= 368.17) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9000DO9500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€38,82",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 368.17) AND (productPriceWithVat <= 388.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9500DO10000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€40,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 388.63) AND (productPriceWithVat <= 409.08) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR10000DO11000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€44,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 409.08) AND (productPriceWithVat <= 449.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR11000DO12000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€49,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 449.99) AND (productPriceWithVat <= 490.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR12000DO13000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€53,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 490.90) AND (productPriceWithVat <= 531.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR13000DO14000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€57,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 531.81) AND (productPriceWithVat <= 572.71) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR14000DO15000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€61,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 572.71) AND (productPriceWithVat <= 613.62) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR15000DO16000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€65,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 613.62) AND (productPriceWithVat <= 654.53) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR16000DO17000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€69,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 654.53) AND (productPriceWithVat <= 695.44) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR17000DO18000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€73,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 695.44) AND (productPriceWithVat <= 736.35) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR18000DO19000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€77,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 736.35) AND (productPriceWithVat <= 777.26) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR19000DO20000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€81,78",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 777.26) AND (productPriceWithVat <= 818.16) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR20000DO21000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€85,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 818.16) AND (productPriceWithVat <= 859.07) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR21000DO22000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€89,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 859.07) AND (productPriceWithVat <= 899.98) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR22000DO23000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€94,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 899.98) AND (productPriceWithVat <= 940.89) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR23000DO24000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€98,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 940.89) AND (productPriceWithVat <= 981.80) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR24000DO25000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€102,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 981.80) AND (productPriceWithVat <= 1022.70) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR25000DO26000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€106,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1022.70) AND (productPriceWithVat <= 1063.61) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR26000DO27000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€110,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1063.61) AND (productPriceWithVat <= 1104.52) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR27000DO28000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€114,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1104.52) AND (productPriceWithVat <= 1145.43) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR28000DO29000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€118,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1145.43) AND (productPriceWithVat <= 1186.34) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR29000DO30000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€122,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1186.34) AND (productPriceWithVat <= 1227.24) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR30000DO32000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€130,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1227.24) AND (productPriceWithVat <= 1309.06) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR32000DO34000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€139,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1309.06) AND (productPriceWithVat <= 1390.88) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR34000DO36000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€147,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1390.88) AND (productPriceWithVat <= 1472.69) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR36000DO38000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€155,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1472.69) AND (productPriceWithVat <= 1554.51) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR38000DO40000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€163,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1554.51) AND (productPriceWithVat <= 1636.33) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR40000DO42000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€171,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1636.33) AND (productPriceWithVat <= 1718.14) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR42000DO44000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€179,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1718.14) AND (productPriceWithVat <= 1799.96) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR44000DO46000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€188,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1799.96) AND (productPriceWithVat <= 1881.78) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR46000DO48000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€196,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1881.78) AND (productPriceWithVat <= 1963.59) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR48000DO50000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€204,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1963.59) AND (productPriceWithVat <= 2045.41) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR50000DO52000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€212,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2045.41) AND (productPriceWithVat <= 2127.22) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR52000DO54000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€220,86",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2127.22) AND (productPriceWithVat <= 2209.04) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR54000DO56000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€229,04",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2209.04) AND (productPriceWithVat <= 2290.86) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR56000DO58000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€237,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2290.86) AND (productPriceWithVat <= 2372.67) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR58000DO60000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€245,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2372.67) AND (productPriceWithVat <= 2454.49) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR60000DO62000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€253,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2454.49) AND (productPriceWithVat <= 2536.31) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR62000DO64000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€261,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2536.31) AND (productPriceWithVat <= 2618.12) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR64000DO66000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€269,95",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2618.12) AND (productPriceWithVat <= 2699.94) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR66000DO68000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€278,13",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2699.94) AND (productPriceWithVat <= 2781.75) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR68000DO70000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€286,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2781.75) AND (productPriceWithVat <= 2863.57) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2000DO2500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€15,30",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 81.82) AND (productPriceWithVat <= 102.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2500DO3000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€18,37",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 102.27) AND (productPriceWithVat <= 122.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3000DO3500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€21,44",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 122.72) AND (productPriceWithVat <= 143.18) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3500DO4000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€24,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 143.18) AND (productPriceWithVat <= 163.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4000DO4500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€27,57",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 163.63) AND (productPriceWithVat <= 184.09) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4500DO5000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€30,64",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 184.09) AND (productPriceWithVat <= 204.54) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5000DO5500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€33,71",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 204.54) AND (productPriceWithVat <= 224.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5500DO6000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€36,78",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 224.99) AND (productPriceWithVat <= 245.45) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6000DO6500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€39,84",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 245.45) AND (productPriceWithVat <= 265.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6500DO7000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€42,91",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 265.90) AND (productPriceWithVat <= 286.36) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7000DO7500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€45,98",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 286.36) AND (productPriceWithVat <= 306.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7500DO8000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€49,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 306.81) AND (productPriceWithVat <= 327.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8000DO8500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€52,12",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 327.27) AND (productPriceWithVat <= 347.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8500DO9000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€55,19",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 347.72) AND (productPriceWithVat <= 368.17) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9000DO9500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€58,25",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 368.17) AND (productPriceWithVat <= 388.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9500DO10000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€61,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 388.63) AND (productPriceWithVat <= 409.08) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR10000DO11000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€67,46",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 409.08) AND (productPriceWithVat <= 449.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR11000DO12000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€73,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 449.99) AND (productPriceWithVat <= 490.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR12000DO13000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€79,73",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 490.90) AND (productPriceWithVat <= 531.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR13000DO14000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€85,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 531.81) AND (productPriceWithVat <= 572.71) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR14000DO15000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€92",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 572.71) AND (productPriceWithVat <= 613.62) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR15000DO16000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€98,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 613.62) AND (productPriceWithVat <= 654.53) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR16000DO17000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€104,27",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 654.53) AND (productPriceWithVat <= 695.44) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR17000DO18000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€110,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 695.44) AND (productPriceWithVat <= 736.35) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR18000DO19000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€116,55",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 736.35) AND (productPriceWithVat <= 777.26) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR19000DO20000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€122,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 777.26) AND (productPriceWithVat <= 818.16) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR20000DO21000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€128,82",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 818.16) AND (productPriceWithVat <= 859.07) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR21000DO22000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€134,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 859.07) AND (productPriceWithVat <= 899.98) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR22000DO23000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€141,09",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 899.98) AND (productPriceWithVat <= 940.89) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR23000DO24000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€147,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 940.89) AND (productPriceWithVat <= 981.80) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR24000DO25000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€153,36",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 981.80) AND (productPriceWithVat <= 1022.70) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR25000DO26000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€159,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1022.70) AND (productPriceWithVat <= 1063.61) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR26000DO27000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€165,64",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1063.61) AND (productPriceWithVat <= 1104.52) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR27000DO28000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€171,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1104.52) AND (productPriceWithVat <= 1145.43) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR28000DO29000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€177,91",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1145.43) AND (productPriceWithVat <= 1186.34) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR29000DO30000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€184,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1186.34) AND (productPriceWithVat <= 1227.24) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR30000DO32000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€196,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1227.24) AND (productPriceWithVat <= 1309.06) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR32000DO34000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€208,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1309.06) AND (productPriceWithVat <= 1390.88) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR34000DO36000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€220,86",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1390.88) AND (productPriceWithVat <= 1472.69) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR36000DO38000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€233,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1472.69) AND (productPriceWithVat <= 1554.51) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR38000DO40000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€245,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1554.51) AND (productPriceWithVat <= 1636.33) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR40000DO42000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€257,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1636.33) AND (productPriceWithVat <= 1718.14) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR42000DO44000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€269,95",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1718.14) AND (productPriceWithVat <= 1799.96) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR44000DO46000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€282,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1799.96) AND (productPriceWithVat <= 1881.78) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR46000DO48000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€294,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1881.78) AND (productPriceWithVat <= 1963.59) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR48000DO50000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€306,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 1963.59) AND (productPriceWithVat <= 2045.41) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR50000DO52000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€319,04",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2045.41) AND (productPriceWithVat <= 2127.22) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR52000DO54000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€331,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2127.22) AND (productPriceWithVat <= 2209.04) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR54000DO56000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€343,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2209.04) AND (productPriceWithVat <= 2290.86) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR56000DO58000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€355,86",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2290.86) AND (productPriceWithVat <= 2372.67) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR58000DO60000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€368,13",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2372.67) AND (productPriceWithVat <= 2454.49) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR60000DO62000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€380,40",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2454.49) AND (productPriceWithVat <= 2536.31) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR62000DO64000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€392,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2536.31) AND (productPriceWithVat <= 2618.12) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR64000DO66000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€404,95",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2618.12) AND (productPriceWithVat <= 2699.94) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR66000DO68000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€417,22",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2699.94) AND (productPriceWithVat <= 2781.75) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR68000DO70000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€429,49",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND (category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat > 2781.75) AND (productPriceWithVat <= 2863.57) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu))))"
  }
];

window.additionalSaleCart = [
  {
    "code": "ZAR2000DO2500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "249 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2000) AND (row.priceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2500DO3000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2500) AND (row.priceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3000DO3500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "349 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3000) AND (row.priceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3500DO4000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3500) AND (row.priceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4000DO4500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "449 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4000) AND (row.priceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4500DO5000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4500) AND (row.priceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5000DO5500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "549 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5000) AND (row.priceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5500DO6000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5500) AND (row.priceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6000DO6500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "649 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6000) AND (row.priceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6500DO7000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6500) AND (row.priceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7000DO7500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "749 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7000) AND (row.priceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7500DO8000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7500) AND (row.priceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8000DO8500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "849 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8000) AND (row.priceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8500DO9000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8500) AND (row.priceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9000DO9500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "949 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9000) AND (row.priceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9500DO10000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9500) AND (row.priceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR10000DO11000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 10000) AND (row.priceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR11000DO12000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 11000) AND (row.priceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR12000DO13000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 12000) AND (row.priceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR13000DO14000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 13000) AND (row.priceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR14000DO15000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 14000) AND (row.priceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR15000DO16000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 15000) AND (row.priceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR16000DO17000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 16000) AND (row.priceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR17000DO18000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 17000) AND (row.priceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR18000DO19000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 18000) AND (row.priceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR19000DO20000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "1 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 19000) AND (row.priceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR20000DO21000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 20000) AND (row.priceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR21000DO22000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 21000) AND (row.priceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR22000DO23000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 22000) AND (row.priceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR23000DO24000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 23000) AND (row.priceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR24000DO25000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 24000) AND (row.priceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR25000DO26000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 25000) AND (row.priceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR26000DO27000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 26000) AND (row.priceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR27000DO28000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 27000) AND (row.priceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR28000DO29000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 28000) AND (row.priceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR29000DO30000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "2 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 29000) AND (row.priceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR30000DO32000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 30000) AND (row.priceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR32000DO34000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 32000) AND (row.priceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR34000DO36000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 34000) AND (row.priceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR36000DO38000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 36000) AND (row.priceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR38000DO40000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "3 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 38000) AND (row.priceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR40000DO42000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 40000) AND (row.priceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR42000DO44000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 42000) AND (row.priceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR44000DO46000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 44000) AND (row.priceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR46000DO48000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 46000) AND (row.priceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR48000DO50000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "4 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 48000) AND (row.priceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR50000DO52000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 50000) AND (row.priceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR52000DO54000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 52000) AND (row.priceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR54000DO56000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 54000) AND (row.priceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR56000DO58000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 56000) AND (row.priceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR58000DO60000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "5 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 58000) AND (row.priceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR60000DO62000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 60000) AND (row.priceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR62000DO64000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 62000) AND (row.priceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR64000DO66000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 64000) AND (row.priceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR66000DO68000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 66000) AND (row.priceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR68000DO70000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "6 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 68000) AND (row.priceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2000DO2500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "374 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2000) AND (row.priceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2500DO3000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "449 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2500) AND (row.priceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3000DO3500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "524 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3000) AND (row.priceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3500DO4000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3500) AND (row.priceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4000DO4500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "674 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4000) AND (row.priceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4500DO5000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "749 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4500) AND (row.priceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5000DO5500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "824 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5000) AND (row.priceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5500DO6000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5500) AND (row.priceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6000DO6500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "974 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6000) AND (row.priceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6500DO7000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 049 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6500) AND (row.priceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7000DO7500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 124 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7000) AND (row.priceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7500DO8000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7500) AND (row.priceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8000DO8500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 274 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8000) AND (row.priceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8500DO9000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 349 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8500) AND (row.priceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9000DO9500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 424 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9000) AND (row.priceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9500DO10000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9500) AND (row.priceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR10000DO11000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 649 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 10000) AND (row.priceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR11000DO12000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 11000) AND (row.priceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR12000DO13000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "1 949 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 12000) AND (row.priceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR13000DO14000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 13000) AND (row.priceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR14000DO15000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 249 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 14000) AND (row.priceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR15000DO16000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 15000) AND (row.priceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR16000DO17000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 549 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 16000) AND (row.priceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR17000DO18000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 17000) AND (row.priceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR18000DO19000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 849 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 18000) AND (row.priceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR19000DO20000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "2 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 19000) AND (row.priceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR20000DO21000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 149 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 20000) AND (row.priceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR21000DO22000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 21000) AND (row.priceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR22000DO23000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 449 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 22000) AND (row.priceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR23000DO24000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 23000) AND (row.priceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR24000DO25000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 749 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 24000) AND (row.priceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR25000DO26000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "3 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 25000) AND (row.priceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR26000DO27000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 049 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 26000) AND (row.priceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR27000DO28000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 27000) AND (row.priceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR28000DO29000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 349 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 28000) AND (row.priceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR29000DO30000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 29000) AND (row.priceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR30000DO32000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "4 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 30000) AND (row.priceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR32000DO34000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 32000) AND (row.priceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR34000DO36000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 34000) AND (row.priceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR36000DO38000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 36000) AND (row.priceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR38000DO40000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "5 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 38000) AND (row.priceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR40000DO42000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "6 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 40000) AND (row.priceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR42000DO44000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "6 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 42000) AND (row.priceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR44000DO46000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "6 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 44000) AND (row.priceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR46000DO48000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "7 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 46000) AND (row.priceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR48000DO50000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "7 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 48000) AND (row.priceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR50000DO52000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "7 799 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 50000) AND (row.priceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR52000DO54000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 099 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 52000) AND (row.priceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR54000DO56000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 399 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 54000) AND (row.priceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR56000DO58000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 699 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 56000) AND (row.priceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR58000DO60000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "8 999 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 58000) AND (row.priceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR60000DO62000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "9 299 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 60000) AND (row.priceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR62000DO64000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "9 599 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 62000) AND (row.priceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR64000DO66000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "9 899 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 64000) AND (row.priceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR66000DO68000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "10 199 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 66000) AND (row.priceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR68000DO70000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "10 499 Kč",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"CZK\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 68000) AND (row.priceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2000DO2500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€10,19",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 81.82) AND (row.priceWithVat <= 102.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2500DO3000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€12,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 102.27) AND (row.priceWithVat <= 122.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3000DO3500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€14,28",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 122.72) AND (row.priceWithVat <= 143.18) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3500DO4000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€16,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 143.18) AND (row.priceWithVat <= 163.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4000DO4500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€18,37",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 163.63) AND (row.priceWithVat <= 184.09) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4500DO5000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€20,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 184.09) AND (row.priceWithVat <= 204.54) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5000DO5500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€22,46",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 204.54) AND (row.priceWithVat <= 224.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5500DO6000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€24,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 224.99) AND (row.priceWithVat <= 245.45) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6000DO6500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€26,55",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 245.45) AND (row.priceWithVat <= 265.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6500DO7000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€28,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 265.90) AND (row.priceWithVat <= 286.36) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7000DO7500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€30,64",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 286.36) AND (row.priceWithVat <= 306.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7500DO8000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€32,69",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 306.81) AND (row.priceWithVat <= 327.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8000DO8500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€34,73",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 327.27) AND (row.priceWithVat <= 347.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8500DO9000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€36,78",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 347.72) AND (row.priceWithVat <= 368.17) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9000DO9500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€38,82",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 368.17) AND (row.priceWithVat <= 388.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9500DO10000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€40,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 388.63) AND (row.priceWithVat <= 409.08) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR10000DO11000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€44,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 409.08) AND (row.priceWithVat <= 449.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR11000DO12000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€49,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 449.99) AND (row.priceWithVat <= 490.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR12000DO13000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€53,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 490.90) AND (row.priceWithVat <= 531.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR13000DO14000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€57,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 531.81) AND (row.priceWithVat <= 572.71) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR14000DO15000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€61,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 572.71) AND (row.priceWithVat <= 613.62) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR15000DO16000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€65,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 613.62) AND (row.priceWithVat <= 654.53) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR16000DO17000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€69,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 654.53) AND (row.priceWithVat <= 695.44) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR17000DO18000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€73,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 695.44) AND (row.priceWithVat <= 736.35) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR18000DO19000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€77,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 736.35) AND (row.priceWithVat <= 777.26) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR19000DO20000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€81,78",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 777.26) AND (row.priceWithVat <= 818.16) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR20000DO21000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€85,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 818.16) AND (row.priceWithVat <= 859.07) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR21000DO22000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€89,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 859.07) AND (row.priceWithVat <= 899.98) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR22000DO23000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€94,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 899.98) AND (row.priceWithVat <= 940.89) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR23000DO24000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€98,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 940.89) AND (row.priceWithVat <= 981.80) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR24000DO25000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€102,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 981.80) AND (row.priceWithVat <= 1022.70) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR25000DO26000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€106,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1022.70) AND (row.priceWithVat <= 1063.61) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR26000DO27000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€110,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1063.61) AND (row.priceWithVat <= 1104.52) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR27000DO28000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€114,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1104.52) AND (row.priceWithVat <= 1145.43) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR28000DO29000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€118,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1145.43) AND (row.priceWithVat <= 1186.34) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR29000DO30000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€122,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1186.34) AND (row.priceWithVat <= 1227.24) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR30000DO32000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€130,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1227.24) AND (row.priceWithVat <= 1309.06) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR32000DO34000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€139,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1309.06) AND (row.priceWithVat <= 1390.88) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR34000DO36000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€147,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1390.88) AND (row.priceWithVat <= 1472.69) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR36000DO38000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€155,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1472.69) AND (row.priceWithVat <= 1554.51) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR38000DO40000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€163,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1554.51) AND (row.priceWithVat <= 1636.33) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR40000DO42000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€171,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1636.33) AND (row.priceWithVat <= 1718.14) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR42000DO44000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€179,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1718.14) AND (row.priceWithVat <= 1799.96) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR44000DO46000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€188,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1799.96) AND (row.priceWithVat <= 1881.78) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR46000DO48000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€196,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1881.78) AND (row.priceWithVat <= 1963.59) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR48000DO50000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€204,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1963.59) AND (row.priceWithVat <= 2045.41) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR50000DO52000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€212,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2045.41) AND (row.priceWithVat <= 2127.22) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR52000DO54000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€220,86",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2127.22) AND (row.priceWithVat <= 2209.04) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR54000DO56000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€229,04",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2209.04) AND (row.priceWithVat <= 2290.86) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR56000DO58000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€237,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2290.86) AND (row.priceWithVat <= 2372.67) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR58000DO60000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€245,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2372.67) AND (row.priceWithVat <= 2454.49) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR60000DO62000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€253,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2454.49) AND (row.priceWithVat <= 2536.31) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR62000DO64000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€261,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2536.31) AND (row.priceWithVat <= 2618.12) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR64000DO66000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€269,95",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2618.12) AND (row.priceWithVat <= 2699.94) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR66000DO68000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€278,13",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2699.94) AND (row.priceWithVat <= 2781.75) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR68000DO70000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": "€286,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2781.75) AND (row.priceWithVat <= 2863.57) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2000DO2500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€15,30",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 81.82) AND (row.priceWithVat <= 102.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR2500DO3000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€18,37",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 102.27) AND (row.priceWithVat <= 122.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3000DO3500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€21,44",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 122.72) AND (row.priceWithVat <= 143.18) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR3500DO4000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€24,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 143.18) AND (row.priceWithVat <= 163.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4000DO4500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€27,57",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 163.63) AND (row.priceWithVat <= 184.09) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR4500DO5000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€30,64",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 184.09) AND (row.priceWithVat <= 204.54) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5000DO5500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€33,71",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 204.54) AND (row.priceWithVat <= 224.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR5500DO6000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€36,78",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 224.99) AND (row.priceWithVat <= 245.45) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6000DO6500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€39,84",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 245.45) AND (row.priceWithVat <= 265.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR6500DO7000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€42,91",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 265.90) AND (row.priceWithVat <= 286.36) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7000DO7500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€45,98",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 286.36) AND (row.priceWithVat <= 306.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR7500DO8000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€49,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 306.81) AND (row.priceWithVat <= 327.27) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8000DO8500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€52,12",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 327.27) AND (row.priceWithVat <= 347.72) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR8500DO9000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€55,19",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 347.72) AND (row.priceWithVat <= 368.17) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9000DO9500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€58,25",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 368.17) AND (row.priceWithVat <= 388.63) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR9500DO10000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€61,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 388.63) AND (row.priceWithVat <= 409.08) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR10000DO11000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€67,46",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 409.08) AND (row.priceWithVat <= 449.99) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR11000DO12000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€73,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 449.99) AND (row.priceWithVat <= 490.90) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR12000DO13000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€79,73",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 490.90) AND (row.priceWithVat <= 531.81) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR13000DO14000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€85,87",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 531.81) AND (row.priceWithVat <= 572.71) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR14000DO15000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€92",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 572.71) AND (row.priceWithVat <= 613.62) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR15000DO16000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€98,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 613.62) AND (row.priceWithVat <= 654.53) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR16000DO17000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€104,27",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 654.53) AND (row.priceWithVat <= 695.44) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR17000DO18000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€110,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 695.44) AND (row.priceWithVat <= 736.35) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR18000DO19000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€116,55",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 736.35) AND (row.priceWithVat <= 777.26) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR19000DO20000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€122,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 777.26) AND (row.priceWithVat <= 818.16) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR20000DO21000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€128,82",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 818.16) AND (row.priceWithVat <= 859.07) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR21000DO22000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€134,96",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 859.07) AND (row.priceWithVat <= 899.98) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR22000DO23000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€141,09",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 899.98) AND (row.priceWithVat <= 940.89) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR23000DO24000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€147,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 940.89) AND (row.priceWithVat <= 981.80) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR24000DO25000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€153,36",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 981.80) AND (row.priceWithVat <= 1022.70) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR25000DO26000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€159,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1022.70) AND (row.priceWithVat <= 1063.61) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR26000DO27000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€165,64",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1063.61) AND (row.priceWithVat <= 1104.52) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR27000DO28000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€171,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1104.52) AND (row.priceWithVat <= 1145.43) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR28000DO29000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€177,91",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1145.43) AND (row.priceWithVat <= 1186.34) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR29000DO30000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€184,05",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1186.34) AND (row.priceWithVat <= 1227.24) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR30000DO32000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€196,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1227.24) AND (row.priceWithVat <= 1309.06) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR32000DO34000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€208,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1309.06) AND (row.priceWithVat <= 1390.88) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR34000DO36000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€220,86",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1390.88) AND (row.priceWithVat <= 1472.69) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR36000DO38000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€233,14",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1472.69) AND (row.priceWithVat <= 1554.51) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR38000DO40000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€245,41",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1554.51) AND (row.priceWithVat <= 1636.33) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR40000DO42000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€257,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1636.33) AND (row.priceWithVat <= 1718.14) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR42000DO44000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€269,95",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1718.14) AND (row.priceWithVat <= 1799.96) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR44000DO46000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€282,23",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1799.96) AND (row.priceWithVat <= 1881.78) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR46000DO48000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€294,50",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1881.78) AND (row.priceWithVat <= 1963.59) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR48000DO50000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€306,77",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 1963.59) AND (row.priceWithVat <= 2045.41) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR50000DO52000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€319,04",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2045.41) AND (row.priceWithVat <= 2127.22) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR52000DO54000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€331,32",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2127.22) AND (row.priceWithVat <= 2209.04) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR54000DO56000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€343,59",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2209.04) AND (row.priceWithVat <= 2290.86) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR56000DO58000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€355,86",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2290.86) AND (row.priceWithVat <= 2372.67) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR58000DO60000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€368,13",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2372.67) AND (row.priceWithVat <= 2454.49) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR60000DO62000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€380,40",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2454.49) AND (row.priceWithVat <= 2536.31) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR62000DO64000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€392,68",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2536.31) AND (row.priceWithVat <= 2618.12) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR64000DO66000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€404,95",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2618.12) AND (row.priceWithVat <= 2699.94) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR66000DO68000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€417,22",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2699.94) AND (row.priceWithVat <= 2781.75) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  },
  {
    "code": "ZAR68000DO70000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": "€429,49",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(currency=\"EUR\" AND ((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2781.75) AND (row.priceWithVat <= 2863.57) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu)))))"
  }
];

window.LadzoSklad = {
  "LIC0004": true,
  "LIC0005": true,
  "LIC0010": true
};

window.expedice = {
  "zobrazit": false,
  "test": false,
  "cas_expedice": "14:00",
  "statni_svatky": [
    "1.1.",
    "1.5.",
    "8.5.",
    "5.7.",
    "6.7.",
    "28.9.",
    "28.10.",
    "17.11.",
    "24.12.",
    "25.12.",
    "26.12.",
    "31.12."
  ],
  "velikonocni_pondeli": [
    "21.04.2025",
    "06.04.2026",
    "29.03.2027",
    "17.04.2028",
    "02.04.2029",
    "22.04.2030",
    "14.04.2031",
    "29.03.2032",
    "18.04.2033",
    "10.04.2034"
  ]
};

window.shippingHideRules = [
  {
    "shippingIds": [
      29,
      104
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      37,
      112
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [],
    "startsWithUrl": [],
    "containsName": []
  },
  {
    "shippingIds": [
      65,
      140
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      48,
      123
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/pocitace/",
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "AiO"
    ]
  },
  {
    "shippingIds": [
      362,
      404
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      389,
      437
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      395,
      428
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      455,
      425
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      371,
      413
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [],
    "startsWithUrl": [],
    "containsName": []
  },
  {
    "shippingIds": [
      380,
      419
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [],
    "startsWithUrl": [],
    "containsName": []
  },
  {
    "shippingIds": [
      374,
      661
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
    ]
  },
  {
    "shippingIds": [
      365,
      407
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO"
    ],
    "startsWithUrl": [
      "/pocitace/",
      "/monitory/",
      "/tiskarny/"
    ],
    "containsName": [
      "AIO",
      "AiO"
    ]
  }
];

window.odpocetHome = {
  "zobrazit": true,
  "test": false
};

window.akcniProduktyLevySloupec = {
  "zobrazit": false,
  "test": false
};

window.navstivene = {
  "zobrazit": false,
  "test": false
};

window.dvojbalikyNechat = {
  "dvojbaliky": true,
  "maloobchod": [
    240,
    280,
    222,
    259,
    446,
    380,
    458,
    395,
    455
  ],
  "velkoobchod": [
    262,
    271,
    274,
    277,
    416,
    419,
    425,
    428,
    431
  ]
};

