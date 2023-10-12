import "./styles.scss";

import ResultsBlock from "@/components/ResultsBlock";
import ResultsChart from "@/components/ResultsChart";
import { Division, useDivisionStore } from "@/hooks/useDivisionStore";
import { DivisionType } from "@/types";

const Results = () => {
  const divisionsTypes = useDivisionStore((state) => state.divisionTypes);
  const divisionData = useDivisionStore((state) => state.divisionData);

  const getYearAmount = (divisionData: Division[]) => {
    const total: Record<DivisionType, number> = {
      B2B: 0,
      B2C: 0,
      summary: 0,
    };

    for (const dataItem of divisionData) {
      if (dataItem.type === "total") {
        total[dataItem.divisionType] += dataItem.amount;
      }
    }

    return total;
  };

  const yearAmount = getYearAmount(divisionData);

  return (
    <div className="results">
      <div className="results-list">
        {divisionsTypes.map((divisionType) => (
          <ResultsBlock
            key={divisionType}
            amount={yearAmount[divisionType]}
            percent={50}
            division={divisionType}
          />
        ))}
      </div>
      <ResultsChart />
    </div>
  );
};

export default Results;
