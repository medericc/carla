"use client"; 
import { motion } from 'framer-motion';

const News = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5, duration: 1 }}
      style={{ marginTop: '20px', fontSize: '1.2rem', color: '#555' }}
    >
      <h2>Actualités</h2>
      <ul>
        <li>News 1: Nouveau record établi...</li>
        <li>News 2: Prochain match annoncé...</li>
      </ul>
    </motion.div>
  );
};

export default News;
