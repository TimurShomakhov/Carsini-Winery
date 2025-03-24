import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button'; // Reuse Button component

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
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
                  <Button text="Remove" onClick={() => removeFromCart(product.id)} />
                </div>
              ))}
            </div>
            <div className="mt-8 text-xl font-semibold">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <Button text="Proceed to Checkout" onClick={() => alert('Redirect to Checkout')} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
