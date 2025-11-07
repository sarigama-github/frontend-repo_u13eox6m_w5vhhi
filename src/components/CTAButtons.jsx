import React from 'react';
import { motion } from 'framer-motion';

const CTAButtons = () => {
  return (
    <div className="relative z-10 mx-auto mt-6 flex w-full max-w-3xl flex-col items-center gap-3 px-6 sm:mt-8 sm:flex-row sm:justify-center">
      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full rounded-2xl bg-[#7C3AED] px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-[#7C3AED]/30 backdrop-blur-xl transition hover:shadow-[#7C3AED]/40 sm:w-auto"
      >
        Book Now
      </motion.button>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white/90 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white/10 sm:w-auto"
      >
        Join as Provider
      </motion.button>
    </div>
  );
};

export default CTAButtons;
