import {
  UPDATE_BIDDING_ITEM_FAILURE,
  UPDATE_BIDDING_ITEM_REQUEST,
  UPDATE_BIDDING_ITEM_SUCCESS,
} from "../actions/updateItemAction";

interface UpdateItemsState {
  loading: boolean;
  error: string | null;
}

const initialState: UpdateItemsState = {
  loading: false,
  error: null,
};

const updateItemReducer = (
  state: UpdateItemsState = initialState,
  action: any,
): UpdateItemsState => {
  switch (action.type) {
    case UPDATE_BIDDING_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_BIDDING_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_BIDDING_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updateItemReducer;
