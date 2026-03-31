import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SkillBadge from '../components/ui/SkillBadge';
import TimelineItem from '../components/ui/TimelineItem';
// import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <div className={"about"}>
      <section className="intro section">
        <div className="container">
          <div className="intro-content">
            <h1 className="section-title">About Me</h1>
            <p className="intro-text">
             I am a Full-Stack Developer with strong experience building scalable, secure, and high-performance web applications from start to finish. I work on both backend and frontend, delivering clean code and reliable solutions that meet real business needs.
I am comfortable working on new projects from scratch, improving existing systems, fixing bugs, and optimizing performance.
            </p>
            <div className={'skills-grid'}>
              {portfolioData.skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className={"timeline"}>
            {portfolioData.experience.map((exp, index) => (
              <TimelineItem key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

