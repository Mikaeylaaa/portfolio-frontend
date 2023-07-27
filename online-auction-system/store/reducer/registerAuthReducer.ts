// store/authReducer.ts
import { Reducer } from "redux";
import { RegisterAuthActionTypes, RegisterAuthState } from "../types";

const initialRegisterAuthState: RegisterAuthState = {
  user: null,
  loading: false,
  error: null,
};

const registerAuthReducer: Reducer<RegisterAuthState> = (
  state = initialRegisterAuthState,
  action,
) => {
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

export default registerAuthReducer;
