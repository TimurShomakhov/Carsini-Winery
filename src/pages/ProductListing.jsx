import React from 'react';

const ProductListing = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <img src="wine-image.jpg" alt="Wine Bottle" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-xl font-semibold">Red Wine</h3>
          <p className="text-gray-600">A rich and smooth red wine perfect for dinner parties.</p>
          <button className="bg-primary text-white mt-2 px-4 py-2 rounded-md">Add to Cart</button>
        </div>
        {/* Repeat for other products */}
      </div>
    </div>
  );
};

export default ProductListing;
