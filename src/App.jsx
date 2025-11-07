import React from 'react';
import HeroScene from './components/HeroScene';
import HeroContent from './components/HeroContent';
import SearchBar from './components/SearchBar';
import CTAButtons from './components/CTAButtons';
import TrustBadges from './components/TrustBadges';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B1B4C] font-['Inter','Manrope','system-ui'] text-white">
      {/* Background 3D Scene & gradient overlays */}
      <HeroScene />

      {/* Foreground content */}
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <HeroContent />
        <SearchBar />
        <CTAButtons />
        <TrustBadges />
      </main>
    </div>
  );
}

export default App;
