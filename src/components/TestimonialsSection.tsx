'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  quote: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const easyTestimonials = [
    { name: 'שולי מ.', text: 'יכולה לומר שאם יש מישהו שיכול להוביל כל מי שעולה לרכב בבטחה, זה ניר. סבלנות, התאמה אישית, שיח מעניין, מקצועיות, חינוך שמבוסס ונותן את ההרגשה הכי טובה שיש. עוד בצעירותי, היה הדרך הכי מדהים שיכול להיות ולהישאר, היום נוהגת בבטחון ובעיף שזה לא פחות חשוב (עוד לפני שתחשב להיות מורה נהיגה..). אלוף✨' },
    { name: 'יונתן מ.', text: 'מעבר לזה שהוא מורה נהיגה תותח דובר בבן אדם אגדה חוויה מובטחת' },
    { name: 'דין ג.', text: 'ניר מורה מקצועי, סבלני ורוגע. יודע להסביר בצורה ברורה ונותן תחושת בטחון אמיתית. ממליץ עליו בלב שלם – פשוט מורה שאפשר לסמוך עליו.' },
    { name: 'sama r', text: 'אחרי שלושה מורים לנהיגה סוף סוף הגעתי לניר שלימד אותי הכל מההתחלה ועד הסוף, מקצועי ומדבר לעניין' },
    { name: 'דביר א.', text: 'המורה נהיגה הכי טוב באשדוד' },
    { name: 'ליאל צ.', text: 'רציתי להמליץ בחום על המורה ניר מזר מורה נהיגה מקצועי, לאורך כל תהליך הלמידה הרגשתי בטחון ותמיכה – גם ברגעים שבהם הייתי צריכה בטחון בעצמי. נותן דגשים חשובים, ומעביר את השיעורים באווירה נעימה ונעימה. תמיד מרגישה שיש לי על מי לסמוך, והמשמעות שלו היא אחת הסיבות שאני לא טסט – אלא להיות נהגת טובה ובטוחה לנסוע רחוק. מורה שהוא גם...' },
    { name: 'Karin B', text: 'אין מילים לצעוק על העולם כי פשוט הלכו לניר ולא תצטערו! מורה הכי חכם ואינטיליגנטי ומרגיעתי פשוט זכות עצומה ללמוד אותו אתם תלמדו עד קף תעבור על טסטים וגם יודע ללמד איך לשלוט בביטחון ברגשות ולמי שנכנס ללחץ הוא פשוט מתאים וגם מרגיע.' },
    { name: 'MyFly g', text: 'אין ספק זה החוויה הכי עם ניר הרבה סבלנות ואנרגיה טובה שמפנתי כל הזמן עם חיוך ומלמד הכל בצורה חלקה וברורה , והכי חשוב עברתי טסט ראשון !' },
    { name: 'Dorin D', text: 'ממליצה בחום על ניר המדהים! תמיד מחייך, סבלני, מקצועי, משרה אנרגיה חיובית ובטוחה. תלמדו אצלו ניר, אתם תודו שלי❤️' },
    { name: 'Ron A', text: 'מורה מקצועי ותותח על השיעורים הכי טובים ומצחיקים זה עם ניר מזר' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % easyTestimonials.length);
      }, 5000);
    } else if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? easyTestimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % easyTestimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [easyTestimonials[currentIndex]];
    } else {
      const visibleCount = 3;
      const result = [];
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % easyTestimonials.length;
        result.push(easyTestimonials[index]);
      }
      return result;
    }
  };

  return (
    <section id="testimonials-section" dir="rtl" className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">מה התלמידים אומרים</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            כל הביקורות אותנטיות מלקוחות Easy
          </p>
        </motion.div>
        <div className="relative flex flex-col items-center">
          <div className="w-full flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-white/40 backdrop-blur-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] border border-white/30 ring-1 ring-white/40 flex flex-col items-center text-center min-h-[220px] max-w-xl w-full"
            >
              <div className="font-bold text-lg text-blue-700 mb-2">{easyTestimonials[currentIndex].name}</div>
              <div className="text-gray-700 text-base whitespace-pre-line">{easyTestimonials[currentIndex].text}</div>
            </motion.div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="bg-white/60 backdrop-blur-md border border-white/70 shadow-lg text-blue-600 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-blue-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="המלצה קודמת"
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/60 backdrop-blur-md border border-white/70 shadow-lg text-blue-600 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-blue-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="המלצה הבאה"
            >
              <IoIosArrowForward className="text-2xl" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {easyTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setAutoplay(false); setCurrentIndex(idx); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`}
                aria-label={`עבור לעדות ${idx + 1}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://easy.co.il/page/10148768"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg"
            >
              להתרשמות מכל הביקורות ב-easy לחצו כאן
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-neumorphic {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), 
                     -6px -6px 12px rgba(255, 255, 255, 0.8);
        }
        .shadow-neumorphic-hover {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), 
                     -8px -8px 16px rgba(255, 255, 255, 0.8);
        }
        .shadow-neumorphic-pressed {
          box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), 
                      inset -4px -4px 8px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;