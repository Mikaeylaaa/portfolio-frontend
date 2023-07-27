// sagas/userSaga.js
import { put, call, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from "../actions/fetchUserAction";

const API_URL = process.env.API_BASE_URL;

const fetchUserApi = () => {
  return axios.get(`${API_URL}/user`).then((response) => response.data);
};

function* fetchUsersSaga() {
  try {
    const user: AxiosResponse = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user.data));
  } catch (error) {
    yield put(fetchUserFailure("Error fetching user data"));
  }
}

export function* watchFetchUser() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUsersSaga);
}
