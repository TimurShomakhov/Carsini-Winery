import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from '../components/StripeCheckout'
import axios from '../api/axiosInstance'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

const Checkout = () => {
  const { cart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

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
      )

      alert('Order placed successfully!')
      navigate('/order-confirmation')
      setFormData({ name: '', email: '', address: '' })
    } catch (err) {
      console.error('Order failed:', err)
      alert('Order submission failed. Please try again.')
    }
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cart Summary */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
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

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>

        {/* Stripe Checkout (optional placement) */}
        <div className="mt-8">
          <StripeCheckout totalAmount={totalPrice} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
