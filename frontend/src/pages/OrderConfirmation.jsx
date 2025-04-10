import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

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
    <div className="min-h-screen w-full bg-parchment text-black flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Order Confirmation</h1>

          {orderDetails ? (
            <>
              <p className="mb-4 text-center text-lg">Thank you for your order!</p>
              <p className="mb-6 text-center">Order ID: <strong>{orderDetails.orderId}</strong></p>

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
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">x {item.quantity}</p>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="text-right text-xl font-semibold">
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
