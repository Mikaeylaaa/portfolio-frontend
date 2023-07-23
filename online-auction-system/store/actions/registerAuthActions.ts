import { User, RegisterAuthActionTypes } from "../types";

export const registerRequest = (user: User) => ({
  type: RegisterAuthActionTypes.REGISTER_REQUEST,
  payload: user,
});

export const registerSuccess = () => ({
  type: RegisterAuthActionTypes.REGISTER_SUCCESS,
});

export const registerFailure = (error: string) => ({
  type: RegisterAuthActionTypes.REGISTER_FAILURE,
  payload: error,
});
