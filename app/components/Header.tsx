"use client";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', marginTop: '80px' }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Title with overlap on the flag */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: '7rem', // Adjust size as needed
            fontWeight: 'bold',
            position: 'absolute',
            top: '-50px', // Adjust for text to overlap the flag
            left: '27%',
            transform: 'translateX(-30%)',
            color: '#FFF', // Color to contrast with the background
            zIndex: 3,
            fontFamily: 'Heroic, Helvetica, Arial, sans-serif', // Add font family
          }}
        >
          CARLA
        </motion.h1>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: '7rem', // Adjust size as needed
            fontWeight: 'bold',
            position: 'absolute',
            top: '55px', // Adjust for text to overlap the flag
            left: '32%',
            transform: 'translateX(-35%)',
            color: '#FFF', // Color to contrast with the background
            zIndex: 3,
            fontFamily: 'Heroic, Helvetica, Arial, sans-serif', // Add font family
          }}
        >
          LEITE
        </motion.h1>

        {/* Video Flag */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          style={{ position: 'relative', zIndex: -1 }}
        >
        <video 
  muted 
  loop 
  playsInline 
  autoPlay  // Ajout de autoPlay pour que la vidéo démarre automatiquement
  preload="auto" // Chargement automatique de la vidéo
  className="flag" 
  style={{
    width: '133.33vw',
    marginBottom: '-14vw', 
    minWidth: '43.75rem', 
    position: 'relative', 
    opacity: 0.6,
   
  }}
>
  <source src="/fr.mp4" type="video/mp4" />
</video>

        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '33%',
            transform: 'translateX(-30%)',
            zIndex: 5,
          }}
        >
          <img
            src="/perso.png"
            alt="Personnage"
            width={314}
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
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: '"Nima Regular", sans-serif',
            marginBottom: '0px',
            fontSize: '20px',
            lineHeight: '20px',
          }}>Wins</p>
          <p style={{
            fontSize: '60px',
            fontWeight: '900',
            letterSpacing: '-2px',
            marginTop: '0px',
          }}>30</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: '"Nima Regular", sans-serif',
            marginBottom: '0px',
            fontSize: '20px',
            lineHeight: '20px',
          }}>Losses</p>
          <p style={{
            fontSize: '60px',
            fontWeight: '900',
            letterSpacing: '-2px',
            marginTop: '0px',
          }}>05</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: '"Nima Regular", sans-serif',
            marginBottom: '0px',
            fontSize: '20px',
            lineHeight: '20px',
          }}>Draws</p>
          <p style={{
            fontSize: '60px',
            fontWeight: '900',
            letterSpacing: '-2px',
            marginTop: '0px',
          }}>00</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: '"Nima Regular", sans-serif',
            marginBottom: '0px',
            fontSize: '20px',
            lineHeight: '20px',
          }}>KO</p>
          <p style={{
            fontSize: '60px',
            fontWeight: '900',
            letterSpacing: '-2px',
            marginTop: '0px',
          }}>18</p>
        </div>
      </motion.div>

      {/* Horizontal Line */}
      <div style={{
        height: '3px',  // Thickness of the line
        width: '80%',    // Width of the line (adjust as needed)
        backgroundColor: '#fff',
        margin: '20px auto 0 auto'  // Centered and with margin at the top
      }} />
    </motion.header>
  );
};

export default Header;
