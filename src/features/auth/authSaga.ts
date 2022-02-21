import { token } from 'constants/token';
import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { push } from 'connected-react-router';
import { authActions } from 'features/auth/authSlice';
import { Auth } from 'model/Auth';
import { all, call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { LoginPayload } from './authSlice';
function* handleLogin(payload: LoginPayload) {
  try {
    const response: Auth = yield call(authApi.login, payload);
    localStorage.setItem(token.access, response.accessToken);
    localStorage.setItem(token.refresh, response.refreshToken);
    yield put(authActions.loginSuccess(response));
  } catch (err: any) {
    if (err.response) {
      const status = err.response.status;
      const data = err.response.data;
      if (status === 401) {
        yield put(push(`/email/confirm`));
      } else if (status === 400) {
        console.log(status, data);
        yield put(authActions.loginFailed(data));
      }
    } else if (err.request) {
      console.log('Request: ', err.request);
    } else {
      console.log('ERROR: ', err.message);
    }
  }
}
function* handleLogout() {
  try {
    yield call(authApi.logout);
    localStorage.clear();
  } catch (err: any) {
    if (err.response) {
      const { error } = err.response.data;
      console.log(error);
    } else if (err.request) {
      console.log('Request: ', err.request);
    } else {
      console.log('ERROR: ', err.message);
    }
    // yield put(authActions.loginFailed(err.message));
  }
}
function* watchLoginFlow() {
  //login
  while (true) {
    const loginAction: PayloadAction<LoginPayload> = yield take(authActions.login.type); //doi dispatch
    yield fork(handleLogin, loginAction.payload); //thi thuc hien
    //logout
    // yield take(authActions.logout.type);
    // yield fork(handleLogout);
  }
}
export default function* authSaga() {
  yield all([fork(watchLoginFlow), takeLatest(authActions.logout.type, handleLogout)]);
}
