import { takeEvery, put, all } from 'redux-saga/effects';

import { AUTH_LOGIN } from './auth-constants';
import { loginRequest, loginResponse, loginFailed } from './auth-actions';
import { setAuthToken, fakeLogin } from '../../utils/auth';

function* loginWorker(action) {
  const { username, password } = action.payload;
  yield put(loginRequest(username, password));
  const response = yield fakeLogin(username, password);
  if (response.status) {
    yield put(loginResponse(response));
    setAuthToken(response.token);
  } else {
    yield put(loginFailed(response));
  }
}

function* loginWatcher() {
  yield takeEvery(AUTH_LOGIN, loginWorker);
}

export default function* appSagas() {
  yield all([
    loginWatcher(),
  ]);
}
