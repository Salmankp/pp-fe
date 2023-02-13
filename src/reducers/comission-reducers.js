import {
  COMISSION_REQUEST_SEND,
  COMISSION_REQUEST_SUCCESS,
  COMISSION_REQUEST_FAIL
} from "../constants/comission-constants";

export const getComission = (state = { buy: [] }, action) => {
  switch (action.type) {
    case COMISSION_REQUEST_SEND:
      return { loading: true };
    case COMISSION_REQUEST_SUCCESS:
      return {
        loading: false,
        sucess: true,
        sellComission: action.payload
      };
    case COMISSION_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
