import { event } from '../data/event';

export default function Perks() {
  return (
    <section className="py-12" id="perks">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        What&apos;s Included
      </h2>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {event.perks.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-2xl p-6 bg-gradient-to-b from-slate-900 to-black border border-white/10 shadow-sm hover:shadow-lg hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* Icon badge */}
            <div className="mx-auto mb-4 h-14 w-14 rounded-full overflow-hidden ring-1 ring-white/10 shadow-sm">
              <img
                src={p.icon}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
              />
            </div>

            {/* Title */}
            <h3 className="text-center font-semibold tracking-tight text-slate-100">
              {p.title}
            </h3>

            {/* Optional subtle accent line */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}
