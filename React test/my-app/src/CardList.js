// CardList.js
import React from 'react';
import Card from './Card'; // Import the Card component
import data from './data'; // Import the data from your data file

const CardList = () => {
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
