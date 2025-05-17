'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

interface CtaProps {}

const DrivingLessonCta: React.FC<CtaProps> = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="driving-lesson-cta" 
      dir="rtl" 
      className="relative overflow-hidden rounded-2xl my-12 mx-auto max-w-6xl shadow-lg"
      style={{
        boxShadow: '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        background: 'linear-gradient(145deg, #f0f4f8, #e6eaee)',
      }}
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="נהיגה בכביש"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-20"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: `linear-gradient(135deg, ${hexToRgba('#3b82f6', 0.85)}, ${hexToRgba('#10b981', 0.85)})` 
          }}
        ></div>
      </div>

      <div className="relative z-10 px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-right mb-8 md:mb-0 md:w-2/3">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            מוכנים לצאת לדרך? הצעד הראשון לרישיון נהיגה מתחיל כאן!
          </motion.h2>
          
          <motion.p 
            className="text-white text-lg md:text-xl opacity-90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            עם ניר מזר, מורה לנהיגה אוטומטית מנוסה, תלמדו לנהוג בביטחון ובהנאה. 
            הצטרפו למאות תלמידים מרוצים שכבר קיבלו רישיון בהצלחה!
          </motion.p>
          
          <div className="flex items-center text-white opacity-90 mb-2">
            <FaPhoneAlt className="ml-2" />
            <span>התקשרו עכשיו: 053-7717397</span>
          </div>
          
          <p className="text-white text-sm opacity-80">
            * מספר המקומות מוגבל, הבטיחו את מקומכם עוד היום!
          </p>
        </div>
        
        <div className="md:w-1/3 flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.button
              className="relative px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden"
              style={{
                boxShadow: isHovered 
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.1)'
                  : '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.1)',
                background: '#10b981',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <FaCar className="ml-2" />
                לשיעור ניסיון
              </span>
              <motion.div
                className="absolute inset-0 bg-blue-500"
                initial={{ x: '100%' }}
                animate={{ x: isHovered ? '0%' : '100%' }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: 'inherit' }}
              />
            </motion.button>
            
            <motion.div
              className="absolute -bottom-4 right-0 left-0 mx-auto w-3/4 h-2 bg-black opacity-20 rounded-full blur-sm"
              animate={{ 
                width: isHovered ? '70%' : '75%',
                opacity: isHovered ? 0.15 : 0.2
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative car icon */}
      <motion.div 
        className="absolute bottom-4 left-4 text-white opacity-30"
        animate={{ 
          x: [0, 10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut"
        }}
      >
        <FaCar size={40} />
      </motion.div>
    </section>
  );
};

// Helper function to convert hex to rgba
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default DrivingLessonCta;