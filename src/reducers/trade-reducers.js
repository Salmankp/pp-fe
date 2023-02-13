import {
  FILTER_TRADE_REQUEST,
  FILTER_TRADE_SUCCESS,
  FILTER_TRADE_FAIL,
  Trade_PAGE,
} from '../constants/trade-constants'

export const filterTradeReducer = (state = { filterTradeInfo: {} }, action) => {
  switch (action.type) {
    case FILTER_TRADE_REQUEST:
      return { loading: true }
    case FILTER_TRADE_SUCCESS:
      return {
        loading: false,
        filterTradeInfo: action.payload,
        success: true,
        error: '',
      }

    case FILTER_TRADE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const pageCountReducer = (state = { tradePageCount: 1 }, action) => {
  switch (action.type) {
    case Trade_PAGE:
      return { tradePageCount: action.payload }

    default:
      return state
  }
}
