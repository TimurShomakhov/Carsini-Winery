import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Winery</h1>
        <p className="text-lg text-center">Explore our premium wines and buy online!</p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
