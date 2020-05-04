import {
  AUTH_LOGIN_REQUEST, AUTH_LOGIN_RESPONSE, AUTH_LOGIN_FAILED, AUTH_LOGIN, AUTH_LOGOUT,
} from './auth-constants';


export const login = (username, password) => ({
  type: AUTH_LOGIN,
  payload: {
    username,
    password,
  },
});

export const loginRequest = (username, password) => ({
  type: AUTH_LOGIN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const loginResponse = (response) => ({
  type: AUTH_LOGIN_RESPONSE,
  payload: {
    data: response,
  },
});

export const loginFailed = (response) => ({
  type: AUTH_LOGIN_FAILED,
  payload: {
    data: response,
  },
});

export const logout = () => ({
  type: AUTH_LOGOUT,
});
