'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDownOutline } from 'react-icons/io5';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'כמה זמן נמשך שיעור נהיגה?',
      answer: 'שיעור נהיגה סטנדרטי נמשך 40 דקות. אנו מקפידים על ניצול מקסימלי של זמן השיעור לתרגול מעשי. השיעור כולל הסברים, תרגול ומשוב. ניתן לתאם גם שיעורים כפולים של 80 דקות למי שמעוניין בתרגול ממושך יותר.'
    },
    {
      id: 'faq-2',
      question: 'מה המחיר של שיעור נהיגה?',
      answer: 'מחיר שיעור נהיגה בודד הוא 150 ש"ח. אנו מציעים חבילות של 10 שיעורים במחיר מוזל של 1,400 ש"ח (חיסכון של 100 ש"ח). לתלמידים, חיילים וגמלאים יש הנחה נוספת של 5% על כל החבילות.'
    },
    {
      id: 'faq-3',
      question: 'מה מדיניות הביטולים?',
      answer: 'ניתן לבטל שיעור עד 24 שעות לפני מועד השיעור ללא חיוב. ביטול בהתראה של פחות מ-24 שעות יחויב ב-50% ממחיר השיעור. אי הגעה לשיעור ללא הודעה מראש תחויב במחיר מלא. אנו מבינים שמקרי חירום קורים, ונשמח לדון במקרים מיוחדים באופן פרטני.'
    },
    {
      id: 'faq-4',
      question: 'מה צריך להביא לשיעור נהיגה?',
      answer: 'יש להביא לכל שיעור: תעודת זהות, רישיון נהיגה זמני (אם יש), משקפי ראייה או עדשות מגע (אם נדרש), נעליים נוחות עם סוליות שטוחות, ובקבוק מים. מומלץ להגיע בלבוש נוח המתאים למזג האוויר. אין צורך בציוד נוסף - כל מה שנדרש ללימוד נמצא ברכב.'
    },
    {
      id: 'faq-5',
      question: 'כמה שיעורים צריך כדי לעבור טסט?',
      answer: 'מספר השיעורים הנדרש משתנה מאדם לאדם ותלוי בכישורים, בניסיון קודם ובתדירות התרגול. בממוצע, תלמידים זקוקים ל-28-35 שיעורים לפני שהם מוכנים לטסט. אנו עוקבים אחר ההתקדמות שלך ונמליץ על מועד הטסט כשנראה שהגעת לרמת מוכנות מתאימה.'
    },
    {
      id: 'faq-6',
      question: 'האם אתם מלמדים גם נהיגה ידנית?',
      answer: 'כרגע אנו מתמחים בהוראת נהיגה ברכב אוטומטי בלבד. הרכב שלנו הוא מדגם חדיש ומצויד בכל אמצעי הבטיחות המתקדמים ביותר, מה שמאפשר חווית לימוד נוחה ובטוחה.'
    },
    {
      id: 'faq-7',
      question: 'איך קובעים שיעור נהיגה?',
      answer: 'ניתן לקבוע שיעור באמצעות שיחת טלפון או הודעת וואטסאפ למספר 053-7717397. אנו פועלים בימים א׳-ה׳ בין השעות 08:00-20:00 ובימי שישי בין 08:00-14:00. מומלץ לקבוע שיעורים מראש לפחות שבוע מראש, במיוחד בתקופות עמוסות.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 px-4 md:px-8 bg-gray-50 dir-rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">שאלות נפוצות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על שיעורי הנהיגה שלנו. אם לא מצאתם תשובה לשאלה שלכם, אל תהססו ליצור קשר.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{
                boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.05), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                borderRadius: '16px'
              }}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-right p-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                aria-expanded={openId === item.id}
                aria-controls={`content-${item.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-500 flex-shrink-0"
                >
                  <IoChevronDownOutline size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    id={`content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-700 text-right">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl text-center" style={{
          boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.05), -6px -6px 12px rgba(255, 255, 255, 0.8)',
          borderRadius: '16px'
        }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="שיעור נהיגה" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 text-right">
              <h3 className="text-xl font-bold text-gray-800 mb-3">יש לכם שאלה נוספת?</h3>
              <p className="text-gray-700 mb-4">
                אנחנו כאן כדי לעזור לכם בכל שלב בדרך לרישיון. אם לא מצאתם תשובה לשאלה שלכם, צרו איתנו קשר ונשמח לעזור.
              </p>
              <button 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                style={{
                  boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.5)',
                }}
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                לשיעור ניסיון - צרו קשר
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;