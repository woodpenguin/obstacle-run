// src/components/Hero.jsx
import { event } from '../data/event';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] -mx-[--spacing-gutter] grid place-items-center overflow-hidden">
      {/* Full-bleed background (replace with your image if you have one) */}
      <img
        src="/hero-still.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center px-[--spacing-gutter]">
        <p className="font-display tracking-widest text-xs uppercase opacity-80">
          {event.tagline ?? 'An Urban 5K • Beer + Vibes'}
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-tight">
          {event.city}
        </h1>
        <p className="mt-3 text-xl md:text-2xl opacity-90">
          {event.dates.join(' • ')}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={event.registerUrl}
            className="inline-block rounded-[--radius-2xl] border border-cream/30 px-6 py-3 text-sm uppercase tracking-widest hover:-translate-y-0.5 hover:border-cream transition"
          >
            Sign Up Now
          </a>
          <a
            href="#info"
            className="inline-block rounded-[--radius-2xl] border border-cream/15 px-6 py-3 text-sm uppercase tracking-widest hover:-translate-y-0.5 hover:border-cream/30 transition"
          >
            Event Info
          </a>
        </div>
      </div>
    </section>
  );
}
