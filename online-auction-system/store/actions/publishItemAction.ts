// Action Types
export const PUBLISH_ITEM_REQUEST = "PUBLISH_ITEM_REQUEST";
export const PUBLISH_ITEM_SUCCESS = "PUBLISH_ITEM_SUCCESS";
export const PUBLISH_ITEM_FAILURE = "PUBLISH_ITEM_FAILURE";

// Action Creators
export const publishItemRequest = (itemId: number) => ({
  type: PUBLISH_ITEM_REQUEST,
  payload: itemId
});

export const publishItemSuccess = () => ({
  type: PUBLISH_ITEM_SUCCESS,
});

export const publishItemFailure = (error: string) => ({
  type: PUBLISH_ITEM_FAILURE,
  payload: error,
});
