import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPaperPlane, FaLocationArrow } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <motion.div
          className="contact-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-section__header-icon">
            <FaEnvelope />
          </div>
          <h2 className="contact-section__title">Get In Touch</h2>
          <div className="contact-section__subtitle">
            <span className="gradient-text">Let's Build Something Great</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-section__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Info & Links Column */}
          <motion.div className="contact-section__info" variants={itemVariants}>
            <h3 className="contact-section__info-title">Connect With Me</h3>
            <p className="contact-section__info-text">
              I am open to discussions about full-stack web applications, AI integration, serverless architectures, leadership roles, and community initiatives. Reach out via email, social links, or use the message form.
            </p>

            <div className="contact-section__details">
              <div className="contact-section__detail-item">
                <span className="contact-section__detail-icon"><FaLocationArrow /></span>
                <span>Chandigarh, India</span>
              </div>
              <div className="contact-section__detail-item">
                <span className="contact-section__detail-icon"><FaEnvelope /></span>
                <a href="mailto:leevanshi@example.com">leevanshi@example.com</a>
              </div>
            </div>

            <div className="contact-section__socials">
              <motion.a
                href="https://github.com/leevanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-section__social-link"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/leevanshisharma"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-section__social-link"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>

            <motion.a
              href="#resume-placeholder"
              className="contact-section__resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Form Column */}
          <motion.div className="contact-section__form-wrapper glassmorphism" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="contact-section__form">
              <div className="contact-section__input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="contact-section__input"
                />
              </div>

              <div className="contact-section__input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="contact-section__input"
                />
              </div>

              <div className="contact-section__input-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="contact-section__input"
                />
              </div>

              <div className="contact-section__input-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  required
                  rows="5"
                  className="contact-section__textarea"
                />
              </div>

              <motion.button
                type="submit"
                className="contact-section__submit-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>

              {submitted && (
                <motion.div
                  className="contact-section__success-msg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
