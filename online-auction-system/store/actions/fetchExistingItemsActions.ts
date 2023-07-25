// store/actions/biddingItemsActions.ts

import { BiddingItem } from "../types";

export const FETCH_EXISTING_ITEMS = "FETCH_EXISTING_ITEMS";
export const FETCH_EXISTING_ITEMS_SUCCESS = "FETCH_EXISTING_ITEMS_SUCCESS";
export const FETCH_EXISTING_ITEMS_FAILURE = "FETCH_EXISTING_ITEMS_FAILURE";

export const fetchExistingItems = () => ({
  type: FETCH_EXISTING_ITEMS,
});

export const fetchExistingItemsSuccess = (items: BiddingItem[]) => ({
  type: FETCH_EXISTING_ITEMS_SUCCESS,
  payload: items,
});

export const fetchExistingItemsFailure = (error: string) => ({
  type: FETCH_EXISTING_ITEMS_FAILURE,
  payload: error,
});
