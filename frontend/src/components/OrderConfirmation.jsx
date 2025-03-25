import React, { useState, useEffect } from 'react';

const OrderConfirmation = ({ orderDetails }) => {
  const [order, setOrder] = useState(orderDetails || null);

  useEffect(() => {
    // Simulate fetching order data (you could replace this with an actual API call in the future)
    if (!order) {
      setOrder(JSON.parse(localStorage.getItem('order'))); // Retrieve order from localStorage if available
    }
  }, [order]);

  return (
    <div className="order-confirmation">
      {order ? (
        <div>
          <h2>Order Confirmation</h2>
          <p>Order ID: {order.id}</p>
          <p>Products:</p>
          <ul>
            {order.products.map((product, index) => (
              <li key={index}>{product.name} - ${product.price}</li>
            ))}
          </ul>
          <p>Total Amount: ${order.totalAmount}</p>
          <p>Status: {order.status}</p>
        </div>
      ) : (
        <p>No order found!</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
