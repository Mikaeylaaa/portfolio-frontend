import { put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { addBiddingItemSuccess, addBiddingItemFailure } from "../actions";
import { AddBiddingItemActionTypes, BiddingItem } from "../types";
import { ADD_BIDDING_ITEM } from "../actions/actionTypes";

function* addBiddingItemAsync(action: {
  type: AddBiddingItemActionTypes;
  payload: BiddingItem;
}) {
  const apiUrl = process.env.API_BASE_URL;

  try {
    const response: AxiosResponse = yield axios.post(
      `${apiUrl}/items`,
      action.payload,
    );
    console.log("response success ===== ", response.data);
    // Dispatch success action with the inserted item ID
    yield put(addBiddingItemSuccess(response.data));
  } catch (error) {
    // Dispatch failure action with the error message
    console.log("response error ===== ", error);
    yield put(addBiddingItemFailure("Error adding bidding item."));
  }
}

// Bidding item saga watch function
export function* biddingItemSaga() {
  yield takeLatest(ADD_BIDDING_ITEM, addBiddingItemAsync);
}
