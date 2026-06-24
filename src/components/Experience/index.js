import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaBuilding } from 'react-icons/fa';
import './Experience.scss';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Development Intern',
      company: 'CODTECH IT Solutions',
      period: 'May 2025 – Jun 2025',
      description: 'Developed modern web applications using full-stack technologies including React, Node.js, and databases. Collaborated with senior developers to implement scalable solutions and best practices.',
      icon: '💻',
      color: '#8B5CF6'
    },
    {
      title: 'Research Associate Intern',
      company: 'Eduvate Consultancy Pvt. Ltd.',
      period: 'Feb 2025 – Apr 2025',
      description: 'Worked on automation, analytics, and research projects using Python and Google Apps Script. Developed data-driven solutions and automated workflows to improve operational efficiency.',
      icon: '🔬',
      color: '#6366F1'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="experience__title">Experience</h2>
          <div className="experience__subtitle">
            <span className="gradient-text">Professional Journey</span>
          </div>
        </motion.div>

        <div className="experience__timeline">
          <motion.div
            className="experience__timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />

          <motion.div
            className="experience__items"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience__item"
                variants={itemVariants}
              >
                <div className="experience__item-marker">
                  <div 
                    className="experience__marker-dot"
                    style={{ backgroundColor: exp.color }}
                  />
                  <div 
                    className="experience__marker-glow"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>

                <motion.div
                  className="experience__card glassmorphism glassmorphism-hover"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="experience__card-header">
                    <div className="experience__card-icon" style={{ color: exp.color }}>
                      {exp.icon}
                    </div>
                    <div className="experience__card-info">
                      <h3 className="experience__card-title">{exp.title}</h3>
                      <div className="experience__card-company">
                        <FaBuilding className="experience__icon" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="experience__card-period">
                    <FaCalendar className="experience__icon" />
                    {exp.period}
                  </div>

                  <p className="experience__card-description">
                    {exp.description}
                  </p>

                  <div 
                    className="experience__card-accent"
                    style={{ background: `linear-gradient(90deg, ${exp.color}40, transparent)` }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
