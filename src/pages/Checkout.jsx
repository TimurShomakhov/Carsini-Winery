import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import CartContext hook
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Checkout = () => {
  const { cart } = useCart(); // Get the cart items from the context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    console.log('Cart items:', cart);

    // Redirect to Order Confirmation page after submission
    navigate('/order-confirmation');
    
    // Clear form after submission (optional)
    setFormData({
      name: '',
      email: '',
      address: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Cart items summary */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-semibold">
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold" htmlFor="address">
            Shipping Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
