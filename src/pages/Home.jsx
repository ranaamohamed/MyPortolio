import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import SkillBadge from '../components/ui/SkillBadge';
import ProjectCard from '../components/ui/ProjectCard';
// import styles from '../styles/Home.module.scss';

const Home = () => {
  const featuredProjects = portfolioData.projects.slice(0, 2);

  return (
    <div className={"home"}>
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="highlight">{portfolioData.name}</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {portfolioData.title}
            </motion.p>
            <motion.p 
              className="hero-desc"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {portfolioData.intro}
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="skills-preview section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
            <div className={'skills-grid'}>
            {portfolioData.skills.slice(0, 8).map((skill, index) => (
              <motion.div 
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="btn btn-primary">View All</Link>
          </div>
          <div className={'projects-grid'}>
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

