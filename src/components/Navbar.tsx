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
    { id: 'faq-section', label: 'שאלות נפוצות' },
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
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="relative px-5 py-2 mx-1 text-[#2563eb] font-bold bg-transparent border border-transparent rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-0 hover:bg-white/60 hover:backdrop-blur-md hover:border-blue-200/60 hover:shadow-none hover:text-[#2563eb]"
                  activeClass="text-[#2563eb] border-blue-300/60 bg-white/80 backdrop-blur-md"
                  style={{ zIndex: 1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                </ScrollLink>
              </motion.div>
            ))}
            {/* Special CTA Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-4 px-7 py-2 rounded-full text-lg font-bold bg-transparent border border-transparent text-[#2563eb] transition-all duration-200 focus:outline-none focus:ring-0 hover:bg-white/80 hover:backdrop-blur-md hover:border-blue-200/60 hover:text-[#2563eb]"
              style={{ zIndex: 1 }}
            >
              <span className="relative z-10">לשיעור ניסיון</span>
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
        <div className="container mx-auto px-4 flex flex-col space-y-3 bg-black/60 rounded-3xl p-4 shadow-xl">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full"
            >
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className="block px-5 py-3 text-[#2563eb] font-bold bg-transparent border border-transparent rounded-full transition-all duration-200 text-right focus:outline-none focus:ring-0 hover:bg-white/60 hover:backdrop-blur-md hover:border-blue-200/60 hover:text-[#2563eb]"
                activeClass="text-[#2563eb] border-blue-300/60 bg-white/80 backdrop-blur-md"
                style={{ zIndex: 1 }}
              >
                <span className="relative z-10">{item.label}</span>
              </ScrollLink>
            </motion.div>
          ))}
          {/* Mobile CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              closeMenu();
              const contactSection = document.getElementById('contact-section');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 px-7 py-2 rounded-full text-lg font-bold bg-transparent border border-transparent text-[#2563eb] transition-all duration-200 focus:outline-none focus:ring-0 hover:bg-white/80 hover:backdrop-blur-md hover:border-blue-200/60 hover:text-[#2563eb]"
            style={{ zIndex: 1 }}
          >
            <span className="relative z-10">לשיעור ניסיון</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;