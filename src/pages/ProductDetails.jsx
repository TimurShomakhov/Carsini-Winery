import React from 'react';

const ProductDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Red Wine</h1>
      <div className="flex mt-6">
        <img src="wine-image.jpg" alt="Red Wine" className="w-1/2 h-auto" />
        <div className="ml-8 w-1/2">
          <p className="text-lg">A rich and smooth red wine with hints of berries and oak.</p>
          <h3 className="text-xl font-semibold mt-4">$29.99</h3>
          <button className="bg-primary text-white mt-4 px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
