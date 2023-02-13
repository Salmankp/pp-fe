import axios from "axios";

/**
 * @author Junaid Atari <mj.atari@gmail.com>
 * @link http://junaidatari.com Author Website
 * @since 2022-05-11
 */

export function formatNumber(number) {
  return number?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") || 0.0;
}

export function removeCommasAndConvertToNumber(number) {
  if (parseFloat(number) > 0) {
    return number?.replace(/,/g, "");
  }
}

export function currentPercentageRate(curentRate, cryptoVal) {
  return parseFloat(curentRate) / parseFloat(cryptoVal);
}

export async function addMarginToOffer(offers) {
  for (const offer of offers) {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${offer.preferredCurrency}&order=market_cap_desc&per_page=3&page=1&sparkline=false`
    );
    if (offer.cryptoCurrencyType === "ethereum") {
      // Ethereum
      const margin = (response.data[1].current_price / 100) * offer?.offerMargin?.margin;
      offer.cryptoValue = response.data[1].current_price + margin;
    } else if (offer?.cryptoCurrencyType === "bitcoin") {
      // Bitcoin
      const margin = (response.data[0].current_price / 100) * offer?.offerMargin?.margin;
      offer.cryptoValue = response.data[0].current_price + margin;
    } else {
      const margin = (response.data[2].current_price / 100) * offer?.offerMargin?.margin;
      offer.cryptoValue = response.data[2].current_price + margin;
    }
  }
  return offers;
}

export async function getCurrentCurrencyPrice(currency = "PKR", symbol) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=3&page=1&sparkline=false`
  );
  console.log(response.data);
  if (response && response?.data) {
    for (const item of response?.data) {
      if (item?.symbol === symbol.toLowerCase()) return item?.current_price;
    }
  }
}

export async function getCoinMarketPrices(currency = "PKR") {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=3&page=1&sparkline=false`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

export function capitalize(s) {
  if (typeof s !== "string") return "N/A";
  if (s === "btc" || s === "usd" || s === "usdt") return s.toUpperCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// export const filterData = (offerData, filterData) => {
//   console.log(offerData, filterData);
//   return offerData.filter(data => {
//     if (
//       filterData?.cryptoCurrencyType?.toLowerCase() !==
//       data.cryptoCurrencyType.toLowerCase()
//     )
//       return false;
//     if (filterData?.amount !== "" && data?.cryptoValue >= filterData?.amount)
//       return false;
//     if (
//       filterData?.paymentMethod !== "" &&
//       data?.paymentMethodId?.name?.toLowerCase() !==
//         filterData?.paymentMethod?.toLowerCase()
//     ) {
//       return false;
//     }
//     if (
//       filterData?.isVerified !== data?.isVerified &&
//       data?.isVerified !== undefined
//     )
//       return false;
//     if (
//       filterData?.offerLocation?.toLowerCase() !==
//       data?.offerLocation?.toLowerCase()
//     ) {
//       return false;
//     }
//     if (filterData?.offerTags?.length > 0) {
//       let checked = false;
//       for (let i in filterData.offerTags) {
//         if (data.offerTags?.includes(filterData.offerTags[i])) {
//           checked = true;
//           break;
//         }
//       }
//       return checked;
//     }
//     console.log(offerData);
//     return true;
//   });
// };

export const computeTime = (offerData, date) => {
  const target = 30 * 60 * 1000;

  const diff = Date.now() - new Date(date).getTime();

  if (target - diff >= 0) return target - diff;
  else if (target - diff <= 0) return 0;
};
