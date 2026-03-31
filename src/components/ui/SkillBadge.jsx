import React from 'react';
import { motion } from 'framer-motion';
// import styles from './../../styles/SkillBadge.module.scss';

const SkillBadge = ({ skill }) => {
  return (
    <motion.span 
    //className={styles['skill-badge']} 
       className="skill-badge"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;

