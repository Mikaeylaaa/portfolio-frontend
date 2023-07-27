import { BiddingItem } from "../types";

export const FETCH_PUBLISHED_ITEMS_REQUEST = "FETCH_PUBLISHED_ITEMS_REQUEST";
export const FETCH_PUBLISHED_ITEMS_SUCCESS = "FETCH_PUBLISHED_ITEMS_SUCCESS";
export const FETCH_PUBLISHED_ITEMS_FAILURE = "FETCH_PUBLISHED_ITEMS_FAILURE";

export const fetchPublishedItemsRequest = () => ({
  type: FETCH_PUBLISHED_ITEMS_REQUEST,
});

export const fetchPublishedItemsSuccess = (items: BiddingItem[]) => ({
  type: FETCH_PUBLISHED_ITEMS_SUCCESS,
  payload: items,
});

export const fetchPublishedItemsFailure = (error: any) => ({
  type: FETCH_PUBLISHED_ITEMS_FAILURE,
  payload: error,
});
