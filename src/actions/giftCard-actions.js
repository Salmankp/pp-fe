import axios from "axios";

// actions
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

import store from "./../store";

// GET ALL payment methods
export const listPaymentMethods =
  () =>
    async dispatch => {
      try {

        const token = store?.getState()?.loggedInUser?.userInfo?.token;

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        };
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/payment/all`,
          config
        );

        dispatch({
          type: LIST_PAYMENT_METHODS,
          payload: data.data
        });
      } catch (error) {
        console.log(error);
      }
    };

// GET ALL GIFT CARDS
export const listGiftCard =
  (keyword = "", pageNumber = "") =>
    async dispatch => {
      try {
        dispatch({
          type: GIFT_CARD_LIST_REQUEST
        });
        const token = store?.getState()?.loggedInUser?.userInfo?.token;

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        };
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/payment/gift/all`,
          config
        );

        dispatch({
          type: GIFT_CARD_LIST_SUCCESS,
          payload: data.data
        });
      } catch (error) {
        dispatch({
          type: GIFT_CARD_LIST_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
        });
      }
    };

export const getGiftCardWithOffers = ({ currencyType }) => async dispatch => {
  try {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        currencyType
      }
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/category/categories_with_offers`,
      config
    );

    dispatch({
      type: CATEGORIES_WITH_OFFERS,
      payload: data?.data
    });


  } catch (err) {
    console.log(err);
    dispatch({
      type: GIFT_CARD_MODAL,
      payload: false
    });
  }
};
export const handleGiftCardModal = ({ value, currencyType }) => async dispatch => {
  value && dispatch(getGiftCardWithOffers({ currencyType }))
  dispatch({
    type: GIFT_CARD_MODAL,
    payload: value
  });

};

export const getSubPaymentMethods = category_id => async dispatch => {
  try {
    dispatch({
      type: GIFT_CARD_SUB_PAYMENT_METHOD_LIST_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/sub/payment/${category_id}`,
      config
    );

    dispatch({
      type: GIFT_CARD_SUB_PAYMENT_METHOD_LIST_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: GIFT_CARD_SUB_PAYMENT_METHOD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const getGiftCardWithParams = options => async dispatch => {
  try {
    dispatch({
      type: GIFT_CARD_SELL_FETCH_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/gift-offers?isGiftCard=false`,
      // `${process.env.REACT_APP_API_URL}/api/v1/offer/gift-offers?isGiftCard=${options.isGiftCard}&paymentMethod=${options.paymentMethod}&subPaymentMethodId=${options.subPaymentMethodId}`,
      config
    );

    dispatch({
      type: GIFT_CARD_SELL_FETCH_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: GIFT_CARD_SELL_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
