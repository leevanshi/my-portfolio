import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaUsers, FaCalendar, FaTrophy, FaBuilding } from 'react-icons/fa';
import './Leadership.scss';

const Leadership = () => {
  const leadershipRoles = [
    {
      title: 'Founder',
      organization: 'eCanteen',
      description: 'Founded and lead a smart food pre-ordering platform, managing product development, team coordination, and business strategy.',
      icon: '🚀',
      color: '#8B5CF6'
    },
    {
      title: 'Entrepreneurship Development Cell Head',
      organization: 'NMIMS Chandigarh',
      description: 'Leading the entrepreneurship cell, organizing events, workshops, and initiatives to foster innovation and startup culture among students.',
      icon: '🎓',
      color: '#6366F1'
    },
    {
      title: 'Event Coordinator',
      organization: 'Entrepreneurship Development Cell',
      description: 'Coordinated multiple entrepreneurship events, hackathons, and networking sessions, bringing together industry experts and students.',
      icon: '📋',
      color: '#8B5CF6'
    },
    {
      title: 'Convener',
      organization: 'NMIMS First Intra MUN',
      description: 'Led the organization of the first Model United Nations conference at NMIMS, managing logistics, delegate coordination, and event execution.',
      icon: '🏆',
      color: '#6366F1'
    }
  ];

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="leadership" id="leadership">
      <div className="leadership__container">
        <motion.div
          className="leadership__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="leadership__header-icon">
            <FaCrown />
          </div>
          <h2 className="leadership__title">Leadership</h2>
          <div className="leadership__subtitle">
            <span className="gradient-text">Leading with Vision</span>
          </div>
        </motion.div>

        <motion.div
          className="leadership__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              className="leadership__card glassmorphism glassmorphism-hover"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="leadership__card-glow"
                style={{ 
                  background: `radial-gradient(circle at top right, ${role.color}30 0%, transparent 70%)`,
                }}
              />

              <div className="leadership__card-icon" style={{ color: role.color }}>
                {role.icon}
              </div>

              <h3 className="leadership__card-title">{role.title}</h3>

              <div className="leadership__card-organization">
                <FaBuilding className="leadership__card-icon-small" />
                {role.organization}
              </div>

              <p className="leadership__card-description">{role.description}</p>

              <div 
                className="leadership__card-accent"
                style={{ background: `linear-gradient(90deg, ${role.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="leadership__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="leadership__stat glassmorphism">
            <FaUsers className="leadership__stat-icon" />
            <div className="leadership__stat-value">500+</div>
            <div className="leadership__stat-label">Team Members Led</div>
          </div>
          <div className="leadership__stat glassmorphism">
            <FaCalendar className="leadership__stat-icon" />
            <div className="leadership__stat-value">20+</div>
            <div className="leadership__stat-label">Events Organized</div>
          </div>
          <div className="leadership__stat glassmorphism">
            <FaTrophy className="leadership__stat-icon" />
            <div className="leadership__stat-value">10+</div>
            <div className="leadership__stat-label">Initiatives Launched</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
