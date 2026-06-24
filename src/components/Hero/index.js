import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'Founder @ eCanteen',
    'Full Stack Developer',
    'AI & Blockchain Enthusiast',
    'Computer Engineering Student',
    'Entrepreneurship & Community Leader'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__background">
        <div className="hero__particles"></div>
        <div className="hero__gradient-overlay"></div>
      </div>

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero__greeting">
          <span className="hero__greeting-text">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero__name">
          <span className="hero__name-first">Leevanshi</span>
          <span className="hero__name-last">Sharma</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="hero__titles">
          <div className="hero__title-container">
            <motion.div
              key={titleIndex}
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {titles[titleIndex]}
            </motion.div>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="hero__subtitle">
          Building AI-Powered Products, Scalable Applications & Real-World Solutions
        </motion.p>

        <motion.p variants={itemVariants} className="hero__location">
          <span className="hero__location-icon">📍</span>
          Chandigarh, India
        </motion.p>

        <motion.div variants={itemVariants} className="hero__cta">
          <motion.button
            className="hero__btn hero__btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="hero__btn hero__btn--secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="hero__scroll-indicator">
          <motion.div
            className="hero__scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span className="hero__scroll-text">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
