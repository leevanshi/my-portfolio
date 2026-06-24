import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaShareAlt } from 'react-icons/fa';
import './NGO.scss';

const NGO = () => {
  const initiatives = [
    {
      title: 'Fundraiser Volunteer',
      organization: 'Muskurahat Foundation',
      description: 'Led fundraising campaigns and awareness initiatives to support underprivileged children. Mobilized community resources, organized events, and generated significant contributions for educational programs.',
      icon: <FaHandsHelping />,
      impact: 'Raised critical funds & supported child education',
      color: '#8B5CF6'
    },
    {
      title: 'Social Media Manager',
      organization: 'SWAAS NGO',
      description: 'Managed social media campaigns and digital outreach. Designed engaging content, increased overall community engagement, and raised awareness about healthcare and environmental issues.',
      icon: <FaShareAlt />,
      impact: 'Boosted social engagement & public awareness',
      color: '#6366F1'
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="ngo" id="ngo">
      <div className="ngo__container">
        <motion.div
          className="ngo__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="ngo__header-icon">
            <FaHeart />
          </div>
          <h2 className="ngo__title">NGO & Community Impact</h2>
          <div className="ngo__subtitle">
            <span className="gradient-text">Creating Social Value</span>
          </div>
        </motion.div>

        <motion.div
          className="ngo__cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              className="ngo__card glassmorphism glassmorphism-hover"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateX: 3,
                rotateY: 3,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="ngo__card-glow"
                style={{ 
                  background: `radial-gradient(circle at bottom right, ${item.color}30 0%, transparent 70%)`,
                }}
              />

              <div className="ngo__card-icon" style={{ color: item.color }}>
                {item.icon}
              </div>

              <h3 className="ngo__card-title">{item.title}</h3>

              <div className="ngo__card-org" style={{ color: item.color }}>
                {item.organization}
              </div>

              <p className="ngo__card-description">{item.description}</p>

              <div className="ngo__card-impact">
                <span className="ngo__impact-label">Key Impact:</span>
                <span className="ngo__impact-value">{item.impact}</span>
              </div>

              <div 
                className="ngo__card-accent"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NGO;
