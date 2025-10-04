'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDumbbell, FaChalkboardTeacher, FaRunning, FaHeartbeat, FaUsers, FaBookOpen } from 'react-icons/fa';

// Define types for facility items
interface FacilityItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const FacilitiesSection: React.FC = () => {
  // Facilities data
  const facilities: FacilityItem[] = [
    {
      id: 'training-area',
      title: 'אזור אימון כללי',
      description: 'אזור מרווח עם ציוד מתקדם לאימונים מגוונים ומותאמים אישית לכל מתאמן.',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <FaDumbbell className="text-[#4ECDC4] text-2xl" />,
    },
    {
      id: 'classroom',
      title: 'כיתות לימוד',
      description: 'חללי לימוד מאובזרים להרצאות ולסדנאות בנושאי תזונה, פיזיולוגיה ובריאות.',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <FaChalkboardTeacher className="text-[#4ECDC4] text-2xl" />,
    },
    {
      id: 'cardio-zone',
      title: 'אזור קרדיו',
      description: 'מגוון מכשירי קרדיו חדישים עם מסכי מידע אינטראקטיביים ותוכניות אימון מותאמות.',
      imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <FaRunning className="text-[#4ECDC4] text-2xl" />,
    },
    {
      id: 'functional-area',
      title: 'אזור אימון פונקציונלי',
      description: 'חלל ייעודי לאימונים פונקציונליים המשלבים תנועה טבעית ושיפור יכולות יומיומיות.',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <FaHeartbeat className="text-[#4ECDC4] text-2xl" />,
    },
    {
      id: 'group-classes',
      title: 'אולם לשיעורים קבוצתיים',
      description: 'אולם מרווח לשיעורים קבוצתיים מגוונים בהדרכת מדריכים מוסמכים ומנוסים.',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <FaUsers className="text-[#4ECDC4] text-2xl" />,
    },
    {
      id: 'study-corner',
      title: 'פינת לימוד ומחקר',
      description: 'פינה שקטה עם ספרייה מקצועית וגישה למאגרי מידע בתחומי הכושר והבריאות.',
      imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      icon: <FaBookOpen className="text-[#4ECDC4] text-2xl" />,
    },
  ];

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
    <section id="facilities-section" className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-right"
          >
            המתקנים שלנו
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-[#4ECDC4] mx-auto mb-6 mr-auto ml-0"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto text-right"
          >
            במכון כושר ביתא אנו מציעים מגוון רחב של מתקנים מתקדמים המשלבים אימון גופני עם למידה והתפתחות אישית
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={facility.imageUrl}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6 bg-[#FFEEAD] bg-opacity-30">
                <div className="flex items-center justify-start mb-3">
                  {facility.icon}
                  <h3 className="text-xl font-semibold mr-2 text-right">{facility.title}</h3>
                </div>
                <p className="text-gray-700 text-right">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            className="bg-[#4ECDC4] hover:bg-[#3dbcb3] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
            aria-label="לפרטים נוספים על המתקנים שלנו"
          >
            לפרטים נוספים
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;