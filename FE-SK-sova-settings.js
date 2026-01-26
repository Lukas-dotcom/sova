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
    "code": "ZARSK80DO100R1",
    "name": "Predĺženie záruky +1 rok",
    "price": "€10,00",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >80) AND (productPriceWithVat <=100) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK100DO120R1",
    "name": "Predĺženie záruky +1 rok",
    "price": "€12,00",
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >100) AND (productPriceWithVat <=120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK120DO140R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 14,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >120) AND (productPriceWithVat <=140) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK140DO160R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 16,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >140) AND (productPriceWithVat <=160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK160DO180R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 18,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >160) AND (productPriceWithVat <=180) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK180DO200R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 20,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >180) AND (productPriceWithVat <=200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK200DO220R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 22,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >200) AND (productPriceWithVat <=220) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK220DO240R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 24,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >220) AND (productPriceWithVat <=240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK240DO260R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 26,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >240) AND (productPriceWithVat <=260) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK260DO280R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 28,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >260) AND (productPriceWithVat <=280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK280DO300R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 30,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >280) AND (productPriceWithVat <=300) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK300DO320R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 32,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >300) AND (productPriceWithVat <=320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK320DO340R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 34,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >320) AND (productPriceWithVat <=340) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK340DO360R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 36,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >340) AND (productPriceWithVat <=360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK360DO380R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 38,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >360) AND (productPriceWithVat <=380) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK380DO400R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 40,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >380) AND (productPriceWithVat <=400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK400DO440R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 44,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >400) AND (productPriceWithVat <=440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK440DO480R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 48,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >440) AND (productPriceWithVat <=480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK480DO520R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 52,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >480) AND (productPriceWithVat <=520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK520DO560R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 56,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >520) AND (productPriceWithVat <=560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK560DO600R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 60,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >560) AND (productPriceWithVat <=600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK600DO640R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 64,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >600) AND (productPriceWithVat <=640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK640DO680R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 68,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >640) AND (productPriceWithVat <=680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK680DO720R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 72,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >680) AND (productPriceWithVat <=720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK720DO760R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 76,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >720) AND (productPriceWithVat <=760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK760DO800R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 80,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >760) AND (productPriceWithVat <=800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK800DO840R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 84,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >800) AND (productPriceWithVat <=840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK840DO880R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 88,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >840) AND (productPriceWithVat <=880) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK880DO920R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 92,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >880) AND (productPriceWithVat <=920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK920DO960R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 96,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >920) AND (productPriceWithVat <=960) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK960DO1000R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 100,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >960) AND (productPriceWithVat <=1000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1000DO1040R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 104,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1000) AND (productPriceWithVat <=1040) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1040DO1080R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 108,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1040) AND (productPriceWithVat <=1080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1080DO1120R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 112,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1080) AND (productPriceWithVat <=1120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1120DO1160R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 116,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1120) AND (productPriceWithVat <=1160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1160DO1200R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 120,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1160) AND (productPriceWithVat <=1200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1200DO1280R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 128,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1200) AND (productPriceWithVat <=1280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1280DO1360R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 136,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1280) AND (productPriceWithVat <=1360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1360DO1440R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 144,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1360) AND (productPriceWithVat <=1440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1440DO1520R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 152,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1440) AND (productPriceWithVat <=1520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1520DO1600R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 160,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1520) AND (productPriceWithVat <=1600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1600DO1680R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 168,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1600) AND (productPriceWithVat <=1680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1680DO1760R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 176,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1680) AND (productPriceWithVat <=1760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1760DO1840R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 184,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1760) AND (productPriceWithVat <=1840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1840DO1920R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 192,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1840) AND (productPriceWithVat <=1920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1920DO2000R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 200,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1920) AND (productPriceWithVat <=2000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2000DO2080R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 208,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2000) AND (productPriceWithVat <=2080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2080DO2160R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 216,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2080) AND (productPriceWithVat <=2160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2160DO2240R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 224,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2160) AND (productPriceWithVat <=2240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2240DO2320R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 232,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2240) AND (productPriceWithVat <=2320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2320DO2400R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 240,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2320) AND (productPriceWithVat <=2400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2400DO2480R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 248,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2400) AND (productPriceWithVat <=2480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2480DO2560R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 256,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2480) AND (productPriceWithVat <=2560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2560DO2640R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 264,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2560) AND (productPriceWithVat <=2640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2640DO2720R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 272,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2640) AND (productPriceWithVat <=2720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2720DO2800R1",
    "name": "Predĺženie záruky +1 rok",
    "price": 280,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2720) AND (productPriceWithVat <=2800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK80DO100R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 15,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >80) AND (productPriceWithVat <=100) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK100DO120R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 18,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >100) AND (productPriceWithVat <=120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK120DO140R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 21,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >120) AND (productPriceWithVat <=140) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK140DO160R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 24,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >140) AND (productPriceWithVat <=160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK160DO180R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 27,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >160) AND (productPriceWithVat <=180) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK180DO200R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 30,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >180) AND (productPriceWithVat <=200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK200DO220R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 33,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >200) AND (productPriceWithVat <=220) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK220DO240R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 36,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >220) AND (productPriceWithVat <=240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK240DO260R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 39,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >240) AND (productPriceWithVat <=260) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK260DO280R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 42,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >260) AND (productPriceWithVat <=280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK280DO300R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 45,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >280) AND (productPriceWithVat <=300) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK300DO320R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 48,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >300) AND (productPriceWithVat <=320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK320DO340R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 51,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >320) AND (productPriceWithVat <=340) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK340DO360R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 54,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >340) AND (productPriceWithVat <=360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK360DO380R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 57,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >360) AND (productPriceWithVat <=380) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK380DO400R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 60,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >380) AND (productPriceWithVat <=400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK400DO440R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 66,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >400) AND (productPriceWithVat <=440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK440DO480R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 72,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >440) AND (productPriceWithVat <=480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK480DO520R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 78,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >480) AND (productPriceWithVat <=520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK520DO560R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 84,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >520) AND (productPriceWithVat <=560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK560DO600R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 90,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >560) AND (productPriceWithVat <=600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK600DO640R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 96,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >600) AND (productPriceWithVat <=640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK640DO680R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 102,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >640) AND (productPriceWithVat <=680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK680DO720R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 108,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >680) AND (productPriceWithVat <=720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK720DO760R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 114,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >720) AND (productPriceWithVat <=760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK760DO800R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 120,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >760) AND (productPriceWithVat <=800) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK800DO840R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 126,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >800) AND (productPriceWithVat <=840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK840DO880R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 132,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >840) AND (productPriceWithVat <=880) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK880DO920R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 138,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >880) AND (productPriceWithVat <=920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK920DO960R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 144,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >920) AND (productPriceWithVat <=960) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK960DO1000R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 150,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >960) AND (productPriceWithVat <=1000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1000DO1040R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 156,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1000) AND (productPriceWithVat <=1040) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1040DO1080R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 162,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1040) AND (productPriceWithVat <=1080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1080DO1120R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 168,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1080) AND (productPriceWithVat <=1120) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1120DO1160R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 174,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1120) AND (productPriceWithVat <=1160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1160DO1200R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 180,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1160) AND (productPriceWithVat <=1200) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1200DO1280R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 192,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1200) AND (productPriceWithVat <=1280) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1280DO1360R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 204,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1280) AND (productPriceWithVat <=1360) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1360DO1440R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 216,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1360) AND (productPriceWithVat <=1440) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1440DO1520R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 228,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1440) AND (productPriceWithVat <=1520) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1520DO1600R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 240,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1520) AND (productPriceWithVat <=1600) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1600DO1680R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 252,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1600) AND (productPriceWithVat <=1680) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1680DO1760R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 264,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1680) AND (productPriceWithVat <=1760) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1760DO1840R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 276,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1760) AND (productPriceWithVat <=1840) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1840DO1920R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 288,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1840) AND (productPriceWithVat <=1920) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK1920DO2000R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 300,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >1920) AND (productPriceWithVat <=2000) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2000DO2080R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 312,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2000) AND (productPriceWithVat <=2080) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2080DO2160R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 324,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2080) AND (productPriceWithVat <=2160) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2160DO2240R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 336,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2160) AND (productPriceWithVat <=2240) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2240DO2320R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 348,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2240) AND (productPriceWithVat <=2320) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2320DO2400R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 360,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2320) AND (productPriceWithVat <=2400) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2400DO2480R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 372,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2400) AND (productPriceWithVat <=2480) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2480DO2560R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 384,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2480) AND (productPriceWithVat <=2560) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2560DO2640R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 396,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2560) AND (productPriceWithVat <=2640) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2640DO2720R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 408,
    "pairText": "zaruka",
    "type": "checkbox",
    "SOVAL": "(category = \"Notebooky\" OR category = \"Počítače\" OR category=\"Telefóny, mobily\" OR category=\"Tablety\" OR category=\"Monitory\") AND (productPriceWithVat >2640) AND (productPriceWithVat <=2720) AND (ALL(zarVylouceneCastiNazvu, NOT CONTAINS(productName, zarVylouceneCastiNazvu)))"
  },
  {
    "code": "ZARSK2720DO2800R2",
    "name": "Predĺženie záruky +2 roky",
    "price": 420,
    "pairText": "zaruka",
    "type": "checkbox",
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

