// PropertyDetail.js
import React from 'react';
import "./PropertyDetail.css";

const PropertyDetail = ({ match }) => {
  // Retrieve the property ID from the route params
  const propertyId = match.params.id;

  // Fetch property details using the propertyId
  // You can replace this with your actual data fetching logic

  const property = {
    id: propertyId,
    name: 'Property Name',
    description: 'Property Description',
    image: 'property.jpg',
    // Add more details as needed
  };

  return (
    <>

    <div className="property-detail">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <button>Book Now</button>
    </div>
    </>
  );
};

export default PropertyDetail;
