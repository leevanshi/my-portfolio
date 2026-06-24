import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.scss';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'eCanteen',
      description: 'Smart food pre-ordering platform for college canteens enabling students to order food in advance and pay online.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
      github: 'https://github.com/leevanshi/ecanteen',
      demo: '#',
      icon: '🍽️',
      color: '#8B5CF6'
    },
    {
      title: 'LexAI',
      description: 'AI-powered legal assistant helping users understand legal documents and obtain intelligent legal insights.',
      tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/leevanshi/lex-ai',
      demo: '#',
      icon: '⚖️',
      color: '#6366F1'
    },
    {
      title: 'Nestora',
      description: 'Modern property discovery and accommodation platform for finding your perfect living space.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/leevanshi/nestora',
      demo: '#',
      icon: '🏠',
      color: '#8B5CF6'
    },
    {
      title: 'Serverless Full Stack',
      description: 'Cloud-native serverless application leveraging AWS services for scalable architecture.',
      tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'React'],
      github: 'https://github.com/leevanshi/serverless-full-stack',
      demo: '#',
      icon: '☁️',
      color: '#6366F1'
    },
    {
      title: 'Portfolio AI',
      description: 'AI-powered portfolio creation platform for developers to build stunning portfolios.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI'],
      github: 'https://github.com/leevanshi/portfolio-ai',
      demo: '#',
      icon: '🤖',
      color: '#8B5CF6'
    },
    {
      title: 'CredMax',
      description: 'AI-driven credit scoring and financial analytics platform for smarter financial decisions.',
      tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/leevanshi/credmax',
      demo: '#',
      icon: '💳',
      color: '#6366F1'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects__title">Featured Projects</h2>
          <div className="projects__subtitle">
            <span className="gradient-text">Innovation in Action</span>
          </div>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="projects__card glassmorphism"
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <div 
                className="projects__card-glow"
                style={{ 
                  background: `radial-gradient(circle at center, ${project.color}40 0%, transparent 70%)`,
                  opacity: hoveredProject === index ? 1 : 0,
                }}
              />
              
              <div className="projects__card-icon" style={{ color: project.color }}>
                {project.icon}
              </div>

              <h3 className="projects__card-title">{project.title}</h3>

              <p className="projects__card-description">{project.description}</p>

              <div className="projects__card-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="projects__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projects__card-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__card-link projects__card-link--github"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  className="projects__card-link projects__card-link--demo"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </motion.a>
              </div>

              <div 
                className="projects__card-border"
                style={{ 
                  borderColor: hoveredProject === index ? project.color : 'rgba(139, 92, 246, 0.2)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="projects__btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
