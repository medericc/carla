"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* ================= DATA ================= */

const playerInfo = [
  { label: "Club", value: "CD Saragosse" },
  { label: "Poste", value: "Small Guard" },
  { label: "Age", value: "21" },
  { label: "Height", value: "1.74m" },
  { label: "Nationality", value: "French" },
  { label: "WNBA Team", value: "Valkyries" },
];

/* ================= COMPONENT ================= */

export default function Biography() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="biography" className="relative min-h-screen bg-black py-20 px-4 md:px-8">
      {/* ================= TITLE ================= */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-wider"
          style={{
            fontFamily: "Oswald, sans-serif",
            background: "linear-gradient(135deg, #ffffff 0%, #b1100f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.2em",
          }}
        >
          GRANDEUR
        </motion.h2>
        <p className="mt-4 text-gray-400 text-sm tracking-wider uppercase">
          Portrait de la Patronne
        </p>
      </div>

      {/* ========================================================= */}
      {/* ================= MOBILE VERSION ======================== */}
      {/* ========================================================= */}

      <div className="lg:hidden">
        <div className="flex items-center w-full max-w-6xl mx-auto mt-5">
          {/* Image */}
          <div className="flex-shrink-0 w-1/3">
            <Image
              src="/img.png"
              alt="Carla Leite WNBA Player"
              width={335}
              height={470}
              className="rounded-lg
  relative
  -translate-x-32
  md:-translate-x-12
  lg:-translate-x-8"
              style={{
                maxWidth: "none",
                width: "335px",
                position: "relative",
              }}
            />
          </div>

          {/* Infos */}
          <div className="flex-grow pl-[6rem] mt-20">
            <div className="w-full">
              {playerInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                ref={(el) => {
  itemsRef.current[idx] = el;
}}
  data-index={idx}
                  initial="hidden"
                  animate={visibleItems.includes(idx) ? "visible" : "hidden"}
                  custom={idx}
                  variants={itemVariants}
                  className="flex flex-col pb-2"
                >
                  <span
                    className="uppercase mt-2"
                    style={{
                      fontFamily: "Industry, Helvetica, Arial, sans-serif",
                      fontSize: ".875rem",
                      opacity: 0.7,
                      fontWeight: 600,
                    }}
                  >
                    {info.label}
                  </span>

                  <span
                    style={{
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "1rem",
                      paddingBottom: "0.6rem",
                      borderBottom: ".0625rem solid #3c3c3c",
                    }}
                  >
                    {info.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ================= DESKTOP ====================== */}
      {/* ========================================================= */}

      <div className="hidden lg:block max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 "
          >  <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900/20 to-transparent rounded-2xl blur-xl" />
         
            <div className="relative overflow-hidden rounded-xl border border-gray-800">
              <Image
                src="/leite.png"
                alt="Carla Leite ESBVA WNBA"
                width={400}
                height={560}
                className="w-full h-auto object-cover "
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-6 py-2 rounded-full transform rotate-3">
                <span className="text-sm font-bold tracking-wider">#0</span>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {playerInfo.map((info, index) => (
                <motion.div
                  key={index}
                  data-index={index}
                  initial="hidden"
                  animate={visibleItems.includes(index) ? "visible" : "hidden"}
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-red-500/30 transition">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-xs uppercase tracking-widest text-gray-400">
                        {info.label}
                      </span>
                    </div>

                    <p className="text-2xl font-bold text-white">
                      {info.value}
                    </p>

                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Career */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50"
            >
              <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">
                SA CARRIÈRE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Meilleure évaluation et meilleure marqueuse de l'histoire des PO
                LFB, Carla est la joueuse française la plus rapide à inscrire
                1.000 points en carrière.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
