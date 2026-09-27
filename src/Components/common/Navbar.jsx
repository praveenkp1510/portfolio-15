import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { 
  HiOutlineHome, 
  HiOutlineCode, 
  HiOutlineUser, 
  HiOutlineBriefcase,
  HiOutlineMail,
  HiMenu,
  HiX
} from 'react-icons/hi';

export const Navbar = () => {
  const location = useLocation();
  const scrollToSection = useScrollToSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      path: '/portfolio-15/', 
      label: 'Home', 
      icon: HiOutlineHome,
      sectionId: 'hero'
    },
    { 
      path: '/portfolio-15/projects', 
      label: 'Projects', 
      icon: HiOutlineCode,
      sectionId: 'projects'
    },
    { 
      path: '/portfolio-15/', 
      label: 'About', 
      icon: HiOutlineUser,
      sectionId: 'about'
    },
    { 
      path: '/portfolio-15/', 
      label: 'Experience', 
      icon: HiOutlineBriefcase,
      sectionId: 'experience'
    },
    { 
      path: '/portfolio-15/', 
      label: 'Contact', 
      icon: HiOutlineMail,
      sectionId: 'contact'
    },
  ];

  const handleNavClick = useCallback((item) => {
    if (item.sectionId && location.pathname === '/portfolio-15/') {
      scrollToSection(item.sectionId);
    }
    setIsMobileMenuOpen(false);
  }, [location.pathname, scrollToSection]);

  const isActive = (path) => {
    if (path === '/portfolio-15/') {
      return location.pathname === '/portfolio-15/';
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 comic-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <Link 
              to="/portfolio-15/" 
              className="flex items-center space-x-3 group"
              onClick={() => handleNavClick(navItems[0])}
            >
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                P
              </div>
              <span className="text-xl font-bold comic-title">
                K P Praveen
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex items-center space-x-2 px-4 py-2 comic-nav-pill ${
                    isActive(item.path)
                      ? "active"
                      : ""
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium comic-font">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg comic-nav-pill"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#2b2b2b] bg-[#181818]">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center space-x-3 px-4 py-3 comic-nav-pill ${
                    isActive(item.path)
                      ? "active"
                      : ""
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium comic-font">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};
