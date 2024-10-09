import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      style={{ textAlign: 'center', marginTop: '20px' }}
    >
      <Image
        src="/perso.png"  // Image du personnage à ajouter dans public
        alt="Personnage"
        width={200}
        height={300}
      />
    </motion.div>
  );
};

export default Hero;
