import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HeroContent = () => {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-10 text-center md:pt-36">
      <motion.h1
        className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl"
        initial="hidden"
        animate="visible"
        variants={container}
        custom={1}
      >
        Book Any Service in 60 Seconds.
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        initial="hidden"
        animate="visible"
        variants={container}
        custom={2}
      >
        Find trusted professionals near you — fast, safe, and easy.
      </motion.p>
    </div>
  );
};

export default HeroContent;
