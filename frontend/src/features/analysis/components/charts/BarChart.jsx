import React from "react";
// Import the Chart.js components
import {
  Chart as ChartJS,
  CategoryScale, // For x-axis categories
  LinearScale, // For y-axis numeric values
  BarElement, // The bars themselves
  Title, // For chart title
  Tooltip, // For hover tooltips
  Legend, // For the legend
} from "chart.js";

// Import the Bar component from react-chartjs-2
import { Bar } from "react-chartjs-2";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Data mocking coming from server
const siteData = [
  { site: "Site 1", pm: 10.2 },
  { site: "Site 2", pm: 12.5 },
  { site: "Site 3", pm: 11.8 },
  { site: "Site 4", pm: 9.7 },
  { site: "Site 5", pm: 13.3 },
  { site: "Site 6", pm: 10.9 },
  { site: "Site 7", pm: 35.4 },
  { site: "Site 8", pm: 12.1 },
  { site: "Site 9", pm: 10.6 },
  { site: "Site 10", pm: 9.9 },
  { site: "Site 11", pm: 150.7 },
  { site: "Site 12", pm: 11.2 },
];

const BarChart = () => {
  const labels = siteData.map((item) => item.site);
  const avgPM = siteData.map((item) => item.pm);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "PM2.5 Concentration (μg/m³)",
        data: avgPM,
        backgroundColor: avgPM.map((value) => {
          // EPA colors for different PM2.5 levels
          if (value <= 12) return "rgba(0, 228, 0, 0.6)"; // Good
          if (value <= 35.4) return "rgba(255, 255, 0, 0.6)"; // Moderate
          if (value <= 55.4) return "rgba(255, 126, 0, 0.6)"; // Unhealthy for sensitive groups
          if (value <= 150.4) return "rgba(255, 0, 0, 0.6)"; // Unhealthy
          if (value <= 250.4) return "rgba(143, 63, 151, 0.6)"; // Very unhealthy
          return "rgba(126, 0, 35, 0.6)"; // Hazardous
        }),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "PM2.5 Levels by Monitoring Site",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "PM2.5 Concentration (μg/m³)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Monitoring Sites",
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
