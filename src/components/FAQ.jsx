// src/components/FAQ.jsx
const faqs = [
  { q: 'Minimum age?', a: '7+; 7–13 must run with an adult.' },
  { q: 'Spectators?', a: '$10, free under 16; pay on-site or online.' },
  { q: 'Bag drop?', a: '$5, bring a spare bag and change of clothes.' },
  {
    q: 'Ticket transfer?',
    a: 'Free online changes before race; on-site changes may incur a fee.',
  },
];
export default function FAQ() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center">FAQs</h2>
      <div className="max-w-3xl mx-auto mt-6 divide-y rounded-2xl bg-black shadow">
        {faqs.map((f, i) => (
          <details key={i} className="p-5">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
