// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CityTabs from './CityTabs'; // Import CityTabs here
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';

const cities = ['New York', 'Mumbai', 'Paris', 'London'];

const properties = [
  { id: 1, name: 'Property 1', description: 'Description 1', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=700&h=-1&s=1' },
  { id: 2, name: 'Property 2', description: 'Description 2', image: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg' },
  { id: 3, name: 'Property 3', description: 'Description 3', image: 'https://www.kayak.co.in/rimg/himg/ab/64/d9/expediav2-38713-6584af-750938.jpg?width=720&height=576&crop=true' },
  { id: 4, name: 'Property 4', description: 'Description 4', image: 'https://www.thelalit.com/wp-content/uploads/2021/07/Kolkata-Facade-M.jpg' },
  { id: 5, name: 'Property 5', description: 'Description 5', image: 'https://www.lottehotel.com/content/dam/lotte-hotel/global/common/company/jeju-hotel.jpg' },
  { id: 6, name: 'Property 6', description: 'Description 6', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/261345900.jpg?k=e2e77ca61ee3d105a811ce785b691e0202f067c825c36b056fd93f7e45f9866e&o=&hp=1' },
  // Add more properties with unique IDs
];

function App() {
  // Define the onTabClick function here
  const onTabClick = (city) => {
    // Implement your logic here
    console.log(`Clicked on ${city}`);
  };

  return (
    <div>
      <BrowserRouter>
        <CityTabs cities={cities} onTabClick={onTabClick} /> {/* Place CityTabs outside of Routes */}
        <Routes>
          <Route path="/" element={<PropertyList properties={properties.slice(0, 3)} />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
