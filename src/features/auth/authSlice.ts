import { Auth } from 'model/Auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
/**Payload */
export interface LoginPayload {
  email: string;
  password: string;
}
export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
/**Initial Sate Auth*/
export interface AuthSate {
  isLoggedIn: boolean;
  logging?: boolean;
  currentAuth?: Auth;
  signing?: boolean;
}
const initialState: AuthSate = {
  isLoggedIn: false,
  logging: false,
  currentAuth: undefined,
  signing: false,
};

/**Auth Slice */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSocial(state) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<Auth>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentAuth = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentAuth = undefined;
    },
    signup(state, action: PayloadAction<SignupPayload>) {
      state.signing = true;
    },
    signupSuccess(state, action: PayloadAction<Auth>) {
      state.signing = false;
      state.currentAuth = action.payload;
    },
    signupFailed(state, action: PayloadAction<string>) {
      state.signing = false;
    },
  },
});
/**export Actions name */
export const authActions = authSlice.actions;
/**export Selectors */
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLogging = (state: RootState) => state.auth.logging;
export const selectCurrentAuth = (state: RootState) => state.auth.currentAuth;
// default export Reducer:
const authReducer = authSlice.reducer;
export default authReducer;
