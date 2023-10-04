import React from 'react';
import "./PropertyCard.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-info">
    
      </div>
      <div className="image-container">
        <button className="image-btn"><b>For Rent</b></button>
        <FavoriteBorderIcon className="FavoriteBorderIcon"/>
        <img src={property.image} alt={property.name} />
      </div>
      <div className="location">
        <LocationOnIcon className="location-icon" />
        8558 Pecan St.
      </div>
      <div className="property-name">
        <h2>{property.name}</h2>
      </div>
      <div className="icon-row">
        <LocationCityIcon className="LocationCityIcon" />
        <BedIcon className="BedIcon" />
        <BathtubIcon className="BathtubIcon" />
        <ZoomOutMapIcon className="ZoomOutMapIcon" />
      </div>
      <div className='icon-name'>
        <h4>3 room</h4>
        <h4>4 Bed</h4>
        <h4>1 Bath</h4>
        <h4>732 sft</h4>
      </div>
      <hr/>
      <div className='last-detail'>
        $7,255 /month
        <button style={{backgroundColor:"blue", color:"white"}}>Read More</button>
      </div>
    </div>
  );
};

export default PropertyCard;
