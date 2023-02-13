import {
  TRANSFER_ESCROW_REQUEST,
  TRANSFER_ESCROW_SUCCESS,
  TRANSFER_ESCROW_FAIL,
  TRANSFER_BUYER_FAIL,
  TRANSFER_BUYER_REQUEST,
  TRANSFER_BUYER_SUCCESS,
  TRANSFER_BUYER_COIN_TYPE_SUCCESS,
} from "../constants/usd-escrow-constants";

export const transferEscrowReducers = (
  state = { transferEscrow: [] },
  action
) => {
  switch (action.type) {
    case TRANSFER_ESCROW_REQUEST:
      return {
        ...state,
        paidLoading: true,
        paidSuccess: false,
        transferEscrow: [],
      };
    case TRANSFER_ESCROW_SUCCESS:
      return {
        ...state,
        transferEscrow: action.payload.data,
        paidLoading: false,
        paidSuccess: true,
        paidError: ''
      };
    case TRANSFER_ESCROW_FAIL:
      return {
        ...state,
        paidLoading: false,
        paidSuccess: false,
        paidError: action.payload,
      };
    default:
      return state;
  }
};

export const transferBuyerwReducers = (
  state = { transferBuyer: [] },
  action
) => {
  switch (action.type) {
    case TRANSFER_BUYER_REQUEST:
      return { ...state, loading: true, transferBuyer: [] };
    case TRANSFER_BUYER_SUCCESS:
      return {
        ...state,
        loading: false,
        transferBuyer: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case TRANSFER_BUYER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
