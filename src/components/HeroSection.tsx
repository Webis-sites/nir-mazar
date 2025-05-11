'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Responsive Background Image */}
      {isMobile ? (
        <Image
          src="/nir mazar photo/nir-portrait.JPG"
          alt="ניר מזר - מורה לנהיגה באשדוד"
          fill
          priority
          className="object-cover z-0"
          style={{ objectPosition: 'center top' }}
        />
      ) : (
        <Image
          src="/nir mazar photo/nir-landscape.png"
          alt="ניר מזר - מורה לנהיגה באשדוד"
          fill
          priority
          className="object-cover z-0"
          style={{ objectPosition: 'center 60%' }}
        />
      )}
      {/* Overlay for better text contrast, but more transparent */}
      <div className="absolute inset-0 bg-black/25 z-10" />
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg mb-4"
        >
          ניר מזר
            <br />
          <span className="text-primary-400">לומדים בחיוך</span>
          </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-white text-center mb-4 drop-shadow"
        >
          מורה לנהיגה באשדוד והסביבה
        </motion.h2>
          <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-white text-center mb-8 max-w-2xl drop-shadow"
          >
          למתחילים , מתקדמים וגם כאלה שזקוקים לריענון או עוד בטחון<br />
          לומדים בקצב שלך, ברוגע, באווירה טובה והכי חשוב - חיוך :)
          </motion.p>
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #3b82f6aa' }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-full text-2xl shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50"
          onClick={() => {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
          }}
          >
          לשיעור ניסיון - צרו קשר
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;

// Add this to your tailwind.config.js
/**
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          300: '#93c5fd',
        },
        secondary: {
          500: '#10b981',
          600: '#059669',
          300: '#6ee7b7',
        },
      },
      boxShadow: {
        'neumorphic-light': '5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.1)',
        'neumorphic-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
*/