'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaRegSmile, FaShieldAlt } from 'react-icons/fa';
import { MdDirectionsCar } from 'react-icons/md';
import Image from 'next/image';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row-reverse items-start gap-3 mb-6">
      <div className="flex-shrink-0 p-3 rounded-lg text-blue-600 shadow-soft">
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
                <motion.div
                  className="relative shadow-soft rounded-lg overflow-hidden w-full aspect-[3/4] bg-white/40 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/nir mazar photo/nir-portrait.JPG"
                    alt="ניר מזר - מורה לנהיגה באשדוד"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-1/2">
              <motion.h3
                className="text-2xl font-bold mb-4 text-right text-gray-800"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                אז נעים מאוד, שמי ניר מזר, מורה לנהיגה באשדוד והסביבה.
              </motion.h3>
              <motion.div
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] mb-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-gray-600 mb-0 text-right leading-relaxed"
                  initial={false}
                  animate={false}
                >
                  אחרי עשרות שנים כקבלן ועורך דין , החלטתי לפתוח פרק חדש בחיים – פרק שבו אני בוחר ללכת עם הלב.<br />
                  בחרתי להוריד הילוך ממירוץ החיים, ולהקדיש את זמני למשהו שמרגש אותי באמת: אנשים.<br />
                  עם סבלנות אין-סופית, לב גדול ואהבה אמיתית להוראה ולמפגש האנושי, אני מלווה תלמידים בדרך לעצמאות על הכביש – ברוגע, בהקשבה, ובקצב שנכון להם.<br />
                  אני מלמד נהיגה אוטומטית על רכב XPENG G6 שייתן לכם את תחושת הנוחות והבטחון המקסימלית, ומציע שיעורים למתחילים, לרענון ולחיזוק הביטחון.<br />
                  לומדים בחיוך – לא סיסמה, אלא דרך חיים.<br />
                  כך אני מאמין שאוכל לעזור לכל אחד ואחת להגיע אל המטרה בלי לשכוח להנות מהדרך.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Feature
                  icon={<FaGraduationCap size={24} />}
                  title="גמישות בשעות"
                  description="אתם קובעים את הזמנים הנוחים לכם - אני מתאים את עצמי אליכם"
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
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-8 text-right"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-soft transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  השאירו פרטים ואחזור אליכם עוד היום
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
