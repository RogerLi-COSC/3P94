import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Luxury Estates
        </Link>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
