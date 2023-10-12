export type DivisionType = "B2B" | "B2C" | "summary";
export type MoneyOperationType =
  | "revenue"
  | "expanses"
  | "income"
  | "debt"
  | "total";

export interface MoneyOperation {
  name: MoneyOperationType;
  color: string;
  nameRu: string;
}
