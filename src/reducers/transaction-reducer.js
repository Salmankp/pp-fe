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
  ALL_TRANSACTIONS_REQUEST,
  ALL_TRANSACTIONS_SUCCESS,
  ALL_TRANSACTIONS_FAIL,
  UPDATE_RELEASE_DATA,
  UPDATE_TRANSACTION_DATA
} from "../constants/transaction-constants";

export const createTxReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_BUY_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
        success: false,
        data: {},
        transactionCompleted: false,
      };

    case OFFER_BUY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        data: action.payload.data,
        errorMsg: "",
      };
    case OFFER_BUY_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
        errorMsg: action.payload,
      };
    case OFFER_PAID_REQUEST:
      return {
        ...state,
        paidLoading: true,
        paidSuccess: false,
        transactionCompleted: false,
      };

    case OFFER_PAID_SUCCESS:
      return {
        ...state,
        paidLoading: false,
        paidSuccess: true,
        data: action.payload.data,
      };
    case OFFER_PAID_FAIL:
      return {
        ...state,
        paidLoading: false,
        paidSuccess: false,
        paidError: action.payload,
      };
    case TRANSFER_ESCROW_REQUEST:
      return {
        ...state,
        paidLoading: true,
        paidSuccess: false,
      };

    case TRANSFER_ESCROW_SUCCESS:
      return {
        ...state,
        paidLoading: false,
        paidSuccess: true,
        data: action.payload.data,
      };
    case TRANSFER_ESCROW_FAIL:
      return {
        ...state,
        paidLoading: false,
        paidSuccess: false,
        paidError: action.payload,
      };
    case OFFER_DISPUTE_REQUEST:
      return {
        ...state,
        disputeLoading: true,
        disputeSuccess: false,
        transactionCompleted: false,
      };

    case OFFER_DISPUTE_SUCCESS:
      return {
        ...state,
        disputeLoading: false,
        disputeSuccess: true,
        data: action.payload.data,
      };
    case OFFER_DISPUTE_FAIL:
      return {
        ...state,
        disputeLoading: false,
        disputeSuccess: false,
        disputeError: action.payload,
      };
    case ALL_TRANSACTIONS_REQUEST:
      return {
        ...state,
        disputeLoading: true,
        disputeSuccess: false,
        transactionCompleted: false,
      };

    case ALL_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        disputeLoading: false,
        disputeSuccess: true,
        allTransactions: action.payload.data,
      };
    case ALL_TRANSACTIONS_FAIL:
      return {
        ...state,
        disputeLoading: false,
        disputeSuccess: false,
        disputeError: action.payload,
      };
    case TRADE_COMPLETED:
      return {
        ...state,
        data: {
          ...state.data,
          transactionCompleted: true,
        },
      };
    case UPDATE_RELEASE_DATA:
      return {
        ...state,
        releaseData: action.payload,
      };
      case UPDATE_TRANSACTION_DATA:
        return {
          ...state,
          data: {...state.data, transaction:action.payload,doc:action.payload}
        };
  
    default:
      return state;
  }
};
