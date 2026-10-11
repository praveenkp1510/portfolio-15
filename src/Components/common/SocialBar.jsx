import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

export const SocialBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNearBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 350;

      if (isNearBottom) {
        // Hide when near bottom where footer social icons are present
        setIsVisible(false);
      } else if (currentScrollY < 80) {
        // Always show at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN -> hide left icons
        setIsVisible(false);
      } else {
        // Scrolling UP -> show left icons
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -30,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="hidden lg:flex fixed left-8 top-0 z-40 flex-col items-center gap-4"
    >
      {/* Top vertical connecting line with subtle pulse glow */}
      <div className="w-[1px] h-32 bg-gradient-to-b from-[#C778DD]/60 via-[#ABB2BF]/30 to-[#ABB2BF]/40" />

      {/* Social Icons with Framer Motion hover animations */}
      <motion.a
        whileHover={{ scale: 1.25, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={personalInfo.contact.github}
        target="_blank"
        rel="noreferrer"
        className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors p-1"
        aria-label="GitHub"
      >
        <FaGithub className="w-5 h-5 drop-shadow-[0_0_8px_rgba(199,120,221,0)] hover:drop-shadow-[0_0_8px_rgba(199,120,221,0.5)] transition-all" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.25, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={personalInfo.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors p-1"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5 drop-shadow-[0_0_8px_rgba(199,120,221,0)] hover:drop-shadow-[0_0_8px_rgba(199,120,221,0.5)] transition-all" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.25, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={`mailto:${personalInfo.contact.email}`}
        className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors p-1"
        aria-label="Email"
      >
        <FaEnvelope className="w-5 h-5 drop-shadow-[0_0_8px_rgba(199,120,221,0)] hover:drop-shadow-[0_0_8px_rgba(199,120,221,0.5)] transition-all" />
      </motion.a>
    </motion.div>
  );
};
