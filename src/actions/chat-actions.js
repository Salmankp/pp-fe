import axios from "axios";
import { GET_CHATS, AFTER_POST_MESSAGE } from "../constants/chat-contstants";

export const getChats = (transactionId) => async (dispatch) => {
  const request = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/v1/chat/getChats/${transactionId}`
  );
  const res = request.data;

  dispatch({
    type: GET_CHATS,
    payload: res,
  });
};

export const afterPostMessage = (payload) => (dispatch) => {
  dispatch({
    type: AFTER_POST_MESSAGE,
    payload: payload,
  });
};
