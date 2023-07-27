import { DepositMoneyForm, UserInfo } from "../types";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const CREATE_DEPOSIT_REQUEST = "CREATE_DEPOSIT_REQUEST";
export const CREATE_DEPOSIT_SUCCESS = "CREATE_DEPOSIT_SUCCESS";
export const CREATE_DEPOSIT_FAILURE = "CREATE_DEPOSIT_FAILURE";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: UserInfo[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const createDepositRequest = (values: DepositMoneyForm) => ({
  type: CREATE_DEPOSIT_REQUEST,
  payload: values,
});

export const createDepositSuccess = () => ({
  type: CREATE_DEPOSIT_SUCCESS,
});

export const createDepositFailure = (error: string) => ({
  type: CREATE_DEPOSIT_FAILURE,
  payload: error,
});
