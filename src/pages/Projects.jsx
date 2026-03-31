import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ui/ProjectCard';
// import styles from '../styles/Projects.module.scss';

const Projects = () => {
  return (
    <div className={"projects"}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">All Projects</h1>
          <p className="section-subtitle">A showcase of my recent work and contributions</p>
          <div className={'projects-grid'}>
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

