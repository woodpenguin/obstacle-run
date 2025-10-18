// src/components/Sponsors.jsx

import sonic from '../assets/sonic.jpg';
import mywallet from '../assets/emptywallet.jpg';
const sponsors = [sonic, mywallet];
export default function Sponsors() {
  return (
    <section className="py-12 bg-slate-900">
      <h2 className="text-white text-center text-2xl font-bold">
        They’re On Our Side
      </h2>
      <div className="mt-8 max-w-5xl mx-auto flex justify-center gap-6 px-6 center">
        {sponsors.map((src, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl p-6 grid place-items-center"
          >
            <img src={src} alt="" className="max-h-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
