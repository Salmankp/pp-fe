import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_FAV_REQUEST,
  ADD_FAV_SUCCESS,
  ADD_FAV_FAIL,
  REMOVE_FAV_REQUEST,
  REMOVE_FAV_SUCCESS,
  REMOVE_FAV_FAIL,
  UPDATE_SETTINGS,
  ENABLE_2FA,
  DISABLE_2FA
} from "../constants/user-constants";
import axios from "axios";
import { success, error } from "../utils/toastr";
import { toast } from "react-toastify";
import { post } from "../utils/ajax";
import { getTags } from "./tags-actions";
import store from "./../store";
import { getComission } from "./comission-actions";
import platform from "platform";

const renderFormValues = values => {
  const newValues = {};

  for (const [name, value] of Object.entries(values)) {
    newValues[name] = value || "";
  }
  return newValues;
};
export const register = values => async dispatch => {
  const { email, password, phoneNumber, type } = renderFormValues(values);
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/signup`,
      // { email, password, phoneNumber, type },
      email? { email, password, type: 'EMAIL' } :  { 'phoneNumber':phoneNumber.replace(/\s/g, "") , password, type: 'PHONE' },

      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });
    return data;
  } catch (er) {
    error(er.response && er.response.data.message
      ? er.response.data.message
      : er.message);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        er.response || er.response.data.message
          ? er.response.data.error.status.errmsg//er.response.data
          : er.message
    });
  }
};
export const login =
  ({ email, password, phoneNumber }) =>
  async dispatch => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST
      });
      const token = store?.getState()?.loggedInUser?.userInfo?.token;

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/users/login`,
        email? { email, password } :  { 'phoneNumber':phoneNumber.replace(/\s/g, "") , password },
       
        config
      );
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
      });

      dispatch(getComission());
      dispatch(getTags());
      localStorage.setItem("price_limit", 2);
      localStorage.setItem("ipAddress", data?.data?.ipAddress);
      return data;
    } catch (er) {
      error(er.response && er.response.data.message
        ? er.response.data.message
        : er.message);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          er.response && er.response.data.message
            ? er.response.data.message
            : er.message
      });
    }
  };

export const logoutApi = _id => async dispatch => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/logout`,
      { _id },
      config
    );

    dispatch({
      type: USER_LOGOUT_SUCCESS
    });
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateUser = (option, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${id}`,
      option,
      config
    );

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.data.doc
    });
    if (data.status === "success") success("Profile Updated Successfully");
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.message
    });
    
  }
};
export const updateUserSettings = (body) => async dispatch => {
  try {
  
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/notificationSetting`,
      body,
      config
    );

    dispatch({
      type: UPDATE_SETTINGS,
      payload: {...body}
    });
    if (data.status === "success") success("Settings Updated Successfully");
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.message
    });
  }
};

export const getUser = _id => async dispatch => {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
  dispatch({
    type: GET_USER_REQUEST
  });

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${_id}`,
      config
    );
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.data
    });
  } catch (er) {
    console.log(er);
    error(er.response.data.message);

    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const addFav = id => async dispatch => {
  try {
    dispatch({
      type: ADD_FAV_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/add-favorites`,
      { _id: id },
      config
    );
    console.log(data);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.data
    });
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: ADD_FAV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const removeFav = id => async dispatch => {
  try {
    dispatch({
      type: REMOVE_FAV_REQUEST
    });
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/remove-favorites`,
      { _id: id },
      config
    );

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.data
    });
  } catch (er) {
    error(er.response.data.message);

    dispatch({
      type: REMOVE_FAV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const KYCVerification = data => async dispatch => {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
  const _id = store?.getState()?.loggedInUser?.userInfo?.data?.user?._id;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/documentVerification`,
      data,
      config
    );

    if (res?.data?.result?.ResultCode === "0810") {
      success("User Verified Successfuly!");
      dispatch(getUser(_id));
    }
  } catch (err) {
    error("Failed to Verify");
    return err?.response?.data?.error;
  }
};

export const emailVerification = body => async dispatch => {
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/emailVerify`,
    body
  );

  return data;
};

export const addQuestion = body => async dispatch => {
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/security_questions/addQuestion`,
    body
  );
  if (data.status === "success") success("Questions Added Successfully");

  return data;
};

export const sendForgetEmail = body => async dispatch => {
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/sendForgetEmail`,
    body
  );
  if (data.status === "success") success(data?.message);
  else if (data.status === "error") error(data?.message);
  return data;
};

export const updateForgetPassword = body => async dispatch => {
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/updateForgetPass`,
    body
  );
  if (data.status === "success") success(data?.message);
  else if (data.status === "error") error(data?.message);
  return data;
};

export const generateQR = () => async dispatch => {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
 
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/generate-qr`,
      config
    );
    return data
  } catch (er) {
    console.log(er);
    error(er.response.data.message);
  }
};

