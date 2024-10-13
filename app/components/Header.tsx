"use client";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative text-center mt-10 md:mt-20"
    >
      <motion.img
        src="/arrow.png"
        alt="Arrow Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[300vw] md:w-[30vw] z-50"
      />

      <div className="relative inline-block mt-[30vw]">

        {/* Numéro doré au-dessus du nom */}
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="font-bold absolute top-[-12vw] md:top-[-8vw] left-[30%] transform -translate-x-1/2 z-20 uppercase"
          style={{
            background: 'linear-gradient(90deg, #eec99e, #ffeec2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Heroic, Helvetica, Arial, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '0',
            lineHeight: 0.9,
            paddingTop: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          NUMBER #0
        </motion.h2>

        {/* Titre CARLA */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[18vw] md:text-[10vw] font-bold absolute top-[-8vw] md:top-[-5vw] left-[20%] transform -translate-x-1/2 text-white uppercase z-10 mt-[7vw]"
        >
          CARLA
        </motion.h1>

        {/* Titre LEITE */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[18vw] md:text-[10vw] font-bold absolute top-[5vw] md:top-[2vw] left-[26%] transform -translate-x-1/2 text-white uppercase z-10 mt-[12vw]"
        >
          LEITE
        </motion.h1>

        {/* Vidéo du drapeau */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="relative z-0 w-full h-[80vh] overflow-hidden"
        >
          <video
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="mt-[6.75rem] w-full h-full object-cover opacity-60"
          >
            <source src="/fr.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Personnage */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-[-40px] left-[-7%] transform -translate-x-1/2 z-20"
        >
          <img
            src="/perso.png"
            alt="Personnage"
            className="w-[116vw] md:w-[20vw] h-auto"
            style={{ maxWidth: 'none' }}
          />
        </motion.div>
      </div>

      {/* Bande noire entre le personnage et le drapeau */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute md:top-[30vh] left-0 w-full h-[20vh] bg-gradient-to-t from-[#1a1a1a] via-transparent z-5"
      />

      {/* Section des stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center mt-20 md:mt-24 text-uppercase tracking-wide text-white mb-20"
      >
        <ul
          className="flex w-full md:w-auto justify-between md:gap-10 px-4 md:px-0 bg-black pt-[0.75rem] pb-[0.75rem] ml-4 mr-4 max-w-[90%]" 
        >
          <li className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto">
          <p
              style={{
                fontSize: '.75rem',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                opacity: 0.5,
                boxSizing: 'inherit',
              }}
              className="mb-0"
            >Wins</p>
             <p
              style={{
                fontSize: '11vw',
                margin: '-.3em 0 -.16em',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxSizing: 'inherit',
              }}
            >30</p>
          </li>
          <li className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto">
          <p
              style={{
                fontSize: '.75rem',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                opacity: 0.5,
                boxSizing: 'inherit',
              }}
              className="mb-0"
            >Losses</p>
            <p
              style={{
                fontSize: '11vw',
                margin: '-.3em 0 -.16em',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxSizing: 'inherit',
              }}
            >05</p>
          </li>
          <li className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto">
            {/* Styled Draws */}
            <p
              style={{
                fontSize: '.75rem',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                opacity: 0.5,
                boxSizing: 'inherit',
              }}
              className="mb-0"
            >
              Draws
            </p>
            <p
              style={{
                fontSize: '11vw',
                margin: '-.3em 0 -.16em',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxSizing: 'inherit',
              }}
            >00</p>
          </li>
          <li className="text-center flex-1 md:w-auto">
            {/* Styled KO */}
            <p
              style={{
                fontSize: '.75rem',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                opacity: 0.5,
                boxSizing: 'inherit',
              }}
              className="mb-0"
            >
              KO
            </p>
            <p
              style={{
                fontSize: '11vw',
                margin: '-.3em 0 -.16em',
                fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                textTransform: 'uppercase',
                boxSizing: 'inherit',
              }}
            >18</p>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
