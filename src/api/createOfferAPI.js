// services for create offer component

// API

// https://documenter.getpostman.com/view/9538925/Uz5Gnb1y
// POST: http://localhost:8000/api/v1/offer/create-offer

// Create Offer Copy
// GET: https://p2p-backend.invo.zone/api/v1/offer/sell-offers



// {
// 		"cryptoCurrencyType": "ethereum",
// 		"tradingMethod": "buy",
// 		"paymentMethod": "2Checkout",
// 		"preferredCurrency": "USD",
// 		"tradingType":"marketPrice",
// 		"tradeMin": 1800,
// 		"tradeMax": 50000,
// 		"offerMargin": 2,
// 		"offerTimeLimit": 30,
// 		"offerTags": ["same bank only","invoices are accepted","photo id required"],
// 		"offerLabel": "we are selling best price crypto",
// 		"offerTerms": "No terms and conditions",
// 		"tradeInstructions": "we need receipts of payments keep ensure you have all records"
// }


// Response

// {
//     "status": "success",
//     "data": {
//         "fixedAmountTrade": [],
//         "isFixedAmountTrade": false,
//         "offerTags": [
//             "same bank only",
//             "invoices are accepted",
//             "photo id required"
//         ],
//         "requireVerificationID": false,
//         "requireVerificationName": false,
//         "_id": "62a181e0a8d4cd19a8588662",
//         "user": "6278a9b736a14d03abcf55da",
//         "cryptoCurrencyType": "ethereum",
//         "tradingMethod": "buy",
//         "paymentMethod": "2Checkout",
//         "preferredCurrency": "USD",
//         "tradingType": "marketPrice",
//         "tradeMin": 1800,
//         "tradeMax": 50000,
//         "offerMargin": 2,
//         "offerTimeLimit": 30,
//         "offerLabel": "we are selling best price crypto",
//         "offerTerms": "No terms and conditions",
//         "tradeInstructions": "we need receipts of payments keep ensure you have all records",
//         "createdAt": "2022-06-09T05:15:12.064Z",
//         "__v": 0
//     }
// }