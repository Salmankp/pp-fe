import {
  BUY_LIST_REQUEST,
  BUY_LIST_SUCCESS,
  BUY_LIST_FAIL,
  BUY_LIST_FILTER,
  BUY_LIST_WORLDWIDE_REQUEST,
  BUY_LIST_WORLDWIDE_SUCCESS,
  BUY_LIST_WORLDWIDE_FAIL
} from "../constants/buy-constants";

// import { filterData } from "../utils/helper.js";
export const buyListReducer = (state = { buy: [] }, action) => {
  switch (action.type) {
    case BUY_LIST_REQUEST:
      return { ...state, loading: true };
    case BUY_LIST_SUCCESS:
      return {
        ...state,
        buy: {
          ...state.buy,
          offers: action.payload.data.offers,
          offersCount: action.payload.data.offersCount
        },
        pages: action.payload.pages,
        page: action.payload.page,
        buyFiltered: {
          ...state.buyFiltered,
          offers: action.payload.data.offers,
          offersCount: action.payload.data.offersCount
        },
        loading: false
      };
    case BUY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case BUY_LIST_WORLDWIDE_REQUEST:
      return { ...state, loadingWorldWide: true };
    case BUY_LIST_WORLDWIDE_SUCCESS:
      return {
        ...state,
        loadingWorldWide: false,
        buy: {
          ...state.buy,
          worldWideOffers: action.payload.data.worldWideOffers,
          worldWideOfferscount: action.payload.data.worldWideOfferscount
        },
        pages: action.payload.pages,
        page: action.payload.page,
        buyFiltered: {
          ...state.buyFiltered,
          worldWideOffers: action.payload.data.worldWideOffers,
          worldWideOfferscount: action.payload.data.worldWideOfferscount
        }
      };
    case BUY_LIST_WORLDWIDE_FAIL:
      return { ...state, loadingWorldWide: false, error: action.payload };
    case BUY_LIST_FILTER:
      return {
        ...state,
        buyFiltered: {
          ...state.buyFiltered,
          offers: filterData(state.buy.offers, action.payload),
          worldWideOffers: filterData(state.buy.worldWideOffers, action.payload)
        }
      };

    default:
      return state;
  }
};
