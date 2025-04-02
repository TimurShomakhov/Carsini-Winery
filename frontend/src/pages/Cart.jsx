import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>

          {cart.length === 0 ? (
            <p className="text-center text-lg">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 border p-4 rounded-lg shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-32 h-32 object-cover rounded"
                      loading="lazy"
                    />

                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-blue-500 text-white px-2 py-1 rounded disabled:opacity-50"
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
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
                        className="mt-2 w-fit"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800 shadow h-fit">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <ul className="space-y-2 mb-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-4 border-gray-300 dark:border-gray-700" />
                <p className="text-xl font-bold">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
