// actions
import {
  SELL_LIST_REQUEST,
  SELL_LIST_SUCCESS,
  SELL_LIST_FAIL,
  SELL_LIST_WORLDWIDE_REQUEST,
  SELL_LIST_WORLDWIDE_SUCCESS,
  SELL_LIST_WORLDWIDE_FAIL,
  SELL_LIST_FILTER
} from "../constants/sell-constants";

import { get } from "../utils/ajax";
export const listSells =
  (pageNumber = "1", e, type = "sell", area = "local") =>
  async dispatch => {
    const url = `/api/v1/offer/get-offers/${pageNumber}?type=${type}&area=${area}&filters=${JSON.stringify(
      e
    )}`;
    dispatch({
      type: SELL_LIST_REQUEST
    });
    try {
      const { data } = await get(`${process.env.REACT_APP_API_URL + url}`);
      dispatch({
        type: SELL_LIST_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: SELL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

export const listSellsWorldWide =
  (pageNumber = "1", e, type = "sell", area = "worldwide") =>
  async dispatch => {
    const url = `/api/v1/offer/get-offers/${pageNumber}?type=${type}&area=${area}&filters=${JSON.stringify(
      e
    )}`;
    try {
      const { data } = await get(`${process.env.REACT_APP_API_URL + url}`);
      dispatch({
        type: SELL_LIST_WORLDWIDE_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: SELL_LIST_WORLDWIDE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

export const sellFilter = data => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELL_LIST_FILTER,
      payload: data
      //   state: getState()
    });
  } catch (error) {
    throw error;
  }
};
