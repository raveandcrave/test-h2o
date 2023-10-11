import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const LineChart = ({ data }) => {
  return (
    <Line
      datasetIdKey="label"
      data={{
        datasets: data,
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "point",
        },
        elements: {
          point: {
            radius: 1,
            hoverRadius: 12,
            hoverBorderWidth: 3,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#ffffff",
            titleColor: "#323f47",
            bodyColor: "#323f47",
            // callbacks: {
            //   title: (tooltip) => "",
            //   label: () => "",
            // },
          },
        },
      }}
    />
  );
};

export default LineChart;
