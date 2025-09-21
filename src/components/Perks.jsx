import { event } from '../data/event';

export default function Perks() {
  return (
    <section className="py-12" id="perks">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        What's Included
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {event.perks.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-2xl p-6 shadow text-center"
          >
            <img src={p.icon} alt="" className="mx-auto h-12 mb-3" />
            <div className="font-semibold">{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
