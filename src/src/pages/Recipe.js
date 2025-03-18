import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For navigation to detailed recipe pages
import './Recipe.css'; // Add styles here

import Top from '../Top.png'; // Logo image
import '../App.css'; // Shared styles

import c1 from '../c1.webp';
import c2 from '../c2.webp';
import c3 from '../c3.webp';
import c4 from '../c4.webp';

const initialCardData = [
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
    title: 'Kong-Bul (Soybean Sprouts and Bulgogi)',
    subtitle: 'Article',
    image: c3,
  },
  {
    title: 'Shrimp Dumplings',
    subtitle: 'Article',
    image: c4,
    link: '/shrimp-dumplings', // Link to detailed recipe page
  },
];

const Recipe = () => {
  const [cardData, setCardData] = useState(initialCardData);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    subtitle: 'Article',
    image: '',
  });

  const navigate = useNavigate(); // Hook to navigate between pages

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewRecipe({ ...newRecipe, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Add new recipe card
  const addRecipe = (e) => {
    e.preventDefault();
    if (newRecipe.title && newRecipe.image) {
      setCardData([...cardData, newRecipe]);
      setNewRecipe({ title: '', subtitle: 'Article', image: '' }); // Reset form
    } else {
      alert('Please fill in all fields and upload an image!');
    }
  };

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
        <div className="recipe-page">
          <h1>Recipe Collection</h1>
          <p>Explore our collection of delicious recipes!</p>
        </div>

        {/* Input Form Section */}
        <div className="input-container">
          <h2>Add Your Recipe</h2>
          <form className="recipe-form" onSubmit={addRecipe}>
            <input
              type="text"
              name="title"
              placeholder="Recipe Title"
              value={newRecipe.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
            <button type="submit">Add Recipe</button>
          </form>
        </div>

        <div className="recipe-page">
          <h1>Saved Recipes</h1>
        </div>

        {/* Dynamic Card Section */}
        <div className="three-container-section">
          {cardData.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => {
                if (card.link) {
                  navigate(card.link); // Navigate to the detailed recipe page if a link is provided
                }
              }}
            >
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <p className="card-subtitle">{card.subtitle}</p>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="recipe-page">
          <p>© 2024 Recipe Library Brock University Roger Li 6998751, LP. All rights reserved.</p>
        </div>
      </motion.div>
    </>
  );
};

export default Recipe;
