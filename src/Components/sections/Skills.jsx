import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaGitAlt, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiFirebase, 
  SiTailwindcss, 
  SiRedux
} from 'react-icons/si';

const skillsList = [
  { name: 'html', icon: FaHtml5, color: 'text-[#E44D26]' },
  { name: 'css', icon: FaCss3Alt, color: 'text-[#264DE4]' },
  { name: 'javascript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'reactjs', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'react-native', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'nodejs', icon: FaNodeJs, color: 'text-[#68A063]' },
  { name: 'figma', icon: FaFigma, color: 'text-[#F24E1E]' },
  { name: 'git', icon: FaGitAlt, color: 'text-[#F05032]' },
  { name: 'postgresql', icon: FaDatabase, color: 'text-[#336791]' },
  { name: 'firebase', icon: SiFirebase, color: 'text-[#FFCA28]' },
  { name: 'tailwind', icon: SiTailwindcss, color: 'text-[#38BDF8]' },
  { name: 'redux', icon: SiRedux, color: 'text-[#764ABC]' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono relative">
      {/* Background Dotted Matrix Decoration with float */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-0 w-20 sm:w-24 h-24 sm:h-28 dotted-matrix -z-10 pointer-events-none" 
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
          <span className="text-[#C778DD]">#</span>skills
        </motion.h2>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-[#C778DD] origin-left flex-1 max-w-[140px] sm:max-w-xs" 
        />
      </div>

      {/* Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        {skillsList.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.05,
                boxShadow: "0 0 16px rgba(199, 120, 221, 0.22)"
              }}
              whileTap={{ scale: 0.94 }}
              className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 border border-[#ABB2BF]/40 bg-[#282C33] hover:border-[#C778DD] active:border-[#C778DD] transition-all duration-300 group cursor-pointer overflow-hidden select-none"
            >
              {/* Corner accent glow on hover / active */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 sm:mb-3">
                <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${skill.color} group-hover:scale-125 transition-transform duration-300 drop-shadow-sm`} />
              </div>
              
              <span className="text-[11px] sm:text-xs font-mono text-[#ABB2BF] group-hover:text-white transition-colors lowercase tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
};