export const verifyOpTP = ({code, optpLoginToken}) => async dispatch => {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
 
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/verify-optp`,{code , optpLoginToken},
      config,
    );
    dispatch({
      type: ENABLE_2FA,
      payload: data?.token
    })
    return data
  } catch (er) {
    console.log(er);
    error(er.response.data.message);
  }
};

export const disable2FA = () => async dispatch => {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
 
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/remove-2fa`,
      config,
    );
    dispatch({
      type: DISABLE_2FA,
      payload: false
    })
    return data
  } catch (er) {
    console.log(er);
    error(er.response.data.message);
  }
};

export const send2FACode = body => async dispatch => {
  try {
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/sendVerificationCode`,
    body
  );
  if (data.status === "success") success(data?.message);
  else if (data.status === "error") error(data?.message);
  return data;
  } catch (er) {
    error(er.response && er.response.data.message
      ? er.response.data.message
      : er.message);
  }
};

export const verify2FACode = body => async dispatch => {
  try {
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/verify2FACode`,
    body
  );
  if (data.status === "success") success(data?.data?.message);
  else if (data.status === "error") error(data?.data?.message);
  return data;
} catch (er) {
  error(er.response && er.response.data.message
    ? er.response.data.message
    : er.message);
  }
};

export const addPhoneEmailWith2FACode = body => async dispatch => {
  try {
    const { data } = await post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/addPhoneEmail2FACode`,
      body
    );
    return data;
  } catch (er) {
    error(er.response && er.response.data.message
      ? er.response.data.message
      : er.message);
  }
};

export const updateUserSession = body => async dispatch => {
  try {
    const loggedUser = store?.getState()?.loggedInUser?.userInfo;
  let config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
      "Content-Type": "application/json"
    }
  };
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/activeSession/${loggedUser?.data?.user?._id}`,
    {session: body},
    config
  );
  await dispatch(getUser(loggedUser?.data?.user?._id));
  return data;
} catch (er) {
  error(er.response && er.response.data.message
    ? er.response.data.message
    : er.message);
  }
};

export const deleteUserSession = sessionId => async dispatch => {
  try {
    const loggedUser = store?.getState()?.loggedInUser?.userInfo;
  let config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
      "Content-Type": "application/json"
    }
  };
  const { data } = await axios.delete(
    `${process.env.REACT_APP_API_URL}/api/v1/users/activeSession/${loggedUser?.data?.user?._id}/${sessionId}`,
    config
  );
  return data;
} catch (er) {
  error(er.response && er.response.data.message
    ? er.response.data.message
    : er.message);
  }
};

export const updateUserActivity = (action, userId = null) => async dispatch => {
  try {
    if(!userId) {
      userId = store?.getState()?.loggedInUser?.userInfo?.data?.user?._id;
    }
    const res = await axios.get("http://ip-api.com/json");
    const activity = {
      signedIn: new Date(),
      browser: platform.name,
      country: res.data.country,
      city: res.data.city,
      ipAddress: localStorage.getItem("ipAddress"),
      action
    }
  const { data } = await post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/userActivity/${userId}`,
    {activity: activity}
  );
  return data;
} catch (er) {
  error(er.response && er.response.data.message
    ? er.response.data.message
    : er.message);
  }
};
