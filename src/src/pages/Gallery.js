import React, { useEffect, useState } from 'react';
import '../Sidebar.css';
import '../App.css';
import './Gallery.css';

import Top from '../Top.png';
import Coffee from '../coffee.jpg';
import gallery1 from '../gallery1.webp';
import gallery2 from '../gallery2.jpg';
import gallery3 from '../gallery3.jpg';
import gallery4 from '../gallery4.jpg';
import gallery5 from '../gallery5.jpg';
import gallery6 from '../gallery6.jpg';
import gallery7 from '../gallery7.jpg';
import gallery8 from '../gallery8.jpg';
import gallery9 from '../gallery9.avif';

import SourImage from '../sour.jpg';
import SaladImage from '../Salad.jpg';
import TartImage from '../tart.jpg';
import Duck from '../duck.jpg';
import Chicken from '../Chicken.jpg';


const images = [
  Coffee,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

const images2 = [
    Coffee,
    gallery1,
    gallery2,
    TartImage,
    Duck,
    Chicken,
    gallery3,
    gallery4,
    SourImage,
    SaladImage,
];

// Repeat images multiple times to create the endless scroll effect
const repeatedImages = [...images, ...images, ...images]; // Ensure sufficient repetition

const repeatedImages2 = [...images2, ...images2, ...images2]; // Ensure sufficient repetition

const Gallery = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    // Dynamically calculate the total scroll height
    const cardHeight = 250; // Height of each card
    const totalCards = repeatedImages.length;
    setScrollHeight(cardHeight * totalCards);
  }, []);

  return (
    <>
      {/* Logo Container */}
      <div className="logo-container">
        <img src={Top} alt="Top Logo" />
      </div>

      {/* Add a dynamic style to set scroll distance */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-${scrollHeight}px); }
          }
        `}
      </style>

      {/* Gallery Container */}
      <div className="gallery-container">
        {/* Scroll Column 1 */}
        <div className="scroll-column">
          {repeatedImages.map((image, index) => (
            <div key={`col1-${index}`} className="gallery-card">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>

        {/* Scroll Column 2 */}
        <div className="scroll-column">
          {repeatedImages2.map((image, index) => (
            <div key={`col2-${index}`} className="gallery-card">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>

        {/* Scroll Column 3 */}
        <div className="scroll-column">
          {repeatedImages.map((image, index) => (
            <div key={`col3-${index}`} className="gallery-card">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="lower-content">
          <h1>Get inspired and make something new</h1>
          <p>"The secret ingredient is always love:"</p>
        </div>
    </>
  );
};

export default Gallery;
