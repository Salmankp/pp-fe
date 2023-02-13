import {
  TRANSFER_BUYER_REQUEST,
  TRANSFER_BUYER_FAIL,
  TRANSFER_BUYER_SUCCESS,
  TRANSFER_BUYER_COIN_TYPE_SUCCESS
} from "../constants/usd-escrow-constants";
import axios from "axios";

import store from "./../store";

export const transferBuyer =
  (data = {}) =>
  async dispatch => {
    dispatch({
      type: TRANSFER_BUYER_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/transferBuyer`,
        data,
        config
      )
      .then(res => {
        dispatch({
          type: TRANSFER_BUYER_SUCCESS,
          payload: res.data
        });
      })

      .catch(error => {
        dispatch({
          type: TRANSFER_BUYER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
        });
      });
  };
