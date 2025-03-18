// ShrimpDumplings.js
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Shared styles
import './RecipeDetails.css'; // Add a new CSS file for the details page
import Top from '../Top.png'; // Logo image
import c4 from '../c4.webp'; // Shrimp Dumplings image

const ShrimpDumplings = () => {
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
        <div className="recipe-details-page">
          <h1>Shrimp Dumplings Recipe</h1>
          <img src={c4} alt="Shrimp Dumplings" className="recipe-image" />
          <h2>Ingredients:</h2>
          <ul>
            <li>1 cup shrimp, finely chopped</li>
            <li>1/2 cup minced pork</li>
            <li>1 tablespoon soy sauce</li>
            <li>1 teaspoon sesame oil</li>
            <li>1/4 teaspoon white pepper</li>
            <li>Wonton wrappers</li>
            <li>Chopped scallions for garnish</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>Mix the shrimp, minced pork, soy sauce, sesame oil, and white pepper in a bowl.</li>
            <li>Place a small amount of filling in the center of each wonton wrapper.</li>
            <li>Fold the wrapper and seal the edges with water.</li>
            <li>Steam the dumplings for 8-10 minutes until fully cooked.</li>
            <li>Serve hot, garnished with chopped scallions and dipping sauce of your choice.</li>
          </ol>
        </div>
      </motion.div>
    </>
  );
};

export default ShrimpDumplings;
