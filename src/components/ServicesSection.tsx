'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaRoad, FaSync, FaGraduationCap } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full"
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
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
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
  const services = [
    {
      icon: <FaCar size={24} />,
      title: "שיעורי נהיגה למתחילים",
      description: "שיעורים מותאמים אישית לבניית ביטחון ומיומנויות בסיסיות, בקצב שלך וברוגע.",
      imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <FaSync size={24} />,
      title: "שיעורי ריענון",
      description: "למי שזקוק לעוד ביטחון, חזרה על נהיגה בטוחה, או עדכון בחוקי תנועה.",
      imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    },
    {
      icon: <FaRoad size={24} />,
      title: "תרגול נהיגה בעיר ובינעירונית",
      description: "שיעורים ממוקדים לנהיגה בסביבה עירונית ובינעירונית, כולל מצבי תנועה מורכבים.",
      imageUrl: "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    {
      icon: <FaGraduationCap size={24} />,
      title: "שיעורים מתקדמים ואוטומט",
      description: "לימוד נהיגה אוטומטית על רכב XPENG G6 חדשני, נוח ובטיחותי, כולל הכנה לטסט.",
      imageUrl: "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
          >
            צור קשר לתיאום שיעור
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;