// actions
import {
  COMISSION_REQUEST_SEND,
  COMISSION_REQUEST_SUCCESS,
  COMISSION_REQUEST_FAIL
} from "../constants/comission-constants";
import { get } from "../utils/ajax";
import axios from "axios";
export const getComission = () => async dispatch => {
  try {
    dispatch({
      type: COMISSION_REQUEST_SEND
    });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/comission`
    );
    console.log(data);
    dispatch({
      type: COMISSION_REQUEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COMISSION_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
