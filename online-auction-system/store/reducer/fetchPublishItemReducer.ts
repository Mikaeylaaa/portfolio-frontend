import { Reducer } from "redux";
import {
  FETCH_PUBLISHED_ITEMS_FAILURE,
  FETCH_PUBLISHED_ITEMS_REQUEST,
  FETCH_PUBLISHED_ITEMS_SUCCESS,
} from "../actions/fetchPublishedItemAction";
import { BiddingItem } from "../types";

interface FetchPublishedItemState {
  publishedItems: BiddingItem[];
  loading: boolean;
  error: string | null;
}
const initialState: FetchPublishedItemState = {
  publishedItems: [],
  loading: false,
  error: null,
};

const fetchPublishItemReducer: Reducer<FetchPublishedItemState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_PUBLISHED_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_PUBLISHED_ITEMS_SUCCESS:
      return {
        ...state,
        publishedItems: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_PUBLISHED_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchPublishItemReducer;
