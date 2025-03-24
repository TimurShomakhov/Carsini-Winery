import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Welcome to Our Winery</h1>
      <p className="text-lg text-center mt-4">Explore our exclusive collection of fine wines, crafted for every occasion.</p>
      <div className="mt-8 text-center">
        <button className="bg-primary text-white px-4 py-2 rounded-md">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
