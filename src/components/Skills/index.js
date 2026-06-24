import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaCloud, FaTools, FaBrain } from 'react-icons/fa';
import './Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
      color: '#8B5CF6'
    },
    {
      title: 'Frontend',
      icon: <FaLaptopCode />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
      color: '#6366F1'
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      color: '#8B5CF6'
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      color: '#6366F1'
    },
    {
      title: 'Cloud',
      icon: <FaCloud />,
      skills: ['AWS', 'Serverless Architecture'],
      color: '#8B5CF6'
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: ['Git', 'GitHub', 'VS Code'],
      color: '#6366F1'
    },
    {
      title: 'AI & Data',
      icon: <FaBrain />,
      skills: ['OpenAI APIs', 'Machine Learning', 'Data Analysis'],
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-section__container">
        <motion.div
          className="skills-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-section__header-icon">
            <FaCode />
          </div>
          <h2 className="skills-section__title">Skills & Technologies</h2>
          <div className="skills-section__subtitle">
            <span className="gradient-text">My Technical Stack</span>
          </div>
        </motion.div>

        <motion.div
          className="skills-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skills-section__card glassmorphism glassmorphism-hover"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="skills-section__card-header" style={{ color: category.color }}>
                <span className="skills-section__category-icon">{category.icon}</span>
                <h3 className="skills-section__category-title">{category.title}</h3>
              </div>

              <div className="skills-section__badges">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skills-section__badge"
                    whileHover={{ scale: 1.08, backgroundColor: `${category.color}25`, borderColor: category.color }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div 
                className="skills-section__card-accent"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
