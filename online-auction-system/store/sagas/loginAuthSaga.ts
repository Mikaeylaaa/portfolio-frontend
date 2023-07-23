// store/authSaga.ts
import { takeLatest, put } from "redux-saga/effects";
import { LoginAuthActionTypes, User } from "../types";
import { loginSuccess, loginFailure } from "../actions/loginAuthActions";
import axios from "axios";

function* loginUser(action: { type: LoginAuthActionTypes; payload: User }) {
  const apiUrl = process.env.API_BASE_URL;
  const debugMode = process.env.DEBUG === "true"; // Ensure boolean value for DEBUG

  try {
    // Make the GET request to your backend login API endpoint
    yield axios.get(
      `${apiUrl}/login?email=${action.payload.email}&password=${action.payload.password}`
    );
    yield put(loginSuccess());
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* loginAuthSaga() {
  yield takeLatest(LoginAuthActionTypes.LOGIN_REQUEST, loginUser);
}
