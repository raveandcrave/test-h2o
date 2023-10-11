import { Division } from "@/hooks/useDivisionStore";
import { randomNumber } from "./randomNumber";

export const types = [
  { name: "revenue", color: "hsla(125, 49%, 63%, 1)", nameRu: "Выручка" },
  { name: "expanses", color: "hsla(187, 71%, 53%, 1)", nameRu: "Затраты" },
  { name: "income", color: "hsla(205, 87%, 61%, 1)", nameRu: "Прибыль" },
  { name: "debt", color: "hsla(54, 91%, 57%, 1)", nameRu: "Задолженность" },
  { name: "total", color: "hsla(265, 96%, 72%, 1)", nameRu: "Итого" },
];

export const generateDivisionData = (dates: string[]): Division[] => {
  const data = dates.flatMap((date) => {
    const dateDivisions: Division[] = [];

    for (const type of types) {
      const b2b: Division = {
        date,
        type: type.name,
        amount: type.name === "debt" ? 0 : randomNumber(-150000, 400000),
        divisionType: "B2B",
      };

      const b2c: Division = {
        date,
        type: type.name,
        amount: type.name === "debt" ? 0 : randomNumber(-150000, 400000),
        divisionType: "B2C",
      };

      const summary: Division = {
        date,
        type: type.name,
        amount: b2b.amount + b2c.amount,
        divisionType: "summary",
      };

      dateDivisions.push(b2b, b2c, summary);
    }

    return dateDivisions;
  });

  return data;
};
