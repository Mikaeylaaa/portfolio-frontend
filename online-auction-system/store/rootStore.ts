// store/index.ts
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./reducer/registerAuthReducer";
import { registerAuthSaga } from "./sagas/registerAuthSaga";
import { loginAuthSaga } from "./sagas/loginAuthSaga";

const rootReducer = combineReducers({
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(registerAuthSaga);
sagaMiddleware.run(loginAuthSaga);

export default store;
