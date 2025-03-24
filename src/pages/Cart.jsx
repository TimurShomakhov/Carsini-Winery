import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <div className="mt-6">
        <div className="flex justify-between border-b pb-4 mb-4">
          <div className="flex">
            <img src="wine-image.jpg" alt="Wine Bottle" className="w-20 h-20 object-cover mr-4" />
            <div>
              <h3 className="text-xl">Red Wine</h3>
              <p className="text-gray-600">Quantity: 1</p>
            </div>
          </div>
          <p className="text-lg">$29.99</p>
        </div>
        {/* Repeat for other cart items */}
      </div>
      <div className="flex justify-between mt-8">
        <h2 className="text-2xl font-semibold">Total: $29.99</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-md">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
