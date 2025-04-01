import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

const OrderConfirmation = () => {
  const { cart } = useCart()
  const [orderDetails, setOrderDetails] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/')
    } else {
      setOrderDetails({
        orderId: Math.floor(Math.random() * 10000),
        cartItems: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      })
    }
  }, [cart, navigate])

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>

        {orderDetails ? (
          <>
            <p className="mb-4">Thank you for your order!</p>
            <p className="mb-4">Order ID: {orderDetails.orderId}</p>

            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="mb-4 space-y-4">
              {orderDetails.cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4">
                  <img
                    src={item.image}
                    alt={`Bottle of ${item.name}`}
                    className="w-16 h-16 object-cover rounded"
                    loading="lazy"
                  />
                  <span className="flex-1">{item.name} x {item.quantity}</span>
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
      </main>
      <Footer />
    </div>
  )
}

export default OrderConfirmation
