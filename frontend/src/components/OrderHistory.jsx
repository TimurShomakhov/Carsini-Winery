import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching previous orders from localStorage (or backend later)
    const storedOrder = JSON.parse(localStorage.getItem('order'));
    if (storedOrder) {
      setOrders([storedOrder]); // For now, we only have one order
    }
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <p>Order ID: {order.id}</p>
              <p>Total Amount: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No past orders found!</p>
      )}
    </div>
  );
};

export default OrderHistory;
