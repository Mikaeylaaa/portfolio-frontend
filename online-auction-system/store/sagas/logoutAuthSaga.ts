// sagas/authSaga.ts
import { put, takeEvery } from 'redux-saga/effects';
import { logoutSuccess } from '../actions';

// Action Types
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

// Redux Saga Worker
function* logoutSaga() {
  try {
    // Perform any logout-related tasks (e.g., clearing tokens or user data)

    // For example, if using JWT, you can clear the token from local storage or cookies.
    // localStorage.removeItem('authToken');

    // Dispatch the logout success action after successful logout
    yield put(logoutSuccess());

    // Optionally, redirect to the home page or login page after logout
    // You can use Next.js Router or other methods for redirection.
    // For example:
    // yield put(push('/login')); // If you are using react-router-dom
  } catch (error) {
    // Handle any errors that occur during logout
    console.error('An error occurred during logout.', error);
  }
}

// Redux Saga Watcher
export function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logoutSaga);
}
