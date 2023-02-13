import { AFTER_POST_MESSAGE, GET_CHATS } from "../constants/chat-contstants";

export const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload };
    case AFTER_POST_MESSAGE:
      return { ...state, chats: [...state.chats, ...action.payload] };
    default:
      return state;
  }
};
