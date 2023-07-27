// Action Types
const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// Action Creators
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
