import { Reducer } from "redux";
import {
  ADD_BIDDING_ITEM_SUCCESS,
  ADD_BIDDING_ITEM_FAILURE,
  ADD_BIDDING_ITEM,
} from "../actions/actionTypes";
import { BiddingItem, BiddingItemState } from "../types";

// Initial state for the bidding item
const initialAddBiddingItemState: BiddingItemState = {
  items: null,
  loading: false,
  error: null,
};

const biddingItemReducer: Reducer<BiddingItemState> = (
  state = initialAddBiddingItemState,
  action
) => {
  switch (action.type) {
    case ADD_BIDDING_ITEM:
        console.log('add bid item 1');
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_BIDDING_ITEM_SUCCESS:
        console.log('add bid item 2');
      // Handle the success action and update the state with the newly created item
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_BIDDING_ITEM_FAILURE:
        console.log('add bid item 3');
      // Handle the failure action and return the current state without any changes
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default biddingItemReducer;
