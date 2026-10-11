import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

export const BackgroundEffects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Smooth tracking via RAF
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Subtle floating background code characters
  const floatingGlyphs = [
    { text: '<dev />', top: '15%', left: '6%', delay: 0, duration: 18 },
    { text: '{ state }', top: '35%', right: '8%', delay: 2, duration: 22 },
    { text: '01101', top: '60%', left: '4%', delay: 4, duration: 20 },
    { text: '#frontend', top: '78%', right: '6%', delay: 1, duration: 25 },
    { text: '=> async', top: '92%', left: '8%', delay: 3, duration: 19 },
  ];

  return (
    <>
      {/* Top Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C778DD] via-[#61AFEF] to-[#98C379] origin-left z-[60] shadow-[0_0_10px_rgba(199,120,221,0.7)] pointer-events-none"
      />

      {/* Interactive Cursor Spotlight / Aura */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(199, 120, 221, 0.05), transparent 75%)`
        }}
      />

      {/* Ambient Floating Terminal Glyphs in Background (active for mobile & desktop) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {floatingGlyphs.map((glyph, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: [0.05, 0.14, 0.05],
              y: [-10, 10, -10],
              x: [-4, 4, -4],
            }}
            transition={{
              duration: glyph.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: glyph.delay,
            }}
            style={{
              position: 'absolute',
              top: glyph.top,
              left: glyph.left,
              right: glyph.right,
            }}
            className="font-mono text-[10px] sm:text-xs text-[#C778DD] tracking-widest block"
          >
            {glyph.text}
          </motion.div>
        ))}
      </div>

      {/* Floating Retro Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 p-2 sm:p-2.5 bg-[#282C33] border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-all shadow-[0_0_12px_rgba(199,120,221,0.25)] flex items-center justify-center cursor-pointer group"
            aria-label="Back to top"
          >
            <HiArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
