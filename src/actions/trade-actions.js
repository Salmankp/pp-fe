import axios from 'axios'
import {
  FILTER_TRADE_REQUEST,
  FILTER_TRADE_SUCCESS,
  FILTER_TRADE_FAIL,
  Trade_PAGE,
} from '../constants/trade-constants'
import { error } from '../utils/toastr'
import store from '../store'

export const filterTradeAction =
  (filtersData = {}) =>
    async (dispatch) => {


      try {

       filtersData?.page && dispatch({
          type: FILTER_TRADE_REQUEST,
        })
        const token = store?.getState()?.loggedInUser?.userInfo?.token

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/v1/transection/filterTrades`,
          filtersData,
          config
        );

        return filtersData?.page ? dispatch({
          type: FILTER_TRADE_SUCCESS,
          payload: data,
        }) :  data?.data?.data

      } catch (err) {
        error(err.response.data.message, 'Error Message details offer')
        dispatch({
          type: FILTER_TRADE_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }

export const pageCountAction = (pageCount) => (dispatch) => {
  dispatch({
    type: Trade_PAGE,
    payload: pageCount,
  })
}

export const getLastWeekTrade = ({ currency }) => async dispatch => {
  try {

    const token = store?.getState()?.loggedInUser?.userInfo?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    const res = await axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/transection/lastWeekTransactions/${currency}`, config)
    return res?.data?.data

  } catch (er) {
    error(er.message);
  };
};