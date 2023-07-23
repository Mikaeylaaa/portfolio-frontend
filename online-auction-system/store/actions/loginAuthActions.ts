import { LoginAuthActionTypes, User } from "../types";

export const loginRequest = (user: User) => ({
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
