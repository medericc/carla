import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>TON NOM ICI</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/drapeau.png"  // Assure-toi que l'image est dans le dossier public
          alt="Drapeau"
          width={500}
          height={300}
          style={{ opacity: 0.6 }}
        />
      </motion.div>
    </motion.header>
  );
};

export default Header;
