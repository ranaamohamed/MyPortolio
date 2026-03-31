import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
// import styles from './../../styles/TimelineItem.module.scss';

const TimelineItem = ({ experience }) => {
  return (
    <motion.div 
    //className={styles['timeline-item']} 
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="timeline-icon">
        <FaBriefcase />
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h4 className="timeline-role">{experience.role}</h4>
          <span className="timeline-period">{experience.period}</span>
        </div>
        <h5 className="timeline-company">{experience.company}</h5>
       
        <ul className='timeline-details'>
          {experience?.details?.map((det, index) => (
                          <li key={index}>{det}</li>
                        ))}
        </ul>
        
         {experience.note && ( <strong>Note: <small> {experience.note}</small></strong>)}
        
      </div>
    </motion.div>
  );
};

export default TimelineItem;

