// types.ts
export interface BiddingItem {
  id: number;
  itemName: string;
  itemPrice: number;
  timeWindowHours: number;
  timeWindowMinutes: number;
  state: "draft" | "published";
  endTime?: number; // Add the endTime field
}

export interface DerivedBiddingItem {
  id: number;
  itemName: string;
  itemPrice: number;
  timeWindow: string; // Representing the time window as a formatted string (e.g., "2h 30m")
}

// Create a separate type without the 'id' property
export type BiddingItemWithoutId = Omit<BiddingItem, "id">;
