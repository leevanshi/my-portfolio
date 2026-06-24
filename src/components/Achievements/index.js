import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCloud, FaShieldAlt, FaLightbulb, FaBriefcase, FaBuilding, FaAward } from 'react-icons/fa';
import './Achievements.scss';

const Achievements = () => {
  const achievements = [
    {
      title: 'Second Runner-Up',
      event: 'Hack-O-Mania 2.0',
      description: 'Secured 3rd place in the national-level hackathon for designing an innovative software solution under high-pressure constraints.',
      icon: <FaTrophy />,
      color: '#8B5CF6'
    },
    {
      title: 'Google Cloud Career Launchpad',
      event: 'Cloud Engineer Track',
      description: 'Completed comprehensive cloud training covering Kubernetes, IAM, Compute Engine, VPC networks, and operations.',
      icon: <FaCloud />,
      color: '#6366F1'
    },
    {
      title: 'Cybersecurity Analyst',
      event: 'Virtual Experience Program',
      description: 'Completed simulation training in threat detection, vulnerability analysis, and network security audit configurations.',
      icon: <FaShieldAlt />,
      color: '#8B5CF6'
    },
    {
      title: 'Participant',
      event: 'Infosys Ideathon',
      description: 'Proposed and presented a tech-driven startup concept aiming to address resource optimization in academic institutes.',
      icon: <FaLightbulb />,
      color: '#6366F1'
    },
    {
      title: 'Entrepreneurship Leader',
      event: 'EDC Positions',
      description: 'Headed multiple startup cells and organized entrepreneurial development bootcamps and networking meetups.',
      icon: <FaBriefcase />,
      color: '#8B5CF6'
    },
    {
      title: 'Founder of eCanteen',
      event: 'Start-up Initiative',
      description: 'Conceived and launched a campus food pre-ordering app, dealing with client acquisitions, vendor relations, and tech development.',
      icon: <FaBuilding />,
      color: '#6366F1'
    },
    {
      title: 'Convener',
      event: 'NMIMS First Intra MUN',
      description: 'Organized and managed the inaugural Model United Nations conference, leading delegates and administrative boards.',
      icon: <FaAward />,
      color: '#8B5CF6'
    }
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
    <section className="achievements" id="achievements">
      <div className="achievements__container">
        <motion.div
          className="achievements__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="achievements__header-icon">
            <FaAward />
          </div>
          <h2 className="achievements__title">Achievements & Badges</h2>
          <div className="achievements__subtitle">
            <span className="gradient-text">Milestones & Certifications</span>
          </div>
        </motion.div>

        <motion.div
          className="achievements__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="achievements__badge glassmorphism glassmorphism-hover"
              variants={badgeVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: `0 8px 32px ${item.color}30`
              }}
            >
              <div 
                className="achievements__badge-glow"
                style={{ 
                  background: `radial-gradient(circle at center, ${item.color}25 0%, transparent 70%)`
                }}
              />

              <div className="achievements__badge-icon-wrapper" style={{ borderColor: item.color, color: item.color }}>
                <span className="achievements__badge-icon">{item.icon}</span>
              </div>

              <div className="achievements__badge-content">
                <span className="achievements__badge-tag" style={{ color: item.color, background: `${item.color}15` }}>
                  {item.title}
                </span>
                <h3 className="achievements__badge-event">{item.event}</h3>
                <p className="achievements__badge-description">{item.description}</p>
              </div>

              <div 
                className="achievements__badge-accent"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
