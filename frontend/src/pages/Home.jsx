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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
