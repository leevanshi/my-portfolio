import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Projects.scss';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'eCanteen',
      description: 'Smart food pre-ordering platform for college canteens enabling students to order food in advance and pay online.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
      github: 'https://github.com/leevanshi',
      screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
    },
    {
      title: 'LexAI',
      description: 'AI-powered legal document assistant helping users understand legal documents and obtain intelligent legal insights.',
      tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/leevanshi',
      screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
    },
    {
      title: 'Nestora',
      description: 'Modern property discovery and accommodation platform for finding your perfect living space.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/leevanshi',
      screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
    },
    {
      title: 'Student Performance Predictor',
      description: 'ML regression model predicting student academic outcomes based on various factors.',
      tech: ['Python', 'Flask', 'scikit-learn'],
      github: 'https://github.com/leevanshi',
      screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
    },
    {
      title: 'Fake News Detector',
      description: 'NLP-based classification pipeline to detect misinformation and fake news articles.',
      tech: ['Python', 'scikit-learn', 'NLP'],
      github: 'https://github.com/leevanshi',
      screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
    },
    {
      title: 'CredMax',
      description: 'Credit score classifier with fintech risk features for financial analytics.',
      tech: ['Python', 'scikit-learn', 'Pandas'],
      github: 'https://github.com/leevanshi',
      screenshots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3']
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextProject();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevProject();
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

        <div className="projects__slider">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="projects__slide"
            >
              <div className="projects__slide-content">
                <div className="projects__slide-info">
                  <h3 className="projects__slide-title">{projects[currentIndex].title}</h3>
                  <p className="projects__slide-description">{projects[currentIndex].description}</p>
                  
                  <div className="projects__slide-tech">
                    {projects[currentIndex].tech.map((tech, index) => (
                      <span key={index} className="projects__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__slide-code-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                </div>

                <div className="projects__slide-screenshots">
                  {projects[currentIndex].screenshots.map((screenshot, index) => (
                    <div key={index} className="projects__screenshot">
                      <div className="projects__screenshot-placeholder">
                        {screenshot}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="projects__navigation">
            <motion.button
              className="projects__nav-btn projects__nav-btn--prev"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            
            <div className="projects__dots">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`projects__dot ${index === currentIndex ? 'projects__dot--active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>

            <motion.button
              className="projects__nav-btn projects__nav-btn--next"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
