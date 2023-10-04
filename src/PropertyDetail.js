
import React from 'react';
import "./PropertyDetail.css";

const PropertyDetail = ({ match }) => {
  
  const propertyId = match.params.id;

  const property = {
    id: propertyId,
    name: 'Property Name',
    description: 'Property Description',
    image: 'property.jpg',
   
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
