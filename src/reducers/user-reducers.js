import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_SETTINGS,
  ENABLE_2FA,
  DISABLE_2FA
} from "../constants/user-constants";

export const userRegisterReducer = (state = {

}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, userInfo: { ...state.userInfo, data: { ...state.userInfo.data, user: action.payload } } };
    case UPDATE_SETTINGS:
      const setting = { ...action.payload };
      return { ...state, userInfo: { ...state.userInfo, data: { ...state.userInfo.data, notificationSettings: { ...state.userInfo.data?.notificationSettings, ...setting } } } };
    case ENABLE_2FA:
      return { ...state, userInfo: { ...state.userInfo, token: action.payload, data: { ...state.userInfo.data, user: { ...state.userInfo.data.user, enable2FA: true } } } }
    case DISABLE_2FA:
      return { ...state, userInfo: { ...state.userInfo, data: { ...state.userInfo.data, user: { ...state.userInfo.data.user, enable2FA: false } } } }
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userGetReducer = (state = {}, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
