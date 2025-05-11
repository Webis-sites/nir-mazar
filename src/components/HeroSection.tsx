'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCarSide, FaPhoneAlt } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative w-full min-h-[90vh] overflow-hidden bg-gray-100"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nir mazar photo/f4b943ed-f370-40a4-beb0-904ccca941cf.JPG"
          alt="ניר מזר - מורה לנהיגה באשדוד"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="w-full max-w-3xl text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Element - Steering Wheel */}
          <motion.div 
            className="mb-6 inline-block"
            variants={itemVariants}
            whileHover={{ rotate: 90, transition: { duration: 0.5 } }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full shadow-neumorphic-light inline-block">
              <FaCarSide className="text-5xl text-secondary-500" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            ניר מזר <span className="text-primary-500">לומדים בחיוך</span>
            <br />
            <span className="text-3xl md:text-4xl">מורה לנהיגה באשדוד והסביבה</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            למתחילים, מתקדמים וגם כאלה שזקוקים לריענון או עוד בטחון. לומדים בקצב שלך, ברוגע, באווירה טובה והכי חשוב - חיוך :)
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-end"
            variants={itemVariants}
          >
            <button 
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-neumorphic-dark transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:ring-opacity-50 flex items-center justify-center gap-2"
            >
              <span>לשיעור ניסיון</span>
              <FaCarSide className="text-xl" />
            </button>
            
            <button 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold shadow-neumorphic-light transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 flex items-center justify-center gap-2"
            >
              <span>צור קשר</span>
              <FaPhoneAlt className="text-xl" />
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="mt-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-neumorphic-light inline-block"
            variants={itemVariants}
          >
            <p className="text-white text-sm md:text-base">
              שיעורי נהיגה אוטומטית | מחירים אטרקטיביים | גמישות בשעות
            </p>
          </motion.div>
        </motion.div>
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