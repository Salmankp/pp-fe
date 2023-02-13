import { GET_ALL_NOTIFICATIONS,GET_ALL_NOTIFICATIONS_USER } from "../constants/notifications";
export const notificationReducer = (
  state = { notifications: [], unRead: 0 },
  action
) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload?.notifications,
        unRead: action.payload?.unread,
      };
    case GET_ALL_NOTIFICATIONS_USER:
      return {
        ...state,
        notifications: [
            ...state.notifications,action.paylaod
        ],
      };
    default:
      return state;
  }
};
