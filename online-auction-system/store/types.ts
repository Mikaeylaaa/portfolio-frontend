// store/types.ts
export interface User {
  email: string;
  password: string;
}

export interface BiddingItem {
  id: number;
  itemName: string;
  itemPrice: number;
  timeWindowHours: number;
  timeWindowMinutes: number;
  state: 'draft' | 'published'
}

export interface RootState {
  loginAuth: LoginAuthState;
  registerAuth: RegisterAuthState;
  logoutAuth: {
    isAuthenticated: boolean;
  };
  biddingItemsState: BiddingItemState;
  createdBidItemsState: CreatedBidItemState;
  existingBidItemsState: ExistingBidItemState;
  deleteItemsState: DeleteItemsState;
  updateItemsState: UpdateItemsState;
  publishItemsState: PublishItemsState;
  fetchPublishedItemsState: FetchPublishedItemState;
}
export interface LoginAuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface RegisterAuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface BiddingItemState {
  items: BiddingItem | null;
  loading: boolean;
  error: string | null;
}

export interface CreatedBidItemState {
  biddingItems: BiddingItem[];
  error: string | null;
}

export interface ExistingBidItemState {
  items: BiddingItem[];
  loading: boolean;
  error: string | null;
}

export interface DeleteItemsState {
  loading: boolean;
  error: string | null;
}

export interface UpdateItemsState {
  loading: boolean;
  error: string | null;
}

export interface PublishItemsState {
  loading: boolean;
  error: string | null;
}

export interface FetchPublishedItemState {
  publishedItems: BiddingItem[];
  loading: boolean;
  error: string | null;
}

export enum RegisterAuthActionTypes {
  REGISTER_REQUEST = "REGISTER_REQUEST",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
}

export enum LoginAuthActionTypes {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
}

export enum AddBiddingItemActionTypes {
  // Define action type constants
  ADD_BIDDING_ITEM = "ADD_BIDDING_ITEM",
  ADD_BIDDING_ITEM_SUCCESS = "ADD_BIDDING_ITEM_SUCCESS",
  ADD_BIDDING_ITEM_FAILURE = "ADD_BIDDING_ITEM_FAILURE",
}
