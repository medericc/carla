"use client";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const SData = [
  { label: 'Meilleure Evaluation de la finale de l\'Eurobasket U20 🌟', value: '25 EFF' },
  { label: 'Meilleure Scoreuse de la finale de l\'Eurobasket U20 🌟', value: '18 PTS' },
  { label: 'MVP de la finale de l\'Eurobasket U20 🌟', value: 2023 },
  { label: 'Championne d\'Europe U18 🌟', value: 2021 },
  { label: 'Vainqueure de la Saison Régulière de l\'A10 🌟', value: 2023 },
  { label: 'Championne d\'Europe U20 🌟', value: 2023 },
  { label: 'Capitaine de Rhode Island', value: 2024 },
  
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * index;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        setCurrentIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="records">
    <div className="bg-black relative h-screen w-full text-gray-300 overflow-hidden">
      {/* Texte animé en fond */}
      <div className="absolute top-[-1%] left-0 whitespace-nowrap z-1 text-[18rem]  uppercase font-bold text-blue-200 animate-scrollText mt-2">
  <span>ACHIEVEMENTS ACHIEVEMENTS ACHIEVEMENTS</span>
  <span className="ml-[100vw]">ACHIEVEMENTS ACHIEVEMENTS ACHIEVEMENTS</span> {/* Double pour le défilement continu */}
</div>


     {/* Scroll horizontal manuel */}
     <div
  className="absolute top-[25%] left-0 right-0 z-10 flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory mb-16"
  ref={containerRef}
  style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
>
  {SData.map((stat, index) => (
    <div
      key={index}
      className="min-w-full p-4 flex justify-center items-center snap-center md:min-w-[50%] lg:min-w-[33.33%]"  // Single block by default, 2 blocks on md, 3 blocks on lg
    >
      <motion.div
        className="bg-blue-400 p-8 rounded-lg shadow-lg"
        style={{
          width: '100%',
          height: '25.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          padding: '2rem',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-gray-900 text-2xl font-bold uppercase mb-2">
          Ines Achievements
        </h2>
        <h3 className="text-sm  font-medium uppercase mb-4 text-center tracking-wide text-black">
          {stat.label}
        </h3>
        <span
          className={`block font-extrabold mt-2 text-gray-800 ${
            stat.value === '26 to 90%' || stat.value === '26 pts to 90%'
              ? 'text-4xl'
              : 'text-7xl'
          }`}
        >
          {stat.value}
        </span>
      </motion.div>
    </div>
  ))}
</div>


{/* Dots pour indiquer la position */}
<div className="absolute inset-x-0 bottom-4 w-full flex justify-center z-20">
  <div className="flex space-x-2">
    {SData.map((_, index) => (
      <div
        key={index}
        className={`h-2 w-2 rounded-full ${
          currentIndex === index ? 'bg-blue-400' : 'bg-blue-200'
        } cursor-pointer`}
        onClick={() => handleDotClick(index)}
      />
    ))}
  </div>
</div>


    </div></section>
  );
};


// Ajouter les keyframes pour l'animation du texte défilant
const keyframesStyle = `
  @keyframes scrollText {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-scrollText {
    animation: scrollText 20s linear infinite;
  }
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = keyframesStyle;
  document.head.appendChild(style);
}

export default Stats;
