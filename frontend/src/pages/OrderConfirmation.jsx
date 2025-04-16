import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import bgImage from '../assets/orderconfirmation.jpg';

const OrderConfirmation = () => {
  const { cart } = useCart();
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    } else {
      setOrderDetails({
        orderId: Math.floor(Math.random() * 10000),
        cartItems: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      });
    }
  }, [cart, navigate]);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/90 text-black p-8 rounded-lg shadow-lg backdrop-blur-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Order Confirmation</h1>

          {orderDetails ? (
            <>
              <p className="mb-4 text-center text-lg">Thank you for your order!</p>
              <p className="mb-6 text-center text-sm">
                Order ID: <span className="font-bold">#{orderDetails.orderId}</span>
              </p>

              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              <ul className="mb-6 divide-y divide-wine/20">
                {orderDetails.cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between gap-4 py-4">
                    <img
                      src={item.image}
                      alt={`Bottle of ${item.name}`}
                      className="w-16 h-16 object-cover rounded"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-lg">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-right text-xl font-bold">
                Total: ${orderDetails.total.toFixed(2)}
              </div>
            </>
          ) : (
            <p className="text-center text-lg">Loading order details...</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;