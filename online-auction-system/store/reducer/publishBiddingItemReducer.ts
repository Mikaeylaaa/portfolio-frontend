import { Reducer } from "redux";
import {
  PUBLISH_ITEM_FAILURE,
  PUBLISH_ITEM_REQUEST,
  PUBLISH_ITEM_SUCCESS,
} from "../actions";
import { PublishItemsState } from "../types";

const initialState: PublishItemsState = {
  loading: false,
  error: "",
};

const publishBiddingItemReducer: Reducer<PublishItemsState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PUBLISH_ITEM_REQUEST:
      return { ...state, loading: true, error: "" };
    case PUBLISH_ITEM_SUCCESS:
      return { ...state, loading: false, error: "" };
    case PUBLISH_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default publishBiddingItemReducer;
