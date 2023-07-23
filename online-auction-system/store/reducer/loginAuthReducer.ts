// store/authReducer.ts
import { Reducer } from "redux";
import { AuthState, LoginAuthActionTypes } from "../types";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const loginAuthReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case LoginAuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LoginAuthActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, error: null };
    case LoginAuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loginAuthReducer;
