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
    { icon: <FaFacebook />, href: '#', label: 'פייסבוק' },
    { icon: <FaInstagram />, href: '#', label: 'אינסטגרם' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/972501234567', label: 'וואטסאפ' },
  ];
  
  const navLinks: NavLink[] = [
    { icon: <MdHome />, href: '#hero', label: 'דף הבית' },
    { icon: <MdInfo />, href: '#about', label: 'אודות' },
    { icon: <MdSchool />, href: '#services', label: 'שיעורי נהיגה' },
    { icon: <MdContactPhone />, href: '#contact', label: 'צור קשר' },
  ];

  return (
    <footer 
      id="footer" 
      dir="rtl" 
      className="bg-gray-100 text-gray-800 pt-10 pb-6 shadow-inner"
      style={{ 
        boxShadow: 'inset 0 5px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Business Info */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-3 rounded-xl shadow-md inline-flex items-center"
                style={{ 
                  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.8)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="לוגו ניר מזר מורה לנהיגה" 
                  className="w-12 h-12 rounded-full object-cover ml-3"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">ניר מזר</h3>
                  <p className="text-sm text-secondary">מורה לנהיגה אוטומטית</p>
                </div>
              </motion.div>
            </div>
            <p className="mb-2 text-right">
              מורה לנהיגה מוסמך עם ניסיון רב בהוראת נהיגה אוטומטית
            </p>
            <p className="text-sm text-gray-600 text-right">
              &copy; {currentYear} כל הזכויות שמורות לניר מזר
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
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
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4 text-primary">צור קשר</h3>
            <div className="space-y-3">
              <motion.a
                href="tel:+972501234567"
                className="flex items-center justify-end p-3 rounded-lg bg-white hover:bg-gray-50 transition-all"
                whileHover={{ scale: 1.02 }}
                style={{ 
                  boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1), -3px -3px 10px rgba(255, 255, 255, 0.8)'
                }}
              >
                <span className="ml-2">050-123-4567</span>
                <FaPhone className="text-secondary" />
              </motion.a>
              
              <motion.a
                href="mailto:nir@example.com"
                className="flex items-center justify-end p-3 rounded-lg bg-white hover:bg-gray-50 transition-all"
                whileHover={{ scale: 1.02 }}
                style={{ 
                  boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1), -3px -3px 10px rgba(255, 255, 255, 0.8)'
                }}
              >
                <span className="ml-2">nir@example.com</span>
                <FaEnvelope className="text-secondary" />
              </motion.a>
              
              <div className="flex justify-end space-x-4 space-x-reverse mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:text-primary transition-colors"
                    whileHover={{ y: -3 }}
                    style={{ 
                      boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1), -3px -3px 8px rgba(255, 255, 255, 0.8)'
                    }}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;