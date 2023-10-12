import "./styles.scss";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import LineChart from "@/components/LineChart/LineChart";
import { types } from "@/helpers/generateData";
import numberWithSpaces from "@/helpers/numberWithSpaces";
import { useDivisionStore } from "@/hooks/useDivisionStore";
import { MoneyOperationType } from "@/types";

const defaultLegendValues = {
  revenue: 0,
  expanses: 0,
  income: 0,
  debt: 0,
  total: 0,
};

const ResultsChart = () => {
  const divisionData = useDivisionStore((state) => state.divisionData);
  const activeDivisionType = useDivisionStore(
    (state) => state.activeDivisionType
  );

  const [legendValues, setLegendValues] =
    useState<Record<MoneyOperationType, number>>(defaultLegendValues);

  useEffect(() => {
    const getLegendValues = () => {
      const legendValues = {
        revenue: 0,
        expanses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };

      const filteredByDivisionType = divisionData.filter(
        (item) => item.divisionType === activeDivisionType
      );

      filteredByDivisionType.forEach((item) => {
        legendValues[item.type] += item.amount;
      });

      return legendValues;
    };

    setLegendValues(getLegendValues());
  }, [activeDivisionType, divisionData]);

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
          <div
            className="results-chart__tabs-item"
            onClick={() => toast("Функционал в разработке")}
          >
            Неделя
          </div>
          <div
            className="results-chart__tabs-item"
            onClick={() => toast("Функционал в разработке")}
          >
            Месяц
          </div>
          <div
            className="results-chart__tabs-item results-chart__tabs-item--active"
            onClick={() => toast("Функционал в разработке")}
          >
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
              <div className="results-chart__legend-amount">
                ₽ {numberWithSpaces(legendValues[item.name])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsChart;
