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
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortOption, setSortOption] = useState('');

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

  useEffect(() => {
    let results = [...products];

    if (searchQuery) {
      results = results.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category !== 'All') {
      results = results.filter((product) => product.category === category);
    }

    results = results.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption === 'low-high') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
      results.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'az') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(results);
  }, [searchQuery, category, priceRange, sortOption, products]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen w-full bg-parchment text-black flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Products</h1>

          {/* 🔍 FILTER BAR */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-md border border-wine/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              {/* Search Bar */}
              <div>
                <SearchBar onSearch={handleSearch} />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                >
                  <option value="All">All Categories</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                  <option value="Rosé">Rosé</option>
                  <option value="Sparkling">Sparkling</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>

              {/* Price Range Slider */}
              <div>
                <label className="block text-sm font-medium mb-1">Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-wine"
                />
                <div className="text-right text-sm mt-1">Up to ${priceRange[1]}</div>
              </div>

              {/* Sort Option */}
              <div>
                <label className="block text-sm font-medium mb-1">Sort By</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                >
                  <option value="">None</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                  <option value="az">Alphabetical A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* 🍷 PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
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
