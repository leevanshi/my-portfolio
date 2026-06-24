import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.scss';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [counters, setCounters] = useState({
    projects: 0,
    years: 0,
    technologies: 0,
    impact: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        projects: 15,
        years: 3,
        technologies: 20,
        impact: 5000
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setCounters({
          projects: Math.floor(targets.projects * easeProgress),
          years: Math.floor(targets.years * easeProgress),
          technologies: Math.floor(targets.technologies * easeProgress),
          impact: Math.floor(targets.impact * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const stats = [
    { value: counters.projects, label: 'Projects Built', suffix: '+' },
    { value: counters.years, label: 'Years Experience', suffix: '+' },
    { value: counters.technologies, label: 'Technologies', suffix: '+' },
    { value: counters.impact, label: 'Lives Impacted', suffix: '+' },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="about__title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="about__subtitle">
            <span className="gradient-text">Building the Future</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="about__text">
            <p className="about__description">
              I am a Computer Engineering student passionate about building impactful technology solutions. 
              As the Founder of eCanteen, I focus on solving real-world problems through software development, 
              AI, cloud technologies, and entrepreneurship.
            </p>
            <p className="about__description">
              I enjoy creating scalable applications, leading teams, organizing events, and contributing to 
              social initiatives. My goal is to leverage technology to create meaningful change and build 
              products that make a difference.
            </p>
            <p className="about__highlight">
              Building AI-Powered Products, Scalable Applications & Real-World Solutions
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about__stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="about__stat glassmorphism glassmorphism-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="about__stat-value gradient-text"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="about__stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about__cards"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {[
            { icon: '🚀', title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology' },
            { icon: '💡', title: 'Problem Solver', description: 'Turning complex challenges into elegant solutions' },
            { icon: '🤝', title: 'Leadership', description: 'Building and empowering high-performing teams' },
            { icon: '🌟', title: 'Impact', description: 'Creating technology that improves lives' },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="about__card glassmorphism glassmorphism-hover"
              variants={itemVariants}
              whileHover={{ y: -10, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="about__card-icon">{card.icon}</div>
              <h3 className="about__card-title">{card.title}</h3>
              <p className="about__card-description">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
