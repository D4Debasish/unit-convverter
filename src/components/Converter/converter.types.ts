export type Category = "length" | "weight" | "temperature";

export interface Unit {
  label: string;
  symbol: string;
  toBase?: number;
}
