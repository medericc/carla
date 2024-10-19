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

  return (
    <header className="relative text-center mt-10 md:mt-20">
      <img
      id="arrow"
        src="/arrow.png"
        alt="Arrow Background"
        className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[300vw] md:w-[100vw] z-50"
      />

      <div className="relative inline-block mt-[30vw]">
        <h2
        id="deu"
          className="font-bold absolute top-[-12vw] md:top-[-24vw] left-[50%] transform -translate-x-1/2 z-20 uppercase"
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
        
        <h1 className="text-[18vw] md:text-[18vw] font-bold absolute top-[-8vw] md:top-[-30vw] left-[50%] transform -translate-x-1/2 text-white uppercase z-10 mt-[7vw]" id="un">
          CARLA
        </h1>

        <h1 className="text-[18vw] md:text-[18vw] font-bold absolute top-[5vw] md:top-[-18vw] left-[50%] transform -translate-x-1/2 text-white uppercase z-10 mt-[12vw]" id="deux">
          LEITE
        </h1>
<div id="top">
        <div className="relative z-0 w-full h-[80vh] overflow-hidden" id="video">
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
              alt="Personnage"
              className="w-[70.5vw] md:w-[60vw] h-auto z-[99]"
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

      {/* Animation des statistiques */}
      <motion.div
        ref={statsRef}
        className="flex justify-center mt-10 md:mt-24 text-uppercase tracking-wide text-white mb-10"
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={statsVariants}
      >
        <ul className="flex w-full md:w-full justify-between px-4 md:px-4 bg-black pt-[0.75rem] pb-[0.75rem] ml-4 mr-4 max-w-[90%]">
          <li className="text-center border-r  border-gray-600 flex-1 md:w-auto">
            <p
              style={{
                fontSize: ".75rem",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                opacity: 0.5,
                boxSizing: "inherit",
              }}
              className="mb-1"
            >
              PTS
            </p>
            <p
              style={{
                fontSize: "11vw",
                margin: "-.3em 0 -.16em",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                boxSizing: "inherit",
              }}
            >
              22
            </p>
          </li>

          <li className="text-center border-r  border-gray-600 flex-1 ">
            <p
              style={{
                fontSize: ".75rem",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                opacity: 0.5,
                boxSizing: "inherit",
              }}
              className="mb-1"
            >
              AST
            </p>
            <p
              style={{
                fontSize: "11vw",
                margin: "-.3em 0 -.16em",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                boxSizing: "inherit",
              }}
            >
              05
            </p>
          </li>

          <li className="text-center border-r  border-gray-600 flex-1 md:w-auto">
            <p
              style={{
                fontSize: ".75rem",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                opacity: 0.5,
                boxSizing: "inherit",
              }}
              className="mb-1"
            >
              RBD
            </p>
            <p
              style={{
                fontSize: "11vw",
                margin: "-.3em 0 -.16em",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                boxSizing: "inherit",
              }}
            >
              02
            </p>
          </li>

          <li className="text-center flex-1 md:w-auto">
            <p
              style={{
                fontSize: ".75rem",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                opacity: 0.5,
                boxSizing: "inherit",
              }}
              className="mb-1"
            >
              EFF
            </p>
            <p
              style={{
                fontSize: "11vw",
                margin: "-.3em 0 -.16em",
                fontFamily: "Industry, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                boxSizing: "inherit",
              }}
            >
              12
            </p>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
