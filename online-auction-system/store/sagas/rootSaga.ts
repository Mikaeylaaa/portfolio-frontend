// sagas/index.ts
import { all } from "redux-saga/effects";
import { watchLogin } from "./loginAuthSaga";
import { watchLogout } from "./logoutAuthSaga";
import { biddingItemSaga } from "./biddingItemSaga";
import { getCreatedBidItemSaga } from "./getCreatedBidItemSaga";
import { watchFetchExistingItems } from "./fetchExistingItemsSaga";
import { watchDeleteItem } from "./deleteItemsSaga";
import { updateBiddingItemSaga } from "./updateItemSaga";
import { publishBiddingItemSaga } from "./publishItemSaga";
import { watchFetchPublishedItems } from "./fetchPublishItemSaga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    biddingItemSaga(),
    getCreatedBidItemSaga(),
    watchFetchExistingItems(),
    watchDeleteItem(),
    updateBiddingItemSaga(),
    publishBiddingItemSaga(),
    watchFetchPublishedItems()
  ]);
}
