import React from 'react';
import '../Sidebar.css'; // Ensure sidebar styles are consistent
import '../App.css'; // Shared styles
import './Discovery.css'; // Specific styles for the Discovery page
import './Tips.css';
import { motion } from 'framer-motion';
import Top from '../Top.png'; // Logo image
import Carousel from '../components/carousel1/Carousel';


import LemonImage from '../lemon.webp';
import OnionImage from '../onion.jpg';
import PancakeImage from '../gallery1.webp';
import HackImage from '../hacks.jpg';
import SkillImage from '../skills.webp';
import SourImage from '../sour.jpg';

import c1 from '../c1.webp';
import c2 from '../c2.webp';
import c3 from '../c3.webp';
import c4 from '../c4.webp';

import i1 from '../i1.webp';
import i2 from '../i2.webp';
import i3 from '../i3.webp';
import i4 from '../i4.webp';

const cardData = [
    {
      title: 'Fresh Pepper Kung Pao Chicken',
      subtitle: 'Article',
      image: c1,
    },
    {
      title: 'Biang Biang Noodles',
      subtitle: 'Article',
      image: c2,
    },
    {
      title: 'Kong-Bul (Soybean Sprouts and Bulgogi',
      subtitle: 'Article',
      image: c3,
    },
    {
      title: 'Shrimp Dumplings',
      subtitle: 'Article',
      image: c4,
    },
  ];

  const cardData2 = [
    {
      title: '47 Classic Italian Dishes from the Old Country',
      subtitle: 'Article',
      image: i1,
    },
    {
      title: 'Big Italian Sub Salad',
      subtitle: 'Article',
      image: i2,
    },
    {
      title: 'Cacio e Pepe',
      subtitle: 'Article',
      image: i3,
    },
    {
      title: 'Tomato Bruschetta',
      subtitle: 'Article',
      image: i4,
    },
  ];


const Discovery = () => {
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
        
      <div className="discovery-page">
        <h1>Discover</h1>
        <p>Discover not only recipies but also the latest equipment and the latest on news, restaurants, chef and travel</p>
        <p>All of our recipes have gone through our one-of-a-kind testing process. Browse for inspiration or filter to find the best recipes for your taste, style, or diet.</p>
      </div>
      
    <Carousel/>
    <div className="discovery-page">
        <h1>Chinese</h1>
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
    
    <div className="discovery-page">
        <h1>Italian</h1>
      </div>

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
    <div className="discovery-page">
    <p>© 2024 Recipe Library Brock University Roger Li 6998751, LP. All rights reserved.</p>
      </div>
    </>
    );
};

export default Discovery;
