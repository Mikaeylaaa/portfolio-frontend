import { takeLatest, put } from "redux-saga/effects";
import { RegisterAuthActionTypes, User } from "../types";
import {
  registerSuccess,
  registerFailure,
} from "../actions/registerAuthActions";
import axios from "axios";

function* registerUser(action: {
  type: RegisterAuthActionTypes;
  payload: User;
}) {
  const apiUrl = process.env.API_BASE_URL;
  const debugMode = process.env.DEBUG === "true"; // Ensure boolean value for DEBUG

  try {
    yield axios.post(`${apiUrl}/register`, action.payload);
    yield put(registerSuccess());
  } catch (error: any) {
    yield put(registerFailure(error.message));
  }
}

export function* registerAuthSaga() {
  yield takeLatest(RegisterAuthActionTypes.REGISTER_REQUEST, registerUser);
}
