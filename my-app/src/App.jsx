import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './page/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
