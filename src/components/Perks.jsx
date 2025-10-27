// src/components/Perks.jsx
import { event } from '../data/event';

export default function Perks() {
  return (
    <section id="perks" className="py-16 md:py-24">
      <h2 className="font-display text-3xl md:text-4xl">What’s Included</h2>
      <p className="mt-2 opacity-80">Perks that make the run worth the fun.</p>

      <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {event.perks.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-[--radius-2xl] border border-cream/10 p-6 hover:border-cream/25 transition"
          >
            <div className="mx-auto mb-4 h-14 w-14 overflow-hidden rounded-full ring-1 ring-cream/10">
              <img
                src={p.icon}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-[1.03] transition"
              />
            </div>
            <h3 className="font-display text-lg">{p.title}</h3>
            {p.copy && <p className="mt-2 text-sm opacity-80">{p.copy}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
