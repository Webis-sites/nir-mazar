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
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      age: 18,
      location: 'תל אביב',
      quote: 'ניר הוא מורה מדהים! בזכותו עברתי את הטסט בניסיון הראשון. הוא סבלני, מקצועי ונותן טיפים שעוזרים להתגבר על החרדה.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'מיכל לוי',
      age: 20,
      location: 'רמת גן',
      quote: 'אחרי שנכשלתי פעמיים עם מורים אחרים, ניר עזר לי להבין את הטעויות שלי ולתקן אותן. הגישה שלו מרגיעה ומקצועית.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'יוסי אברהם',
      age: 19,
      location: 'הרצליה',
      quote: 'ניר לא רק לימד אותי לנהוג, אלא גם העניק לי ביטחון בכביש. השיעורים איתו היו חוויה נעימה ומלמדת.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'נועה שמעוני',
      age: 21,
      location: 'גבעתיים',
      quote: 'הסבלנות של ניר היא מה שעשה את ההבדל עבורי. הוא מסביר כל דבר בצורה ברורה ופשוטה ונותן לך את הזמן להתקדם בקצב שלך.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      name: 'אלון דוד',
      age: 17,
      location: 'פתח תקווה',
      quote: 'ניר הוא מורה לנהיגה מעולה! הוא מקצועי, קשוב ומתאים את השיעורים לצרכים האישיים שלך. ממליץ בחום!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    } else if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      const visibleCount = 3;
      const result = [];
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % testimonials.length;
        result.push(testimonials[index]);
      }
      return result;
    }
  };

  return (
    <section id="testimonials-section" dir="rtl" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">מה התלמידים אומרים</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            תלמידים רבים עברו את מבחן הנהיגה בהצלחה בזכות השיטה הייחודית והמקצועיות של ניר מזר
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="overflow-hidden py-8"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={handlePrev}
                className="bg-white text-blue-500 p-3 rounded-full shadow-neumorphic hover:shadow-neumorphic-pressed focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-label="הקודם"
              >
                <IoIosArrowForward className="text-xl" />
              </button>
              
              <div className="flex space-x-2 rtl:space-x-reverse">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`עבור לעדות ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="bg-white text-blue-500 p-3 rounded-full shadow-neumorphic hover:shadow-neumorphic-pressed focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-label="הבא"
              >
                <IoIosArrowBack className="text-xl" />
              </button>
            </div>

            <div className="flex flex-wrap -mx-4">
              <AnimatePresence mode="wait">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`px-4 ${isMobile ? 'w-full' : 'w-1/3'} mb-8`}
                  >
                    <div className="bg-white rounded-xl p-6 h-full shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white p-1 rounded-full">
                            <FaQuoteRight className="text-sm" />
                          </div>
                        </div>
                        <div className="mr-4 text-right">
                          <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.age}, {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-gray-700 text-right leading-relaxed">
                          "{testimonial.quote}"
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
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