import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting
import { useCart } from '../context/CartContext'; // Import CartContext hook

const OrderConfirmation = () => {
  const { cart } = useCart();
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  // Simulate the order confirmation process
  useEffect(() => {
    // Here you could send the order to your server and get a confirmation response.
    if (cart.length === 0) {
      navigate('/'); // Redirect to homepage if the cart is empty
    } else {
      setOrderDetails({
        orderId: Math.floor(Math.random() * 10000), // Simulate an order ID
        cartItems: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      });
    }
  }, [cart, navigate]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>

      {orderDetails ? (
        <>
          <p className="mb-4">Thank you for your order!</p>
          <p className="mb-4">Order ID: {orderDetails.orderId}</p>

          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="mb-4">
            {orderDetails.cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 font-semibold">
            <p>Total: ${orderDetails.total.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
