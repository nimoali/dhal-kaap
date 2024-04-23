import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = [5.1521, 46.1996]; // Latitude and Longitude of Somalia

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    mapRef.current = L.map('map-container').setView(center, 6); // Center map and set zoom level

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Add marker
    L.marker(center).addTo(mapRef.current);
  }, []); // Run only once on component mount

  return (
    <div>
        <h1 className="mt-10 ralative bottom-[100px]">Cimilada Somalia</h1>
    <div id="map-container" className="mt-10" style={containerStyle}></div>
    </div>
  );
}

export default Map;
