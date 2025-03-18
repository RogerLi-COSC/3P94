import React from 'react';
import '../Sidebar.css'; // Ensure sidebar styles are consistent
import '../App.css'; // Shared styles
import './Equipment.css'; // Specific styles for the Discovery page
import './Tips.css';
import { motion } from 'framer-motion';
import Top from '../Top.png'; // Logo image
import Carousel from '../components/carousel1/Carousel';
import Button from '../components/button/Button';




import e1 from '../e1.jpg';
import e2 from '../e2.webp';
import e3 from '../e3.jpg';
import e4 from '../e4.webp';

import a1 from '../a1.jpg';
import a2 from '../a2.webp';
import a3 from '../a3.jpg';
import a4 from '../a4.jpg';



const cardData = [
    {
      title: 'The Best Outdoor Cookware',
      subtitle: 'Article',
      image: e1,
    },
    {
      title: 'The Best Enameled Cast-Iron Skillets',
      subtitle: 'Article',
      image: e2,
    },
    {
      title: 'The Best Carbon-steel Skillets',
      subtitle: 'Article',
      image: e3,
    },
    {
      title: 'The Best Ceramic Nonstick Skillets',
      subtitle: 'Article',
      image: e4,
    },
  ];

  const cardData2 = [
    {
      title: 'The Best Cookie Sheets',
      subtitle: 'Article',
      image: a1,
    },
    {
      title: 'The Ooni Volt versus the Brevill Pizzaiolo: Which Pizza Over is better?',
      subtitle: 'Article',
      image: a2,
    },
    {
      title: 'The Best Cast-Iron Bread Ovens',
      subtitle: 'Article',
      image: a3,
    },
    {
      title: 'The Best 8-Inch Square Baking Pans',
      subtitle: 'Article',
      image: a4,
    },
  ];

const Equipment = () => {
  return (
    <>
    <div className="logo-container">
        <img src={Top} alt="Top Logo" />
      </div>
    
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        
      <div className="equipment-page">
        <h1>Equipment</h1>
        <p>Unbiased and in-depth product reviews from our team of experts reveal which knives, pans, appliances, and gadgets belong in your kitchen.</p>
      </div>

      {/* header Container */}
        <div className="header-container">
            <h1>Quality Tools for Quality Dishes</h1>
        </div>

    <div className="equipment-page">
        <h1>Cookware</h1>
      </div>
    {/* Dynamic Card Section */}
    
    <div className="three-container-section">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <p className="card-subtitle">{card.subtitle}</p>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          ))}
    </div>
    
    <div className="equipment-page">
        <h1>Bakeware</h1>
      </div>

    {/* Dynamic Card Section */}
    
    <div className="three-container-section">
          {cardData2.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <p className="card-subtitle">{card.subtitle}</p>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          ))}
    </div>

    </motion.div>
    <div className="equipment-page">
    <p>© 2024 Recipe Library Brock University Roger Li 6998751, LP. All rights reserved.</p>
      </div>
    </>
    );
};

export default Equipment;
