import { call, put, takeLatest } from "redux-saga/effects";

import axios from "axios";
import { BiddingItem } from "../types";
import {
  UPDATE_BIDDING_ITEM_REQUEST,
  updateBiddingItemFailure,
  updateBiddingItemSuccess,
} from "../actions/updateItemAction";

const updateBiddingItemApi = async (
  itemId: number,
  newItemData: BiddingItem,
) => {
  const API_URL = process.env.API_BASE_URL;
  const response = await axios.put(`${API_URL}/items/${itemId}`, newItemData);
  return response.data;
};

function* updateBiddingItemWorker(action: any) {
  try {
    const { itemId, newItemData } = action.payload;
    yield call(updateBiddingItemApi, itemId, newItemData);
    yield put(updateBiddingItemSuccess());
  } catch (error: any) {
    yield put(updateBiddingItemFailure(error.message));
  }
}

export function* updateBiddingItemSaga() {
  yield takeLatest(UPDATE_BIDDING_ITEM_REQUEST, updateBiddingItemWorker);
}
