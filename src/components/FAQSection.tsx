'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDownOutline } from 'react-icons/io5';
import Image from 'next/image';

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
      question: 'איפה מתקיימים השיעורים?',
      answer: 'אני מלמד באשדוד ובאזור. אנחנו קובעים יחד נקודת איסוף שנוחה לך – מהבית, מהלימודים או מכל מקום אחר. אני מגיע אליך ואדאג לגרום לך להרגיש בבית מהשנייה הראשונה.'
    },
    {
      id: 'faq-2',
      question: 'על איזה רכב אתה מלמד?',
      answer: 'אני מלמד על רכב חדש ויוקרתי מסוג XPENG G6 – רכב חשמלי, נוח, שקט ובטיחותי מאוד. זו לא רק חוויית נהיגה – זו הצצה לעולם התחבורה של העתיד. כבר מהשיעור הראשון תרגישו איך זה לנהוג ברכב מתקדם, עם שליטה מלאה וביטחון.'
    },
    {
      id: 'faq-3',
      question: 'כמה שיעורים צריך כדי לגשת לטסט?',
      answer: 'הממוצע הארצי נע סביב 28–35 שיעורים. אבל אצלי? אתם לא ניגשים לטסט רק כשאתם "מספיק טובים" – אתם ניגשים כשאתם יותר טובים מהטסטר.\nאני דואג שכשיגיע הרגע – אתם תהיו לא רק מוכנים, אלא בטוחים, שקטים, ויודעים בדיוק מה לעשות על הכביש.'
    },
    {
      id: 'faq-4',
      question: 'אתה מלמד רק מתחילים?',
      answer: 'ממש לא. אני עובד גם עם מתחילים מהשלב הראשון, אבל גם עם נהגים בעלי רישיון שרוצים לחזור לעניינים – בין אם זו חזרה אחרי תקופה שלא נהגו, חיזוק הביטחון, או שיעור רענון ממוקד. יש גם אימונים מיוחדים למצבים מורכבים – כמו חנייה בעיר, נהיגה בין-עירונית ועוד.'
    },
    {
      id: 'faq-5',
      question: 'צריך ניסיון קודם לפני השיעור הראשון?',
      answer: 'ממש לא. כל אחד מתחיל בדיוק מאיפה שהוא נמצא – אני אתאים את עצמי אליך, לא להפך.\nהשיעורים נבנים בקצב האישי שלך, בלי לחץ, עם הרבה הקשבה, סבלנות, והכוונה צמודה מהרגע הראשון.'
    },
    {
      id: 'faq-6',
      question: 'אפשר ללמוד גם תיאוריה תוך כדי השיעורים?',
      answer: 'בוודאי. אני משלב הסברים תיאורטיים דרך הסיטואציות שאנחנו פוגשים על הכביש. זה לא "רק לזכור את החומר" – אלא להבין אותו דרך הנהיגה עצמה. כמובן שגם תקבל ממני טיפים מעולים ללמידה עצמאית ויעילה בבית.'
    },
    {
      id: 'faq-7',
      question: 'מאיזה גיל אפשר להתחיל ללמוד נהיגה?',
      answer: 'מגיל 16.5 אפשר להתחיל את תהליך קבלת הטופס הירוק.\nאחרי הבדיקות הנדרשות – נצא לדרך. ואני איתך שלב-שלב, עד הטסט ואחריו.'
    },
    {
      id: 'faq-8',
      question: 'מה זה "לומדים בחיוך"?',
      answer: 'זו לא סיסמה – זו גישה. אני מאמין שכשיש אווירה טובה, לומדים טוב יותר.\nבלי לחץ, בלי תחושת כישלון – רק ביטחון, תחושת הצלחה, והכי חשוב – חיוך על הפנים.\nיש בי המון סבלנות ואהבה למקצוע הזה , אני נהנה לעזור לכל אחד ואחת - זה מביא לי סיפוק אדיר לראות אתכם משתפרים ומצליחים ברמה שאפילו אתם לא תיארתם לעצמכם.'
    },
    {
      id: 'faq-9',
      question: 'איך יודעים מתי מוכנים לטסט?',
      answer: 'אתה תדע – וגם אני. אנחנו נגיע לרגע הזה יחד, מתוך תהליך ברור, עם חזרות, הכוונה והכנה מדויקת. אני לא אשלח אותך לטסט לפני שאתה בשל.\nהמטרה שלי היא לא רק שתעבור – אלא שתדע לנהוג באמת, בביטחון, ובעיקר – בראש שקט.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 px-4 md:px-8 bg-gray-50 dir-rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">שאלות נפוצות – ניר מזר, מורה נהיגה באשדוד והסביבה</h2>
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
              <Image 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="שיעור נהיגה"
                width={400}
                height={192}
                sizes="(max-width: 768px) 100vw, 33vw"
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