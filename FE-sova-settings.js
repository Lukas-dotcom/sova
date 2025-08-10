window.injectFunctions = [
  {
    "function": "additionalSale",
    "pageType": "productDetail"
  },
  {
    "function": "deliveryOptions",
    "pageType": "billingAndShipping"
  },
  {
    "function": "additionalSaleCart",
    "pageType": "cart"
  },
  {
    "function": "testovaciInjectFunction",
    "parameters": "(\"produkt \" & productName & \" je dražší než 250\")",
    "pageType": "productDetail",
    "conditionsSOVAL": "productPriceWithVat>250"
  },
  {
    "function": "testovaciInjectFunction",
    "parameters": "(\"ano je to \" & productName)",
    "url": "/unisex-hodinky-nature/"
  },
  {
    "function": "testovaciInjectFunction",
    "parameters": "(\"Do domácnosti\")",
    "pageType": "productDetail",
    "conditionsSOVAL": "contains(productCurrentCategory, \"Do domácnosti\")"
  }
];

window.injectVariables = {
  "zarVylouceneCastiNazvu": [
    "Z Fold",
    "Z Flip",
    "Fujitsu H760",
    "H770"
  ],
  "jednoduchaPromenna": "XY",
  "tabulka": [
    "{\n        \"code\": \"NTB00002506\"",
    "guid\": \"4ca69a40-6c60-11f0-a623-52b9de8b4ac3",
    "\"priceId\": 193651",
    "\"quantity\": 1",
    "\"priceWithVat\": 48783",
    "\"priceWithoutDiscount\": 69999",
    "itemId\": \"6896294f8870b",
    "name\": \"MSI Stealth 16 MercedesAMG A1VGG-260UK",
    "\"weight\": 0\n    }",
    "{\n        \"code\": \"BAG0175\"",
    "guid\": \"f4640c6c-052a-11ee-b9ba-4a3f42c5eb17",
    "\"priceId\": 164094",
    "\"quantity\": 1",
    "\"priceWithVat\": 406",
    "\"priceWithoutDiscount\": 399",
    "itemId\": \"6896295bed325",
    "\"name\": \"Batoh na notebook 15",
    "6'' Casual lightweight - Denim\"",
    "\"weight\": 0\n    }",
    "{\n        \"code\": \"LIC0004\"",
    "guid\": \"7eab77fc-65d5-11ed-9b08-ecf4bbd76e50",
    "\"priceId\": 150258",
    "\"quantity\": 1",
    "\"priceWithVat\": 1311",
    "\"priceWithoutDiscount\": 8999",
    "itemId\": \"689793e12157d",
    "name\": \"Microsoft Office 2021 Professional PLUS  Druhotná elektronická licence",
    "\"weight\": 0.01\n    }"
  ],
  "objekt": "    {\n        \"code\": \"LIC0004\",\n        \"guid\": \"7eab77fc-65d5-11ed-9b08-ecf4bbd76e50\",\n        \"priceId\": 150258,\n        \"quantity\": 1,\n        \"priceWithVat\": 1311,\n        \"priceWithoutDiscount\": 8999,\n        \"itemId\": \"689793e12157d\",\n        \"name\": \"Microsoft Office 2021 Professional PLUS  Druhotná elektronická licence\",\n        \"weight\": 0.01\n    }"
};

