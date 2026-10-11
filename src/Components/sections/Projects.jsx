import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { FaGooglePlay, FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterTabs = [
    { id: 'all', label: '#all' },
    { id: 'web', label: '#web-apps' },
    { id: 'mobile', label: '#mobile-apps' },
    { id: 'enterprise', label: '#enterprise' },
  ];

  return (
    <section id="projects" className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono relative">
      {/* Background Dotted Matrix with float */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-4 w-20 sm:w-24 h-28 sm:h-32 dotted-matrix -z-10 pointer-events-none" 
      />

      {/* Section Header with Responsive Line */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center"
          >
            <span className="text-[#C778DD]">#</span>projects
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] bg-[#C778DD] origin-left flex-1 max-w-[120px] sm:max-w-xs" 
          />
        </div>

        <div className="text-xs text-[#ABB2BF] hidden sm:block">
          // curated production apps
        </div>
      </div>

      {/* Filter Tabs with animated indicator (mobile touch scrollable / wrap) */}
      <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-xs overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = filter === tab.id;
          return (
            <motion.button
              whileTap={{ scale: 0.94 }}
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`relative px-3 sm:px-3.5 py-2 transition-all cursor-pointer select-none font-medium whitespace-nowrap flex-shrink-0 ${
                isActive 
                  ? 'text-white border border-[#C778DD] bg-[#C778DD]/15 shadow-[0_0_12px_rgba(199,120,221,0.25)]' 
                  : 'text-[#ABB2BF] hover:text-white border border-[#ABB2BF]/30 hover:border-[#ABB2BF]/60 bg-transparent'
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeFilterIndicator"
                  className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#C778DD]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Projects Grid with layout animation */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="border border-[#ABB2BF]/40 bg-[#282C33] flex flex-col justify-between hover:border-[#C778DD] active:border-[#C778DD] transition-colors duration-300 group shadow-md hover:shadow-[0_0_20px_rgba(199,120,221,0.18)]"
            >
              {/* Top Project Screenshot Banner */}
              <div className="relative h-44 sm:h-48 w-full bg-[#1E1F29] border-b border-[#ABB2BF]/40 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#282C33]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Category tag */}
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#282C33]/90 border border-[#ABB2BF]/40 text-[10px] text-[#C778DD] uppercase tracking-wider backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Tech Stack Bar */}
              <div className="p-2 sm:p-2.5 border-b border-[#ABB2BF]/40 text-[10px] sm:text-[11px] text-[#ABB2BF] truncate font-mono bg-[#282C33]/80 group-hover:text-white transition-colors">
                {project.technologies.map(t => `#${t.name}`).join(' ')}
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C778DD] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#ABB2BF] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                  {project.liveLink && project.liveLink !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.94 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="retro-btn text-xs px-3 py-2 inline-flex items-center gap-1.5"
                    >
                      <span>Live</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </motion.a>
                  )}

                  {project.appStoreLink && (
                    <motion.a
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.94 }}
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      className="retro-btn-gray text-xs px-3 py-2 flex items-center gap-1.5"
                    >
                      <FaGooglePlay className="w-3 h-3 text-emerald-400" />
                      <span>Play Store</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
