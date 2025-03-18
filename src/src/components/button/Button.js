import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to); // Navigate to the specified route
    }
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
