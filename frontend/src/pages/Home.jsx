import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow w-full flex flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to the Winery</h1>
          <p className="text-xl leading-relaxed">
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
