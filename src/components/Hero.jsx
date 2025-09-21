import { event } from '../data/event';

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] grid place-items-center bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow">
          {event.city}
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-white/90">
          {event.dates.join(' • ')}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={event.registerUrl}
            className="inline-block rounded-2xl bg-pink-600 px-6 py-3 text-white font-semibold hover:scale-[1.02] transition"
          >
            Sign Up Now
          </a>
          <a
            href="#info"
            className="inline-block rounded-2xl bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20"
          >
            Event Info
          </a>
        </div>
      </div>
    </section>
  );
}
