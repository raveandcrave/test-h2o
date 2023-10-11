import "./styles.scss";

import ProblemZones from "../ProblemZones";
import Results from "../Results";

const ReportPage = () => {
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
