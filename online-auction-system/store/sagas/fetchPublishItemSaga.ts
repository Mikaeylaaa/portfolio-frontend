import { put, call, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  FETCH_PUBLISHED_ITEMS_REQUEST,
  fetchPublishedItemsFailure,
  fetchPublishedItemsSuccess,
} from "../actions/fetchPublishedItemAction";

const API_URL = process.env.API_BASE_URL;

function* fetchPublishedItemsSaga() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      `${API_URL}/published-items`
    );
    yield put(fetchPublishedItemsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPublishedItemsFailure(error.message));
  }
}

export function* watchFetchPublishedItems() {
  yield takeLatest(FETCH_PUBLISHED_ITEMS_REQUEST, fetchPublishedItemsSaga);
}
