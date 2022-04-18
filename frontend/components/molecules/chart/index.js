import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";
import { months, namedColor } from "../utils";
export default function ChartComponent({
  dataDataSet,
  labelDataset,
  type,
  titleChart,
  typeUnit,
}) {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, namedColor(10));
    gradient.addColorStop(0.65, namedColor(11));
    gradient.addColorStop(1, namedColor(12));
    const labels = months({ count: 7 });
    const data = {
      //   labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: labelDataset,
          data: dataDataSet,
          fill: true,
          borderWidth: 2,
          borderColor: namedColor(9),
          lineTension: 0.2,
          pointBackgroundColor: namedColor(9),
          pointRadius: 3,
        },
      ],
    };

    const config = {
      type: type,
      data,
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: typeUnit,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, ticks) {
                return "Rp " + value;
              },
            },
          },
        },
      },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="w-full">
      <span className="text-base font-bold">{titleChart}</span>
      <canvas
        id="myChart"
        ref={canvasEl}
        className="relative h-[30vh] w-[80vw]"
      />
    </div>
  );
}
