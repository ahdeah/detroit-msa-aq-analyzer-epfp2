import React from "react";
// Import the Chart.js components
import {
  Chart as ChartJS,
  CategoryScale, // For x-axis categories
  LinearScale, // For y-axis numeric values
  PointElement, // For data points
  LineElement, // For the lines
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Import the Line component from react-chartjs-2
import { Line } from "react-chartjs-2";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function generatePMReadings(mean, count = 100) {
  const readings = [];
  for (let i = 0; i < count; i++) {
    // Simulate daily variation using normal distribution approximation
    let value = (Math.random() * 2 - 1) * 2 + mean; // mean ± ~2
    value = Math.max(5, Math.min(25, value)); // clamp between 5 and 25 µg/m³
    readings.push(parseFloat(value.toFixed(1)));
  }
  return readings;
}

const siteData = [
  { site: "Site 1", pm: generatePMReadings(10.2) },
  { site: "Site 2", pm: generatePMReadings(12.5) },
  { site: "Site 3", pm: generatePMReadings(11.8) },
  { site: "Site 4", pm: generatePMReadings(9.7) },
  { site: "Site 5", pm: generatePMReadings(13.3) },
  { site: "Site 6", pm: generatePMReadings(10.9) },
  { site: "Site 7", pm: generatePMReadings(11.4) },
  { site: "Site 8", pm: generatePMReadings(12.1) },
  { site: "Site 9", pm: generatePMReadings(10.6) },
  { site: "Site 10", pm: generatePMReadings(9.9) },
  { site: "Site 11", pm: generatePMReadings(13.7) },
  { site: "Site 12", pm: generatePMReadings(11.2) },
];

const LineChart = () => {
  // Chart data
  const chartData = {
    labels: ["January", "February", "March", "April"],
    datasets: siteData.map((item) => ({
      label: item.site,
      data: item.pm,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    })),
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Air Quality by Site",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "PM2.5",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;
