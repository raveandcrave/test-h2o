import { create } from "zustand";

import { DivisionType, MoneyOperationType } from "@/types";

const defaultDivisionData = [] as Division[];
const defaultDivisionTypes: DivisionType[] = ["summary", "B2B", "B2C"];

export interface Division {
  divisionType: DivisionType;
  amount: number;
  date: string;
  type: MoneyOperationType;
}

interface DivisionStore {
  divisionTypes: DivisionType[];
  divisionData: Division[];
  activeDivisionType: DivisionType;
  setActiveDivisionType: (name: DivisionType) => void;
  setDivisionData: (data: Division[]) => void;
}

export const useDivisionStore = create<DivisionStore>((set) => ({
  divisionTypes: defaultDivisionTypes,
  divisionData: defaultDivisionData,
  activeDivisionType: "summary",
  setActiveDivisionType: (name) => set({ activeDivisionType: name }),
  setDivisionData: (data) => set({ divisionData: data }),
}));
