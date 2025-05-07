"use client";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const statsData = [
  { label: 'Premier Français Meilleur Marqueur d\'une franchise 🌟', value: '06/05' },
  { label: 'Meilleure Evaluation de l\'histoire des PO LFB 🌟', value: 21 },
  { label: 'Meilleure Evaluation de l\'histoire sur une campagne de PO LFB 🌟', value: 21 },
  { label: 'Meilleur marqueur jeune français de l\'histoire 🌟', value: 18.4 },

  { label: "Meilleure moyenne de points à 20 ans en LFB 🌟", value: 15 },
  { label: "Plus jeune à atteindre 975 points en LFB 🌟", value: 20 },
  { label: "Seule européenne meilleure scoreuse avec 40% à 3pts 🌟", value: 16.4 },
  { label: "Plus grand nombre de trophées de joueuse la plus décisive 🌟", value: 2 },
  { label: "Plus grand nombre de points par une européenne avec 40%+ à 3pts 🌟", value: 16.4 },
  { label: "Meilleure moyenne de points + passes à 20 ans en LFB 🌟", value: 20.3 },
  { label: "Européenne la plus rapide à 975 points en LFB 🌟", value: 20 },
  { label: "Meilleure moyenne de points sur 3 saisons en LFB 🌟", value: 15 },
  { label: "Meilleur total points + passes sur 3 saisons en LFB 🌟", value: 20.3 },
 

  { label: 'Meilleure Marqueuse de l\'histoire des PO LFB 🌟', value: 20 },
  { label: 'Meilleure Marqueuse de l\'histoire sur une campagne de PO LFB 🌟', value: '20' },
  { label: 'Plus Jeune Meilleure Marqueuse de l\'histoire de la LFB 🌟', value: '20' },
  { label: 'Première à éliminer en quart la meilleure équipe de l\'histoire du championnat français en MVP 🌟', value: '26 pts to 90%' },
  { label: 'Joueuse la plus décisive sur une campagne de PO LFB 🌟', value: '25.6' },
  { label: 'PPM Record de l\'Eurobasket U20 🌟', value: '0.8' },
  { label: 'Meilleure marqueuse française championne 🌟', value: "18.4" },
  { label: 'Seule européenne à finir une saison en 15-5 en LFB 🌟', value: '15-5' },
  { label: 'Seule joueuse de l\'histoire des Playoffs LFB à finir à +20 ppg 🌟', value: '21' },
  { label: 'Joueuse française la plus rapide à atteindre 1000 points 🌟', value: '64' },
  { label: 'Meilleure marqueuse française de l\'histoire en finale aller 🌟', value: '25' },
  { label: 'Plus jeune joueuse à scorer 176 pts en une campagne de PO 🌟', value: '20' },
  { label: 'Plus jeune joueuse à finir meilleure marqueuse des Eurocup PO 🌟', value: '20' },
  { label: 'Plus jeune joueuse à finir joueuse la plus décisive des Eurocup PO 🌟', value: '20' },
  { label: 'Plus jeune joueuse à scorer 176 pts en une campagne de PO 🌟', value: '20' },
  { label: 'Plus jeune joueuse à finir joueuse la plus décisive de la LFB 🌟', value: '21.3' },
  { label: 'Première européenne à gagner une campagne de PO avec 228 Pts + Ast 🌟', value: '228' },
  { label: 'Première joueuse à scorer +160 pts à 55 % en une campagne de PO de Coupe d\'Europe 🌟', value: '176' },
  { label: 'Seule joueuse de l\'histoire des PO LFB à scorer 26 points à 90% 🌟', value: '26 pts to 90%' },
  { label: 'Plus large victoire de l\'histoire de la Team France 🌟', value: '101' },
  { label: 'Match de LFB avec la plus grande affluence de l\'histoire 🌟', value: '8K' },
  { label: 'Draft WNBA la plus suivie de l\'histoire 🌟', value: '2024' },
  { label: 'Joueuse la plus rapide à rentrer dans la First Team de la LFB 🌟', value: '2th' },
  
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
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Texte animé en fond */}
      <div className="absolute top-[-1%] left-0 whitespace-nowrap z-1 text-[18rem]  uppercase font-bold text-white animate-scrollText mt-2">
  <span>STATISTICS STATISTICS STATISTICS</span>
  <span className="ml-[100vw]">STATISTICS STATISTICS STATISTICS</span> {/* Double pour le défilement continu */}
</div>


     {/* Scroll horizontal manuel */}
     <div
  className="absolute top-[25%] left-0 right-0 z-10 flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory mb-16"
  ref={containerRef}
  style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
>
  {statsData.map((stat, index) => (
    <div
      key={index}
      className="min-w-full p-4 flex justify-center items-center snap-center md:min-w-[50%] lg:min-w-[33.33%]"  // Single block by default, 2 blocks on md, 3 blocks on lg
    >
      <motion.div
        className="bg-black-2 p-8 rounded-lg shadow-lg"
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
        <h2 className="text-center text-2xl font-bold uppercase">
          Carla Record
        </h2>
        <h3 className="text-sm font-light uppercase mb-4 text-center tracking-wide">
          {stat.label}
        </h3>
        <span
          className={`block font-extrabold mt-2 ${
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
    {statsData.map((_, index) => (
      <div
        key={index}
        className={`h-2 w-2 rounded-full ${
          currentIndex === index ? 'bg-white' : 'bg-gray-500'
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
