// src/pages/Checkout.jsx
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from '../components/StripeCheckout'
import axios from '../api/axiosInstance' // import your custom Axios instance

const Checkout = () => {
  const { cart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const navigate = useNavigate()
  const token = localStorage.getItem('token') // get JWT token for auth

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle form submission and send order to backend
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(
        '/orders',
        {
          userId: 1, // TEMP: Replace with actual user ID from auth context/session later
          cartItems: cart,
          shippingDetails: formData,
          totalAmount: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      alert('Order placed successfully!')
      navigate('/order-confirmation')

      // Optionally clear form
      setFormData({
        name: '',
        email: '',
        address: '',
      })
    } catch (err) {
      console.error('Order failed:', err)
      alert('Order submission failed. Please try again.')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-semibold">
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold">
            Shipping Address:
          </label>
          <textarea
            name="address"
            id="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Submit Order
          </button>
        </div>
      </form>

      {/* Stripe Checkout */}
      <StripeCheckout totalAmount={totalPrice} />
    </div>
  )
}

export default Checkout
