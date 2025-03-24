import { useCart } from '../context/CartContext';
import Button from '../components/Button';  // Default import

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mr-4 inline-block"
              />
              <div className="inline-block">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <Button
                  text="Remove"
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
