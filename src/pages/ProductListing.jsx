// src/pages/ProductListing.jsx
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button'; // Default import

const ProductListing = () => {
  // Declare products above where you use it
  const products = [
    { id: 1, name: 'Product 1', image: '/path/to/image1.jpg', price: 29.99 },
    { id: 2, name: 'Product 2', image: '/path/to/image2.jpg', price: 39.99 },
    { id: 3, name: 'Product 3', image: '/path/to/image3.jpg', price: 49.99 },
    // Add more products as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products); // Store filtered products

  // Handle search logic
  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar here */}
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <Link to={`/products/${product.id}`}>
                <Button text="View Details" />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListing;
