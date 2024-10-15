"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from './FightCard.module.css';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Create a dynamic component for motion
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

const cardVariants = {
  hidden: { opacity: 0, y: 50 },  // Start below and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },  // Animate into place
};

const Cards = () => {
  return (
    
    <div className="relative bg-black text-white py-10 text-center overflow-hidden max-w-full px-5">
      {/* Scrolling Text in the background */}
      <div className="absolute left-0 top-[-1%] whitespace-nowrap z-1 text-[20rem] uppercase font-bold text-white animate-scrollText">
  <span>GAMES HISTORY</span>
  <span className="ml-[100vw]">GAMES HISTORY</span> {/* Double text for seamless scrolling */}
</div>


      {/* Animated Cards */}
      <div className="mt-[15rem]">
        <FightCard
          eventTitle="GAME 04"
          fightDetails="Ligue Féminine de Basket"
          fightDetail="Journée 3"
          fighter1={{ name: "Angers", img: "/path-to-image/perreira.png", win: false }}
          fighter2={{ name: "Lille", img: "/path-to-image/vakhitov.png", win: true }}
        />
      </div>

      <FightCard
        eventTitle="GAME 03"
        fightDetails="Euroleague Women"
        fightDetail="Journée 1"
        fighter1={{ name: "Lille", img: "/path-to-image/adesanya.png", win: false }}
        fighter2={{ name: "Fenerbahce", img: "/path-to-image/blachowicz.png", win: true }}
      />

      <FightCard
        eventTitle="GAME 02"
        fightDetails="Ligue Féminine de Basket"
        fightDetail="Journée 2"
        fighter1={{ name: "Lille", img: "/path-to-image/nurmagomedov.png", win: true }}
        fighter2={{ name: "Lyon", img: "/path-to-image/mcgregor.png", win: false }}
      />
      
      <FightCard
        eventTitle="GAME 01"
        fightDetails="Ligue Féminine de Basket"
        fightDetail="Journée 1"
        fighter1={{ name: "Landerneau", img: "/path-to-image/nurmagomedov.png", win: true }}
        fighter2={{ name: "Lille", img: "/path-to-image/mcgregor.png", win: false }}
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

const FightCard: React.FC<FightCardProps> = ({ eventTitle, fighter1, fighter2, fightDetails, fightDetail }) => {
  // Intersection Observer to trigger animations when the card comes into view
  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger animation when scrolling up and down
    threshold: 0.3,  // Trigger when 30% of the card is in view
  });

  return (
    <section id="watch">
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}  // Re-trigger the animation on scroll
      className="relative bg-[#1a1a1a] flex flex-col mb-8 p-5 shadow-lg max-w-2xl mx-auto z-20"
    >
      {/* Bandeau rouge */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#970000]"></div>

      {/* Event Title */}
      <div className="mt-5 text-center">
        <div className="text-white py-2 text-2xl mb-5">{eventTitle}</div>

        {/* Fight details */}
        <div className="flex flex-col justify-between items-center max-w-full relative border-t-[0.0625rem] border-t-[#272727] mt-6 mb-8 pt-7 px-4 pb-0">
          <p className="text-lg text-white">{fightDetails}</p>
          <span className="flex items-center bg-white text-black rounded-[0.0625rem] font-sans text-[0.75rem] font-semibold h-4 mt-[0.3125rem] p-[0.7rem] pl-[0.6rem] uppercase">
            {fightDetail}
          </span>
        </div>

        <div className="flex mt-4 border-t-[0.0625rem] border-t-[#272727]">
          {/* Fighter 1 */}
          <div className="flex-1 text-center border-r border-l border-l-[#272727] border-r-[#272727]">
            <div className="relative border-b border-b-[#272727]">
              <Image
                src={fighter1.img}
                alt={fighter1.name}
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
              {fighter1.win && (
                <span className="absolute bg-[#c30000] text-white font-bold uppercase text-[1.25rem] leading-[0.8] px-6 py-3 left-0 bottom-0 z-20">
                  WIN
                </span>
              )}
            </div>
            <p className="mt-2 text-xl font-bold">{fighter1.name}</p>
          </div>

          {/* VS */}
          <div className={`relative ${styles.fighters} flex-1 text-center`}></div>

          {/* Fighter 2 */}
          <div className="flex-1 text-center relative border-r border-r-[#272727]">
            <div className="border-b border-b-[#272727]">
              <Image
                src={fighter2.img}
                alt={fighter2.name}
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
            </div>
            <p className="mt-2 text-xl font-bold">{fighter2.name}</p>
            {fighter2.win && (
              <span className="absolute bg-[#c30000] text-white font-bold uppercase text-[1.25rem] leading-[0.8] px-6 py-3 right-0 bottom-0 z-20">
                WIN
              </span>
            )}
          </div>
        </div>

        {/* Buttons under Fighters */}
        <div className="flex flex-col items-center border-t-[0.0625rem] border-t-[#272727] space-y-[0.75rem] mt-2">
          <a className="inline-flex items-center justify-center mt-5 h-12 w-[14rem] bg-[#b1100f] text-white rounded-[0.125rem] text-[0.875rem] font-extrabold uppercase cursor-pointer transition-colors transition-bg transition-border duration-[0.37s] ease-[cubic-bezier(.39,.575,.565,1)]">
            Watch
          </a>
          <a className="inline-flex items-center justify-center h-12 w-[14rem] bg-transparent border-[0.0625rem] text-white rounded-[0.125rem] text-[0.875rem] font-extrabold uppercase cursor-pointer transition-colors transition-bg transition-border duration-[0.37s] ease-[cubic-bezier(.39,.575,.565,1)]">
            Boxscore
          </a>
        </div>
      </div>
    </motion.div></section>
  );
};

export default Cards;
