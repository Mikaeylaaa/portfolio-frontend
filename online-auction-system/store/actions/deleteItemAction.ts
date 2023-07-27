export const DELETE_ITEM_REQUEST = "items/deleteItemRequest";
export const DELETE_ITEM_SUCCESS = "items/deleteItemSuccess";
export const DELETE_ITEM_FAILURE = "items/deleteItemFailure";

export const deleteItemRequest = (itemId: number) => ({
  type: DELETE_ITEM_REQUEST,
  payload: itemId,
});

export const deleteItemSuccess = () => ({
  type: DELETE_ITEM_SUCCESS,
});

export const deleteItemFailure = (error: string) => ({
  type: DELETE_ITEM_FAILURE,
  payload: error,
});
