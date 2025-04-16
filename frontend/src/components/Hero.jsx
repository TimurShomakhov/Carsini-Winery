// src/components/Hero.jsx
import heroImage from '../assets/hero.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Text + Buttons */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-italianno mb-4">Carsini Winery</h1>
        <p className="italic text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          "It is better to lose four good drops than to take two bad sips of bad wine"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {[
            { label: 'Events', to: '/events' },
            { label: 'Explore', to: '/products' },
            { label: 'Story', to: '/aboutus' },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="px-6 py-2 text-base md:text-lg bg-white text-black rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
