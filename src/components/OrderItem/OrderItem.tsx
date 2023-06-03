import React from "react";


interface OrderItemProps {
  order: {
    name: string;
    count: number;
    price: number;
  };
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => (
  <div key={order.name}>
    {order.name} ---------- x{order.count} --- {order.price} KGS
  </div>
);

export default OrderItem;