window.additionalSale = [
  {
    "code": "BLESK1",
    "name": "Blesková výměna zboží",
    "price": 499,
    "pairText": "BLESK1",
    "type": "checkbox",
    "SOVAL": "(( ( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) OR (category = \"Telefony\" OR CONTAINS(productCurrentCategory, \"Telefony\")) ) AND (parametroptdisableupgradechange = \"false\") AND ( CONTAINS(parametrTypproduktu, \"Repasovaný\") OR (category = \"Telefony\" OR CONTAINS(productCurrentCategory, \"Telefony\")) ))"
  },
  {
    "code": "BLESK2",
    "name": "Balíček aplikací – Spusť a pracuj",
    "price": 649,
    "pairText": "BLESK2",
    "type": "checkbox",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND (parametroptdisableupgradeblesk = \"false\") AND (CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\")) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") AND (parametrKapacitadisku = \"16 GB\" OR parametrKapacitadisku = \"32 GB\") ))"
  },
  {
    "code": "SERVIS006",
    "name": "Aplikace ochranného skla",
    "price": 249,
    "pairText": "SERVIS006",
    "type": "checkbox",
    "SOVAL": "((category = \"Telefony\" OR CONTAINS(productCurrentCategory, \"Telefony\")) AND (productManufacturer = \"Apple\") AND ( CONTAINS(productName, \"iPhone\") OR CONTAINS(productCurrentCategory, \"iPhone\") ))"
  },
  {
    "code": "LIC0005",
    "name": "Office 2019 Pro Plus (druhotná licence)",
    "price": 799,
    "pairText": "LIC0005",
    "type": "checkbox",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ))"
  },
  {
    "code": "LIC0004",
    "name": "Office 2021 Pro Plus (druhotná licence)",
    "price": 1290,
    "pairText": "LIC0004",
    "type": "checkbox",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ))"
  },
  {
    "code": "MAR0012",
    "name": "Windows 10 Home CZ",
    "price": 499,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrOperacnisystem, \"Windows 7 Home\"))"
  },
  {
    "code": "MAR0013",
    "name": "Windows 10 PRO CZ",
    "price": 499,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\"))"
  },
  {
    "code": "MAR0008",
    "name": "Windows 10 PRO MAR",
    "price": 899,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Ultimate\") OR CONTAINS(parametrOperacnisystem, \"Windows 10 Home\") ))"
  },
  {
    "code": "MAR0018",
    "name": "Windows 11 Home CZ",
    "price": 449,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND CONTAINS(parametrOperacnisystem, \"Windows 10 Home\"))"
  },
  {
    "code": "MAR0019",
    "name": "Windows 11 Home MAR",
    "price": 599,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") ))"
  },
  {
    "code": "MAR0020",
    "name": "Windows 11 PRO CZ",
    "price": 449,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND CONTAINS(parametrOperacnisystem, \"Windows 10 Pro\"))"
  },
  {
    "code": "MAR0021",
    "name": "Windows 11 PRO MAR",
    "price": 899,
    "pairText": "Lepší Windows",
    "type": "select",
    "SOVAL": "(( (category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory, \"Notebooky\") OR CONTAINS(productCurrentCategory, \"Počítače\") ) AND ( CONTAINS(parametrOperacnisystem, \"Windows\") OR CONTAINS(parametrSystem, \"WINDOWS\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND (parametroptpossiblew11 = \"true\") AND ( CONTAINS(parametrOperacnisystem, \"Windows 7 Pro\") OR CONTAINS(parametrOperacnisystem, \"Windows 7 Home\") OR CONTAINS(parametrOperacnisystem, \"Windows 11 Home\") ))"
  },
  {
    "code": "VRP0022",
    "name": "+ 2GB RAM (PC DDR3)",
    "price": 549,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0024",
    "name": "+ 4GB RAM (PC DDR3)",
    "price": 890,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0026",
    "name": "+ 8GB RAM (PC DDR3)",
    "price": 1590,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0020",
    "name": "+ 16GB RAM (PC DDR3)",
    "price": 2490,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0025",
    "name": "+ 4GB RAM (PC DDR4)",
    "price": 890,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\"))"
  },
  {
    "code": "VRP0027",
    "name": "+ 8GB RAM (PC DDR4)",
    "price": 1490,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\"))"
  },
  {
    "code": "VRP0021",
    "name": "+ 16GB RAM (PC DDR4)",
    "price": 2490,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\"))"
  },
  {
    "code": "VRP0034",
    "name": "+ 8GB RAM (PC DDR5)",
    "price": 990,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\"))"
  },
  {
    "code": "VRP0035",
    "name": "+ 16GB RAM (PC DDR5)",
    "price": 1790,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\"))"
  },
  {
    "code": "VRP0036",
    "name": "+ 32GB RAM (PC DDR5)",
    "price": 2990,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Počítače\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\"))"
  },
  {
    "code": "VRP0001",
    "name": "+ 2GB RAM (NB DDR3)",
    "price": 549,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0002",
    "name": "+ 4GB RAM (NB DDR3)",
    "price": 890,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0003",
    "name": "+ 8GB RAM (NB DDR3)",
    "price": 1790,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0004",
    "name": "+ 16GB RAM (NB DDR3)",
    "price": 2490,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR3\"))"
  },
  {
    "code": "VRP0006",
    "name": "+ 4GB RAM (NB DDR4)",
    "price": 890,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\"))"
  },
  {
    "code": "VRP0007",
    "name": "+ 8GB RAM (NB DDR4)",
    "price": 1790,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\"))"
  },
  {
    "code": "VRP0008",
    "name": "+ 16GB RAM (NB DDR4)",
    "price": 2490,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR4\"))"
  },
  {
    "code": "VRP0031",
    "name": "+ 8GB RAM (NB DDR5)",
    "price": 990,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\"))"
  },
  {
    "code": "VRP0032",
    "name": "+ 16GB RAM (NB DDR5)",
    "price": 1890,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\"))"
  },
  {
    "code": "VRP0033",
    "name": "+ 32GB RAM (NB DDR5)",
    "price": 3490,
    "pairText": "Rozšíření RAM",
    "type": "select",
    "SOVAL": "(category = \"Notebooky\" AND (parametroptdisableupgraderam = \"false\") AND NOT ( CONTAINS(productName, \"All in One\") ) AND NOT ( CONTAINS(parametrTypdisku, \"eMMC\") ) AND CONTAINS(parametrTypoperacnipameti, \"DDR5\"))"
  },
  {
    "code": "VRP0028",
    "name": "SSD 240GB",
    "price": 1390,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (240 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0015",
    "name": "SSD 256GB",
    "price": 1690,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (256 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0029",
    "name": "SSD 480GB",
    "price": 1999,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (480 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0016",
    "name": "SSD 512GB",
    "price": 1890,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (512 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0017",
    "name": "SSD 1TB",
    "price": 2490,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (1000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0018",
    "name": "SSD 2TB",
    "price": 3690,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (2000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0019",
    "name": "SSD 4TB",
    "price": 7990,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT (category = \"Notebooky\" OR CONTAINS(productCurrentCategory,\"Notebooky\")) AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR CONTAINS(parametrTypdisku,\"HDD\") OR (4000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0009",
    "name": "HDD 320GB",
    "price": 999,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (320 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0010",
    "name": "HDD 500GB",
    "price": 1599,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (500 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0011",
    "name": "HDD 1TB",
    "price": 1990,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (1000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0012",
    "name": "HDD 2TB",
    "price": 2990,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Notebooky\" OR category = \"Počítače\") OR CONTAINS(productCurrentCategory,\"Notebooky\") OR CONTAINS(productCurrentCategory,\"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (2000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "VRP0013",
    "name": "HDD 4TB",
    "price": 3990,
    "pairText": "Výměna disku",
    "type": "select",
    "SOVAL": "(((category = \"Počítače\")) AND (parametroptdisableupgradedisc = \"false\") AND NOT CONTAINS(productName,\"All in One\") AND NOT CONTAINS(parametrTypdisku,\"eMMC\") AND (CONTAINS(parametrKapacitadisku,\"+\") OR (regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\") = \"\") OR (4000 > if(CONTAINS(parametrKapacitadisku,\"TB\"), regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")*1000, regexextract(parametrKapacitadisku,\"([0-9]+(?:[.,][0-9]+)?)\")))))"
  },
  {
    "code": "ZAR2000DO2500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 249,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 2000) AND (productPriceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR2500DO3000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 2500) AND (productPriceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR3000DO3500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 349,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 3000) AND (productPriceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR3500DO4000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 3500) AND (productPriceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR4000DO4500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 449,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 4000) AND (productPriceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR4500DO5000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 4500) AND (productPriceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR5000DO5500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 549,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 5000) AND (productPriceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR5500DO6000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 5500) AND (productPriceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR6000DO6500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 649,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 6000) AND (productPriceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR6500DO7000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 6500) AND (productPriceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR7000DO7500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 749,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 7000) AND (productPriceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR7500DO8000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 7500) AND (productPriceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR8000DO8500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 849,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 8000) AND (productPriceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR8500DO9000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 8500) AND (productPriceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR9000DO9500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 949,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 9000) AND (productPriceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR9500DO10000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 9500) AND (productPriceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR10000DO11000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 10000) AND (productPriceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR11000DO12000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 11000) AND (productPriceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR12000DO13000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 12000) AND (productPriceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR13000DO14000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 13000) AND (productPriceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR14000DO15000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 14000) AND (productPriceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR15000DO16000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 15000) AND (productPriceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR16000DO17000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 16000) AND (productPriceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR17000DO18000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 17000) AND (productPriceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR18000DO19000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 18000) AND (productPriceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR19000DO20000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 19000) AND (productPriceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR20000DO21000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 20000) AND (productPriceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR21000DO22000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 21000) AND (productPriceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR22000DO23000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 22000) AND (productPriceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR23000DO24000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 23000) AND (productPriceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR24000DO25000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 24000) AND (productPriceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR25000DO26000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 25000) AND (productPriceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR26000DO27000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 26000) AND (productPriceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR27000DO28000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 27000) AND (productPriceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR28000DO29000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 28000) AND (productPriceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR29000DO30000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 29000) AND (productPriceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR30000DO32000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 30000) AND (productPriceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR32000DO34000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 32000) AND (productPriceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR34000DO36000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 34000) AND (productPriceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR36000DO38000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 36000) AND (productPriceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR38000DO40000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 38000) AND (productPriceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR40000DO42000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 40000) AND (productPriceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR42000DO44000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 42000) AND (productPriceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR44000DO46000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 44000) AND (productPriceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR46000DO48000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 46000) AND (productPriceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR48000DO50000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 48000) AND (productPriceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR50000DO52000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 50000) AND (productPriceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR52000DO54000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 52000) AND (productPriceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR54000DO56000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 54000) AND (productPriceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR56000DO58000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 56000) AND (productPriceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR58000DO60000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 58000) AND (productPriceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR60000DO62000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 60000) AND (productPriceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR62000DO64000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 62000) AND (productPriceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR64000DO66000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 64000) AND (productPriceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR66000DO68000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 66000) AND (productPriceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR68000DO70000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 68000) AND (productPriceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR2000DO2500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 374,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 2000) AND (productPriceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR2500DO3000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 449,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 2500) AND (productPriceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR3000DO3500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 524,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 3000) AND (productPriceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR3500DO4000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 3500) AND (productPriceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR4000DO4500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 674,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 4000) AND (productPriceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR4500DO5000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 749,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 4500) AND (productPriceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR5000DO5500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 824,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 5000) AND (productPriceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR5500DO6000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 5500) AND (productPriceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR6000DO6500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 974,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 6000) AND (productPriceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR6500DO7000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1049,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 6500) AND (productPriceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR7000DO7500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1124,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 7000) AND (productPriceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR7500DO8000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 7500) AND (productPriceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR8000DO8500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1274,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 8000) AND (productPriceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR8500DO9000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1349,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 8500) AND (productPriceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR9000DO9500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1424,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 9000) AND (productPriceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR9500DO10000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 9500) AND (productPriceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR10000DO11000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1649,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 10000) AND (productPriceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR11000DO12000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 11000) AND (productPriceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR12000DO13000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1949,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 12000) AND (productPriceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR13000DO14000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 13000) AND (productPriceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR14000DO15000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2249,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 14000) AND (productPriceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR15000DO16000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 15000) AND (productPriceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR16000DO17000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2549,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 16000) AND (productPriceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR17000DO18000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 17000) AND (productPriceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR18000DO19000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2849,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 18000) AND (productPriceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR19000DO20000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 19000) AND (productPriceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR20000DO21000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3149,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 20000) AND (productPriceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR21000DO22000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 21000) AND (productPriceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR22000DO23000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3449,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 22000) AND (productPriceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR23000DO24000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 23000) AND (productPriceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR24000DO25000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3749,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 24000) AND (productPriceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR25000DO26000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 25000) AND (productPriceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR26000DO27000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4049,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 26000) AND (productPriceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR27000DO28000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 27000) AND (productPriceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR28000DO29000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4349,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 28000) AND (productPriceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR29000DO30000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 29000) AND (productPriceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR30000DO32000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 30000) AND (productPriceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR32000DO34000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 32000) AND (productPriceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR34000DO36000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 34000) AND (productPriceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR36000DO38000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 36000) AND (productPriceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR38000DO40000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 38000) AND (productPriceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR40000DO42000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 6299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 40000) AND (productPriceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR42000DO44000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 6599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 42000) AND (productPriceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR44000DO46000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 6899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 44000) AND (productPriceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR46000DO48000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 7199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 46000) AND (productPriceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR48000DO50000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 7499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 48000) AND (productPriceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR50000DO52000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 7799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 50000) AND (productPriceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR52000DO54000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 52000) AND (productPriceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR54000DO56000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 54000) AND (productPriceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR56000DO58000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 56000) AND (productPriceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR58000DO60000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 58000) AND (productPriceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR60000DO62000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 9299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 60000) AND (productPriceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR62000DO64000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 9599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 62000) AND (productPriceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR64000DO66000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 9899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 64000) AND (productPriceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR66000DO68000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 10199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 66000) AND (productPriceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZAR68000DO70000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 10499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefony, mobily\" OR category=\"Tablety\") AND (productPriceWithVat > 68000) AND (productPriceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  }
];

window.additionalSaleCart = [
  {
    "code": "ZAR2000DO2500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 249,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2000) AND (row.priceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2500DO3000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2500) AND (row.priceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3000DO3500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 349,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3000) AND (row.priceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3500DO4000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3500) AND (row.priceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4000DO4500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 449,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4000) AND (row.priceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4500DO5000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4500) AND (row.priceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5000DO5500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 549,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5000) AND (row.priceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5500DO6000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5500) AND (row.priceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6000DO6500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 649,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6000) AND (row.priceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6500DO7000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6500) AND (row.priceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7000DO7500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 749,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7000) AND (row.priceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7500DO8000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7500) AND (row.priceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8000DO8500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 849,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8000) AND (row.priceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8500DO9000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8500) AND (row.priceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9000DO9500R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 949,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9000) AND (row.priceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9500DO10000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9500) AND (row.priceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR10000DO11000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 10000) AND (row.priceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR11000DO12000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 11000) AND (row.priceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR12000DO13000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 12000) AND (row.priceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR13000DO14000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 13000) AND (row.priceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR14000DO15000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 14000) AND (row.priceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR15000DO16000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 15000) AND (row.priceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR16000DO17000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 16000) AND (row.priceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR17000DO18000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 17000) AND (row.priceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR18000DO19000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 18000) AND (row.priceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR19000DO20000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 1999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 19000) AND (row.priceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR20000DO21000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 20000) AND (row.priceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR21000DO22000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 21000) AND (row.priceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR22000DO23000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 22000) AND (row.priceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR23000DO24000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 23000) AND (row.priceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR24000DO25000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 24000) AND (row.priceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR25000DO26000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 25000) AND (row.priceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR26000DO27000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 26000) AND (row.priceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR27000DO28000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 27000) AND (row.priceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR28000DO29000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 28000) AND (row.priceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR29000DO30000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 2999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 29000) AND (row.priceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR30000DO32000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 30000) AND (row.priceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR32000DO34000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 32000) AND (row.priceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR34000DO36000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 34000) AND (row.priceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR36000DO38000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 36000) AND (row.priceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR38000DO40000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 3999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 38000) AND (row.priceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR40000DO42000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 40000) AND (row.priceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR42000DO44000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 42000) AND (row.priceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR44000DO46000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 44000) AND (row.priceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR46000DO48000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 46000) AND (row.priceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR48000DO50000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 4999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 48000) AND (row.priceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR50000DO52000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 50000) AND (row.priceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR52000DO54000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 52000) AND (row.priceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR54000DO56000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 54000) AND (row.priceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR56000DO58000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 56000) AND (row.priceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR58000DO60000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 5999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 58000) AND (row.priceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR60000DO62000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 60000) AND (row.priceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR62000DO64000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 62000) AND (row.priceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR64000DO66000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 64000) AND (row.priceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR66000DO68000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 66000) AND (row.priceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR68000DO70000R1",
    "name": "Prodloužení záruky +1 rok",
    "price": 6999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 68000) AND (row.priceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2000DO2500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 374,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2000) AND (row.priceWithVat <= 2500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR2500DO3000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 449,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 2500) AND (row.priceWithVat <= 3000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3000DO3500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 524,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3000) AND (row.priceWithVat <= 3500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR3500DO4000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 3500) AND (row.priceWithVat <= 4000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4000DO4500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 674,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4000) AND (row.priceWithVat <= 4500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR4500DO5000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 749,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 4500) AND (row.priceWithVat <= 5000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5000DO5500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 824,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5000) AND (row.priceWithVat <= 5500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR5500DO6000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 5500) AND (row.priceWithVat <= 6000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6000DO6500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 974,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6000) AND (row.priceWithVat <= 6500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR6500DO7000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1049,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 6500) AND (row.priceWithVat <= 7000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7000DO7500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1124,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7000) AND (row.priceWithVat <= 7500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR7500DO8000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 7500) AND (row.priceWithVat <= 8000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8000DO8500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1274,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8000) AND (row.priceWithVat <= 8500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR8500DO9000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1349,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 8500) AND (row.priceWithVat <= 9000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9000DO9500R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1424,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9000) AND (row.priceWithVat <= 9500) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR9500DO10000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 9500) AND (row.priceWithVat <= 10000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR10000DO11000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1649,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 10000) AND (row.priceWithVat <= 11000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR11000DO12000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 11000) AND (row.priceWithVat <= 12000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR12000DO13000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 1949,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 12000) AND (row.priceWithVat <= 13000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR13000DO14000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 13000) AND (row.priceWithVat <= 14000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR14000DO15000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2249,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 14000) AND (row.priceWithVat <= 15000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR15000DO16000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 15000) AND (row.priceWithVat <= 16000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR16000DO17000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2549,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 16000) AND (row.priceWithVat <= 17000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR17000DO18000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 17000) AND (row.priceWithVat <= 18000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR18000DO19000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2849,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 18000) AND (row.priceWithVat <= 19000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR19000DO20000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 2999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 19000) AND (row.priceWithVat <= 20000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR20000DO21000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3149,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 20000) AND (row.priceWithVat <= 21000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR21000DO22000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 21000) AND (row.priceWithVat <= 22000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR22000DO23000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3449,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 22000) AND (row.priceWithVat <= 23000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR23000DO24000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 23000) AND (row.priceWithVat <= 24000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR24000DO25000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3749,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 24000) AND (row.priceWithVat <= 25000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR25000DO26000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 3899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 25000) AND (row.priceWithVat <= 26000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR26000DO27000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4049,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 26000) AND (row.priceWithVat <= 27000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR27000DO28000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 27000) AND (row.priceWithVat <= 28000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR28000DO29000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4349,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 28000) AND (row.priceWithVat <= 29000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR29000DO30000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 29000) AND (row.priceWithVat <= 30000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR30000DO32000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 4799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 30000) AND (row.priceWithVat <= 32000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR32000DO34000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 32000) AND (row.priceWithVat <= 34000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR34000DO36000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 34000) AND (row.priceWithVat <= 36000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR36000DO38000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 36000) AND (row.priceWithVat <= 38000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR38000DO40000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 5999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 38000) AND (row.priceWithVat <= 40000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR40000DO42000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 6299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 40000) AND (row.priceWithVat <= 42000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR42000DO44000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 6599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 42000) AND (row.priceWithVat <= 44000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR44000DO46000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 6899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 44000) AND (row.priceWithVat <= 46000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR46000DO48000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 7199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 46000) AND (row.priceWithVat <= 48000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR48000DO50000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 7499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 48000) AND (row.priceWithVat <= 50000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR50000DO52000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 7799,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 50000) AND (row.priceWithVat <= 52000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR52000DO54000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8099,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 52000) AND (row.priceWithVat <= 54000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR54000DO56000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8399,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 54000) AND (row.priceWithVat <= 56000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR56000DO58000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8699,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 56000) AND (row.priceWithVat <= 58000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR58000DO60000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 8999,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 58000) AND (row.priceWithVat <= 60000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR60000DO62000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 9299,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 60000) AND (row.priceWithVat <= 62000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR62000DO64000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 9599,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 62000) AND (row.priceWithVat <= 64000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR64000DO66000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 9899,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 64000) AND (row.priceWithVat <= 66000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR66000DO68000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 10199,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 66000) AND (row.priceWithVat <= 68000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  },
  {
    "code": "ZAR68000DO70000R2",
    "name": "Prodloužení záruky +2 roky",
    "price": 10499,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "((startsWith(row.URL, \"/tablety/\") OR startsWith(row.URL, \"/telefony/\") OR startsWith(row.URL, \"/monitory/\") OR startsWith(row.URL, \"/pocitace/\") OR startsWith(row.URL, \"/notebooky/\")) AND (row.priceWithVat > 68000) AND (row.priceWithVat <= 70000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(row.name, zarVylouceneCastiNazvu))))"
  }
];

window.LadzoSklad = {
  "LIC0004": true,
  "LIC0005": true,
  "LIC0010": true
};

window.expedice = {
  "zobrazit": true,
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

