import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function IntensityLikelihoodChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Intensity vs. Likelihood",
            data: data?.map((item) => ({
              x: item.intensity,
              y: item.likelihood,
            })),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            type: "linear",
            position: "left",
          },
        },
      },
    });
  }, [data]);

  return (
    <div className="container mx-auto px-1 mt-10 ">
      <div className="border  rounded-md overflow-x-auto p-5 h-full">
        <canvas ref={chartRef} width={400} height={400} />
      </div>
    </div>
  );
}

export default IntensityLikelihoodChart;
