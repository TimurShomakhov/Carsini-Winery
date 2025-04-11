import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

import wineTasting from '../assets/wine-tasting.jpg';
import wineTour from '../assets/wine-tour.jpg';
import jazzEvening from '../assets/jazz-evening.png';

const events = [
  {
    id: 1,
    title: 'Sunset Wine Tasting',
    date: 'April 27, 2025',
    description:
      'Join us for a golden-hour tasting of our best vintages with live acoustic music under the vines.',
    image: wineTasting,
  },
  {
    id: 2,
    title: 'Spring Vineyard Tour',
    date: 'May 10, 2025',
    description:
      'Take a guided tour through our blooming vineyard and learn the art of winemaking from our experts.',
    image: wineTour,
  },
  {
    id: 3,
    title: 'Wine & Jazz Evening',
    date: 'June 15, 2025',
    description:
      'An elegant evening of bold reds and smooth jazz in our candlelit tasting hall.',
    image: jazzEvening,
  },
];

const Events = () => {
  return (
    <div className="bg-parchment text-black min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full px-4 py-16 max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events at Carsini Winery</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="border border-wine/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-sm text-wine/70 mb-2">{event.date}</p>
                <p className="text-gray-800">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add shadow to top of footer */}
      <div className="shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
        <Footer />
      </div>
    </div>
  );
};

export default Events;
