import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Add styles here

import Top from '../Top.png'; // Logo image
import '../App.css'; // Shared styles

const About = () => {
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
      <div className="about-page">
        <h1>About Us</h1>
        <p>Welcome to Recipe Library, your ultimate hub for all things culinary! Designed for home cooks and seasoned chefs alike, we’re more than just a recipe holder—we’re your go-to resource for mastering the art of cooking. With a vast collection of tested and trusted recipes, expert cooking tips, and the latest in kitchen equipment reviews, we aim to make every meal a success. Our Reddit-inspired gallery lets you connect with a passionate community, sharing your creations and gaining inspiration from others. At Recipe Library, we believe in the joy of discovery, the power of great food, and the stories that come alive in every dish. Whether you're experimenting with a new cuisine or perfecting a family favorite, we’re here to guide and inspire you every step of the way.</p>
        <p>https://www.figma.com/design/hXgKLb50sSPUd3aLq4Wyv7/Recipe-saver?node-id=96-4285&t=YrEIUxtt1XsbxuyP-1</p>
        <p>This was my example PS D:\Essential\University\IASC\IASC_2p03\my-react-app but if you load the directory to my-react-app and run npx start you should be good</p>
        <p>I should have put all the images in a folder and path referenced them their, but I ran out of time to edit and comment</p>
        <p>All inspiration is from, Figma, Bootstrap, "America's Test Kitchen", "Bon Appetit", Microsoft Word, and Reddit</p>
        <p>All code was made by me, the use of Carrot Parrot FIGMA VSCode Extension was used to transfer componenets, and ChatGPT was used to check minor changes and check random errors.</p>
        <p>Mostly for css adjustments, not functions </p>
        <p>The recipe page was suppose to be more dynamic, with recipes, but that idea has failed, and it wasn't worth to late pursue back-end developpment, Requirements: Dynamically adjust react routes, make multiple js pages or find a way to store them, and keeping them linked to their correct recipe / cards</p>
        <p>One recipe is shown for shrimp dumplings, yay</p>
        <p>© 2024 Recipe Library Brock University Roger Li 6998751, LP. All rights reserved.</p>
      </div>
    </motion.div>
    </>
  );
};

export default About;
