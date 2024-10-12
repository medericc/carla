"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const statsData = [
  { label: 'Wins', value: 12 },
  { label: 'Losses', value: 4 },
  { label: 'Draws', value: 0 },
  { label: 'KO', value: 8 },
  { label: 'Points', value: 1500 },
  { label: 'Trophies', value: 5 },
  { label: 'Matches', value: 300 },
  { label: 'Streak', value: 10 },
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen w-full bg-white text-white overflow-hidden">
      {/* Texte animé en fond */}
      <div className="absolute top-[7%] left-0 whitespace-nowrap z-1 text-[6rem] opacity-10 uppercase font-bold text-white animate-scrollText">
        STATISTICS STATISTICS STATISTICS
      </div>

      {/* Scroll horizontal pour les blocs */}
      <div className="absolute top-[25%] left-0 right-0 z-10 flex justify-center">
        <motion.div
          className="flex w-full overflow-x-auto scrollbar-hide" // Hide scrollbar for cleaner UI
          animate={{ x: -currentIndex * 100 + '%' }} // Animation pour le scroll horizontal
          transition={{ duration: 0.5 }}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="min-w-full p-8 flex justify-center items-center"
              style={{ minWidth: '100%' }} // Pour que chaque bloc occupe la largeur complète
            >
              <motion.div
                className="bg-black p-8 rounded-lg shadow-lg w-[80%]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-center text-2xl font-bold uppercase mb-6">
                  Glory Record
                </h2>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <span className="block text-4xl font-bold">{stat.value}</span>
                  <span className="block text-xl">{stat.label}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots pour indiquer la position */}
      <div className="absolute bottom-10 w-full flex justify-center z-20">
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
    </div>
  );
};

export default Stats;
