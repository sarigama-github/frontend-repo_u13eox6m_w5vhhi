import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* 3D Scene */}
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows for depth */}
      <div className="pointer-events-none absolute -top-24 -right-40 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(closest-side,_rgba(124,58,237,0.35),_transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(closest-side,_rgba(255,77,154,0.28),_transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1B4C]/20 to-[#0B1B4C]" />
    </div>
  );
};

export default HeroScene;
