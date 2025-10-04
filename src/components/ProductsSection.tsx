'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

// Define product type
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Sample product data
const products: Product[] = [
  {
    id: 'p1',
    title: 'תוכנית אימון אישית',
    description: 'תוכנית אימון מותאמת אישית לפי צרכיך וליווי מקצועי לאורך כל הדרך',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p2',
    title: 'מדריך תזונה מקיף',
    description: 'מדריך תזונה מקצועי הכולל תפריטים שבועיים, מתכונים בריאים וטיפים לאורח חיים בריא',
    price: 149,
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p3',
    title: 'סדנת כושר מקצועית',
    description: 'סדנה מקצועית בת יומיים ללימוד טכניקות אימון מתקדמות ושיטות לשיפור הביצועים',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p4',
    title: 'ערכת אימון ביתית',
    description: 'ערכה מלאה לאימון ביתי הכוללת משקולות, רצועות התנגדות ומדריך תרגילים מפורט',
    price: 499,
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const ProductsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    <section 
      id="products-section" 
      className="py-16 px-4 md:px-8 bg-white" 
      dir="rtl"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-12">
          <h2 
            id="products-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            המוצרים שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mr-auto ml-0">
            אנו מציעים מגוון מוצרים ושירותים איכותיים לקידום אורח חיים בריא ופעיל
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(product.id)}
              onBlur={() => setHoveredId(null)}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div 
                className="p-6 bg-gradient-to-b from-[#FFEEAD]/10 to-white"
                style={{ 
                  borderTop: '3px solid #4ECDC4',
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-right text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-right">{product.description}</p>
                <div className="flex justify-between items-center">
                  <motion.button
                    className="flex items-center gap-2 bg-[#4ECDC4] text-white px-4 py-2 rounded-md hover:bg-[#3dbdb5] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`למידע נוסף על ${product.title}`}
                  >
                    <FaArrowLeft className="text-sm" />
                    <span>למידע נוסף</span>
                  </motion.button>
                  <motion.p 
                    className="text-lg font-bold text-gray-800"
                    animate={{ 
                      scale: hoveredId === product.id ? 1.1 : 1,
                      color: hoveredId === product.id ? '#4ECDC4' : '#1F2937',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    ₪{product.price}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;