import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function RelevanceChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const relevanceData = data?.map((item) => item.relevance);
    const labels = data?.map((item, index) => `Data Point ${index + 1}`);

    chartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Relevance",
            data: relevanceData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
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
        style={{ height: "400px", width: "100%" }}
      >
        <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

export default RelevanceChart;
