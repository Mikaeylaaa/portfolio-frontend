// store/authReducer.ts
import { Reducer } from "redux";
import { RegisterAuthActionTypes, AuthState } from "../types";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case RegisterAuthActionTypes.REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case RegisterAuthActionTypes.REGISTER_SUCCESS:
      return { ...state, loading: false, error: null };
    case RegisterAuthActionTypes.REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
