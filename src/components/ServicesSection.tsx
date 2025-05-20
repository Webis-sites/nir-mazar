'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCar, FaRoad, FaSync, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white/40 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}
      style={{
        boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6 text-right">
        <div className="flex justify-end items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 ml-3">{title}</h3>
          <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-white ml-3 shadow-md" style={{ color: '#3b82f6' }}>
            {icon}
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const services = [
    {
      icon: <FaCar size={24} />,
      title: "שיעורי נהיגה למתחילים",
      description: "שיעורים מותאמים אישית לבניית ביטחון ומיומנויות בסיסיות, בקצב שלך וברוגע.",
      imageUrl: "/nir mazar photo/f4b943ed-f370-40a4-beb0-904ccca941cf.JPG"
    },
    {
      icon: <FaSync size={24} />,
      title: "שיעורי ריענון",
      description: "למי שזקוק לעוד ביטחון, חזרה על נהיגה בטוחה, או עדכון בחוקי תנועה.",
      imageUrl: "/nir mazar photo/IMG_0254.JPG"
    },
    {
      icon: <FaRoad size={24} />,
      title: "תרגול נהיגה בעיר ובינעירונית",
      description: "שיעורים ממוקדים לנהיגה בסביבה עירונית ובינעירונית, כולל מצבי תנועה מורכבים.",
      imageUrl: "/nir mazar photo/niro1.png"
    },
    {
      icon: <FaGraduationCap size={24} />,
      title: "שיעורים מתקדמים ואוטומט",
      description: "לימוד נהיגה אוטומטית על רכב XPENG G6 חדשני, נוח ובטיחותי, כולל הכנה לטסט.",
      imageUrl: "/nir mazar photo/nirnir.jpeg"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 relative overflow-hidden" dir="rtl" ref={ref}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'none',
        }}
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] border border-white/30 ring-1 ring-white/40"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            <span className="relative inline-block">
              <span className="relative z-10">השיעורים שלי</span>
              <span className="absolute bottom-1 right-0 w-full h-3 bg-green-200 opacity-50 z-0"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            שיעורי נהיגה למתחילים, מתקדמים, רענון, תרגול נהיגה בעיר ובינעירונית, ואוטומט – כל אחד בקצב שלו, עם חיוך.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] border border-white/30 ring-1 ring-white/40"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 rounded-full text-white font-medium text-lg shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, #3b82f6, #10b981)`,
              boxShadow: '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            השאירו פרטים ואחזור אליכם עוד היום
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;