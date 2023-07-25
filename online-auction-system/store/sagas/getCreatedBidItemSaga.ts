// src/redux/sagas.ts

import { put, takeLatest, call } from 'redux-saga/effects';

import axios, { AxiosResponse } from 'axios';
import { BiddingItem } from '../types';
import { FETCH_BIDDING_ITEMS, fetchBiddingItemsFailure, fetchBiddingItemsSuccess } from '../actions';

// Function to make the API request to fetch bidding items
const fetchBiddingItemsAPI = () => {
  const apiUrl = process.env.API_BASE_URL; // Replace with your API base URL
  return axios.get<BiddingItem[]>(`${apiUrl}/items`);
};

// Saga generator function to handle the asynchronous fetch bidding items operation
function* fetchBiddingItemsAsync() {
  try {
    // Make the API request to fetch bidding items
    const response: AxiosResponse = yield call(fetchBiddingItemsAPI);

    // Dispatch success action with the fetched items
    yield put(fetchBiddingItemsSuccess(response.data));
  } catch (error) {
    // Dispatch failure action with the error message
    console.log('error', error);
    yield put(fetchBiddingItemsFailure('Failed to fetch bidding items.'));
  }
}

// Bidding item saga watch function
export function* getCreatedBidItemSaga() {
  // Watch for the FETCH_BIDDING_ITEMS action and call fetchBiddingItemsAsync for each action
  yield takeLatest(FETCH_BIDDING_ITEMS, fetchBiddingItemsAsync);
}
