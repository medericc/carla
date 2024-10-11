"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

// Create a dynamic component for motion
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

const Cards = () => {
  return (
    <div className="relative bg-black text-white py-10 text-center overflow-hidden max-w-full">
      {/* Scrolling Text in the background */}
      <div className="absolute top-[7%] left-0 whitespace-nowrap z-1 text-[6rem] opacity-10 uppercase font-bold text-white animate-scrollText">
        CARDS HISTORY FIGHT
      </div>

      {/* Main content */}
      <h1 className="text-4xl mb-10 z-10">Fight Cards</h1>

      {/* Card Component (Reusable) */}
      <FightCard
        eventTitle="GLORY 78"
        fightDetails="Light Heavyweight World Title Fight - MD 03:00 Round 5"
        fightDetail="Submission 04:00 Rounds"
        fighter1={{ name: "Pereira", img: "/path-to-image/perreira.png", win: false }}
        fighter2={{ name: "Vakhitov", img: "/path-to-image/vakhitov.png", win: true }}
      />

      <FightCard
        eventTitle="UFC 259"
        fightDetails="Lightweight Championship"
        fightDetail="Submission 04:00 Rounds"
        fighter1={{ name: "Adesanya", img: "/path-to-image/adesanya.png", win: false }}
        fighter2={{ name: "Blachowicz", img: "/path-to-image/blachowicz.png", win: true }}
      />

      <FightCard
        eventTitle="UFC 229"
        fightDetails="Lightweight Championship - Submission 04:00 Rounds"
        fightDetail="Submission 04:00 Rounds"
        fighter1={{ name: "Nurmagomedov", img: "/path-to-image/nurmagomedov.png", win: true }}
        fighter2={{ name: "McGregor", img: "/path-to-image/mcgregor.png", win: false }}
      />
    </div>
  );
};

// Define the types for the fighters
interface Fighter {
  name: string;
  img: string;
  win: boolean;
}

interface FightCardProps {
  eventTitle: string;
  fighter1: Fighter;
  fighter2: Fighter;
  fightDetails: string;
  fightDetail: string;
}

const FightCard: React.FC<FightCardProps> = ({ eventTitle, fighter1, fighter2, fightDetails }) => {
  return (
    <div className="bg-[#1a1a1a] flex flex-col rounded-lg mb-8 p-5 shadow-lg max-w-3xl mx-auto z-20">
      {/* Event Title */}
      <div className="mt-5 text-center">
        <div className="bg-[#b1100f] text-white py-2 rounded-t-lg text-2xl mb-5 text-center">
          {eventTitle}
        </div>

        {/* Fight details */}
        <div className="flex flex-col justify-between items-center max-w-full relative">
          <p className="text-lg text-white">{fightDetails}</p>
          <span className="flex items-center bg-white text-black rounded-[0.0625rem] font-sans text-[.75rem] font-semibold h-4 mt-[.3125rem] p-[.0625rem] pl-[.25rem] pt-0 uppercase">
            {fightDetails}
          </span>
        </div>

        <div className="flex relative">
          {/* Fighter 1 */}
          <div className="flex-1 text-center relative">
            <Image
              src={fighter1.img}
              alt={fighter1.name}
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">{fighter1.name}</p>
            {fighter1.win && (
              <span className="absolute top-0 right-0 bg-[#b1100f] text-white px-2 py-1 rounded-lg ml-2">
                WIN
              </span>
            )}
          </div>

          {/* VS */}
          <div className="text-xl font-bold mx-5">VS</div>

          {/* Fighter 2 */}
          <div className="flex-1 text-center relative">
            <Image
              src={fighter2.img}
              alt={fighter2.name}
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">{fighter2.name}</p>
            {fighter2.win && (
              <span className="absolute top-0 right-0 bg-[#b1100f] text-white px-2 py-1 rounded-lg ml-2">
                WIN
              </span>
            )}
          </div>
        </div>

        {/* Buttons under Fighters */}
        <div className="flex flex-col items-center mt-5">
          <button className="inline-flex items-center justify-center h-12 px-[3.25rem] bg-[#b1100f] text-white rounded-[.125rem] text-[.875rem] font-extrabold uppercase cursor-pointer relative whitespace-nowrap transition-colors transition-bg transition-border duration-[.37s] ease-[cubic-bezier(.39,.575,.565,1)] mx-2">
            Fight Card
          </button>
          <button className="inline-flex items-center justify-center h-12 px-[3.25rem] bg-[#b1100f] text-white rounded-[.125rem] text-[.875rem] font-extrabold uppercase cursor-pointer relative whitespace-nowrap transition-colors transition-bg transition-border duration-[.37s] ease-[cubic-bezier(.39,.575,.565,1)] mx-2">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

// Add keyframes for scrollText animation in Tailwind
const keyframesStyle = `
  @keyframes scrollText {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = keyframesStyle;
  document.head.appendChild(style);
}

export default Cards;
