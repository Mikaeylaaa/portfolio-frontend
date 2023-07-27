// reducers/authReducer.ts
// Action Types
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// Initial State
const initialState = {
  isAuthenticated: true, // Set to true or false based on your authentication logic
};

// Auth Reducer
const logoutAuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default logoutAuthReducer;
