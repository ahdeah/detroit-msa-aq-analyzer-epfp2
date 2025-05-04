import React from "react";
import Map from "./charts/Map";

/**
 * A simple container component for the map visualization
 * 
 * This component serves as a wrapper for the map, providing context
 * and explanations about what the map shows. As you develop your
 * application, you can expand this component to include:
 * 
 * - Additional controls for the map (filters, toggles, etc.)
 * - Data loading logic
 * - Error handling
 * - Analytical insights about the visualization
 */
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
    
      
      {/* The map component */}
      <Map />
    </div>
  );
};

export default GeographicMap;