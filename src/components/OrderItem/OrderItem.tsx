import React from "react";


interface OrderItemProps {
  order: {
    name: string;
    count: number;
    price: number;
  };
    removeItem: (id: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, removeItem }) => (
    <div key={order.name}>
        <button className="removeBtn">X</button>
        <p className="items">
            {order.name} ------ x{order.count} ----- <strong> {order.price} KGS </strong>
        </p>
  </div>
);

export default OrderItem;