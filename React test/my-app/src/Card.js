
import React from 'react';

import './Card.css';
const Card = ({ title, description }) => {
  return (
    <div className="card">
        <div className="card1">

      <h2>{title}</h2>
      <p>{description}</p>
        </div>
    </div>
  );
};

export default Card;
