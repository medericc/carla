"use client";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', marginTop: '80px', position: 'relative' }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Title with overlap on the flag */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: '20vw',
            fontWeight: 'bold',
            position: 'absolute',
            top: '-50px',
            left: '27%',
            transform: 'translateX(-30%)',
            color: '#FFF',
            zIndex: 3,
            letterSpacing: '-0.02em',
    textTransform: 'uppercase', 
            fontFamily: 'Heroic, Helvetica, Arial, sans-serif',
          }}
        >
          CARLA
        </motion.h1>
        <motion.h1
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.5 }}
  style={{
    fontSize: '20vw',
    fontWeight: 'bold',
    position: 'absolute',
    top: '55px',
    left: '32%',
    transform: 'translateX(-35%)',
    color: '#FFF',
    zIndex: 3,
     // camelCase pour 'text-transform'
    fontFamily: 'Heroic, Helvetica, Arial, sans-serif',
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
    autoPlay
    preload="auto"
    className="flag"
    style={{
      width: '100vw',  // Réduire à 100vw pour éviter le dépassement
      marginBottom: '-14vw',
      minWidth: '87rem',
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
          <img src="/perso.png" alt="Personnage" width={600} height={300} />
        </motion.div>
      </div>
  {/* Bande noire entre le personnage et le drapeau */}
  <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            content: '""',
            position: 'absolute',
            top: '230px',  // Ajuster la position
            left: 0,
            width: '100%',
            height: '25vh',  // Ajuster la hauteur
            background: 'linear-gradient(0deg, #1a1a1a 32%, rgba(195, 0, 0, 0))',
            zIndex: 1001,  // Juste au-dessus du drapeau, sous le perso
          }}
        />

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
          gap: '30px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: '"Nima Regular", sans-serif',
              marginBottom: '0px',
              fontSize: '20px',
              lineHeight: '20px',
            }}
          >
            Wins
          </p>
          <p
            style={{
              fontSize: '60px',
              fontWeight: '900',
              letterSpacing: '-2px',
              marginTop: '0px',
            }}
          >
            30
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: '"Nima Regular", sans-serif',
              marginBottom: '0px',
              fontSize: '20px',
              lineHeight: '20px',
            }}
          >
            Losses
          </p>
          <p
            style={{
              fontSize: '60px',
              fontWeight: '900',
              letterSpacing: '-2px',
              marginTop: '0px',
            }}
          >
            05
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: '"Nima Regular", sans-serif',
              marginBottom: '0px',
              fontSize: '20px',
              lineHeight: '20px',
            }}
          >
            Draws
          </p>
          <p
            style={{
              fontSize: '60px',
              fontWeight: '900',
              letterSpacing: '-2px',
              marginTop: '0px',
            }}
          >
            00
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: '"Nima Regular", sans-serif',
              marginBottom: '0px',
              fontSize: '20px',
              lineHeight: '20px',
            }}
          >
            KO
          </p>
          <p
            style={{
              fontSize: '60px',
              fontWeight: '900',
              letterSpacing: '-2px',
              marginTop: '0px',
            }}
          >
            18
          </p>
        </div>
      </motion.div>

      {/* Horizontal Line */}
      <div
        style={{
          height: '3px',
          width: '80%',
          backgroundColor: '#fff',
          margin: '20px auto 0 auto',
        }}
      />
    </motion.header>
  );
};

export default Header;
