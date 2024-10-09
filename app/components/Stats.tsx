import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.5rem', color: '#333' }}
    >
      <p>Points: 1500</p>
      <p>Victoire: 200</p>
      <p>Défaite: 50</p>
    </motion.div>
  );
};

export default Stats;
