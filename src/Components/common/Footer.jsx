import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#ABB2BF]/20 bg-[#282C33] pt-8 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          
          {/* Left: Logo & Email */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="w-4 h-4 border-2 border-[#C778DD] rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-white" />
              </div>
              <span className="font-bold text-white text-base">
                {personalInfo.shortName || 'Praveen'}
              </span>
              <span className="text-xs text-[#ABB2BF] break-all">
                {personalInfo.contact.email}
              </span>
            </div>
            <p className="text-xs text-[#ABB2BF]">
              Front-End Developer
            </p>
          </div>

          {/* Right: Media Icons */}
          <div className="space-y-2 sm:text-right">
            <div className="text-white text-xs sm:text-sm font-bold tracking-wider">
              Media
            </div>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors p-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 drop-shadow-sm" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 drop-shadow-sm" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${personalInfo.contact.email}`}
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors p-1"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5 drop-shadow-sm" />
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-6 border-t border-[#ABB2BF]/10 text-xs text-[#ABB2BF]">
          &copy; Copyright {new Date().getFullYear()}. Made by {personalInfo.name}
        </div>

      </div>
    </footer>
  );
};
