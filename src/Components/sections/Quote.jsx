import React from 'react';
import { motion } from 'framer-motion';

export const Quote = () => {
  return (
    <section className="py-14 px-6 lg:px-8 max-w-6xl mx-auto flex justify-center font-mono relative">
      {/* Background Decorative Floating Outline Box */}
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 right-12 w-16 h-16 border border-[#ABB2BF]/20 -z-10 pointer-events-none" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl w-full group"
      >
        {/* Top-Left Quote Symbol */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 left-4 px-2 bg-[#282C33] text-2xl text-[#C778DD] select-none font-bold"
        >
          “
        </motion.div>

        {/* Main Quote Box */}
        <div className="border border-[#ABB2BF]/60 p-6 sm:p-8 bg-[#282C33] group-hover:border-[#C778DD] transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(199,120,221,0.15)] relative">
          <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
            Control can sometimes be an illusion. But sometimes you need illusion to gain control.
          </p>
        </div>

        {/* Bottom-Right Quote Symbol */}
        <motion.div 
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-4 right-28 px-2 bg-[#282C33] text-2xl text-[#C778DD] select-none font-bold"
        >
          ”
        </motion.div>

        {/* Author Tag Box */}
        <div className="absolute -bottom-5 right-0 border border-[#ABB2BF]/60 group-hover:border-[#C778DD] border-t-0 p-2 sm:px-4 bg-[#282C33] text-xs sm:text-sm text-[#ABB2BF] group-hover:text-white transition-colors flex items-center gap-1.5">
          <span>- Mr. Robot</span>
          <span className="w-1.5 h-3 bg-[#C778DD] animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
