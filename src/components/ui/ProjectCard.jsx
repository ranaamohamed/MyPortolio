import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
// import styles from './../../styles/ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
    //className={`${styles['project-card']} card-hover`} 
      className="project-card card-hover"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tech">
          {project.tech && project.tech.split(', ').map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-links">
        {project.github && project.github.map((url, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub /> GitHub
          </a>
        ))}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-link">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

