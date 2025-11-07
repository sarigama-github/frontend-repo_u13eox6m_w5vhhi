import React from 'react';
import { MapPin, Calendar, Search, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <motion.form
      className="relative z-10 mx-auto -mt-4 w-full max-w-5xl px-6"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="backdrop-blur-xl/0 group grid grid-cols-1 gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-[#0B1B4C]/40 ring-1 ring-white/10 backdrop-blur-xl sm:grid-cols-[1.2fr_1fr_1fr_auto]">
        {/* Service */}
        <label className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-white/90">
          <Wrench className="h-5 w-5 text-[#FF4D9A]" />
          <input
            type="text"
            placeholder="Which service?"
            className="w-full bg-transparent text-sm placeholder-white/60 outline-none sm:text-base"
            aria-label="Service"
          />
        </label>

        {/* Location */}
        <label className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-white/90">
          <MapPin className="h-5 w-5 text-[#7C3AED]" />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent text-sm placeholder-white/60 outline-none sm:text-base"
            aria-label="Location"
          />
        </label>

        {/* Date */}
        <label className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-white/90">
          <Calendar className="h-5 w-5 text-[#7C3AED]" />
          <input
            type="date"
            className="w-full bg-transparent text-sm text-white placeholder-white/60 outline-none sm:text-base [color-scheme:dark]"
            aria-label="Date"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-6 py-3 font-semibold text-white shadow-lg shadow-[#7C3AED]/30 transition-transform duration-200 hover:scale-[1.02] hover:shadow-[#7C3AED]/40"
        >
          <Search className="mr-2 h-5 w-5" />
          Search
        </button>
      </div>
    </motion.form>
  );
};

export default SearchBar;
