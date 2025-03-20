import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Luxury Estates</Link>
        
        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/search" className="nav-link" onClick={() => setIsMenuOpen(false)}>Search</Link></li>
          <li><Link to="/agents" className="nav-link" onClick={() => setIsMenuOpen(false)}>Agents</Link></li>
          <li><Link to="/messages" className="nav-link" onClick={() => setIsMenuOpen(false)}>Messages</Link></li>
          <li><Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}
