'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <footer 
      id="footer" 
      className="bg-white text-gray-800 pt-12 pb-6 border-t border-gray-200"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Business Info */}
          <motion.div variants={itemVariants} className="text-right">
            <h2 className="text-2xl font-bold mb-4 text-right" style={{ color: '#4ECDC4' }}>
              מכון כושר ביתא
            </h2>
            <p className="mb-4 text-right">
              אנחנו מכון כושר מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="מכון כושר ביתא"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4 text-right" style={{ color: '#4ECDC4' }}>
              קישורים מהירים
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-[#4ECDC4] transition-colors duration-300 text-right block">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#4ECDC4] transition-colors duration-300 text-right block">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="#trainers" className="hover:text-[#4ECDC4] transition-colors duration-300 text-right block">
                  מאמנים
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-[#4ECDC4] transition-colors duration-300 text-right block">
                  לוח זמנים
                </Link>
              </li>
              <li>
                <Link href="#membership" className="hover:text-[#4ECDC4] transition-colors duration-300 text-right block">
                  חברות
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#4ECDC4] transition-colors duration-300 text-right block">
                  צור קשר
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4 text-right" style={{ color: '#4ECDC4' }}>
              צור קשר
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-end gap-2">
                <span>03-1234567</span>
                <FaPhone className="text-[#4ECDC4]" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>info@betagym.co.il</span>
                <FaEnvelope className="text-[#4ECDC4]" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>רחוב הרצל 123, תל אביב</span>
                <FaMapMarkerAlt className="text-[#4ECDC4]" />
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4 text-right" style={{ color: '#4ECDC4' }}>
              עקבו אחרינו
            </h3>
            <div className="flex justify-end space-x-4 space-x-reverse">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#FFEEAD] text-[#4ECDC4] p-3 rounded-full"
                aria-label="עקבו אחרינו באינסטגרם"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#FFEEAD] text-[#4ECDC4] p-3 rounded-full"
                aria-label="עקבו אחרינו בפייסבוק"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#FFEEAD] text-[#4ECDC4] p-3 rounded-full"
                aria-label="עקבו אחרינו בטוויטר"
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-right">שעות פעילות</h4>
              <p className="text-right">ראשון - חמישי: 06:00 - 23:00</p>
              <p className="text-right">שישי: 06:00 - 18:00</p>
              <p className="text-right">שבת: 08:00 - 20:00</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-200 text-center md:text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} מכון כושר ביתא. כל הזכויות שמורות.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;