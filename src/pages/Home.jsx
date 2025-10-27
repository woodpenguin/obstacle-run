// src/pages/Home.jsx
import Site from '../layouts/Site';
import Hero from '../components/Hero';
import Perks from '../components/Perks';
import Sponsors from '../components/Sponsors';
import VenueBlock from '../components/VenueBlock';

export default function Home() {
  return (
    <Site>
      <Hero />
      <section id="info" className="py-16 md:py-24">
        <p className="opacity-85 max-w-2xl">
          Welcome to Beer Run — a city loop with a cold finish. Lace up, run
          hard, celebrate responsibly.
        </p>
      </section>
      <Perks />
      <Sponsors />
      <VenueBlock />
    </Site>
  );
}
