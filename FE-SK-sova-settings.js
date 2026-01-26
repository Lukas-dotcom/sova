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
  },
  {
    "function": "csvImportCart",
    "pageType": "cart",
    "conditionsSOVAL": "(customerGroupId = \"2\" OR customerGroupId = \"6\" OR customerGroupId = \"21\")"
  },
  {
    "function": "forceNewsletterOptOut",
    "pageType": "customerDetails",
    "conditionsSOVAL": "(customerGroupId = \"2\" OR customerGroupId = \"6\" OR customerGroupId = \"21\")"
  }
];

window.additionalSale = [
  {
    "code": "NET0034",
    "name": "Přidat wifi",
    "price": "129 Kč",
    "pairText": "wifi",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >80) AND (productPriceWithVat <=100) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "NET0034",
    "name": "Přidat wifi",
    "price": "129 Kč",
    "pairText": "wifi",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >100) AND (productPriceWithVat <=120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >120) AND (productPriceWithVat <=140) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >140) AND (productPriceWithVat <=160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >160) AND (productPriceWithVat <=180) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >180) AND (productPriceWithVat <=200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >200) AND (productPriceWithVat <=220) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >220) AND (productPriceWithVat <=240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >240) AND (productPriceWithVat <=260) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >260) AND (productPriceWithVat <=280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >280) AND (productPriceWithVat <=300) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >300) AND (productPriceWithVat <=320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >320) AND (productPriceWithVat <=340) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >340) AND (productPriceWithVat <=360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >360) AND (productPriceWithVat <=380) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >380) AND (productPriceWithVat <=400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >400) AND (productPriceWithVat <=440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >440) AND (productPriceWithVat <=480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >480) AND (productPriceWithVat <=520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >520) AND (productPriceWithVat <=560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >560) AND (productPriceWithVat <=600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >600) AND (productPriceWithVat <=640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >640) AND (productPriceWithVat <=680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >680) AND (productPriceWithVat <=720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >720) AND (productPriceWithVat <=760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >760) AND (productPriceWithVat <=800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >800) AND (productPriceWithVat <=840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >840) AND (productPriceWithVat <=880) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >880) AND (productPriceWithVat <=920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >920) AND (productPriceWithVat <=960) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >960) AND (productPriceWithVat <=1000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1000) AND (productPriceWithVat <=1040) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1040) AND (productPriceWithVat <=1080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1080) AND (productPriceWithVat <=1120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1120) AND (productPriceWithVat <=1160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1160) AND (productPriceWithVat <=1200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1200) AND (productPriceWithVat <=1280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1280) AND (productPriceWithVat <=1360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1360) AND (productPriceWithVat <=1440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1440) AND (productPriceWithVat <=1520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1520) AND (productPriceWithVat <=1600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1600) AND (productPriceWithVat <=1680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1680) AND (productPriceWithVat <=1760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1760) AND (productPriceWithVat <=1840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1840) AND (productPriceWithVat <=1920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1920) AND (productPriceWithVat <=2000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2000) AND (productPriceWithVat <=2080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2080) AND (productPriceWithVat <=2160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2160) AND (productPriceWithVat <=2240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2240) AND (productPriceWithVat <=2320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2320) AND (productPriceWithVat <=2400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2400) AND (productPriceWithVat <=2480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2480) AND (productPriceWithVat <=2560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2560) AND (productPriceWithVat <=2640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2640) AND (productPriceWithVat <=2720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2720) AND (productPriceWithVat <=2800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >80) AND (productPriceWithVat <=100) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >100) AND (productPriceWithVat <=120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >120) AND (productPriceWithVat <=140) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >140) AND (productPriceWithVat <=160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >160) AND (productPriceWithVat <=180) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >180) AND (productPriceWithVat <=200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >200) AND (productPriceWithVat <=220) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >220) AND (productPriceWithVat <=240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >240) AND (productPriceWithVat <=260) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >260) AND (productPriceWithVat <=280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >280) AND (productPriceWithVat <=300) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >300) AND (productPriceWithVat <=320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >320) AND (productPriceWithVat <=340) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >340) AND (productPriceWithVat <=360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >360) AND (productPriceWithVat <=380) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >380) AND (productPriceWithVat <=400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >400) AND (productPriceWithVat <=440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >440) AND (productPriceWithVat <=480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >480) AND (productPriceWithVat <=520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >520) AND (productPriceWithVat <=560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >560) AND (productPriceWithVat <=600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >600) AND (productPriceWithVat <=640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >640) AND (productPriceWithVat <=680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >680) AND (productPriceWithVat <=720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >720) AND (productPriceWithVat <=760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >760) AND (productPriceWithVat <=800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >800) AND (productPriceWithVat <=840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >840) AND (productPriceWithVat <=880) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >880) AND (productPriceWithVat <=920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >920) AND (productPriceWithVat <=960) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >960) AND (productPriceWithVat <=1000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1000) AND (productPriceWithVat <=1040) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1040) AND (productPriceWithVat <=1080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1080) AND (productPriceWithVat <=1120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1120) AND (productPriceWithVat <=1160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1160) AND (productPriceWithVat <=1200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1200) AND (productPriceWithVat <=1280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1280) AND (productPriceWithVat <=1360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1360) AND (productPriceWithVat <=1440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1440) AND (productPriceWithVat <=1520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1520) AND (productPriceWithVat <=1600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1600) AND (productPriceWithVat <=1680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1680) AND (productPriceWithVat <=1760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1760) AND (productPriceWithVat <=1840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1840) AND (productPriceWithVat <=1920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1920) AND (productPriceWithVat <=2000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2000) AND (productPriceWithVat <=2080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2080) AND (productPriceWithVat <=2160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2160) AND (productPriceWithVat <=2240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2240) AND (productPriceWithVat <=2320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2320) AND (productPriceWithVat <=2400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2400) AND (productPriceWithVat <=2480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2480) AND (productPriceWithVat <=2560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2560) AND (productPriceWithVat <=2640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2640) AND (productPriceWithVat <=2720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2720) AND (productPriceWithVat <=2800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
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
      145,
      151
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO",
      "LCD"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tlaciarne/",
      "/monitory-2/"
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
      148,
      154
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO",
      "LCD"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tlaciarne/",
      "/monitory-2/"
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
      127,
      133
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO",
      "LCD"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tlaciarne/",
      "/monitory-2/"
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
      139,
      136
    ],
    "exactCodes": [
      "KOL0001",
      "KOL0002"
    ],
    "startsWithCodes": [
      "PRT",
      "AIO",
      "LCD"
    ],
    "startsWithUrl": [
      "/monitory/",
      "/tlaciarne/",
      "/monitory-2/"
    ],
    "containsName": [
      "AIO",
      "IMAC",
      "AiO",
      "iMAC",
      "iMac"
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
    121,
    148
  ],
  "velkoobchod": [
    142,
    154
  ]
};

