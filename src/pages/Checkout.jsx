import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Full Name</label>
          <input type="text" id="name" className="border w-full px-4 py-2 rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-lg">Shipping Address</label>
          <input type="text" id="address" className="border w-full px-4 py-2 rounded-md" placeholder="Your Address" />
        </div>
        <div className="mb-4">
          <label htmlFor="credit-card" className="block text-lg">Credit Card</label>
          <input type="text" id="credit-card" className="border w-full px-4 py-2 rounded-md" placeholder="Card Number" />
        </div>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
