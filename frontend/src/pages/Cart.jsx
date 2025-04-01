import { useCart } from '../context/CartContext'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cart items */}
            <div className="sm:col-span-2">
              {cart.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg mb-4 flex gap-4">
                  <img
                    src={item.image}
                    alt={`Bottle of ${item.name}`}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                    <Button
                      text="Remove"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 shadow">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <p className="font-bold">
                Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Cart
