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
      <div className="relative inline-block mt-7">
        {/* Title with overlap on the flag */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[18vw] md:text-[10vw] font-bold absolute top-[5vw] left-1/2 transform -translate-x-1/2 text-white uppercase z-10 mt-5 flex flex-col"
        >
          <span>CARLA</span>
          <span>LEITE</span>
        </motion.h1>

        {/* Video Flag */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-screen h-screen z-0"
        >
          <video
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/fr.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-20"
        >
          <img
            src="/perso.png"
            alt="Personnage"
            className="w-[50vw] md:w-[20vw] h-auto"
          />
        </motion.div>
      </div>

      {/* Bande noire entre le personnage et le drapeau */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[25vh] md:top-[30vh] left-0 w-full h-[20vh] bg-gradient-to-t from-[#1a1a1a] via-transparent z-5"
      />

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center mt-12 md:mt-24 gap-5 md:gap-10 text-uppercase tracking-wide text-white "
      >
        <ul
          className="flex w-full md:w-auto justify-around md:gap-10  md:px-0 bg-black pt-4 pb-4 ml-2 mr-2 "
          data-v-eb447b1e
        >
          <li
            className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto "
            data-v-eb447b1e
          >
            <p className="text-sm md:text-base mb-0">Wins</p>
            <p className="text-4xl md:text-6xl font-bold">30</p>
          </li>
          <li
            className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto "
            data-v-eb447b1e
          >
            <p className="text-sm md:text-base mb-0">Losses</p>
            <p className="text-4xl md:text-6xl font-bold">05</p>
          </li>
          <li
            className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto "
            data-v-eb447b1e
          >
            <p className="text-sm md:text-base mb-0 pb-1 ">Draws</p>
            <p className="text-4xl md:text-6xl font-bold">00</p>
          </li>
          <li className="text-center flex-1 md:w-auto " data-v-eb447b1e>
            <p className="text-sm md:text-base mb-0">KO</p>
            <p className="text-4xl md:text-6xl font-bold">18</p>
          </li>
        </ul>
      </motion.div>

      {/* Horizontal Line */}
      <div className="h-[3px] w-4/5 bg-white mx-auto mt-5" />
    </motion.header>
  );
};

export default Header;
