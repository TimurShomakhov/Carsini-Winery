import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="border p-2 rounded-lg w-full md:w-80"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
