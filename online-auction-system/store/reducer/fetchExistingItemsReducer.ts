import {
  FETCH_EXISTING_ITEMS_FAILURE,
  FETCH_EXISTING_ITEMS_SUCCESS,
} from "../actions";
import { BiddingItem } from "../types";

interface ExistingBidItemState {
  items: BiddingItem[];
  loading: boolean;
  error: string;
}

const initialState: ExistingBidItemState = {
  items: [],
  loading: false,
  error: "",
};

const fetchExistingItemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_EXISTING_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_EXISTING_ITEMS_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

export default fetchExistingItemsReducer;
