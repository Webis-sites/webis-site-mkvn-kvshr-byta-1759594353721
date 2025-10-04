'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';

interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  icon: React.ReactNode;
}

const trainers: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'דניאל כהן',
    role: 'מאמן כושר ראשי',
    bio: 'בעל תואר ראשון בחינוך גופני ותעודת מאמן בכיר. מתמחה באימוני כוח ובניית תוכניות אישיות. מלמד במכון כבר 8 שנים.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    icon: <FaDumbbell />,
  },
  {
    id: 'trainer-2',
    name: 'מיכל לוי',
    role: 'מדריכת אירובי ויוגה',
    bio: 'בעלת תואר שני בפיזיותרפיה ומוסמכת ביוגה. מתמחה באימוני גמישות וחיזוק הגוף. מלמדת במכון כבר 5 שנים.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    icon: <FaRunning />,
  },
  {
    id: 'trainer-3',
    name: 'אבי ישראלי',
    role: 'מאמן שיקום וכושר',
    bio: 'פיזיותרפיסט מוסמך עם התמחות בשיקום ספורטיבי. מתמחה בעבודה עם ספורטאים ושיקום לאחר פציעות. במכון כבר 6 שנים.',
    image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    icon: <FaHeartbeat />,
  },
  {
    id: 'trainer-4',
    name: 'רונית שלום',
    role: 'יועצת תזונה',
    bio: 'דיאטנית קלינית מוסמכת עם תואר שני בתזונה. מתמחה בבניית תפריטים אישיים לשיפור הביצועים הספורטיביים ואורח חיים בריא.',
    image: 'https://images.unsplash.com/photo-1545205528-3ce5a3a2c97d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    icon: <FaAppleAlt />,
  },
];

const TrainersSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="trainers-section" 
      className="py-16 px-4 md:px-8 bg-white"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">הצוות המקצועי שלנו</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-right">
            הכירו את המדריכים המובילים במכון כושר ביתא, כולם בעלי הסמכות מקצועיות והשכלה אקדמית בתחומם
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={trainer.image}
                  alt={`תמונה של ${trainer.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-[#FFEEAD]/10 to-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <div className="text-[#4ECDC4] text-xl">{trainer.icon}</div>
                </div>
                <p className="text-[#4ECDC4] font-medium mb-4">{trainer.role}</p>
                <p className="text-gray-600 text-right">{trainer.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-[#4ECDC4] hover:bg-[#3dbfb7] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            תיאום פגישת היכרות
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;