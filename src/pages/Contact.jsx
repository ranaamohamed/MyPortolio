import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import { portfolioData } from '../data/portfolioData';
// import '../styles/Contact.module.scss';

const Contact = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/in/rana-mohamed-36360b176', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/ranaamohamed', label: 'GitHub' },
   
  ];

  return (
    <div className="contact">
      <section className="hero">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind? Let's discuss how I can help bring it to life.
          </motion.p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Let's Talk!</h3>
              <p>Feel free to reach out via email or phone for collaborations, questions, or just to say hi.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope />
                  <span>ranaelsherif91@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>(+20) 01090054702</span>
                </div>
              </div>

              <div className="social-links">
                <h4>Or connect on social:</h4>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="back-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link to="/" className="btn btn-outline">← Back to Home</Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

