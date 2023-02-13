import {
  SELL_LIST_REQUEST,
  SELL_LIST_SUCCESS,
  SELL_LIST_FAIL,
  SELL_LIST_FILTER,
  SELL_LIST_WORLDWIDE_REQUEST,
  SELL_LIST_WORLDWIDE_SUCCESS,
  SELL_LIST_WORLDWIDE_FAIL
} from "../constants/sell-constants";
// import { filterData } from "../utils/helper.js";
export const sellListReducer = (state = { sell: [] }, action) => {
  switch (action.type) {
    case SELL_LIST_REQUEST:
      return { ...state, loading: true };
    case SELL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        sell: {
          ...state.sell,
          offers: action.payload.data.offers,
          offersCount: action.payload.data.offersCount
        },
        pages: action.payload.pages,
        page: action.payload.page,
        sellFiltered: {
          ...state.sellFiltered,
          offers: action.payload.data.offers,
          offersCount: action.payload.data.offersCount
        }
      };
    case SELL_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case SELL_LIST_WORLDWIDE_REQUEST:
      return { ...state, loadingWorldWide: true };
    case SELL_LIST_WORLDWIDE_SUCCESS:
      return {
        ...state,
        loadingWorldWide: false,
        sell: {
          ...state.sell,
          worldWideOfferscount: action.payload.data.worldWideOfferscount,
          worldWideOffers: action.payload.data.worldWideOffers
        },
        pages: action.payload.pages,
        page: action.payload.page,
        sellFiltered: {
          ...state.sellFiltered,
          worldWideOfferscount: action.payload.data.worldWideOfferscount,
          worldWideOffers: action.payload.data.worldWideOffers
        }
      };
    case SELL_LIST_WORLDWIDE_FAIL:
      return { ...state, loadingWorldWide: false, error: action.payload };

    case SELL_LIST_FILTER:
      return {
        ...state,
        sellFiltered: {
          ...state.sellFiltered,
          offers: filterData(state.sell.offers, action.payload),
          worldWideOffers: filterData(
            state.sell.worldWideOffers,
            action.payload
          )
        }
      };

    default:
      return state;
  }
};
