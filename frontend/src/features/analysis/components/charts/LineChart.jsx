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

const LineChart = () => {
  return <div>LineChart</div>;
};

export default LineChart;
