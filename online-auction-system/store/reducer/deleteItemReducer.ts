import { Reducer } from "redux";
import {
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
} from "../actions/deleteItemAction";

interface DeleteItemsState {
  loading: boolean;
  error: string | null;
}

const initialState: DeleteItemsState = {
  loading: false,
  error: null,
};

const deleteItemReducer: Reducer<DeleteItemsState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default deleteItemReducer;
