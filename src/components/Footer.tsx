'use client';

import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdHome, MdInfo, MdSchool, MdContactPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface NavLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    { icon: <FaInstagram />, href: 'https://www.instagram.com/nirmazar/', label: 'אינסטגרם' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/972537717397', label: 'וואטסאפ' },
  ];
  
  const navLinks: NavLink[] = [
    { icon: <MdHome />, href: '#hero-section', label: 'דף הבית' },
    { icon: <MdInfo />, href: '#about-section', label: 'אודות' },
    { icon: <MdSchool />, href: '#services', label: 'שיעורים' },
    { icon: <MdContactPhone />, href: '#contact-section', label: 'צור קשר' },
  ];

  return (
    <footer 
      id="footer" 
      dir="rtl" 
      className="bg-white/40 backdrop-blur-xl text-gray-800 pt-10 pb-6 shadow-inner"
      style={{ 
        boxShadow: 'inset 0 5px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 gap-y-12 text-center">
          {/* Logo and Business Info */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] inline-flex items-center"
              >
                <img 
                  src="/nir mazar photo/nir-portrait.JPG" 
                  alt="ניר מזר - מורה לנהיגה אוטומטית" 
                  className="w-14 h-14 rounded-full object-cover ml-3 border-2 border-white shadow"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">ניר מזר</h3>
                  <p className="text-sm text-secondary">מורה לנהיגה אוטומטית</p>
                </div>
              </motion.div>
            </div>
            <p className="mb-2">
              מורה  נהיגה מוסמך לנהיגה אוטומטית
            </p>
            <p className="text-sm text-gray-600">
              &copy; {currentYear} כל הזכויות שמורות לניר מזר
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index} className="flex justify-center">
                  <motion.a
                    href={link.href}
                    className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
                    whileHover={{ x: -5 }}
                  >
                    <span className="ml-2">{link.label}</span>
                    {link.icon}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">צור קשר</h3>
            <div className="space-y-3">
              <motion.a
                href="tel:0537717397"
                className="flex items-center justify-center p-3 rounded-lg bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className="ml-2">053-7717397</span>
                <FaPhone className="text-secondary" />
              </motion.a>
              <motion.a
                href="mailto:mazarnir12@gmail.com"
                className="flex items-center justify-center p-3 rounded-lg bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className="ml-2">mazarnir12@gmail.com</span>
                <FaEnvelope className="text-secondary" />
              </motion.a>
              <div className="flex justify-center space-x-4 space-x-reverse mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-xl text-gray-700 hover:text-primary transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>האתר נבנה ע״י ניר מזר - מורה לנהיגה אוטומטית</p>
          <div className="flex gap-3 justify-center mt-3">
            <button type="button" className="text-xs underline" onClick={() => window.openLegal && window.openLegal("privacy")}>
              מדיניות פרטיות
            </button>
            <button type="button" className="text-xs underline" onClick={() => window.openLegal && window.openLegal("terms")}>
              תנאי שימוש
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;