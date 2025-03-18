import React from 'react';
import '../Sidebar.css'; // Sidebar styling
import '../App.css'; // Shared styling
import './Tips.css';
import { motion } from 'framer-motion';
import LemonImage from '../lemon.webp';
import OnionImage from '../onion.jpg';
import PancakeImage from '../gallery1.webp';
import HackImage from '../hacks.jpg';
import SkillImage from '../skills.webp';
import SourImage from '../sour.jpg';

import PlateImage from '../gallery9.avif';
import OysterImage from '../gallery5.jpg';
import CakeImage from '../gallery7.jpg';
import SaladImage from '../Salad.jpg';
import TartImage from '../tart.jpg';

import KnifeImage1 from '../knifecard1.webp';
import KnifeImage2 from '../knifecard2.webp';
import KnifeImage3 from '../knifecard3.webp';


const cardData = [
  {
    title: 'You Could Be Getting More Juice from Your Lemons',
    subtitle: 'Article',
    image: LemonImage,
  },
  {
    title: 'How to Perfectly Dice Onions',
    subtitle: 'Article',
    image: OnionImage,
  },
  {
    title: 'The Secret to the Fluffiest Pancakes',
    subtitle: 'Article',
    image: PancakeImage,
  },
  {
    title: '10 Best Kitchen Hacks',
    subtitle: 'Article',
    image: HackImage,
  },
  {
    title: 'Mastering Knife Skills',
    subtitle: 'Article',
    image: SkillImage,
  },
  {
    title: 'Secrets of Sourdough Bread',
    subtitle: 'Article',
    image: SourImage,
  },
  {
    title: 'Plating Tips',
    subtitle: 'Article',
    image: PlateImage,
  },
  {
    title: 'Guide to Oysters',
    subtitle: 'Article',
    image: OysterImage,
  },
  {
    title: 'Secret of Cakes',
    subtitle: 'Article',
    image: CakeImage,
  },
  {
    title: '10 Best Salads',
    subtitle: 'Article',
    image: SaladImage,
  },
  {
    title: 'The Secret to the Perfect Fruit Tart',
    subtitle: 'Article',
    image: TartImage,
  },
];

const cardData2 = [
    {
      title: 'Chef Series 10" Chef"s Knife with Dimples (TH-100)',
      subtitle: 'Article',
      image: KnifeImage1,
    },
    {
      title: 'Japanese Series 8 1/2" Sushi Chef"s Knife eXtreme Non-Stick Coating (BSX-85)',
      subtitle: 'Article',
      image: KnifeImage2,
    },
    {
      title: 'Chef Series 8" Chef"s Knife (BK-80)',
      subtitle: 'Article',
      image: KnifeImage3,
    },
  ];

const Tips = () => {
  return (
    <>
      <div className="tips-page">
        <h1>Helpful Tips</h1>
        <p>Here are some useful tips for your recipes and kitchen adventures!</p>
      </div>
      {/* Animated Page Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
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

        <div className="tips-page">
        <h1>Top of the Line</h1>
        <p>Top of the line kitchen knives </p>
        </div>

        {/* Dynamic Card Section 2*/}
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
      <div className="tips-page">
        <h1></h1>
        <p>© 2024 Recipe Library Brock University Roger Li 6998751, LP. All rights reserved.</p>
      </div>
    </>
  );
};

export default Tips;
