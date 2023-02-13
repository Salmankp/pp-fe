import {
  GIFT_CARD_LIST_REQUEST,
  GIFT_CARD_LIST_SUCCESS,
  GIFT_CARD_LIST_FAIL,
  GIFT_CARD_MODAL,
  GIFT_CARD_SUB_PAYMENT_METHOD_LIST_REQUEST,
  GIFT_CARD_SUB_PAYMENT_METHOD_LIST_SUCCESS,
  GIFT_CARD_SUB_PAYMENT_METHOD_LIST_FAIL,
  GIFT_CARD_SELL_FETCH_REQUEST,
  GIFT_CARD_SELL_FETCH_SUCCESS,
  GIFT_CARD_SELL_FETCH_FAIL,
  LIST_PAYMENT_METHODS,
  CATEGORIES_WITH_OFFERS
} from "../constants/giftCard-constants";

const INITIAL_STATE = {
  giftCardsList: [],
  paymentMethodList: [],
  giftCardModal: false,
  subGiftCards: [],
  filterOfferData: [],
  giftCardsWithOffers: []
};

export const giftCardListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GIFT_CARD_LIST_REQUEST:
      return { ...state, loading: true, giftCardsList: [] };
    case LIST_PAYMENT_METHODS:
      return {
        ...state,
        paymentMethodList: action.payload.data
      };
    case GIFT_CARD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        giftCardsList: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page
      };
    case GIFT_CARD_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case GIFT_CARD_MODAL:
      return {
        ...state,
        giftCardModal: action.payload
      };
    case GIFT_CARD_SUB_PAYMENT_METHOD_LIST_REQUEST:
      return { ...state, loading: true, success: false, subGiftCards: [] };
    case GIFT_CARD_SUB_PAYMENT_METHOD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        subGiftCards: action.payload.data
      };
    case GIFT_CARD_SUB_PAYMENT_METHOD_LIST_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };
    case GIFT_CARD_SELL_FETCH_REQUEST:
      return { ...state, loading: true, filterOfferData: [] };
    case GIFT_CARD_SELL_FETCH_SUCCESS:
      return { ...state, loading: false, filterOfferData: [...action.payload] };
    case GIFT_CARD_SELL_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CATEGORIES_WITH_OFFERS:
      return { ...state, giftCardsWithOffers: action.payload };
    default:
      return state;
  }
};
