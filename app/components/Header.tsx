"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Header = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Variants pour l'animation
  const statsVariants = {
    hidden: { opacity: 0, y: 50 }, // Invisible et décalé vers le bas
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Apparition
  };

  return (
    <header className="relative text-center mt-10 md:mt-20">
      <img
        src="/arrow.png"
        alt="Arrow Background"
        className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[300vw] md:w-[30vw] z-50"
      />

      <div className="relative inline-block mt-[30vw]">
        <h2
          className="font-bold absolute top-[-12vw] md:top-[-8vw] left-[50%] transform -translate-x-1/2 z-20 uppercase"
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

        <h1 className="text-[18vw] md:text-[10vw] font-bold absolute top-[-8vw] md:top-[-5vw] left-[50%] transform -translate-x-1/2 text-white uppercase z-10 mt-[7vw]">
          CARLA
        </h1>

        <h1 className="text-[18vw] md:text-[10vw] font-bold absolute top-[5vw] md:top-[2vw] left-[50%] transform -translate-x-1/2 text-white uppercase z-10 mt-[12vw]">
          LEITE
        </h1>

        <div className="relative z-0 w-full h-[80vh] overflow-hidden">
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

        <div className="absolute bottom-[-11px] left-[3%] z-20">
          <img
            src="/perso.png"
            alt="Personnage"
            className="w-[93vw] md:w-[20vw] h-auto"
            style={{ maxWidth: "none" }}
          />

          <div
            className="absolute bottom-0 left-0 w-full h-[16vw] z-[1001]"
            style={{
              background: "linear-gradient(0deg, #1a1a1a 10%, rgba(195, 0, 0, 0))",
            }}
          />
        </div>
      </div>

      {/* Animation des statistiques */}
      <motion.div
        ref={statsRef}
        className="flex justify-center mt-10 md:mt-24 text-uppercase tracking-wide text-white mb-10"
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={statsVariants}
      >
        <ul className="flex w-full md:w-auto justify-between md:gap-10 px-4 md:px-0 bg-black pt-[0.75rem] pb-[0.75rem] ml-4 mr-4 max-w-[90%]">
          <li className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto">
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
              30
            </p>
          </li>

          <li className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto">
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

          <li className="text-center border-r md:border-r-0 md:border-b-0 border-gray-600 flex-1 md:w-auto">
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
              00
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
              18
            </p>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
