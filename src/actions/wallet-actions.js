import axios from "axios";
import {
  GET_WALLETS_REQUEST,
  GET_WALLETS_SUCCESS,
  GET_WALLETS_FAIL,
  GET_ALL_WALLET_OF_USER_REQUEST,
  GET_ALL_WALLET_OF_USER_SUCCESS,
  GET_ALL_WALLET_OF_USER_FAIL
} from "../constants/wallet-constants";
import { error } from "../utils/toastr";

export const getWallets = () => async dispatch => {
  try {
    dispatch({
      type: GET_WALLETS_REQUEST
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/wallet/all`
    );

    dispatch({
      type: GET_WALLETS_SUCCESS,
      payload: data
    });
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: GET_WALLETS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const getAllWalletOfUser = _id => async dispatch => {
  try {
    dispatch({
      type: GET_ALL_WALLET_OF_USER_REQUEST
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/wallet/${_id}`
    );

    dispatch({
      type: GET_ALL_WALLET_OF_USER_SUCCESS,
      payload: data
    });
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: GET_ALL_WALLET_OF_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
