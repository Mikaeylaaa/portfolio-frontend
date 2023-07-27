import { Reducer } from "redux";
import {
  CREATE_DEPOSIT_FAILURE,
  CREATE_DEPOSIT_REQUEST,
  CREATE_DEPOSIT_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../actions/depositAction";
import { User, UserInfo } from "../types";

interface DepositState {
  users: UserInfo[];
  loading: boolean;
  error: string | null;
}

const initialState: DepositState = {
  users: [],
  loading: false,
  error: null,
};

const depositReducer: Reducer<DepositState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CREATE_DEPOSIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default depositReducer;
