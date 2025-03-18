import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaImage, FaList, FaTh, FaLock, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import Logo from './Logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header" onClick={toggleSidebar}>
        <img src={Logo} alt="Custom Icon" className="custom-icon" />
        {isOpen && <span>Recipe Library</span>}
      </div>

      {/* Home Item */}
      <div className="sidebar-item" onClick={() => handleNavigate('/')}>
        <FaHome className="sidebar-item-icon" />
        {isOpen && <span>Home</span>}
      </div>

      {/* Tips Item */}
      <div className="sidebar-item" onClick={() => handleNavigate('/tips')}>
        <FaImage className="sidebar-item-icon" />
        {isOpen && <span>Tips</span>}
      </div>

      {/* Discover Item */}
      <div className="sidebar-item" onClick={() => handleNavigate('/discovery')}>
        <FaList className="sidebar-item-icon" />
        {isOpen && <span>Discovery</span>}
      </div>

      {/* Recipe Item */}
      <div
        className="sidebar-item"
        onClick={() => handleNavigate('/recipe')}>
        <FaTh className="sidebar-item-icon" />
        {isOpen && <span>Recipe</span>}
      </div>

      {/* Equipment Item */}
      <div
        className="sidebar-item"
        onClick={() => handleNavigate('/equipment')}>
        <FaLock className="sidebar-item-icon" />
        {isOpen && <span>Equipment</span>}
      </div>

      {/* About Us Item */}
      <div className="sidebar-item" onClick={() => handleNavigate('/about')}>
        <FaInfoCircle className="sidebar-item-icon" />
        {isOpen && <span>About Us</span>}
      </div>

      {/* Logout Button */}
      <button className="logout-button">
        <FaSignOutAlt className="icon" />
        {isOpen && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;
