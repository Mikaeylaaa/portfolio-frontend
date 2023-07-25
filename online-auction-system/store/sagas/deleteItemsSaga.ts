import { put, takeEvery } from "redux-saga/effects";

import axios from "axios";
import {
  DELETE_ITEM_REQUEST,
  deleteItemFailure,
  deleteItemRequest,
  deleteItemSuccess,
} from "../actions/deleteItemAction";

function* deleteItemAsync(action: ReturnType<typeof deleteItemRequest>) {
  try {
    const itemId = action.payload;
    // Make the DELETE API call
    const API_URL = process.env.API_BASE_URL;
    yield axios.delete(`${API_URL}/items/${itemId}`);
    yield put(deleteItemSuccess());
  } catch (error: any) {
    yield put(deleteItemFailure(error.message));
  }
}

export function* watchDeleteItem() {
  yield takeEvery(DELETE_ITEM_REQUEST, deleteItemAsync);
}
