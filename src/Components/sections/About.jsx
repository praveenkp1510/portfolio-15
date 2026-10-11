import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';

export const About = () => {
  return (
    <section id="about-me" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono relative overflow-hidden md:overflow-visible">
      {/* Background Decorative Outline Box with subtle float */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 -left-6 w-20 sm:w-24 h-36 sm:h-48 border border-[#ABB2BF]/20 -z-10 pointer-events-none" 
      />

      {/* Section Header with Responsive Animated Line */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center"
        >
          <span className="text-[#C778DD]">#</span>about-me
        </motion.h2>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-[#C778DD] origin-left flex-1 max-w-[140px] sm:max-w-xs" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Text & Resume Button */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-4 sm:space-y-5 text-xs sm:text-base leading-relaxed text-[#ABB2BF]"
        >
          <p className="text-white font-medium text-base sm:text-lg flex items-center gap-2">
            <span>Hello, I'm {personalInfo.shortName || 'Praveen'}!</span>
            <span className="inline-block animate-bounce text-base">👋</span>
          </p>

          <p>
            I'm a front-end developer based in Salem, Tamil Nadu. I develop responsive, accessible websites and mobile apps from scratch and raise them into modern, scalable user experiences.
          </p>

          <p>
            With <span className="text-white font-semibold">2+ years of professional experience</span> across fintech, booking platforms, and enterprise accounting systems, I specialize in <span className="text-white">React.js, React Native, and Tailwind CSS</span>. I have delivered 20–30% performance gains through state management and bundle optimization.
          </p>

          <div className="pt-3 sm:pt-4">
            <motion.a
              whileHover={{ scale: 1.04, x: 2 }}
              whileTap={{ scale: 0.94 }}
              href={personalInfo.resume.downloadUrl}
              download={personalInfo.resume.filename}
              className="retro-btn cursor-pointer inline-flex items-center gap-2 group shadow-[0_0_12px_rgba(199,120,221,0.2)] text-xs sm:text-sm py-2.5 px-4"
            >
              <span>Download Resume</span>
              <span className="group-hover:translate-y-1 transition-transform duration-200">↓</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Stylized Coder Avatar with Interactive Floating Particles */}
        <div className="md:col-span-5 flex justify-center relative mt-4 md:mt-0">
          
          {/* Background Dotted Matrix Patterns */}
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-2 sm:top-4 left-2 sm:left-4 w-16 h-20 sm:h-24 dotted-matrix -z-10 pointer-events-none" 
          />
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-2 sm:bottom-4 right-0 w-20 sm:w-24 h-20 sm:h-24 dotted-matrix -z-10 pointer-events-none" 
          />

          {/* Floating Code Particles from Laptop Screen */}
          <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center">
            {/* Particle 1 */}
            <motion.span
              animate={{
                y: [0, -40, -65],
                x: [0, -18, -30],
                opacity: [0, 0.85, 0],
                scale: [0.6, 1, 0.8]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 0.2
              }}
              className="absolute text-[10px] sm:text-[11px] font-mono text-[#C778DD] font-bold z-20"
            >
              &lt;React /&gt;
            </motion.span>

            {/* Particle 2 */}
            <motion.span
              animate={{
                y: [0, -50, -80],
                x: [0, 20, 35],
                opacity: [0, 0.9, 0],
                scale: [0.6, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 1.5
              }}
              className="absolute text-[10px] sm:text-[11px] font-mono text-[#61AFEF] font-bold z-20"
            >
              {'{ CSS }'}
            </motion.span>

            {/* Particle 3 */}
            <motion.span
              animate={{
                y: [0, -55, -85],
                x: [0, 2, 4],
                opacity: [0, 0.85, 0],
                scale: [0.6, 1, 0.7]
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 2.8
              }}
              className="absolute text-[9px] sm:text-[10px] font-mono text-[#98C379] font-bold z-20"
            >
              010110
            </motion.span>
          </div>

          {/* Floating SVG Vector Graphic Illustration */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative w-56 sm:w-64 h-56 sm:h-64 flex items-center justify-center cursor-pointer group"
          >
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full max-w-[210px] sm:max-w-[240px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_15px_30px_rgba(199,120,221,0.25)] transition-all duration-300"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hood / Hair */}
              <path d="M50 140 C50 65, 150 65, 150 140" fill="#282C33" stroke="#ABB2BF" strokeWidth="2"/>
              <path d="M60 110 C60 60, 140 60, 140 110 C140 120, 130 130, 100 130 C70 130, 60 120, 60 110 Z" fill="#E06B75" />
              
              {/* Face */}
              <circle cx="100" cy="105" r="32" fill="#F8CBA6" />
              
              {/* Eyes */}
              <circle cx="90" cy="102" r="3.5" fill="#282C33" />
              <circle cx="110" cy="102" r="3.5" fill="#282C33" />
              
              {/* Smile */}
              <path d="M96 112 Q100 116 104 112" stroke="#282C33" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Hoodie Body */}
              <path d="M45 190 C45 140, 155 140, 155 190" fill="#1E1F29" stroke="#C778DD" strokeWidth="2"/>
              
              {/* Laptop with screen glow */}
              <rect x="65" y="145" width="70" height="42" rx="4" fill="#ABB2BF" stroke="#FFFFFF" strokeWidth="1.5"/>
              <rect x="70" y="150" width="60" height="32" rx="2" fill="#282C33" />
              <path d="M55 187 H145 L150 192 H50 Z" fill="#808B96" />
              
              {/* Screen pulse glow */}
              <rect x="72" y="152" width="56" height="28" rx="1" fill="#C778DD" fillOpacity="0.15" />

              {/* Skull / Terminal Logo on Laptop */}
              <circle cx="100" cy="164" r="6" fill="#C778DD" />
              <rect x="98" y="167" width="4" height="4" fill="#C778DD" />
            </svg>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
