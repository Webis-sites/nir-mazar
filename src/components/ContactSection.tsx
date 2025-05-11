'use client';
  
import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

/**
 * ContactSection Component
 * (Fallback component due to generation failure)
 */
export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };
    alert(`הפרטים נשלחו בהצלחה!\n\nשם: ${data.name}\nטלפון: ${data.phone}\nאימייל: ${data.email}\nהודעה: ${data.message}`);
    form.reset();
  };

  return (
    <section id="contact-section" className="w-full py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">
          צור קשר
        </h2>
        <p className="text-lg mb-8 text-center text-gray-700">
          יש לך שאלה? רוצה לקבוע שיעור ניסיון? אשמח לשוחח!
        </p>
        <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto mb-8" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="שם מלא" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" required />
          <input name="phone" type="tel" placeholder="טלפון" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" required />
          <input name="email" type="email" placeholder="אימייל (לא חובה)" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" />
          <textarea name="message" placeholder="הודעה" className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300" rows={4} required />
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-full text-lg shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 hover:scale-105 hover:shadow-[0_0_0_4px_#3b82f6aa,0_8px_32px_0_rgba(31,38,135,0.18)]"
          >
            שלח פרטים
          </button>
        </form>
        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="https://wa.me/972537717397" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white text-2xl shadow-lg transition-all" aria-label="וואטסאפ">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/nirmazar/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-2xl shadow-lg transition-all" aria-label="אינסטגרם">
            <FaInstagram />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <span>או שלחו מייל: <a href="mailto:Mazarnir12@gmail.com" className="underline text-blue-600">Mazarnir12@gmail.com</a></span>
        </div>
      </div>
    </section>
  );
}