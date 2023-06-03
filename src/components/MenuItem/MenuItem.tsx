import React from "react";
import { IItems } from "../../types";

interface MenuProps {
  item: IItems;
  handleItemClick: (itemName: string, price: number) => void;
}


const MenuItem: React.FC<MenuProps> = ({ item, handleItemClick }) => (
  <div className="itemComponents">
    <button
      className="itemBtn"
      key={item.id}
      onClick={() => handleItemClick(item.name, item.price)}
    >
      <img className="btnIcons" src={item.image} alt="" />
      {item.name}
      <p>KGS {item.price}</p>
    </button>
  </div>
);

export default MenuItem;