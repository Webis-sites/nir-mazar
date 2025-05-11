'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'hero-section', label: 'דף הבית' },
    { id: 'about-section', label: 'אודות' },
    { id: 'services', label: 'שיעורים' },
    { id: 'car-section', label: 'הרכב' },
    { id: 'testimonials-section', label: 'המלצות' },
    { id: 'faq-section', label: 'שאלות נפוצות' },
    { id: 'contact-section', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      id="navbar"
      dir="rtl"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-white/30 backdrop-blur-xl shadow-lg border-b border-white/20`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              <span className="text-[#3b82f6]">ניר מזר</span> מורה לנהיגה
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="relative px-4 py-2 mx-1 text-white hover:text-[#3b82f6] transition-colors duration-300 rounded-lg text-right cursor-pointer select-none drop-shadow-lg"
                  activeClass="text-[#3b82f6] drop-shadow-lg"
                >
                  {item.label}
                </ScrollLink>
              </motion.div>
            ))}
            {/* Special CTA Button */}
            <motion.button
              whileHover={{ scale: 1.12, boxShadow: '0 0 0 4px #3b82f6aa' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-4 bg-gradient-to-l from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 border-2 border-white/40"
            >
              לשיעור ניסיון
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white drop-shadow-lg focus:outline-none transition-all duration-200"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-[#3b82f6]" />
              ) : (
                <FaBars className="h-6 w-6 text-[#3b82f6]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-screen opacity-100 py-4 shadow-lg'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3 bg-black/70 rounded-lg p-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="block px-4 py-3 text-white hover:text-[#3b82f6] transition-colors duration-300 rounded-lg text-right drop-shadow-lg"
              activeClass="text-[#3b82f6] drop-shadow-lg"
            >
              {item.label}
            </ScrollLink>
          ))}
          {/* Mobile CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 0 4px #3b82f6aa' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              closeMenu();
              const contactSection = document.getElementById('contact-section');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 bg-gradient-to-l from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 border-2 border-white/40"
          >
            לשיעור ניסיון
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;