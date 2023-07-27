import { LoginAuthActionTypes } from "../types";

export const loginRequest = (user: { email: string; password: string }) => ({
  type: LoginAuthActionTypes.LOGIN_REQUEST,
  payload: user,
});

export const loginSuccess = () => ({
  type: LoginAuthActionTypes.LOGIN_SUCCESS,
});

export const loginFailure = (error: string) => ({
  type: LoginAuthActionTypes.LOGIN_FAILURE,
  payload: error,
});
