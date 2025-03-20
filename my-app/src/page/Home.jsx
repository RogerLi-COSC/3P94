import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../styling/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      
      {/* Search Bar Section */}
      <section className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search locations..." />
          <button>Search</button>
        </div>
        <div className="filter-buttons">
          <button>Buy</button>
          <button>Rent</button>
          <button>Price Range</button>
          <button>Beds & Baths</button>
          <button>Home Type</button>
          <button>Filters</button>
        </div>
      </section>
      
      {/* Property Listings Section */}
      <section className="listings-section">
        <h2>Viewing 16 of 16 Homes for Sale in Niagara</h2>
        <div className="listings-container">
          <div className="listing-card">
            <img src="/images/property1.jpg" alt="Luxury Home" />
            <h3>472 Gage St</h3>
            <p>Niagara On The Lake, ON, L0S 1J0 Canada</p>
            <span className="price">$6,942,991</span>
            <p>5 Bedrooms • 9 Bathrooms</p>
          </div>
          <div className="listing-card">
            <img src="/images/property2.jpg" alt="Land Property" />
            <h3>N/A Dorchester Road</h3>
            <p>Niagara Falls, ON, L2G 7W7 Canada</p>
            <span className="price">$2,232,922</span>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.646040949852!2d-79.09376568450208!3d43.089557979145116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d344529b5b5b15%3A0x4d1e3d8e5b5e5e3!2sNiagara%20Falls!5e0!3m2!1sen!2sca!4v1617722957757!5m2!1sen!2sca"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
