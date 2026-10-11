import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="pt-10 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono relative overflow-hidden md:overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          {/* Terminal prompt tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 mb-4 border border-[#C778DD]/40 bg-[#C778DD]/10 text-[11px] sm:text-xs text-[#C778DD]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C778DD] animate-ping" />
            <span>&gt; whoami --developer</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-5 sm:mb-6 tracking-tight"
          >
            Hi, I'm a <span className="text-[#C778DD] drop-shadow-[0_0_12px_rgba(199,120,221,0.35)]">web developer</span> and <span className="text-[#61AFEF]">front-end engineer</span>
          </motion.h1>

          {/* Summary */}
          <motion.p 
            variants={itemVariants}
            className="text-[#ABB2BF] text-xs sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-8"
          >
            Results-driven Front-End Developer with <span className="text-white font-semibold">2+ years of experience</span> architecting scalable web and mobile applications across <span className="text-white">Fintech, Booking Systems, and Enterprise SaaS</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.04, x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="retro-btn cursor-pointer justify-center text-center group shadow-[0_0_15px_rgba(199,120,221,0.2)] text-xs sm:text-sm py-2.5 px-4"
            >
              <span>Contact me !!</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href="#skills"
              className="retro-btn-gray cursor-pointer justify-center text-center text-xs sm:text-sm py-2.5 px-4"
            >
              <span>#view-stack</span>
              <span className="text-xs text-[#ABB2BF]">&gt;&gt;</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Photo with Retro Geometric Shapes & Dotted Grid */}
        <div className="md:col-span-5 flex flex-col items-center relative mt-4 md:mt-0">
          
          {/* Background Floating Decorative Outline Box */}
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 2, -1, 0] 
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 border border-[#C778DD]/50 -z-10 pointer-events-none" 
          />
          
          {/* Background Dotted Matrix with counter-float */}
          <motion.div 
            animate={{ 
              y: [0, 6, 0],
              x: [0, -4, 0] 
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 sm:w-28 h-20 sm:h-28 dotted-matrix -z-10 pointer-events-none" 
          />

          {/* Floating Micro Badge: React (responsive on mobile & desktop) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 -right-2 sm:-right-4 z-20 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#282C33] border border-[#61AFEF]/60 text-[#61AFEF] text-[10px] sm:text-xs flex items-center gap-1 sm:gap-1.5 shadow-[0_0_12px_rgba(97,175,239,0.25)] select-none"
          >
            <FaReact className="animate-spin text-[#61AFEF]" style={{ animationDuration: '8s' }} />
            <span>React</span>
          </motion.div>

          {/* Floating Micro Badge: Tailwind (responsive on mobile & desktop) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-6 -left-2 sm:-left-6 z-20 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#282C33] border border-[#38BDF8]/60 text-[#38BDF8] text-[10px] sm:text-xs flex items-center gap-1 sm:gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25)] select-none"
          >
            <SiTailwindcss className="text-[#38BDF8]" />
            <span>Tailwind</span>
          </motion.div>

          {/* Photo Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative w-56 sm:w-72 h-72 sm:h-92 bg-[#282C33] overflow-hidden border border-[#ABB2BF]/40 hover:border-[#C778DD] transition-colors duration-300 group shadow-lg"
          >
            {/* Retro Corner HUD Marks */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#C778DD] z-10" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#C778DD] z-10" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#C778DD] z-10" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#C778DD] z-10" />

            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />

            {/* Subtle retro overlay scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#282C33]/60 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
