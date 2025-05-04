import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

// Sample data for multiple monitoring stations - all in the Detroit area
const monitoringStations = [
  {
    id: 1,
    name: "Allen Park",
    county: "Wayne",
    position: [42.228611, -83.208333],
    pm25: 6.4
  },
  {
    id: 2,
    name: "East 7 Mile",
    county: "Wayne", 
    position: [42.43084042, -83.00013754],
    pm25: 7.8
  },
  {
    id: 3,
    name: "DETROIT-SOUTHWEST",
    county: "Wayne",
    position: [42.302778, -83.106667],
    pm25: 11.1
  },
  {
    id: 4,
    name: "Dearborn",
    county: "Wayne",
    position: [42.306666, -83.148889],
    pm25: 12.5
  },
  {
    id: 5,
    name: "Oak Park",
    county: "Oakland",
    position: [42.46306341, -83.18319868],
    pm25: 8.9
  }
];

const Map = () => {
  // Center the map on downtown Detroit
  const detroitPosition = [42.331429, -83.045753];
  
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer 
        center={detroitPosition} 
        zoom={10}  // Adjusted zoom to better show Detroit area
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Map over the stations array to create multiple markers */}
        {monitoringStations.map(station => (
          <Marker 
            key={station.id}
            position={station.position}
          >
            <Popup>
              <div>
                <h4>{station.name}</h4>
                <p>County: {station.county}</p>
                <p>PM2.5: {station.pm25} μg/m³</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;