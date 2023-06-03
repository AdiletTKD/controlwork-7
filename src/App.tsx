import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import './App.css';
import { IItems } from './types';
import foodImage from '../src/assets/icons/food.png';
import drinkImage from '../src/assets/icons/drink.png';

const App = () => {
  const Items: IItems[] = [
    { id: nanoid(), name: 'Humburger', price: 80, image: foodImage },
    { id: nanoid(), name: 'Coffee', price: 70, image: drinkImage },
    { id: nanoid(), name: 'Fries', price: 45, image: foodImage },
    { id: nanoid(), name: 'Tea', price: 50, image: drinkImage },
    { id: nanoid(), name: 'Cheeseburger', price: 90, image: foodImage},
    { id: nanoid(), name: 'Cola', price: 40, image: drinkImage },
  ];

  const [orders, setOrders] = useState<{ name: string, count: number; price: number }[]>([]);

  const handleItemClick = (itemName: string, price: number) => {
    const realOrder = orders.find((order) => order.name === itemName);

    if (realOrder) {
      const updatedOrders = orders.map((order) =>
        order.name === itemName
          ? { ...order, count: order.count + 1, price: order.price + price } 
          : order
      );
      setOrders(updatedOrders);
    } else {
      const newOrder = { name: itemName, count: 1, price: price };
      setOrders([...orders, newOrder]);
    }
  };


  const getTotalSumm = () => {
    return orders.reduce((total, order) => {
      return total + order.price;
    }, 0);
  };


  const itemButtons = Items.map((item, index) => (
    <div className='itemComponents'>
      <button className='itemBtn' key={item.id} onClick={() => handleItemClick(item.name, item.price)}>
        <img className='btnIcons' src={item.image} alt="" />
        {item.name}
        <p>
          KGS {item.price}
        </p>
      </button>
    </div>
  ));

   const orderedItems = orders.map((order) => (
    <div key={order.name}>
      {order.name} ---------- x{order.count} --- {order.price} KGS
     </div>
  ));

  return (
    <div className="App">
      <div className='main-menu'>
        <div className='leftBlock'>
          {orderedItems}
          <strong className='totalPrice'>Total price: { getTotalSumm() }</strong>
        </div>

        <div className='rightBlock'>
          <div className='gridContainer'>
            {itemButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
