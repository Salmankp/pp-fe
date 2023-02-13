import axios from "axios";

// actions
import {
  BUY_LIST_REQUEST,
  BUY_LIST_SUCCESS,
  BUY_LIST_FAIL,
  BUY_LIST_FILTER,
  BUY_LIST_WORLDWIDE_REQUEST,
  BUY_LIST_WORLDWIDE_SUCCESS,
  BUY_LIST_WORLDWIDE_FAIL
} from "../constants/buy-constants";
import { get } from "../utils/ajax";

export const listBuys =
  (pageNumber = "1", e, type = "buy", area = "local") =>
  async dispatch => {
    const url = `/api/v1/offer/get-offers/${pageNumber}?type=${type}&area=${area}&filters=${JSON.stringify(
      e
    )}`;

    try {
      dispatch({
        type: BUY_LIST_REQUEST
      });
      const { data } = await get(`${process.env.REACT_APP_API_URL + url}`);
      dispatch({
        type: BUY_LIST_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: BUY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };
export const listBuysWorldWide =
  (pageNumber = "1", e, type = "buy", area = "worldwide") =>
  async dispatch => {
    const url = `/api/v1/offer/get-offers/${pageNumber}?type=${type}&area=${area}&filters=${JSON.stringify(
      e
    )}`;
    try {
      dispatch({
        type: BUY_LIST_WORLDWIDE_REQUEST
      });
      const { data } = await get(`${process.env.REACT_APP_API_URL + url}`);
      dispatch({
        type: BUY_LIST_WORLDWIDE_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: BUY_LIST_WORLDWIDE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

export const buyFilter = data => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUY_LIST_FILTER,
      payload: data
      //   state: getState()
    });
  } catch (error) {
    throw error;
  }
};
