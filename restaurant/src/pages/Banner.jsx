// Banner.jsx
import React from 'react';
import './styles/Banner.css'; 

function Banner() {
  return (
    <div className="banner">
      <img src="/path-to-your-image.jpg" alt="Restaurant Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Experience the Taste of Elegance</h1>
        <p>Delicious Moments Await</p>
        <a href="/menu" className="banner-button">View Our Menu</a>
      </div>
    </div>
  );
}

export default Banner;
