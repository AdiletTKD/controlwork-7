import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import './App.css';
import { IItems } from './types';
import foodImage from '../src/assets/icons/food.png';
import drinkImage from '../src/assets/icons/drink.png';

const App = () => {
  const Items: IItems[] = [
    { id: nanoid(), name: 'Humburger', price: 80, image: foodImage},
    { id: nanoid(), name: 'Cheeseburger', price: 90, image: foodImage},
    { id: nanoid(), name: 'Fries', price: 45, image: foodImage },
    { id: nanoid(), name: 'Tea', price: 50, image: drinkImage },
    { id: nanoid(), name: 'Coffee', price: 70, image: drinkImage },
    { id: nanoid(), name: 'Cola', price: 40, image: drinkImage },
  ];

  const [orders, setOrders] = useState([]);

  const handleItemClick = (index: number) => {
    const ordersCopy = [...orders];

  };

  const itemButtons = Items.map((item, index) => (
    <div className='itemComponents'>
      <button className='itemBtn' key={item.id}>
        <img className='btnIcons' src={item.image} alt="" />
        {item.name}
      </button>
    </div>
  ));

  return (
    <div className="App">
      <div className='main-menu'>
        <div className='leftBlock'></div>

        <div className='rightBlock'>
          <div>
            {itemButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
