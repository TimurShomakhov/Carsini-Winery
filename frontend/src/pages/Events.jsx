import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const events = [
  {
    id: 1,
    title: 'Sunset Wine Tasting',
    date: 'April 27, 2025',
    description:
      'Join us for a golden-hour tasting of our best vintages with live acoustic music under the vines.',
    image: '/images/event-sunset.jpg',
  },
  {
    id: 2,
    title: 'Spring Vineyard Tour',
    date: 'May 10, 2025',
    description:
      'Take a guided tour through our blooming vineyard and learn the art of winemaking from our experts.',
    image: '/images/event-tour.jpg',
  },
  {
    id: 3,
    title: 'Wine & Jazz Evening',
    date: 'June 15, 2025',
    description:
      'An elegant evening of bold reds and smooth jazz in our candlelit tasting hall.',
    image: '/images/event-jazz.jpg',
  },
];

const Events = () => {
  return (
    <div className="bg-parchment text-black min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow w-full px-4 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>
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
      <Footer />
    </div>
  );
};

export default Events;
