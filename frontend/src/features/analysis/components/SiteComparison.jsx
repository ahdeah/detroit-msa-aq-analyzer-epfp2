import React from "react";
import BarChart from "./charts/BarChart";

const SiteComparison = () => {
  return (
    <div>
      <h1>Site Comparisons</h1>
      <p>
        <strong>
          How does air quality (PM2.5 levels) compare across the 12 monitoring
          sites in the Detroit metro area?
        </strong>
      </p>
      <BarChart />
    </div>
  );
};

export default SiteComparison;
