import axios from "axios";
// actions
import {
  GET_ALL_NOTIFICATIONS,
  GET_ALL_NOTIFICATIONS_USER
} from "../constants/notifications";
// import { error, success } from "../utils/toastr";
import store from "../store";


export const getNotifications = () => async (dispatch) => {
  try {
    const token = store?.getState()?.loggedInUser?.userInfo?.token
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/notifications/getNotification`, config
    );
    dispatch({
      type: GET_ALL_NOTIFICATIONS,
      payload: data?.data
    })

  } catch (err) {
    console.log(err);
  }

};

export const getNotificationsUser = () => async (dispatch) => {
  try {
    const token = store?.getState()?.loggedInUser?.userInfo?.token
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/notifications/getNotification`, config
    );
    dispatch({
      type: GET_ALL_NOTIFICATIONS_USER,
      payload: data?.data
    })

  } catch (err) {
    console.log(err);
  }

};

export const markAsRead = () => async (dispatch) => {
  try {
    const token = store?.getState()?.loggedInUser?.userInfo?.token
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/notifications/readNotifications`,{}, config
    );
    dispatch(getNotifications())

  } catch (err) {
    console.log(err);
  }

};
