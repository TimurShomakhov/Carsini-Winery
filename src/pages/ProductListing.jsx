// src/pages/ProductListing.jsx
import { useState, useEffect } from 'react';
import Button from '../components/Button'; // Default import

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <Button text="View Details" onClick={() => alert('Product details')} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
