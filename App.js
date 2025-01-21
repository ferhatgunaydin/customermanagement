
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleLocationChange = (e) => {
    const locationId = e.target.value;
    setSelectedLocation(locationId);
    // Fetch buildings for the selected location
    // Example: fetch(`/api/buildings?locationId=${locationId}`);
  };

  const handleBuildingChange = (e) => {
    const buildingId = e.target.value;
    setSelectedBuilding(buildingId);
    // Fetch rooms for the selected building
    // Example: fetch(`/api/rooms?buildingId=${buildingId}`);
  };

  return (
    <div className="container">
      <h2>Customer Room Management</h2>
      <div>
        <h3>Select Location</h3>
        <select onChange={handleLocationChange}>
          <option value="">Select a location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      {selectedLocation && (
        <div>
          <h3>Select Building</h3>
          <select onChange={handleBuildingChange}>
            <option value="">Select a building</option>
            {buildings.map((building) => (
              <option key={building.id} value={building.id}>
                {building.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedBuilding && (
        <div>
          <h3>Building Details</h3>
          <p>Building ID: {selectedBuilding}</p>
          {/* Add more details or actions here */}
        </div>
      )}
    </div>
  );
};

export default App;
