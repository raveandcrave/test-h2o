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

//@ts-ignore
const LineChart = ({ data }) => {
  const getOrCreateTooltip = (chart: ChartJS) => {
    let tooltipEl = chart.canvas.parentNode!.querySelector("div");

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.style.background = "#ffffff";
      tooltipEl.style.borderRadius = "6px";
      tooltipEl.style.border = "2px solid #323F47";
      tooltipEl.style.color = "#323F47";
      tooltipEl.style.opacity = "1";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.position = "absolute";
      tooltipEl.style.transform = "translate(-50%, 0)";
      tooltipEl.style.transition = "all .1s ease";

      const table = document.createElement("table");
      table.style.margin = "0px";

      tooltipEl.appendChild(table);
      chart.canvas.parentNode!.appendChild(tooltipEl);
    }

    return tooltipEl;
  };

  //@ts-ignore
  const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = "0";
      return;
    }

    // Set Text
    if (tooltip.body) {
      const bodyLines: string[] = tooltip.body.map(
        (b: Record<string, string[]>) => b.lines
      );

      const tableBody = document.createElement("tbody");

      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i];

        const tr = document.createElement("tr");
        tr.style.backgroundColor = "inherit";
        tr.style.borderWidth = "0";

        const td = document.createElement("td");
        td.style.borderWidth = "0";
        td.style.color = colors.borderColor;
        td.style.fontSize = "18px";
        td.style.fontWeight = "600";
        td.style.fontFamily =
          "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;";

        const text = document.createTextNode(body);

        td.appendChild(text);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });

      const tableRoot = tooltipEl.querySelector("table");

      // Remove old children
      while (tableRoot?.firstChild) {
        tableRoot.firstChild.remove();
      }

      // Add new children
      tableRoot?.appendChild(tableBody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = "1";
    tooltipEl.style.left = positionX + tooltip.caretX + "px";
    tooltipEl.style.top = positionY + tooltip.caretY + "px";
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding =
      tooltip.options.padding + "px " + tooltip.options.padding + "px";
  };

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
            enabled: false,
            external: externalTooltipHandler,
          },
        },
      }}
    />
  );
};

export default LineChart;
