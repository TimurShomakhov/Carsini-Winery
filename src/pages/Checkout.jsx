import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const { cart, totalPrice } = useCart();

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty. Please add some products to checkout.</p>
        ) : (
          <div>
            <div className="grid gap-4">
              {cart.map((product) => (
                <div key={product.id} className="flex justify-between items-center border p-4 rounded-lg">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h2 className="font-bold">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-xl font-semibold">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <form className="mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-2 rounded-md w-full mb-4"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border p-2 rounded-md w-full mb-4"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
