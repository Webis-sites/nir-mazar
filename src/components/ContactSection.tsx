'use client';
  
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

/**
 * ContactSection Component
 * (Fallback component due to generation failure)
 */
export default function ContactSection() {
  return (
    <section id="contact-section" className="w-full py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">
          צור קשר
        </h2>
        <p className="text-lg mb-8 text-center text-gray-700">
          יש לך שאלה? רוצה לקבוע שיעור ניסיון? אשמח לשוחח!
        </p>
        <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto mb-8">
          <input type="text" placeholder="שם מלא" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" required />
          <input type="tel" placeholder="טלפון" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" required />
          <input type="email" placeholder="אימייל (לא חובה)" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" />
          <textarea placeholder="הודעה" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" rows={4} required />
          <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-all">
            שלח
          </button>
        </form>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/972537717397" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all">
            <FaWhatsapp className="text-xl" /> וואטסאפ ישיר
          </a>
          <a href="tel:0537717397" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all">
            <FaPhoneAlt className="text-xl" /> 053-7717397
          </a>
        </div>
      </div>
    </section>
  );
}