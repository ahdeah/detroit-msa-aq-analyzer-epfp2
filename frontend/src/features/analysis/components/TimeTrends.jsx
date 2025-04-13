import React from "react";
import LineChart from "./charts/LineChart";

const TimeTrends = () => {
  return (
    <div>
      <h1>Time Trends</h1>
      <p>
        <strong>
          Are there consistent temporal patterns in air quality across all sites
          (daily, weekly, or monthly trends)?
        </strong>
      </p>
      <LineChart />
    </div>
  );
};

export default TimeTrends;
