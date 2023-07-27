import { Reducer } from "redux";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../actions/fetchUserAction";
import { UserInfo } from "../types";

interface UserInfoState {
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserInfoState = {
  user: null,
  loading: false,
  error: null,
};

const fetchUserReducer: Reducer<UserInfoState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUserReducer;
