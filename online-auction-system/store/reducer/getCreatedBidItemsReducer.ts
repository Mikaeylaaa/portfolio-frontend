import { Reducer } from "redux";
import {
  FETCH_BIDDING_ITEMS_FAILURE,
  FETCH_BIDDING_ITEMS_SUCCESS,
} from "../actions";
import { BiddingItem } from "../types";

interface CreatedBidItemState {
  biddingItems: BiddingItem[];
  error: string | null;
}

const initialState: CreatedBidItemState = {
  biddingItems: [],
  error: null,
};

const getCreatedBidItemsReducer: Reducer<CreatedBidItemState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_BIDDING_ITEMS_SUCCESS:
      return {
        ...state,
        biddingItems: action.payload,
        error: null,
      };
    case FETCH_BIDDING_ITEMS_FAILURE:
      return {
        ...state,
        biddingItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getCreatedBidItemsReducer;
