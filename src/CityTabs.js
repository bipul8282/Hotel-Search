// CityTabs.js
import React from 'react';
import "./CityTabs.css";

const CityTabs = ({ cities, onTabClick }) => {
  return (
    <div className="city-tabs">
      {cities.map((city, index) => (
        <div
          key={index}
          className="city-tab"
          onClick={() => onTabClick(city)} // Call the onTabClick function on click
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default CityTabs;
