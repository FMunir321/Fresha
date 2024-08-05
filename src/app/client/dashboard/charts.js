// components/ChartComponent.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateData = (days) => {
  const today = new Date();
  const labels = [];
  const data = [];

  if (days === 7) {
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - (days - 1 - i));
      labels.push(
        date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })
      );
      data.push(Math.floor(Math.random() * 100)); // Random data for illustration
    }
  } else if (days === 30) {
    for (let i = 0; i < days; i += 3) {
      const date = new Date(today);
      date.setDate(today.getDate() - (days - 1 - i));
      labels.push(
        date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })
      );
      data.push(Math.floor(Math.random() * 100)); // Random data for illustration
    }
  }

  return { labels, data };
};

const ChartComponent = ({ timeRange }) => {
  const { labels, data } = generateData(timeRange);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        fill: false,
        backgroundColor: "#00a36d",
        borderColor: "#00a36d",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;
