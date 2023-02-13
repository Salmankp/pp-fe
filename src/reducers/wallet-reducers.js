import { 
    GET_WALLETS_REQUEST,
    GET_WALLETS_SUCCESS,
    GET_WALLETS_FAIL,
    GET_ALL_WALLET_OF_USER_REQUEST,
    GET_ALL_WALLET_OF_USER_SUCCESS,
    GET_ALL_WALLET_OF_USER_FAIL
 } from "../constants/wallet-constants";

export const walletReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WALLETS_REQUEST:
			return { loading: true };
		case GET_WALLETS_SUCCESS:
			return { loading: false, walletpayload: action.payload };
		case GET_WALLETS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const walletSingleUserReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_WALLET_OF_USER_REQUEST:
                return { loading: true };
            case GET_ALL_WALLET_OF_USER_SUCCESS:
                return { loading: false, walletUserpayload: action.payload };
            case GET_ALL_WALLET_OF_USER_FAIL:
                return { loading: false, error: action.payload };
            default:
                return state;
        }
}