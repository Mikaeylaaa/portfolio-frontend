// store/types.ts
export interface User {
  email: string;
  password: string;
}

export interface RootState {
  auth: AuthState; // Add other state slices here if you have more reducers
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export enum RegisterAuthActionTypes {
  REGISTER_REQUEST = "REGISTER_REQUEST",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
}

export enum LoginAuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}