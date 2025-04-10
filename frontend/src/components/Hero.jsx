// src/components/Hero.jsx
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section>
      <img
        src={heroImage}
        alt="Winery view"
        className="w-full h-auto object-cover rounded-none shadow-none"
      />
    </section>
  );
}
