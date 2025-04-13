import React from "react";
import Map from "./charts/Map";

const GeographicMap = () => {
  return (
    <div>
      <h1>Geographic Map</h1>
      <p>
        <strong>
          Which monitoring sites consistently report the highest and lowest air
          quality, and how do these relate to their geographic locations?
        </strong>
      </p>
      <Map />
    </div>
  );
};

export default GeographicMap;
