import { BiddingItem } from "../types";

export const UPDATE_BIDDING_ITEM_REQUEST = "UPDATE_BIDDING_ITEM_REQUEST";
export const UPDATE_BIDDING_ITEM_SUCCESS = "UPDATE_BIDDING_ITEM_SUCCESS";
export const UPDATE_BIDDING_ITEM_FAILURE = "UPDATE_BIDDING_ITEM_FAILURE";

export const updateBiddingItemRequest = (
  itemId: number,
  newItemData: BiddingItem
) => ({
  type: UPDATE_BIDDING_ITEM_REQUEST,
  payload: { itemId, newItemData },
});

export const updateBiddingItemSuccess = () => ({
  type: UPDATE_BIDDING_ITEM_SUCCESS,
});

export const updateBiddingItemFailure = (error: string) => ({
  type: UPDATE_BIDDING_ITEM_FAILURE,
  payload: error,
});
