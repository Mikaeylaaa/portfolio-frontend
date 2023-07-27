// store/sagas/depositSaga.ts
import { put, call, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { DepositMoneyForm } from "../types";
import {
  CREATE_DEPOSIT_REQUEST,
  FETCH_USERS_REQUEST,
  createDepositFailure,
  createDepositSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../actions/depositAction";

const API_URL = process.env.API_BASE_URL;
// Fetch users API call
function fetchUsersApi() {
  return axios.get(`${API_URL}/user`).then((response) => response.data);
}

function* fetchUsers() {
  try {
    const users: AxiosResponse = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users.data));
  } catch (error) {
    yield put(fetchUsersFailure("Error fetching users data"));
  }
}

// Create deposit API call
function createDepositApi(values: DepositMoneyForm) {
  return axios.post(`${API_URL}/deposits`, values);
}

function* createDeposit(action: any) {
  try {
    yield call(createDepositApi, action.payload);
    yield put(createDepositSuccess());
  } catch (error) {
    yield put(createDepositFailure("Error adding deposit"));
  }
}

// Watchers
export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export function* watchCreateDeposit() {
  yield takeLatest(CREATE_DEPOSIT_REQUEST, createDeposit);
}
