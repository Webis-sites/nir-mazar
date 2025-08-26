'use client';
  
import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

// פונקציה לבדיקת תקינות האימייל
const isValidEmail = (email: string): boolean => {
  if (!email) return true; // אימייל לא חובה
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * ContactSection Component
 */
export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    error: string | null;
  }>({ success: false, error: null });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // איפוס סטטוס קודם
    setStatus({ success: false, error: null });
    setIsLoading(true);
    
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
    
    // בדיקת הסכמה משפטית
    const consent = form.querySelector<HTMLInputElement>('input[name="legalConsent"]');
    if (!consent?.checked) { 
      e.preventDefault(); 
      setStatus({ success: false, error: 'יש לאשר את מדיניות הפרטיות ותנאי השימוש' }); 
      setIsLoading(false);
      return; 
    }
    
    // הוספת timestamp להסכמה
    (form.querySelector('input[name="consentAt"]') as HTMLInputElement).value = new Date().toISOString();
    
    // בדיקת תקינות הנתונים
    if (!name.trim()) {
      setStatus({ success: false, error: 'שדה שם הוא חובה' });
      setIsLoading(false);
      return;
    }
    
    if (!phone.trim()) {
      setStatus({ success: false, error: 'שדה טלפון הוא חובה' });
      setIsLoading(false);
      return;
    }
    
    if (email && !isValidEmail(email)) {
      setStatus({ success: false, error: 'כתובת אימייל לא תקינה' });
      setIsLoading(false);
      return;
    }
    
    try {
      // שליחת הנתונים ל-API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          notes: message
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'אירעה שגיאה בשליחת הפנייה');
      }
      
      // עדכון סטטוס הצלחה
      setStatus({ success: true, error: null });
      form.reset();
    } catch (error) {
      console.error('שגיאה בשליחת המייל:', error);
      setStatus({ 
        success: false, 
        error: error instanceof Error ? error.message : 'אירעה שגיאה בשליחת הפנייה. אנא נסו שוב מאוחר יותר.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-section" className="w-full py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">
          צור קשר
        </h2>
        <p className="text-lg mb-8 text-center text-gray-700">
          יש לך שאלה ? רוצה להתחיל שיעורים כבר ממחר? השאירו פרטים ואחזור אלייך עוד היום :)
        </p>
        <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto mb-8" onSubmit={handleSubmit}>
          <input 
            name="name" 
            type="text" 
            placeholder="שם מלא *" 
            className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300 text-base md:text-lg" 
            required 
            disabled={isLoading}
          />
          <input 
            name="phone" 
            type="tel" 
            placeholder="טלפון *" 
            className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300 text-base md:text-lg" 
            required 
            disabled={isLoading}
          />
          <input 
            name="email" 
            type="email" 
            placeholder="אימייל (לא חובה)" 
            className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300 text-base md:text-lg" 
            disabled={isLoading}
          />
          <textarea 
            name="message" 
            placeholder="הודעה *" 
            className="border rounded-lg px-4 py-3 text-right focus:ring-2 focus:ring-primary-300 text-base md:text-lg" 
            rows={4} 
            required 
            disabled={isLoading}
          />
          
          <label className="flex items-start gap-2 text-sm mt-3">
            <input type="checkbox" name="legalConsent" required />
            <span>
              אני מאשר/ת את{" "}
              <button type="button" className="underline" onClick={() => window.openLegal && window.openLegal("privacy")}>
                מדיניות הפרטיות
              </button>
              {" "}ו{" "}
              <button type="button" className="underline" onClick={() => window.openLegal && window.openLegal("terms")}>
                תנאי השימוש
              </button>
              .
            </span>
          </label>

          <input type="hidden" name="consentAt" />
          <input type="hidden" name="privacyVersion" value="2025-08" />
          <input type="hidden" name="termsVersion" value="2025-08" />
          
          {status.error && (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg border border-red-200">
              {status.error}
            </div>
          )}
          
          {status.success && (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
              פנייתך נשלחה בהצלחה! אחזור אליך בהקדם.
            </div>
          )}
          
          <button 
            type="submit"
            className={`bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 rounded-full text-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 border-0 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'שולח...' : 'שלח פרטים'}
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
          <span>או שלחו מייל: <a href="mailto:mazarnir12@gmail.com" className="underline text-blue-600">mazarnir12@gmail.com</a></span>
        </div>
      </div>
    </section>
  );
}