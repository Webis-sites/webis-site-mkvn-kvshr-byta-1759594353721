'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaDumbbell, FaUsers } from 'react-icons/fa';

const AboutSection: React.FC = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureItems = [
    {
      icon: <FaGraduationCap className="text-3xl text-[#4ECDC4]" />,
      title: "חינוך מקצועי",
      description: "צוות המדריכים שלנו מוסמך ומנוסה, עם התמחות בהוראת טכניקות כושר נכונות ובטוחות לכל הרמות.",
    },
    {
      icon: <FaDumbbell className="text-3xl text-[#4ECDC4]" />,
      title: "גישה אישית",
      description: "אנו מאמינים בהתאמת תוכניות אימון אישיות לכל מתאמן, תוך התחשבות ביעדים האישיים והיכולות הפיזיות.",
    },
    {
      icon: <FaUsers className="text-3xl text-[#4ECDC4]" />,
      title: "קהילה תומכת",
      description: "יצרנו סביבה חמה ותומכת שבה כל המתאמנים מרגישים שייכים ומקבלים עידוד להשיג את המטרות שלהם.",
    },
  ];

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Column */}
          <motion.div 
            className="lg:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="מדריך כושר מלמד קבוצת מתאמנים"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="lg:w-1/2 text-right"
            variants={itemVariants}
          >
            <motion.h2 
              id="about-heading"
              className="text-4xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              אודות מכון כושר ביתא
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              אנחנו מכון כושר מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו, תוך שימת דגש על הדרכה נכונה ובטוחה.
            </motion.p>

            <motion.div 
              className="bg-[#FFEEAD] p-6 rounded-lg mb-8 shadow-sm"
              variants={itemVariants}
            >
              <p className="text-gray-700 font-medium">
                עם למעלה מ-15 שנות ניסיון בתחום הכושר והחינוך, אנו גאים להיות המובילים בהכשרת מתאמנים ומדריכים מקצועיים במגוון תחומי הכושר.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {featureItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="flex justify-end mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;