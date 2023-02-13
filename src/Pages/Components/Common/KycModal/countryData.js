export const countryData = [
  {
    Country: "Algeria",
    CountryCode: "DZ",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Angola",
    CountryCode: "AO",
    DocumentType: ["PASSPORT", "DRIVERS_LICENSE"]
  },
  {
    Country: "Benin",
    CountryCode: "BJ",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Botswana",
    CountryCode: "BW",
    DocumentType: ["PASSPORT", "DRIVERS_LICENSE", "NATIONAL_ID"]
  },
  {
    Country: "Burkina Faso",
    CountryCode: "BF",
    DocumentType: ["NATIONAL_ID", "PASSPORT"]
  },

  {
    Country: "Burundi",
    CountryCode: "BI",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Cameroon",
    CountryCode: "CM",
    DocumentType: ["PASSPORT", "NATIONAL_ID*"]
  },

  {
    Country: "Cabo Verde",
    CountryCode: "CV",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Chad",
    CountryCode: "TD",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Comoros",
    CountryCode: "KM",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Congo",
    CountryCode: "CG",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Côte d'Ivoire",
    CountryCode: "CI",
    DocumentType: ["DRIVERS_LICENSE", "PASSPORT", "NATIONAL_ID"]
  },

  {
    Country: "Democratic Republic of the Congo",
    CountryCode: "CD",
    DocumentType: ["DRIVERS_LICENSE", "PASSPORT"]
  },

  {
    Country: "Djibouti",
    CountryCode: "DJ",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Egypt",
    CountryCode: "EG",
    DocumentType: ["PASSPORT", "NATIONAL_ID"]
  },

  {
    Country: "Equatorial Guinea",
    CountryCode: "GQ",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Eritrea",
    CountryCode: "ER",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Ethiopia",
    CountryCode: "ET",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Gabon",
    CountryCode: "GA",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Gambia",
    CountryCode: "GM",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Ghana",
    CountryCode: "GH",
    DocumentType: [
      "DRIVERS_LICENSE",
      "GHANA_CARD",
      "PASSPORT",
      "SSNIT",
      "NATIONAL_ID",
      "NATIONAL_ID_NON_CITIZEN",
      "VOTER_ID"
    ]
  },

  {
    Country: "Guinea",
    CountryCode: "GN",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Guinea-Bissau",
    CountryCode: "GW",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Kenya",
    CountryCode: "KE",
    DocumentType: ["PASSPORT", "NATIONAL_ID"]
  },
  {
    Country: "Lesotho",
    CountryCode: "LS",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Liberia",
    CountryCode: "LR",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Libya",
    CountryCode: "LY",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Madagascar",
    CountryCode: "MG",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Malawi",
    CountryCode: "MW",
    DocumentType: ["PASSPORT", "DRIVERS_LICENSE"]
  },
  {
    Country: "Mali",
    CountryCode: "ML",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Mauritius",
    CountryCode: "MU",
    DocumentType: ["PASSPORT", "NATIONAL_ID"]
  },
  {
    Country: "Morocco",
    CountryCode: "MA",
    DocumentType: ["PASSPORT", "NATIONAL_ID", "DRIVER_LISENCE"]
  },
  {
    Country: "Mozambique",
    CountryCode: "MZ",
    DocumentType: ["PASSPORT", "NATIONAL_ID"]
  },
  {
    Country: "Namibia",
    CountryCode: "NA",
    DocumentType: ["PASSPORT", "NATIONAL_ID", "DRIVER_LISENCE"]
  },
  {
    Country: "Niger",
    CountryCode: "NE",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Nigeria",
    CountryCode: "NG",
    DocumentType: ["PASSPORT", "NATIONAL_ID", "DRIVER_LISENCE", "VOTER_ID"]
  },
  {
    Country: "Rwanda",
    CountryCode: "RW",
    DocumentType: ["PASSPORT", "NATIONAL_ID", "DRIVER_LISENCE", "RWANDA_CARD"]
  },
  {
    Country: "Sao Tome and Principe",
    CountryCode: "ST",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Senegal",
    CountryCode: "SN",
    DocumentType: ["PASSPORT", "NATIONAL_ID", "ECOWAS_ID"]
  },

  {
    Country: "Seychelles",
    CountryCode: "SC",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Sierra Leone",
    CountryCode: "SL",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Somalia",
    CountryCode: "SO",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "South Africa",
    CountryCode: "ZA",
    DocumentType: [
      "PASSPORT",
      "TRAVEL_DOCUMENT",
      "DRIVERS_LICENSE",
      "NATIONAL_ID_DOC",
      "NATIONAL_ID"
    ]
  },
  {
    Country: "South Sudan",
    CountryCode: "SS",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Sudan",
    CountryCode: "SD",
    DocumentType: ["PASSPORT"]
  },
  {
    Country: "Togo",
    CountryCode: "TG",
    DocumentType: ["PASSPORT"]
  },

  {
    Country: "Tunisia",
    CountryCode: "TN",
    DocumentType: ["DRIVERS_LICENSE", "NATIONAL_ID", "PASSPORT"]
  },
  {
    Country: "Uganda",
    CountryCode: "UG",
    DocumentType: ["DRIVERS_LICENSE, NATIONAL_ID, PASSPORT"]
  },
  {
    Country: "United Republic of Tanzania",
    CountryCode: "TZ",
    DocumentType: ["NATIONAL_ID", "DRIVERS_LICENSE", "PASSPORT", "VOTER_ID"]
  },
  {
    Country: "Zambia",
    CountryCode: "ZM",
    DocumentType: ["DRIVERS_LICENSE", "PASSPORT"]
  },
  {
    Country: "Zimbabwe",
    CountryCode: "ZW",
    DocumentType: ["PASSPORT"]
  }
];

export const countryNames = countryData.map(data => ({
  label: data.Country,
  value: data.CountryCode,
  documentType: data.DocumentType
}));
