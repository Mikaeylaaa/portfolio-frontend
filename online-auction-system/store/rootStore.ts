// store/index.ts
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { registerAuthSaga } from "./sagas/registerAuthSaga";
import { loginAuthSaga } from "./sagas/loginAuthSaga";
import registerAuthReducer from "./reducer/registerAuthReducer";
import loginAuthReducer from "./reducer/loginAuthReducer";
import logoutAuthReducer from "./reducer/logoutAuthReducer";
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import biddingItemReducer from "./reducer/biddingItemReducer";
import getCreatedBidItemsReducer from "./reducer/getCreatedBidItemsReducer";
import { biddingItemSaga } from "./sagas/biddingItemSaga";
import fetchExistingItemsReducer from "./reducer/fetchExistingItemsReducer";
import deleteItemReducer from "./reducer/deleteItemReducer";
import updateItemReducer from "./reducer/updateItemReducer";

const rootReducer = combineReducers({
  loginAuth: loginAuthReducer,
  registerAuth: registerAuthReducer,
  logoutAuth: logoutAuthReducer,
  biddingItemsState: biddingItemReducer,
  createdBidItemsState: getCreatedBidItemsReducer,
  existingBidItemsState: fetchExistingItemsReducer,
  deleteItemsState: deleteItemReducer,
  updateItemsState: updateItemReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(registerAuthSaga);
sagaMiddleware.run(loginAuthSaga);
sagaMiddleware.run(rootSaga);

export default store;
