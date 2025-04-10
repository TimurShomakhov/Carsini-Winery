import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import axios from '../api/axiosInstance';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products');
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error('Failed to load products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div className="min-h-screen w-full bg-parchment text-black flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Products</h1>

          <div className="mb-6">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length === 0 ? (
              <p className="text-center col-span-full">No products found</p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-wine/20 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white"
                >
                  <img
                    src={product.image}
                    alt={`Bottle of ${product.name}`}
                    className="w-full h-48 object-cover rounded mb-3"
                    loading="lazy"
                  />
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-700">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="block mt-3">
                    <Button text="View Details" />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductListing;
