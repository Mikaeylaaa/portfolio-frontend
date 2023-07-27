import { put, takeEvery } from "redux-saga/effects";
import { logoutSuccess } from "../actions";

// Action Types
const LOGOUT_REQUEST = "LOGOUT_REQUEST";

// Redux Saga Worker
function* logoutSaga() {
  try {
    yield put(logoutSuccess());
  } catch (error) {
    // Handle any errors that occur during logout
    console.error("An error occurred during logout.", error);
  }
}

// Redux Saga Watcher
export function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logoutSaga);
}
