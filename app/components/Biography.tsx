import { motion } from 'framer-motion';

const Biography = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      style={{ marginTop: '20px', fontSize: '1.2rem', lineHeight: '1.5', color: '#555' }}
    >
      <h2>Biographie</h2>
      <p>Voici la biographie du personnage. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </motion.div>
  );
};

export default Biography;
