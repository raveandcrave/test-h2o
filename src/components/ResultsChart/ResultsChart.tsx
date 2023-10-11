import "./styles.scss";

import LineChart from "../LineChart/LineChart";
import { types } from "../../helpers/generateData";
import { useDivisionStore } from "../../hooks/useDivisionStore";

const ResultsChart = () => {
  const divisionData = useDivisionStore((state) => state.divisionData);
  const activeDivisionType = useDivisionStore(
    (state) => state.activeDivisionType
  );

  const prepareDataForChart = () => {
    const filteredByDivisionType = divisionData.filter(
      (item) => item.divisionType === activeDivisionType
    );

    const chartDivisionData = types.map((type) => {
      return {
        label: type.nameRu,
        backgroundColor: type.color,
        borderColor: type.color,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: type.color,
        cubicInterpolationMode: "monotone",
        data: filteredByDivisionType
          .filter((item) => item.type === type.name)
          .map((item) => ({ x: item.date, y: item.amount })),
      };
    });

    return chartDivisionData;
  };

  const chartDivisionData = prepareDataForChart();

  return (
    <div className="results-chart">
      <div className="results-chart__header">
        <h2 className="results-chart__title">Общая статистика</h2>
        <div className="results-chart__tabs">
          <div className="results-chart__tabs-item">Неделя</div>
          <div className="results-chart__tabs-item">Месяц</div>
          <div className="results-chart__tabs-item results-chart__tabs-item--active">
            Год
          </div>
        </div>
      </div>
      <div className="results-chart__wrapper">
        <LineChart data={chartDivisionData} />
      </div>
      <div className="results-chart__legend">
        {types.map((item) => (
          <div key={item.name} className="results-chart__legend-item">
            <div
              className="results-chart__legend-circle"
              style={{ backgroundColor: item.color }}
            >
              {item.name === "expanses" || item.name === "income" ? "!" : null}
            </div>
            <div className="results-chart__legend-content">
              <div className="results-chart__legend-label">{item.nameRu}</div>
              <div className="results-chart__legend-amount">₽ 10157764</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsChart;
