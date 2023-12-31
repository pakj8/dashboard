import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function IntensityChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const intensityData = data?.map((item) => item.intensity);
    const labels = data?.map((item, index) => `Data Point ${index + 1}`);

    chartRef.current.chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Intensity",
            data: intensityData,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return (
    <div className="container mx-auto px-1 mt-10">
      <div
        className="border rounded-md overflow-x-auto p-5"
        style={{ height: "100%", width: "100%" }}
      >
        <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

export default IntensityChart;
