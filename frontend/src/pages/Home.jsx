import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-parchment text-wine flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* (Optional) Welcome message below hero image */}
      <main className="flex-grow w-full flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl text-center font-serif">
          <h1 className="text-4xl font-bold italic mb-4">Welcome to the Winery</h1>
          <p className="text-lg">
            Explore our premium wines and buy online!
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
