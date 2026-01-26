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
    "conditionsSOVAL": "(customerGroupId = \"2\" OR customerGroupId = \"6\" OR customerGroupId = \"8\" OR customerGroupId = \"14\")"
  },
  {
    "function": "forceNewsletterOptOut",
    "pageType": "customerDetails",
    "conditionsSOVAL": "(customerGroupId = \"2\" OR customerGroupId = \"6\" OR customerGroupId = \"8\" OR customerGroupId = \"14\")"
  }
];

