'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const CTASection: React.FC = () => {
  return (
    <section 
      id="gym-cta-section" 
      dir="rtl" 
      className="relative overflow-hidden bg-white py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#4ECDC4]/20 to-[#FFEEAD]/20"></div>
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-stretch md:gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            className="mt-10 w-full text-right md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              id="cta-heading" 
              className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl"
            >
              הצטרפו למכון כושר <span className="text-[#4ECDC4]">ביתא</span> עוד היום!
            </h2>
            
            <p className="mb-8 text-lg text-gray-700">
              אנחנו מכון כושר מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <ul className="mb-8 space-y-3 text-gray-700">
              <li className="flex items-center justify-end">
                <span>אימונים אישיים מותאמים לכל רמה</span>
                <span className="ml-2 rounded-full bg-[#FFEEAD] p-1 text-[#4ECDC4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-end">
                <span>ציוד חדיש ומתקדם</span>
                <span className="ml-2 rounded-full bg-[#FFEEAD] p-1 text-[#4ECDC4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-end">
                <span>מדריכים מוסמכים ומקצועיים</span>
                <span className="ml-2 rounded-full bg-[#FFEEAD] p-1 text-[#4ECDC4]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </li>
            </ul>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#4ECDC4] px-8 py-4 text-lg font-medium text-white shadow-md transition-all duration-300 hover:bg-[#3dbdb5] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-offset-2"
                aria-label="קבע תור עכשיו"
              >
                <span className="relative z-10 flex items-center">
                  קבע תור עכשיו
                  <motion.span 
                    className="mr-2"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 1.5 
                    }}
                  >
                    <FaArrowLeft className="h-5 w-5" />
                  </motion.span>
                </span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFEEAD] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="relative h-64 w-full overflow-hidden rounded-xl md:h-auto md:w-1/2 lg:rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="אימון במכון כושר ביתא"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 right-4 rounded-lg bg-[#FFEEAD]/90 px-4 py-2 text-sm font-medium text-gray-800">
              מכון כושר ביתא
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;