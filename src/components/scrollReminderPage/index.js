import React, { useRef, useState } from 'react';
import { useScroll } from '@react-three/drei';
import { motion } from 'framer-motion';

import './index.scss';
import { useFrame } from '@react-three/fiber';

function ScrollReminderPage() {
  const scroll = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useFrame(() => {
    if (isVisible) {
      ref.current.style.opacity = 1 - scroll.range(0, 0.06);
    }

    if (isVisible && !scroll.visible(0, 0.04)) {
      // setIsVisible(false);
      // localStorage.setItem('show-scroll-reminder-helper', 'false');
    }
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // if (!isVisible) return null;

  return (
    <div
      ref={ref}
      style={{ color: 'white', display: 'flex', flexDirection: 'column' }}
      className='container hero-page'
    >
      <div className="hero-page__content">
        <h1 className="hero-page__title">Leevanshi Sharma</h1>
        <p className="hero-page__subtitle">Full Stack Dev | AI Builder | Founder of eCanteen</p>
        
        <div className="hero-page__cta">
          <motion.button
            className="hero-page__btn hero-page__btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </motion.button>
          <motion.button
            className="hero-page__btn hero-page__btn--secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </motion.button>
        </div>
      </div>

      <div className="hero-page__scroll">
        Scroll down
        <div className='field'>
          <div className='mouse' />
        </div>
      </div>
    </div>
  );
}

export default ScrollReminderPage;
