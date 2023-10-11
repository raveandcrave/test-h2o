import "./styles.scss";
import { useEffect } from "react";
import dayjs from "dayjs";

import ProblemZones from "../ProblemZones";
import Results from "../Results";
import { useDivisionStore } from "../../hooks/useDivisionStore";
import { generateDivisionData } from "../../helpers/generateData";

const ReportPage = () => {
  const setDivisionData = useDivisionStore((state) => state.setDivisionData);

  useEffect(() => {
    const divisionData = generateDivisionData(dayjs.monthsShort());
    setDivisionData(divisionData);
  }, []);

  return (
    <div className="report-page">
      <h1 className="report-page__title">Сводный отчет</h1>
      <div className="report-page__wrapper">
        <Results />
        <ProblemZones />
      </div>
    </div>
  );
};

export default ReportPage;
