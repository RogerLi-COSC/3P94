import React, { useState } from "react";
import "../styling/ProductListings.css"; 


const PropertyListings = () => {
  const [filters, setFilters] = useState({ search: "", type: "For Sale" });
  const [properties, setProperties] = useState([
    {
      id: 1,
      image: "/Images/house1.jpg",
      price: "$1,200,000",
      bed: 4,
      bath: 3,
      address: "123 Luxury St, Toronto, ON",
      type: "For Sale",
    },
    {
      id: 2,
      image: "/Images/house3.jpg",
      price: "$950,000",
      bed: 3,
      bath: 2,
      address: "45 Prestige Ave, Vancouver, BC",
      type: "For Sale",
    },
    {
      id: 3,
      image: "h/Images/house6.jpg",
      price: "$3,500,000",
      bed: 5,
      bath: 4,
      address: "77 Skyview, Montreal, QC",
      type: "For Rent",
    },
  ]);

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleTypeChange = (type) => {
    setFilters({ ...filters, type });
  };

  const filteredProperties = properties.filter(
    (property) =>
      property.type === filters.type &&
      property.address.toLowerCase().includes(filters.search.toLowerCase())
  );

  return (
    <div className="property-listings-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search locations..."
          value={filters.search}
          onChange={handleSearchChange}
        />
        <button
          className={filters.type === "For Sale" ? "active" : ""}
          onClick={() => handleTypeChange("For Sale")}
        >
          For Sale
        </button>
        <button
          className={filters.type === "For Rent" ? "active" : ""}
          onClick={() => handleTypeChange("For Rent")}
        >
          For Rent
        </button>
        <button>Filters</button>
        <button>Save Search</button>
      </div>

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt="Property" />
            <div className="property-info">
              <h3>{property.price}</h3>
              <p>{property.bed} Bed • {property.bath} Bath</p>
              <p>{property.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
