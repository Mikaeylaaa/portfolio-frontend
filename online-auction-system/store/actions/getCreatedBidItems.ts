import { BiddingItem } from "../types";

// Action Types
export const FETCH_BIDDING_ITEMS = "FETCH_BIDDING_ITEMS";
export const FETCH_BIDDING_ITEMS_SUCCESS = "FETCH_BIDDING_ITEMS_SUCCESS";
export const FETCH_BIDDING_ITEMS_FAILURE = "FETCH_BIDDING_ITEMS_FAILURE";

// Action Creators
export const fetchBiddingItems = () => ({
  type: FETCH_BIDDING_ITEMS,
});

export const fetchBiddingItemsSuccess = (items: BiddingItem[]) => ({
  type: FETCH_BIDDING_ITEMS_SUCCESS,
  payload: items,
});

export const fetchBiddingItemsFailure = (error: string) => ({
  type: FETCH_BIDDING_ITEMS_FAILURE,
  payload: error,
});
