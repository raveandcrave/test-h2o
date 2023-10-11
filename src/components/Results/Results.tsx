import "./styles.scss";

import ResultsBlock from "../ResultsBlock";
import { useDivisionStore } from "../../hooks/useDivisionStore";

const Results = () => {
  const divisions = useDivisionStore((state) => state.divisions);

  return (
    <div className="results">
      <ResultsBlock division="summary" amount={10157764} percent={21.5} />
      {divisions.map((division) => (
        <ResultsBlock
          key={division.name}
          amount={division.amount}
          percent={division.percent}
          division={division.name}
        />
      ))}
    </div>
  );
};

export default Results;
