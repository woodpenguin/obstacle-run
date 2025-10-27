// src/components/Sponsors.jsx
import sonic from '../assets/sonic.jpg';
import mywallet from '../assets/emptywallet.jpg';
const sponsors = [sonic, mywallet];

export default function Sponsors() {
  return (
    <section className="py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl">They’re On Our Side</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {sponsors.length === 2 ? (
          <div className="col-span-full flex justify-center gap-6">
            {sponsors.map((src, i) => (
              <div
                key={i}
                className="rounded-[--radius-2xl] border border-cream/10 p-6"
              >
                <img src={src} alt="" className="max-h-10" />
              </div>
            ))}
          </div>
        ) : (
          sponsors.map((src, i) => (
            <div
              key={i}
              className="rounded-[--radius-2xl] border border-cream/10 p-6"
            >
              <img src={src} alt="" className="max-h-10" />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
