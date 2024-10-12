"use client";
import { useEffect, useRef } from 'react';

const CarlaAbout = () => {
  const textRef = useRef<HTMLDivElement>(null);

  // Effet de défilement du texte "Carla About"
  useEffect(() => {
    const textEl = textRef.current;
    if (textEl) {
      textEl.style.animation = 'scrollText 15s linear infinite';
    }
  }, []);

  return (
    <div className="relative h-screen w-full bg-white text-black">
      {/* Texte défilant en fond */}
      <div
        className="absolute top-[10%] left-0 whitespace-nowrap z-1 text-[5rem] opacity-10 uppercase font-bold text-black animate-scrollText"
        ref={textRef}
      >
        CARLA ABOUT CARLA ABOUT CARLA ABOUT
      </div>

      {/* Paragraphe de texte */}
      <div className="absolute top-[30%] left-[10%] right-[10%] z-10 text-lg leading-7 text-gray-800">
        <p className="mb-6">
          Carla a marqué l'histoire en devenant championne du monde des poids moyens en 2020, un exploit qui restera gravé dans les mémoires.
          Ce titre a été acquis après des années de persévérance et de victoires impressionnantes sur des adversaires de haut niveau.
        </p>
        <p className="mb-6">
          Avec 35 victoires par KO à son actif, elle détient l'un des records les plus impressionnants de l'histoire du sport. 
          Ses techniques de combat sont redoutées dans le monde entier, et chaque match est une démonstration de sa puissance.
        </p>
        <p className="mb-6">
          En 2019, elle a ajouté un autre titre à son palmarès en remportant le championnat des poids légers, devenant ainsi l'une des rares combattantes à avoir triomphé dans deux catégories différentes.
        </p>
        <p className="mb-6">
          Sa capacité à dominer dans différentes catégories de poids la distingue des autres combattants, et son nom est désormais synonyme de succès et de détermination.
        </p>
        <p className="mb-6">
          En 2022, elle a été honorée par une entrée dans le Hall of Fame, une reconnaissance ultime pour une carrière extraordinaire dans les arts martiaux.
        </p>
      </div>
    </div>
  );
};

export default CarlaAbout;
