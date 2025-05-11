'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaRegSmile, FaShieldAlt } from 'react-icons/fa';
import { MdDirectionsCar } from 'react-icons/md';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row-reverse items-start gap-3 mb-6">
      <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 text-blue-600 shadow-soft">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-right">{title}</h3>
        <p className="text-gray-600 text-right">{description}</p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              אודות <span className="text-blue-600">ניר מזר</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-lg transform translate-x-3 translate-y-3"></div>
                <div className="relative shadow-soft rounded-lg overflow-hidden h-[400px]">
                  <img
                    src="/nir mazar photo/abbead6c-2432-4515-9322-97dc5c8c5ef4.JPG"
                    alt="ניר מזר - מורה לנהיגה באשדוד"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-right text-gray-800">
                אז נעים מאוד, שמי ניר מזר, מורה לנהיגה באשדוד והסביבה.
              </h3>
              <p className="text-gray-600 mb-8 text-right leading-relaxed">
                אחרי עשרות שנים כקבלן, החלטתי לפתוח פרק חדש בחיים – פרק שבו אני בוחר ללכת עם הלב. בחרתי להוריד הילוך ממירוץ החיים, ולהקדיש את זמני למשהו שמרגש אותי באמת: אנשים. עם סבלנות אין-סופית, לב גדול ואהבה אמיתית להוראה ולמפגש האנושי, אני מלווה תלמידים בדרך לעצמאות על הכביש – ברוגע, בהקשבה, ובקצב שנכון להם. אני מלמד נהיגה אוטומטית על רכב XPENG G6 שייתן לכם את תחושת הנוחות והבטחון המקסימלית, ומציע שיעורים למתחילים, לרענון ולחיזוק הביטחון. לומדים בחיוך – לא סיסמה, אלא דרך חיים. כך אני מאמין שאוכל לעזור לכל אחד ואחת להגיע אל המטרה בלי לשכוח להנות מהדרך.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Feature
                  icon={<FaGraduationCap size={24} />}
                  title="ניסיון מקצועי"
                  description="למעלה מ-15 שנות ניסיון בהוראת נהיגה ואחוזי הצלחה גבוהים במבחני הנהיגה."
                />
                <Feature
                  icon={<FaRegSmile size={24} />}
                  title="גישה אישית"
                  description="התאמת שיטת הלימוד לאופי ולקצב האישי של כל תלמיד ותלמידה."
                />
                <Feature
                  icon={<MdDirectionsCar size={24} />}
                  title="רכב חדיש ונוח"
                  description="לימוד על רכב אוטומטי חדיש, נוח ובטיחותי המצויד בכל אמצעי הבטיחות."
                />
                <Feature
                  icon={<FaShieldAlt size={24} />}
                  title="בטיחות מעל הכל"
                  description="דגש על נהיגה בטוחה והקניית הרגלי נהיגה נכונים לכל החיים."
                />
              </div>

              <motion.div 
                variants={itemVariants}
                className="mt-8 text-right"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-soft transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  צור קשר לשיעור ניסיון
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

// Add this to your global CSS or Tailwind config
// .shadow-soft {
//   box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.08), 
//              -6px -6px 12px rgba(255, 255, 255, 0.8);
// }