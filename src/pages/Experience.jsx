import React from 'react';
import { portfolioData } from '../data/portfolioData';
import TimelineItem from '../components/ui/TimelineItem';
// import styles from '../styles/Experience.module.scss';

const Experience = () => {
  return (
    <div className={"experience"}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Work Experience</h1>
          <p className="section-subtitle">My professional journey in software development</p>
          <div className={'timeline-container'}>
            <div className={"timeline"}>
              {portfolioData.experience.map((exp, index) => (
                <TimelineItem key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;






