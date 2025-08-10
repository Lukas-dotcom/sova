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

window.injectVariables = [
  {
    "zarVylouceneCastiNazvu": [
      "Z Fold",
      "Z Flip",
      "Fujitsu H760"
    ]
  },
  {
    "jednoduchaPromenna": "XY"
  },
  {
    "zarVylouceneCastiNazvu": "tabulka",
    "jednoduchaPromenna": [
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
    ]
  },
  {
    "zarVylouceneCastiNazvu": "objekt",
    "jednoduchaPromenna": "    {\n        \"code\": \"LIC0004\",\n        \"guid\": \"7eab77fc-65d5-11ed-9b08-ecf4bbd76e50\",\n        \"priceId\": 150258,\n        \"quantity\": 1,\n        \"priceWithVat\": 1311,\n        \"priceWithoutDiscount\": 8999,\n        \"itemId\": \"689793e12157d\",\n        \"name\": \"Microsoft Office 2021 Professional PLUS  Druhotná elektronická licence\",\n        \"weight\": 0.01\n    }"
  }
];

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
  }
];

window.additionalSalePopUP = {
  "pairText": "pojist12",
  "popID": "zar12"
};

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

