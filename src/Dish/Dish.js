import React from 'react';

import './Dish.css';

const dish = props => {
  return (
    <div className="Dish">
      <img src="https://www.placehold.it/100x100" alt="alt" /> 
      <h3>Title</h3>
      <p>Price</p>
      <p>Description</p>
      <a href="#">Add to basket</a>
    </div>
  );
};

export default dish;

