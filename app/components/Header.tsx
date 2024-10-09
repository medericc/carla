"use client";
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
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Title with overlap on the flag */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: '4rem', // Adjust size as needed
            fontWeight: 'bold',
            position: 'absolute',
            top: '-50px', // Adjust for text to overlap the flag
            left: '30%',
            transform: 'translateX(-30%)',
            color: '#FFF', // Color to contrast with the background
            zIndex: 3,
          }}
        >
          CARLA
        </motion.h1>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: '4rem', // Adjust size as needed
            fontWeight: 'bold',
            position: 'absolute',
            top: '-0px', // Adjust for text to overlap the flag
            left: '35%',
            transform: 'translateX(-35%)',
            color: '#FFF', // Color to contrast with the background
            zIndex: 3,
          }}
        >
          LEITE
        </motion.h1>

        {/* Flag */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Image
            src="/drapeau.png"
            alt="Drapeau"
            width={500}
            height={300}
            style={{ opacity: 0.6 }}
          />
        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '30%',
            transform: 'translateX(-30%)',
            zIndex: 2,
          }}
        >
          <Image
            src="/perso.png"
            alt="Personnage"
            width={200}
            height={300}
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          gap: '30px',
          fontSize: '2rem',
        }}
      >
        <div>
          <p>WINS</p>
          <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>30</p>
        </div>
        <div>
          <p>LOSSES</p>
          <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>05</p>
        </div>
        <div>
          <p>DRAWS</p>
          <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>00</p>
        </div>
        <div>
          <p>KO</p>
          <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>18</p>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
