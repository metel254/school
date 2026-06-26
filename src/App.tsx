import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorldSection from './components/WorldSection';
import DistrictSection from './components/DistrictSection';
import FactionSection from './components/FactionSection';
import SchoolSection from './components/SchoolSection';
import CharacterSection from './components/CharacterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-900 selection:text-cyan-50 overflow-x-hidden relative z-0">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <WorldSection />
        <DistrictSection />
        <FactionSection />
        <SchoolSection />
        <CharacterSection />
      </main>
      <footer className="py-12 text-center text-xs font-mono text-zinc-600 border-t border-zinc-900">
        © 2026 GAKUEN CITY. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
