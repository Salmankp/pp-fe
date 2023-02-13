import axios from "axios";

// actions
import {
  OFFER_BUY_REQUEST,
  OFFER_BUY_SUCCESS,
  OFFER_BUY_FAIL,
  OFFER_PAID_REQUEST,
  OFFER_PAID_SUCCESS,
  OFFER_PAID_FAIL,
  TRANSFER_ESCROW_REQUEST,
  TRANSFER_ESCROW_SUCCESS,
  TRANSFER_ESCROW_FAIL,
  OFFER_DISPUTE_REQUEST,
  OFFER_DISPUTE_SUCCESS,
  OFFER_DISPUTE_FAIL,
  TRADE_COMPLETED,
  UPDATE_RELEASE_DATA,
  ALL_TRANSACTIONS_REQUEST,
  ALL_TRANSACTIONS_SUCCESS,
  ALL_TRANSACTIONS_FAIL,
  UPDATE_TRANSACTION_DATA
} from "../constants/transaction-constants";
import { error, success } from "../utils/toastr";
import store from "./../store";
import { get } from "../utils/ajax";
export const createEtherTx =
  (data = {}, offerInfo, type) =>
  async dispatch => {
    dispatch({
      type: OFFER_BUY_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/create`,
        data,
        config
      )
      .then(res => {
        dispatch({
          type: OFFER_BUY_SUCCESS,
          payload: res.data
        });

        success("Transaction created successfully");
      })

      .catch(er => {
        error(er.message);
        dispatch({
          type: OFFER_BUY_FAIL,
          payload: error.message
        });
      });
  };

export const paidEtherTx =
  (data = {}) =>
  async dispatch => {
    dispatch({
      type: OFFER_PAID_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/paid`,
        data,
        config
      )
      .then(res => {
        success("Transaction Fee has been paid  successfully");

        dispatch({
          type: OFFER_PAID_SUCCESS,
          payload: res.data
        });
      })

      .catch(er => {
        error(er.message);
        dispatch({
          type: OFFER_PAID_FAIL,
          payload: error.message
        });
      });
  };

export const disputeEtherTx =
  (data = {}) =>
  async dispatch => {
    dispatch({
      type: OFFER_DISPUTE_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/dispute`,
        data,
        config
      )
      .then(res => {
        success("Dispute Started successfull");

        dispatch({
          type: OFFER_DISPUTE_SUCCESS,
          payload: res.data
        });
      })

      .catch(er => {
        error(er.message);
        dispatch({
          type: OFFER_DISPUTE_FAIL,
          payload: error.message
        });
      });
  };

export const transferEscrow =
  (data = {}) =>
  async dispatch => {
    dispatch({
      type: TRANSFER_ESCROW_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/transferEscrow`,
        data,
        config
      )
      .then(res => {
        success("Transfer USDT paid successfully");
        dispatch({
          type: TRANSFER_ESCROW_SUCCESS,
          payload: res.data
        });
      })

      .catch(er => {
        error(er.message);
        dispatch({
          type: TRANSFER_ESCROW_FAIL,
          payload:
            er.response && er.response.data.message
              ? er.response.data.message
              : er.message
        });
      });
  };
export const tradeComplete =
  (data = {}) =>
  dispatch => {
    dispatch({
      type: TRADE_COMPLETED,
      payload: data
    });
  };

export const getPendingTransaction = () => async () => {
  const { data } = await get(
    `${process.env.REACT_APP_API_URL}/api/v1/notifications/getNotification`
  );

  return data?.data;
};

export const updateReleaseData =
  (data = {}) =>
  dispatch => {
    dispatch({
      type: UPDATE_RELEASE_DATA,
      payload: data
    });
  };

export const allTransactions = () => async dispatch => {
  dispatch({
    type: ALL_TRANSACTIONS_REQUEST
  });
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/v1/transection/all`, config)
    .then(res => {
      // success("All Transactions get successfully");
      dispatch({
        type: ALL_TRANSACTIONS_SUCCESS,
        payload: res.data
      });
    })

    .catch(er => {
      error(er.message);
      dispatch({
        type: ALL_TRANSACTIONS_FAIL,
        payload:
          er.response && er.response.data.message
            ? er.response.data.message
            : er.message
      });
    });
};
export const updateTransactionData =
  (data = {}) =>
  dispatch => {
    console.log(data, "transactionData");
    dispatch({
      type: UPDATE_TRANSACTION_DATA,
      payload: data
    });
  };
