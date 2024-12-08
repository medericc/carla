"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation pour chaque élément
const itemVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: (index: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: index * 0.2,
      duration: 1.08,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

const Biography: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleItems((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const bioData = [
    { label: "Club", value: "Rhode Island" },
    { label: "Poste", value: "Point Guard" },
    { label: "Age", value: "21" },
    { label: "Height", value: "1.74m" },
    { label: "Nationality", value: "French" },
    { label: "Former", value: "Charnay" },
  ];

  return (
    <section id="biography">
      <div
        className="mt-10 p-5 rounded-lg text-white flex flex-col items-center"
        style={{ minHeight: "100vh", color: "#fff" }}
      >
        {/* Titre */}
        <h2
          className="text-4xl font-bold mb-10 text-center"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            lineHeight: "1.2",
            fontWeight: "700",
          }}
        >
          THE CAPTAIN
        </h2>

        {/* Contenu Biographie */}
        <div className="flex items-center w-full max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex-shrink-0 w-1/3">
            <Image
              src="/ines-logo.png" // Assurez-vous que le chemin est correct
              alt="Inès Debroise Basketball Player"
              width={335}
              height={470}
              className="rounded-lg right-[60.5%] md:right-[42.5%]"
              style={{ maxWidth: "none", width: "300px", position: "relative" }}
            />
          </div>

          {/* Informations Biographiques */}
          <div className="flex-grow pl-[7rem] md:pl-24 mt-20">
            <div className="mt-5 mb-1 w-full">
              {bioData.map((info, idx) => (
                <motion.div
                  key={idx}
                  ref={(el) => {
                    itemsRef.current[idx] = el!;
                  }}
                  data-index={idx}
                  initial="hidden"
                  animate={visibleItems.includes(idx) ? "visible" : "hidden"}
                  custom={idx}
                  variants={itemVariants}
                  className="flex flex-col justify-between pb-2 border-gray-600"
                >
                  {/* Label */}
                  <span
                    className="uppercase font-semibold mt-2"
                    style={{
                      fontFamily: "Industry, Helvetica, Arial, sans-serif",
                      fontSize: ".875rem",
                      opacity: 0.7,
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {info.label}
                  </span>
                  {/* Valeur */}
                  <span
                    style={{
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "1rem",
                      paddingBottom: "0.6rem",
                      textTransform: "none",
                      fontWeight: 400,
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
    </section>
  );
};

export default Biography;
