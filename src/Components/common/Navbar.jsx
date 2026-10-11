import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'home', isRoute: true, path: '/' },
    { id: 'projects', label: 'projects', isRoute: true, path: '/projects' },
    { id: 'skills', label: 'skills', isRoute: false, hash: '#skills' },
    { id: 'about-me', label: 'about-me', isRoute: false, hash: '#about-me' },
    { id: 'contacts', label: 'contacts', isRoute: false, hash: '#contacts' }
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.isRoute) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/' + item.hash);
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isActive = (item) => {
    if (item.id === 'projects') {
      return location.pathname === '/projects';
    }
    if (item.id === 'home') {
      return location.pathname === '/' && !location.hash;
    }
    return false;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
        when: 'afterChildren'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.06,
        delayChildren: 0.05
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0, transition: { duration: 0.25 } }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#282C33]/95 backdrop-blur-md border-b border-[#ABB2BF]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo / Name with smooth spin hover */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Retro Geometric Logo Icon */}
          <div className="w-5 h-5 border-2 border-[#C778DD] rotate-45 flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-500 shadow-[0_0_8px_rgba(199,120,221,0.4)]">
            <div className="w-1.5 h-1.5 bg-white" />
          </div>
          <span className="font-bold text-white text-base tracking-wide font-mono group-hover:text-[#C778DD] transition-colors">
            {personalInfo.shortName || 'Praveen'}
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick(item)}
                className={`relative py-1 transition-colors hover:text-white cursor-pointer ${
                  active ? 'text-white font-semibold' : 'text-[#ABB2BF]'
                }`}
              >
                <span className="text-[#C778DD]">#</span>
                <span>{item.label}</span>
                {active && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C778DD] shadow-[0_0_8px_rgba(199,120,221,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle with Motion feedback */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#ABB2BF] hover:text-white cursor-pointer transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX className="w-6 h-6 text-[#C778DD]" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </motion.button>

      </div>

      {/* Mobile Menu Dropdown with Staggered Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-[#23272e] border-b border-[#ABB2BF]/20 px-6 py-5 font-mono text-sm shadow-xl"
          >
            <div className="text-[11px] text-[#C778DD]/80 mb-3 pb-1 border-b border-[#ABB2BF]/10">
              // menu.sh
            </div>

            <div className="space-y-2">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <motion.button
                    variants={menuItemVariants}
                    whileTap={{ scale: 0.97, x: 4 }}
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-2 w-full text-left py-2 px-2 rounded transition-colors ${
                      active 
                        ? 'text-white bg-[#C778DD]/15 font-semibold' 
                        : 'text-[#ABB2BF] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="text-[#C778DD]">#</span>
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Mobile Social Bar */}
            <div className="pt-4 mt-3 border-t border-[#ABB2BF]/15 flex items-center justify-between text-xs text-[#ABB2BF]">
              <span className="text-[11px] text-[#ABB2BF]/70">// connect:</span>
              <div className="flex items-center gap-4">
                <motion.a
                  whileTap={{ scale: 0.85 }}
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 text-[#ABB2BF] hover:text-[#C778DD]"
                >
                  <FaGithub className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.85 }}
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 text-[#ABB2BF] hover:text-[#C778DD]"
                >
                  <FaLinkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.85 }}
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-1 text-[#ABB2BF] hover:text-[#C778DD]"
                >
                  <FaEnvelope className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
