import React, { useState } from "react";
import "../styling/ProductListings.css"; 
import PropertyCard from "../components/PropertyCard.jsx";

const PropertyListings = () => {
    return (
      <div className="search-page">
        <div className="filters-container">
          <h3>Filters</h3>
          <input type="text" placeholder="Search locations..." className="search-input" />
          <button className="filter-btn">For Sale</button>
          <button className="filter-btn">For Rent</button>
          <button className="filter-btn">Price Range</button>
          <button className="filter-btn">Beds & Baths</button>
          <button className="filter-btn">Home Type</button>
          <button className="filter-btn">More Filters</button>
        </div>
        <div className="property-listings">
          <PropertyCard 
                        image="/Images/house1.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house6.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house5.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                        image="/Images/house4.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house3.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house2.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                        image="/Images/house1.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house6.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house5.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                        image="/Images/house4.jpg" 
                        title="472 Gage St" 
                        location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                        price="$6,942,991" 
                        details="5 Bedrooms • 9 Bathrooms" 
                      />
            <PropertyCard 
                          image="/Images/house3.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
            <PropertyCard 
                          image="/Images/house2.jpg" 
                          title="472 Gage St" 
                          location="Niagara On The Lake, ON, L0S 1J0 Canada" 
                          price="$6,942,991" 
                          details="5 Bedrooms • 9 Bathrooms" 
                        />
        </div>
      </div>
    );
  };
  
  export default PropertyListings;
  