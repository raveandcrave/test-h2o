import { create } from "zustand";

const defaultDivisions: Division[] = [
  {
    name: "B2B",
    amount: 8615253,
    percent: 43.7,
  },
  { name: "B2C", amount: -1542511, percent: -13.7 },
];

export type DivisionName = "B2B" | "B2C" | "summary";

export interface Division {
  name: DivisionName;
  amount: number;
  percent: number;
}

interface DivisionStore {
  divisions: Division[];
  activeDivision: DivisionName;
  setActiveDivision: (name: DivisionName) => void;
}

export const useDivisionStore = create<DivisionStore>((set) => ({
  divisions: defaultDivisions,
  activeDivision: "summary",
  setActiveDivision: (name) => set({ activeDivision: name }),
}));
