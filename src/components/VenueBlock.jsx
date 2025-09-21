// src/components/VenueBlock.jsx
import { event } from '../data/event';

export default function VenueBlock() {
  const v = event.venue;
  return (
    <section id="info" className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold">Venue Location</h3>
          <p className="mt-2">{v.name}</p>
          <p className="text-slate-600">{v.address}</p>
          <p className="mt-4">
            <span className="font-semibold">Parking:</span> ${v.parking.price}{' '}
            {v.parking.note}
          </p>
          <a
            className="mt-3 inline-block text-indigo-600 underline"
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.name + ' ' + v.address)}`}
          >
            Open in Google Maps
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold">Opening Hours</h3>
          <ul className="mt-2 list-disc ml-5 space-y-1">
            {v.openingHours.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
