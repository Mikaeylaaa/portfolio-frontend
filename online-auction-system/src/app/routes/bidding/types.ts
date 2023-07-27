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
