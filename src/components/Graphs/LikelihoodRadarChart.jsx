import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function LikelihoodBarChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((item, index) => `Data Point ${index + 1}`),
          datasets: [
            {
              label: "Likelihood",
              data: data.map((item) => item.likelihood),
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
              max: 5, // Set the maximum value for the y-axis (adjust as needed)
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="container mx-auto px-1 mt-10">
      <div className="border rounded-md overflow-x-auto p-5">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default LikelihoodBarChart;
