import React from 'react';

import Dish from '../Dish/Dish';

import './Menu.css';

const menu = props => {
  return (
    <div className="Menu">
      <h2>Menu</h2>

      <div className="dishes">
        <Dish />
        <Dish />
        <Dish />
      </div>
    </div>
  )
}

export default menu;

