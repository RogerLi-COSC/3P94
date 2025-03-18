import './App.css';
import './Sidebar.css';
import Top from './Top.png';
import Sidebar from './Sidebar';
import HeroImage from './HeroImage';
import Button from './components/button/Button';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Tips from './pages/Tips';
import Discovery from './pages/Discovery';
import Recipe from './pages/Recipe';
import Equipment from './pages/Equipment';
import About from'./pages/About';
import Gallery from './pages/Gallery';
import ShrimpDumplings from './pages/ShrimpDumplings'; // Import the new page
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleRecipeClick = () => {
    navigate('/recipe'); // Navigate to the Recipe page
  };

  const handleDiscoveryClick = () => {
    navigate('/discovery'); // Navigate to the Discovery page
  };

  const handleGalleryClick = () => {
    navigate('/gallery'); // Navigate to the Gallery page
  };

  return (
    <>
      {/* Logo Container (Excluded from Animation) */}
      <div className="logo-container">
        <img src={Top} alt="Top Logo" />
      </div>

      {/* Animated Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start off-screen
        animate={{ opacity: 1, x: 0 }}    // Fade in and slide in
        exit={{ opacity: 0, x: 100 }}     // Slide out
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Hero Image */}
        <HeroImage />

        {/* Tip Container */}
        <div className="tip-container">
          <Button label="Latest Tips" to="/tips" /> {/* Navigate to Tips */}
        </div>

        {/* Discover Container */}
        <div className="discover-container">
          <Button label="Discover"  to="/discovery"/>
        </div>

        {/* Equipment Container */}
        <div className="equipment-container">
          <Button label="Latest Equipment" to='/equipment'/>
        </div>

        <div className="lower-content">
          <h1>Welcome to Recipe Library</h1>
          <p>Save those tasty recipes and never forget them again</p>
          <p>Be sure to also check out other recipes, tips and other inspirational material</p>
        </div>

        {/* Three-Container Section */}
        <div className="three-container-section">
        <div className="sub-container">
            <div className="button-wrapper">
              <button
                className="centered-button"
                onClick={handleRecipeClick} // Add onClick handler
              >
                Recipes
              </button>
            </div>
          </div>
          <div className="sub-container">
            <div className="button-wrapper">
              <button
                className="centered-button"
                onClick={handleDiscoveryClick} // Add onClick handler for News/Discovery
              >
                News
              </button>
            </div>
          </div>
          <div className="sub-container">
            <div className="button-wrapper">
              <button
                className="centered-button"
                onClick={handleGalleryClick} // Navigate to Gallery
              >
                Gallery
              </button>
            </div>
          </div>
        </div>

      </motion.div>

      <div className="lower-content">
          <p>© 2024 Recipe Library Brock University Roger Li 6998751, LP. All rights reserved.</p>
        </div>

    </>
  );
}

function App() {
  const location = useLocation(); // Get the current route location

  return (
    <div className="main-container">
      {/* Sidebar is always visible */}
      <Sidebar />

      {/* Page-specific content */}
      <div className="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route
              path="/tips"
              element={
                <>
                  {/* Logo Container (Excluded from Animation) */}
                  <div className="logo-container">
                    <img src={Top} alt="Top Logo" />
                  </div>

                  {/* Animated Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <Tips />
                  </motion.div>
                </>
              }
            />
            <Route path="/discovery" element={<Discovery />} /> {/* Add Discovery page */}
            <Route path="/recipe" element={<Recipe />} /> {/* New Route */}
            <Route path="/equipment" element={<Equipment />} /> {/* New Route */}
            <Route path="/about" element={<About />} /> {/* New Route */}
            <Route path="/gallery" element={<Gallery />} /> {/* New Route */}
            <Route path="/shrimp-dumplings" element={<ShrimpDumplings />} /> {/* Add this */}
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
