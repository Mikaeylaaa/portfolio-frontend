import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { PUBLISH_ITEM_REQUEST, publishItemFailure, publishItemRequest, publishItemSuccess } from "../actions";


function* handlePublishItem(action: ReturnType<typeof publishItemRequest>) {
  try {
    const itemId = action.payload;
    // Make an API call to update the bidding item's state to 'published'
    const API_URL = process.env.API_BASE_URL;
    yield call(axios.put, `${API_URL}/bidding-items/${itemId}/publish`);

    // Dispatch success action
    yield put(publishItemSuccess());
  } catch (error) {
    // Dispatch failure action with the error message
    yield put(publishItemFailure("Error publishing item."));
  }
}

export function* publishBiddingItemSaga() {
  yield takeLatest(PUBLISH_ITEM_REQUEST, handlePublishItem);
}
