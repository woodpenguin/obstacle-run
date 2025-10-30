// src/components/VenueBlock.jsx
import { event } from '../data/event';
import lake from '../assets/castaic.jpg';

export default function VenueBlock() {
  return (
    <section id="venue" className="py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-[--radius-2xl] overflow-hidden border border-cream/10">
          <img
            src={lake}
            alt={event.venueName ?? 'Venue'}
            className="w-full h-[300px] md:h-[420px] object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl">
            {event.venueName ?? 'The Venue'}
          </h2>
          <p className="mt-3 opacity-80">
            {event.venueAddress ?? '123 Main St, Los Angeles, CA'}
          </p>
          <ul className="mt-6 space-y-2 text-sm opacity-90">
            <li>• Packet pickup opens {event.packetPickup ?? '7:00 AM'}</li>
            <li>• Race starts {event.raceStart ?? '8:00 AM'}</li>
            <li>• Beer garden {event.beerGarden ?? 'after the finish'}</li>
          </ul>

          {event.mapsUrl && (
            <a
              href={event.mapsUrl}
              className="mt-8 inline-block rounded-[--radius-2xl] border border-cream/30 px-6 py-3 text-sm uppercase tracking-widest hover:-translate-y-0.5 hover:border-cream transition"
            >
              Open in Maps
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
