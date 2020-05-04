import {
  AUTH_LOGIN_REQUEST, AUTH_LOGIN_RESPONSE, AUTH_LOGIN_FAILED, AUTH_LOGOUT,
} from './auth-constants';

const initialState = {
  loading: false,
  isLoggedIn: false,
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case AUTH_LOGIN_RESPONSE:
      return {
        loading: false,
        isLoggedIn: true,
        userData: action.payload.data,
      };
    case AUTH_LOGIN_FAILED:
      return {
        loading: false,
        isLoggedIn: false,
        userData: action.payload.data,
      };
    case AUTH_LOGOUT:
      return {
        isLoggedIn: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
