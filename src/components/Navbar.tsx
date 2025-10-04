'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'שירותים' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and background when scrolled
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      const currentSection = sections.find(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      id="main-navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="מכון כושר ביתא לוגו" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold mr-2 text-right" style={{ color: '#4ECDC4' }}>
                מכון כושר ביתא
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 mx-1 rounded-md text-right transition-colors ${
                  activeSection === item.id
                    ? 'text-white font-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: activeSection === item.id ? '#4ECDC4' : 'transparent',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ color: '#4ECDC4' }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
            dir="rtl"
          >
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-right py-3 px-4 rounded-md my-1 ${
                      activeSection === item.id
                        ? 'bg-opacity-10 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? '#FFEEAD' : 'transparent',
                      color: activeSection === item.id ? '#4ECDC4' : 'black',
                    }}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;