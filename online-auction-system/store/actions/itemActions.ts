import axios, { AxiosResponse } from "axios";
import { BiddingItem } from "@/app/routes/bidding/types";
import { AddBiddingItemActionTypes } from "../types";

// Add action creators
export const addBiddingItem = (biddingItem: BiddingItem) => ({
  type: AddBiddingItemActionTypes.ADD_BIDDING_ITEM,
  payload: biddingItem,
});

export const addBiddingItemSuccess = (insertedItem: BiddingItem) => ({
  type: AddBiddingItemActionTypes.ADD_BIDDING_ITEM_SUCCESS,
  payload: insertedItem,
});

export const addBiddingItemFailure = (errorMessage: string) => ({
  type: AddBiddingItemActionTypes.ADD_BIDDING_ITEM_FAILURE,
  payload: errorMessage,
});
