"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Header = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3, // Tu peux ajuster ce seuil selon tes besoins
  });

  // Variants pour l'animation
  const statsVariants = {
    hidden: { opacity: 0, y: 50 }, // Invisible et décalé vers le bas
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Apparition
  };
 const stats = [
    { label: "PTS", value: "19", desc: "Points par match" },
    { label: "AST", value: "06", desc: "Passes décisives" },
    { label: "RBD", value: "02", desc: "Rebonds" },
    { label: "EFF", value: "16", desc: "Évaluation" },
  ];
  return (
    <header className="relative text-center mt-10 md:mt-20">
      <img
      id="arrow"
        src="/arrow.png"
        alt="Arrow Background"
        className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[300vw] md:w-[100vw] z-40"
      />

      <div className="relative inline-block mt-[30vw]">
        <h2
        id="deu"
          className="font-bold absolute top-[-12vw] md:top-[-24vw] lg:top-[-25vw] xl:top-[-27.7vw] left-[50%] transform -translate-x-1/2 z-20 uppercase"
          style={{
            background: "linear-gradient(90deg, #eec99e, #ffeec2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Heroic, Helvetica, Arial, sans-serif",
            fontSize: "1.45rem",
            fontWeight: 700,
            letterSpacing: "0",
            lineHeight: 0.9,
            paddingTop: "0.1em",
            textTransform: "uppercase",
          }}
        >
          NUMBER #0
        </h2>
        
        <h1 className="text-[18vw] md:text-[18vw]  lg:text-[14vw]  font-bold absolute top-[-8vw] md:top-[-30vw] lg:top-[-33.5vw]  xl:top-[-36vw]  left-[50%] transform -translate-x-1/2 text-white uppercase z-10 mt-[7vw]" id="un">
          CARLA
        </h1>

        <h1 className="text-[18vw] lg:text-[14vw] md:text-[18vw]  font-bold absolute top-[5vw] md:top-[-18vw] lg:top-[-24vw]  xl:top-[-29vw] left-[50%] transform -translate-x-1/2 text-white uppercase z-10 mt-[12vw] opacity-1" id="deux">
          LEITE
        </h1>
<div id="top">
<div className="relative z-0 w-full h-[80vh] lg:h-auto lg:aspect-video overflow-hidden lg:mt-[-15.5rem] xl:mt-[-19.5rem]" id="video">
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
        </div>
        <div
            id="imgg"
            className="flex justify-center items-end relative w-full h-auto z-99"
            style={{ maxWidth: "100%", position: "relative" }} // Le parent doit être en position relative pour que l'absolute fonctionne
          >
            <img
              src="/perso.png"
              id="img"
              alt="Carla Leite WNBA Player Basketball Women ESBVA Dallas Wings France Joueuse GOAT"
              className="w-[67.5vw] md:w-[53vw] lg:w-[42vw] xl:w-[34vw] 2xl:w-[30vw] h-auto z-[99]"
              style={{
                position: "absolute", // Rend l'image absolue par rapport à son parent
                bottom: 0, // Fixe l'image en bas de son conteneur parent
                left: "50%", // Centre horizontalement l'image
                transform: "translateX(-50%)", // Pour bien centrer l'image
              }}
            />

            <div
              id="band"
              className="absolute bottom-[-0.15rem] left-0 w-full h-[11vw] z-[1001]"
              style={{
                background: "linear-gradient(0deg, #1a1a1a 10%, rgba(195, 0, 0, 0))",
              }}
            />
          </div></div>
      </div>

       {/* Stats section tablette et +*/}
       <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 md:mt-8 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all duration-300">
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    {/* Stat value */}
                    <div className="relative">
                      <div className="text-5xl md:text-6xl font-bold mb-2">
                        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </div>
                      
                      {/* Stat label */}
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span className="text-sm tracking-widest uppercase text-gray-400 font-semibold">
                          {stat.label}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-500">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div></div>
      
{/* Stats mobile +*/}
      <motion.div
  ref={statsRef}
  className="flex justify-center mt-10 text-white mb-10 md:hidden"
  initial="hidden"
  animate={statsInView ? "visible" : "hidden"}
  variants={statsVariants}
>
  <ul className="flex w-full justify-between px-4 bg-black py-3 max-w-[90%]">
    {stats.map((stat, index) => (
      <li
        key={stat.label}
        className={`text-center flex-1 ${
          index !== stats.length - 1 ? "border-r border-gray-600" : ""
        }`}
      >
        <p
          className="mb-1 opacity-50"
          style={{
            fontSize: ".75rem",
            fontFamily: "Industry, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          {stat.label}
        </p>
        <p
          style={{
            fontSize: "11vw",
            margin: "-.3em 0 -.16em",
            fontFamily: "Industry, Helvetica, Arial, sans-serif",
            fontWeight: 600,
          }}
        >
          {stat.value}
        </p>
      </li>
    ))}
  </ul>
</motion.div>

  <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 tracking-widest">DÉCOUVRIR</span>
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
