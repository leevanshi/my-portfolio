import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaHeart, FaTrophy, FaUsers, FaBuilding, FaCalendar, FaShieldAlt, FaLightbulb, FaBriefcase, FaAward, FaHandsHelping, FaShareAlt, FaCode } from 'react-icons/fa';
import './Awards.scss';

const Awards = () => {
  const leadershipRoles = [
    {
      title: 'Founder',
      organization: 'eCanteen',
      icon: '🚀',
      color: '#8B5CF6'
    },
    {
      title: 'Entrepreneurship Development Cell Head',
      organization: 'NMIMS Chandigarh',
      icon: '🎓',
      color: '#6366F1'
    },
    {
      title: 'Event Coordinator',
      organization: 'Entrepreneurship Development Cell',
      icon: '📋',
      color: '#8B5CF6'
    },
    {
      title: 'Convener',
      organization: 'NMIMS First Intra MUN',
      icon: '🏆',
      color: '#6366F1'
    },
    {
      title: 'Student Council Member',
      organization: 'NMIMS Chandigarh (1st Year)',
      icon: '👥',
      color: '#8B5CF6'
    },
    {
      title: 'Core Member',
      organization: 'Code2Career Club, NMIMS Chandigarh',
      icon: '💻',
      color: '#6366F1'
    }
  ];

  const ngoInitiatives = [
    {
      title: 'Muskurahat Foundation',
      role: 'Fundraiser Volunteer',
      description: 'Led fundraising campaigns and awareness initiatives.',
      icon: <FaHandsHelping />,
      color: '#8B5CF6'
    },
    {
      title: 'SWAAS NGO',
      role: 'Social Media Manager',
      description: 'Managed social media campaigns and increased community engagement.',
      icon: <FaShareAlt />,
      color: '#6366F1'
    }
  ];

  const achievementBadges = [
    { icon: '🔐', text: 'Cybersecurity Analyst Virtual Experience Program', color: '#8B5CF6' },
    { icon: '💡', text: 'Infosys Ideathon Participant', color: '#6366F1' },
    { icon: '🚀', text: 'Founder of eCanteen', color: '#8B5CF6' },
    { icon: '🎙️', text: 'Convener of NMIMS First Intra MUN', color: '#6366F1' },
    { icon: '💻', text: '50+ LeetCode Problems Solved', color: '#8B5CF6' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="awards" id="awards">
      <div className="awards__container">
        <motion.div
          className="awards__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="awards__header-icon">
            <FaTrophy />
          </div>
          <h2 className="awards__title">Awards & Honors</h2>
          <div className="awards__subtitle">
            <span className="gradient-text">Recognition & Impact</span>
          </div>
        </motion.div>

        {/* Leadership & Roles */}
        <motion.div
          className="awards__section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="awards__section-title">
            <FaCrown className="awards__section-icon" />
            Leadership & Roles
          </h3>
          <motion.div
            className="awards__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                className="awards__card glassmorphism glassmorphism-hover"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 12px 40px ${role.color}40`
                }}
              >
                <div 
                  className="awards__card-glow"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${role.color}30 0%, transparent 70%)`,
                  }}
                />
                <div className="awards__card-icon" style={{ color: role.color }}>
                  {role.icon}
                </div>
                <h4 className="awards__card-title">{role.title}</h4>
                <div className="awards__card-org" style={{ color: role.color }}>
                  {role.organization}
                </div>
                <div 
                  className="awards__card-accent"
                  style={{ backgroundColor: role.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* NGO & Community Impact */}
        <motion.div
          className="awards__section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="awards__section-title">
            <FaHeart className="awards__section-icon" />
            NGO & Community Impact
          </h3>
          <motion.div
            className="awards__ngo-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {ngoInitiatives.map((item, index) => (
              <motion.div
                key={index}
                className="awards__ngo-card glassmorphism glassmorphism-hover"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 12px 40px ${item.color}40`
                }}
              >
                <div 
                  className="awards__ngo-glow"
                  style={{ 
                    background: `radial-gradient(circle at bottom right, ${item.color}30 0%, transparent 70%)`,
                  }}
                />
                <div className="awards__ngo-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h4 className="awards__ngo-title">{item.title}</h4>
                <div className="awards__ngo-role" style={{ color: item.color }}>
                  {item.role}
                </div>
                <p className="awards__ngo-description">{item.description}</p>
                <div 
                  className="awards__ngo-accent"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          className="awards__section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="awards__section-title">
            <FaAward className="awards__section-icon" />
            Achievement Badges
          </h3>
          <motion.div
            className="awards__badges"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {achievementBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="awards__badge glassmorphism glassmorphism-hover"
                variants={badgeVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 8px 32px ${badge.color}40`
                }}
              >
                <span className="awards__badge-icon">{badge.icon}</span>
                <span className="awards__badge-text">{badge.text}</span>
                <div 
                  className="awards__badge-accent"
                  style={{ backgroundColor: badge.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
