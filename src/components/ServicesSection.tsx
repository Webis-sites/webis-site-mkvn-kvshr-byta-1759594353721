'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaChartLine, FaGraduationCap, FaHeartbeat, FaRunning } from 'react-icons/fa';
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
      className="bg-white rounded-lg overflow-hidden shadow-md h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 text-right">
        <div className="flex items-center justify-end mb-3">
          <h3 className="text-xl font-bold ml-2">{title}</h3>
          <div className="text-[#4ECDC4] ml-3">{icon}</div>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: ServiceCardProps[] = [
    {
      icon: <FaDumbbell size={24} />,
      title: 'אימון אישי',
      description: 'תוכנית אימונים מותאמת אישית עם מדריך מקצועי שיעזור לך להשיג את המטרות שלך.',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaUsers size={24} />,
      title: 'אימונים קבוצתיים',
      description: 'מגוון רחב של שיעורים קבוצתיים בהדרכת מאמנים מוסמכים, מתאים לכל רמות הכושר.',
      imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'הערכת כושר',
      description: 'בדיקות מקיפות להערכת רמת הכושר שלך וקביעת יעדים ריאליסטיים להתקדמות.',
      imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaGraduationCap size={24} />,
      title: 'סדנאות חינוכיות',
      description: 'סדנאות בנושאי תזונה, טכניקות אימון נכונות, ומניעת פציעות.',
      imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaHeartbeat size={24} />,
      title: 'תוכניות שיקום',
      description: 'תוכניות מותאמות אישית לשיקום לאחר פציעות או ניתוחים בליווי צוות מקצועי.',
      imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaRunning size={24} />,
      title: 'תוכניות מיוחדות',
      description: 'תוכניות ייעודיות לקבוצות גיל שונות, נשים בהריון, ספורטאים מקצועיים ועוד.',
      imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="services-section" dir="rtl" className="py-16 bg-[#FFEEAD]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-[#4ECDC4] mx-auto mb-6 mr-auto ml-0"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-right">
            במכון כושר ביתא אנו מציעים מגוון רחב של שירותים המותאמים לצרכים האישיים שלך, עם דגש על חינוך והדרכה מקצועית.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;