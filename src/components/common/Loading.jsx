import React from 'react';
import { motion } from 'framer-motion';
import './../../styles/Loading.module.scss';

const Loading = () => {
  return (
    <motion.div 
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="loader"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="loading-text">Loading...</div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;

