'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  role?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    quote: 'מכון כושר ביתא שינה את חיי. המאמנים המקצועיים והגישה החינוכית עזרו לי להבין איך לאמן את הגוף שלי בצורה נכונה ובריאה.',
    role: 'מנוי קבוע - 3 שנים',
    image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'מיכל לוי',
    quote: 'הצוות המקצועי במכון כושר ביתא לא רק מדריך אותך באימונים, אלא גם מלמד אותך על תזונה נכונה ואורח חיים בריא. זה הרבה יותר ממכון כושר רגיל.',
    role: 'מנויה - שנתיים',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'יוסי אברהם',
    quote: 'האווירה החינוכית במכון מעולה. המאמנים מסבירים כל תרגיל ואת החשיבות שלו, מה שעוזר לי להתמיד ולהבין את התהליך שהגוף שלי עובר.',
    role: 'מנוי - שנה וחצי',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'רונית שמעוני',
    quote: 'אחרי שניסיתי מספר מכוני כושר, ביתא הוא המקום היחיד שבו הרגשתי שבאמת אכפת להם מההתקדמות שלי. הם משקיעים זמן בללמד אותך את היסודות הנכונים.',
    role: 'מנויה - 8 חודשים',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // If swipe is significant enough (more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped right to left (next)
        goToNext();
      } else {
        // Swiped left to right (previous)
        goToPrevious();
      }
    }
    
    setTouchStart(null);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNext]);

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play after some inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000); // Resume after 10 seconds of inactivity
      
      return () => clearTimeout(timeout);
    }
  }, [isAutoPlaying, currentIndex]);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          id="testimonials-heading" 
          className="text-3xl md:text-4xl font-bold text-right mb-12 text-gray-800"
        >
          מה הלקוחות שלנו אומרים
        </h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={pauseAutoPlay}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="h-[400px] md:h-[350px] relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex flex-col md:flex-row items-center bg-gradient-to-br from-[#FFEEAD]/20 to-[#4ECDC4]/10 rounded-2xl p-6 md:p-10"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#4ECDC4]">
                    {testimonials[currentIndex].image && (
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pr-8 text-right">
                  <div className="relative mb-4">
                    <FaQuoteRight className="absolute -top-4 -right-2 text-[#4ECDC4] opacity-30 text-4xl" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    {testimonials[currentIndex].role && (
                      <p className="text-[#4ECDC4] font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => {
                goToPrevious();
                pauseAutoPlay();
              }}
              className="bg-[#FFEEAD] hover:bg-[#4ECDC4] text-gray-800 hover:text-white p-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
              aria-label="הקודם"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            
            <div className="flex space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] ${
                    currentIndex === index 
                      ? 'bg-[#4ECDC4] w-6' 
                      : 'bg-[#FFEEAD]'
                  }`}
                  aria-label={`עבור לעדות ${index + 1}`}
                  aria-current={currentIndex === index ? 'true' : 'false'}
                />
              ))}
            </div>
            
            <button
              onClick={() => {
                goToNext();
                pauseAutoPlay();
              }}
              className="bg-[#FFEEAD] hover:bg-[#4ECDC4] text-gray-800 hover:text-white p-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50"
              aria-label="הבא"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;