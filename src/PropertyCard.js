// PropertyCard.js
import React from 'react';
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <button>Book Now</button>
    </div>
  );
};

export default PropertyCard;
