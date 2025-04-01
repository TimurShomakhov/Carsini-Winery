// src/pages/AboutUs.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-100 to-red-100 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-4">About Carsini Winery</h1>
            <p className="text-xl text-gray-700">
              Where tradition meets taste — discover the heart of our vineyard.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              At <strong>Carsini Winery</strong>, we believe wine is more than just a drink — it's an experience. 
              Nestled in the heart of California’s wine country, our vineyard blends tradition with innovation to craft 
              exceptional wines that tell a story in every bottle.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Whether you're a connoisseur or a casual sipper, we invite you to explore our curated selection of reds, 
              whites, and seasonal specials. Every bottle we produce is a reflection of our passion, our land, and our legacy.
            </p>

            <p className="text-lg leading-relaxed">
              Join us on a journey of flavor, craftsmanship, and connection — because at Carsini, wine is family.
            </p>

            <div className="mt-8 text-center">
              <a
                href="/products"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Explore Our Wines
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs
