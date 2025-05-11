'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCarSide, FaClipboardCheck, FaRoad, FaUserGraduate, FaIdCard } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
}

const DrivingLearningProcess: React.FC = () => {
  const [steps, setSteps] = useState<ProcessStep[]>([
    {
      id: 1,
      title: "שיעור ראשון והערכה",
      description: "פגישה ראשונית להערכת רמת הנהיגה והתאמת תוכנית לימודים אישית",
      icon: <FaCarSide className="text-2xl md:text-3xl" />,
      completed: true
    },
    {
      id: 2,
      title: "פיתוח מיומנויות בסיסיות",
      description: "לימוד ותרגול של מיומנויות נהיגה בסיסיות כמו תפעול הרכב, חניה ותמרונים",
      icon: <FaClipboardCheck className="text-2xl md:text-3xl" />,
      completed: true
    },
    {
      id: 3,
      title: "אימון בכבישים",
      description: "נהיגה בתנאי דרך אמיתיים, כולל כבישים עירוניים, בינעירוניים וצמתים מורכבים",
      icon: <FaRoad className="text-2xl md:text-3xl" />,
      completed: false
    },
    {
      id: 4,
      title: "הכנה למבחן",
      description: "תרגול אינטנסיבי של מסלולי טסט והתמודדות עם מצבים מאתגרים",
      icon: <FaUserGraduate className="text-2xl md:text-3xl" />,
      completed: false
    },
    {
      id: 5,
      title: "קבלת רישיון",
      description: "ליווי למבחן המעשי וחגיגת ההצלחה עם קבלת רישיון הנהיגה",
      icon: <FaIdCard className="text-2xl md:text-3xl" />,
      completed: false
    }
  ]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Custom hook for each step to check if it's in view
  const useStepInView = (stepId: number) => {
    const [ref, inView] = useInView({
      threshold: 0.5,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        setSteps(prevSteps => 
          prevSteps.map(step => 
            step.id === stepId ? { ...step, completed: true } : step
          )
        );
      }
    }, [inView, stepId]);

    return ref;
  };

  // Create refs for each step
  const stepRefs = steps.map((_, index) => useStepInView(index + 1));

  return (
    <section id="driving-learning-process" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            מסלול הלימוד שלנו
          </h2>
          <p className="text-lg text-gray-600">
            הדרך שלך לרישיון נהיגה מתחילה כאן - תהליך מובנה ומקצועי שיוביל אותך להצלחה
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative">
          <motion.div 
            className="flex justify-between items-start relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Timeline line */}
            <div className="absolute top-10 left-0 right-0 h-1 z-0"></div>
            
            {/* Active timeline line (grows as steps are completed) */}
            <motion.div 
              className="absolute top-10 right-0 h-1 bg-blue-500 z-10"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${(steps.filter(step => step.completed).length / steps.length) * 100}%` 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            ></motion.div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                ref={stepRefs[index]}
                className="flex flex-col items-center relative z-20 w-1/5"
                variants={itemVariants}
              >
                {/* Step circle */}
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-300
                    ${step.completed 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 border border-gray-200'
                    }`}
                  style={{
                    boxShadow: step.completed 
                      ? '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)' 
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {step.icon}
                </div>
                
                {/* Step content */}
                <div className="text-center w-full px-2">
                  <h3 className={`font-bold text-lg mb-2 ${step.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden">
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 right-10 w-1 z-0"></div>
            
            {/* Active timeline line */}
            <motion.div 
              className="absolute top-0 right-10 w-1 bg-blue-500 z-10"
              initial={{ height: "0%" }}
              animate={{ 
                height: `${(steps.filter(step => step.completed).length / steps.length) * 100}%` 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            ></motion.div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                ref={stepRefs[index]}
                className="flex items-start mb-12 relative z-20"
                variants={itemVariants}
              >
                {/* Step circle */}
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-lg transition-all duration-300
                    ${step.completed 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 border border-gray-200'
                    }`}
                  style={{
                    boxShadow: step.completed 
                      ? '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)' 
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {step.icon}
                </div>
                
                {/* Step content */}
                <div className="text-right">
                  <h3 className={`font-bold text-lg mb-2 ${step.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div 
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
              boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(59, 130, 246, 0.4), 0 8px 8px -2px rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)';
            }}
          >
            קבע שיעור ראשון
          </div>
        </div>

        {/* Background image */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-xl relative h-64 md:h-80">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
            alt="נהיגה בכביש" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500/70 to-transparent flex items-center">
            <div className="text-white text-right p-8 md:p-12 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">מוכנים להתחיל את המסע?</h3>
              <p className="text-white/90">
                אנחנו כאן ללוות אותך בכל שלב בדרך לרישיון הנהיגה שלך. צור קשר עוד היום!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CarSection: React.FC = () => {
  return (
    <section id="car-section" dir="rtl" className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          style={{ zIndex: 2 }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md h-72 md:h-96 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] border border-white/30 ring-1 ring-white/40 flex items-center justify-center">
            <img
              src="/nir mazar photo/IMG_0254.JPG"
              alt="XPENG G6 - רכב לימוד נהיגה"
              className="w-full h-full object-cover rounded-3xl"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 w-full text-right rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] border border-white/30 ring-1 ring-white/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            הרכב שלי: XPENG G6
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            לימוד נהיגה על רכב אוטומטי חדשני, נוח ובטיחותי – XPENG G6. הרכב מצויד בטכנולוגיות מתקדמות, נוחות מקסימלית, מערכות בטיחות מהשורה הראשונה, ומעניק לתלמידים תחושת ביטחון ושליטה מלאה על הכביש.
          </p>
          <motion.ul
            className="list-disc pr-5 text-gray-600 space-y-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <li>רכב מודרני, שקט ונעים לנהיגה</li>
            <li>מערכות בטיחות מתקדמות</li>
            <li>תחושת נוחות וביטחון לתלמידים</li>
            <li>מתאים במיוחד ללימוד נהיגה אוטומטית</li>
            <li>חוויית נהיגה חדשנית</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CarSection;