// sagas.ts
import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_EXISTING_ITEMS,
  FETCH_EXISTING_ITEMS_FAILURE,
  FETCH_EXISTING_ITEMS_SUCCESS,
} from "../actions";
import { BiddingItem } from "../types";

const getExistingItems = async (
  itemName: string,
  itemPrice: number,
  timeWindowHours: number,
  timeWindowMinutes: number,
) => {
  try {
    const API_URL = process.env.API_BASE_URL; // Replace with your API base URL
    const response = await axios.get<BiddingItem[]>(
      `${API_URL}/existing-items`,
      {
        params: { itemName, itemPrice, timeWindowHours, timeWindowMinutes },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch existing bid items.");
  }
};

function* fetchExistingItemsSaga(action: any) {
  try {
    const { itemName, itemPrice, timeWindowHours, timeWindowMinutes } =
      action.payload;
    const existingItems: AxiosResponse = yield call(
      getExistingItems,
      itemName,
      itemPrice,
      timeWindowHours,
      timeWindowMinutes,
    );

    // Dispatch success action with the fetched data
    yield put({ type: FETCH_EXISTING_ITEMS_SUCCESS, payload: existingItems });
  } catch (error: any) {
    // Dispatch failure action if there's an error
    yield put({ type: FETCH_EXISTING_ITEMS_FAILURE, payload: error.message });
  }
}

export function* watchFetchExistingItems() {
  yield takeLatest(FETCH_EXISTING_ITEMS, fetchExistingItemsSaga);
}
