import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

export default function Navbar() {
  const [language, setLanguage] = useState("English");

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Luxury Estates</Link>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/search" className="nav-link">Search</Link></li>
          <li><Link to="/agents" className="nav-link">Agents</Link></li>
          <li><Link to="/messages" className="nav-link">Messages</Link></li>
          <li><Link to="/profile" className="nav-link">Profile</Link></li>
        </ul>

        {/* Move Language Switcher Here */}
        <div className="language-switcher">
          <button 
            className={language === "English" ? "active" : ""}
            onClick={() => setLanguage("English")}
          >
            English
          </button>
          <button 
            className={language === "French" ? "active" : ""}
            onClick={() => setLanguage("French")}
          >
            Français
          </button>
        </div>
      </div>
    </nav>
  );
}
