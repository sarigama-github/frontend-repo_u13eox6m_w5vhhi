import React from 'react';
import { Star, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="relative z-10 mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-4 px-6 text-white/80"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm backdrop-blur-xl">
        <Star className="h-4 w-4 text-yellow-300" />
        <span>4.9 rating</span>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm backdrop-blur-xl">
        <Shield className="h-4 w-4 text-emerald-300" />
        <span>Secure</span>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm backdrop-blur-xl">
        <Users className="h-4 w-4 text-sky-300" />
        <span>10k+ providers</span>
      </div>
    </motion.div>
  );
};

export default TrustBadges;
