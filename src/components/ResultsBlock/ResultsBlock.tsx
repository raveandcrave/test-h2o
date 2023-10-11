import "./styles.scss";
import cn from "classnames";

import numberWithSpaces from "@/helpers/numberWithSpaces";
import { DivisionType, useDivisionStore } from "@/hooks/useDivisionStore";
import ArrowIcon from "../../icons/arrow.svg?react";

interface ResultsBlockProps {
  division: DivisionType;
  amount: number;
  percent: number;
}

const ResultsBlock: React.FC<ResultsBlockProps> = ({
  division,
  amount,
  percent,
}) => {
  const { activeDivisionType, setActiveDivisionType } = useDivisionStore();
  const isActive = division === activeDivisionType;
  const isNegative = amount < 0;

  return (
    <div
      onClick={() => setActiveDivisionType(division)}
      className={cn("result-block", { "result-block--active": isActive })}
    >
      <p
        className={cn("result-block__percent", {
          "result-block__percent--active": isActive,
          "result-block__percent--negative": !isActive && isNegative,
        })}
      >
        <ArrowIcon
          className={cn({
            "result-block__arrow-active": isActive,
            "result-block__arrow-negative": isNegative,
          })}
        />{" "}
        {percent} %
      </p>
      <p className="result-block__amount">₽ {numberWithSpaces(amount)}</p>
      <p className="result-block__name">
        {division === "summary" ? "Итоги" : division}
      </p>
    </div>
  );
};

export default ResultsBlock;
