import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from '../components/StripeCheckout';
import axios from '../api/axiosInstance';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        '/orders',
        {
          userId: 1,
          cartItems: cart,
          shippingDetails: formData,
          totalAmount: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success('🎉 Order placed successfully!');
      navigate('/order-confirmation');
      setFormData({ name: '', email: '', address: '' });
    } catch (err) {
      console.error('Order failed:', err);
      toast.error('❌ Order submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-parchment text-black flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Cart Summary */}
            <div className="bg-white p-6 rounded-lg border border-wine/20 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-wine/20 rounded-md bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-wine/20 rounded-md bg-white"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold mb-1">
                  Shipping Address:
                </label>
                <textarea
                  name="address"
                  id="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-wine/20 rounded-md bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-wine hover:bg-wine/80 text-white font-semibold p-3 rounded-md transition"
              >
                Submit Order
              </button>
            </form>
          </div>

          {/* Stripe checkout integration */}
          <div className="mt-10">
            <StripeCheckout totalAmount={totalPrice} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
