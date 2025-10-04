'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const GymHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#4ECDC4",
      color: "#FFFFFF",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section 
      id="gym-hero" 
      className="relative w-full h-screen overflow-hidden"
      dir="rtl"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="מכון כושר ביתא - תמונת רקע"
          fill
          priority
          className="object-cover object-center brightness-[0.7]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end text-right"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            מכון כושר מוביל בישראל
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.button
              className="flex items-center gap-3 bg-[#FFEEAD] text-gray-800 font-medium py-3 px-8 rounded-lg shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="קבע תור עכשיו"
            >
              <span>קבע תור עכשיו</span>
              <FaArrowLeft className="text-sm" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-[#4ECDC4]/20 backdrop-blur-sm p-4 rounded-lg border border-[#4ECDC4]/30"
            variants={itemVariants}
          >
            <p className="text-white text-sm md:text-base">
              אנחנו מכון כושר מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GymHero;