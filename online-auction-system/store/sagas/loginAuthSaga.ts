import { takeLatest, put, takeEvery } from "redux-saga/effects";
import { LoginAuthActionTypes, User } from "../types";
import { loginSuccess, loginFailure } from "../actions/loginAuthActions";
import axios, { AxiosResponse } from "axios";

// Define the type for the response from the login API
interface LoginResponse {
    success: boolean;
    // Add other properties in the response as needed
}

function* loginUser(action: { type: LoginAuthActionTypes; payload: User }) {
  const apiUrl = process.env.API_BASE_URL;
  const debugMode = process.env.DEBUG === "true"; // Ensure boolean value for DEBUG

  try {
    // Make the GET request to your backend login API endpoint
    const { email, password } = action.payload;
    const response: AxiosResponse<LoginResponse> = yield axios.get(`${apiUrl}/login`, {
      params: {
        email,
        password,
      },
    });
    if (response.data.success) {
      // Dispatch a success action if login is successful
      yield put(loginSuccess());
      // Redirect to the dashboard or home page using Next.js Router
    } else {
      // Dispatch an error action if login fails
      yield put({ type: "LOGIN_ERROR", payload: "Invalid email or password." });
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* loginAuthSaga() {
  yield takeLatest(LoginAuthActionTypes.LOGIN_REQUEST, loginUser);
}

export function* watchLogin() {
  yield takeEvery("LOGIN_REQUEST", loginUser);
}
