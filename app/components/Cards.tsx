"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from './FightCard.module.css';

// Create a dynamic component for motion
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

const cardVariants = {
  hidden: { opacity: 0, y: 50 },  // Start below and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },  // Animate into place
};

const Cards = () => {
  return (
    <div className="md:hidden relative bg-black text-white pb-10 text-center overflow-hidden max-w-full px-5">
      {/* Scrolling Text in the background */}
      <div className="absolute left-0 top-[1.25%] whitespace-nowrap z-1 text-[15rem] uppercase font-bold text-white animate-scrollTextx">
        <span>GAMES HISTORY</span>
        <span className="ml-[100vw]">GAMES HISTORY</span> {/* Double text for seamless scrolling */}
      </div>

      {/* Animated Cards */}
      <div className="mt-[15rem]">
      <FightCard
        eventTitle="GAME 08"
        fightDetails="Euroleague Women"
        fightDetail="Journée 5"
        fighter1={{ name: "Lille", img: "/esbva.png", win: true }}
        fighter2={{ name: "Polkowice", img: "/polko.png", win: false }}
          watchUrl="https://www.youtube.com/live/JoDO6UGMgkA?si=2mPy4jH7ckosDH9S"
  boxscoreUrl="https://www.fiba.basketball/en/events/euroleague-women-24-25/games/123709-ESBVA-KGHM#boxscore"
      />
      <FightCard
          eventTitle="GAME 07"
          fightDetails="Ligue Féminine de Basket"
          fightDetail="Journée 7"
          fighter1={{ name: "Lille", img: "/esbva.png", win: false }}
          fighter2={{ name: "Charnay", img: "/charnay.png", win: true }}
            watchUrl="https://www.youtube.com/watch?v=MFlMvvPtoLs"
  boxscoreUrl="https://basketlfb.com/laboulangerewonderligue/match/790014-villeneuve-d-ascq-charnay"
        />
      <FightCard
          eventTitle="GAME 06"
          fightDetails="Ligue Féminine de Basket"
          fightDetail="Journée 4"
          fighter1={{ name: "Lille", img: "/esbva.png", win: false }}
          fighter2={{ name: "Flammes", img: "/flamme.png", win: true }}
            watchUrl="https://www.youtube.com/watch?v=1G8RqdmPsiA"
  boxscoreUrl="https://basketlfb.com/laboulangerewonderligue/match/790004-villeneuve-d-ascq-charleville-mezieres"
        />
              <FightCard
        eventTitle="GAME 05"
        fightDetails="Euroleague Women"
        fightDetail="Journée 2"
        fighter1={{ name: "Polkowice", img: "/polko.png", win: false }}
        fighter2={{ name: "Lille", img: "/esbva.png", win: true }}
          watchUrl="https://www.youtube.com/live/Ab44Ft1-sIQ?si=eNf1jzbbfyNL1Lqs"
  boxscoreUrl="https://www.fiba.basketball/en/events/euroleague-women-24-25/teams/kghm-bc-polkowice#games"
      />
        <FightCard
          eventTitle="GAME 04"
          fightDetails="Ligue Féminine de Basket"
          fightDetail="Journée 3"
          fighter1={{ name: "Angers", img: "/ufa.png", win: true }}
          fighter2={{ name: "Lille", img: "/esbva.png", win: false }}
            watchUrl="https://www.youtube.com/watch?v=6BKEGfDOnqA"
  boxscoreUrl="https://basketlfb.com/laboulangerewonderligue/match/789999-angers-villeneuve-d-ascq"
        />
      </div>

      <FightCard
        eventTitle="GAME 03"
        fightDetails="Euroleague Women"
        fightDetail="Journée 1"
        fighter1={{ name: "Lille", img: "/esbva.png", win: false }}
        fighter2={{ name: "Fenerbahce", img: "/fene.png", win: true }}
          watchUrl="https://www.youtube.com/watch?v=_xwJqXRWTAE"
  boxscoreUrl="https://www.fiba.basketball/en/events/euroleague-women-24-25/games/123701-ESBVA-FENER#boxscore"
      />

      <FightCard
        eventTitle="GAME 02"
        fightDetails="Ligue Féminine de Basket"
        fightDetail="Journée 2"
        fighter1={{ name: "Lille", img: "/esbva.png", win: false }}
        fighter2={{ name: "Lyon", img: "/asvel.png", win: true }}
          watchUrl="https://www.youtube.com/watch?v=vAfee_orHVs&pp=ygUPZmZiYiBseW9uIGVzYnZh"
  boxscoreUrl="https://basketlfb.com/laboulangerewonderligue/match/789994-villeneuve-d-ascq-lyon"
      />
      
      <FightCard
        eventTitle="GAME 01"
        fightDetails="Ligue Féminine de Basket"
        fightDetail="Journée 1"
        fighter1={{ name: "Landerneau", img: "/lbb.png", win: true }}
        fighter2={{ name: "Lille", img: "/esbva.png", win: false }}
          watchUrl="https://www.youtube.com/watch?v=YnWzf3Hfbkk"
  boxscoreUrl="https://basketlfb.com/laboulangerewonderligue/match/789983-landerneau-villeneuve-d-ascq"
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
  watchUrl: string;
  boxscoreUrl: string;
}


const FightCard: React.FC<FightCardProps> = ({ eventTitle, fighter1, fighter2, fightDetails, fightDetail, watchUrl, boxscoreUrl }) => {
  // Intersection Observer to trigger animations when the card comes into view
  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger animation when scrolling up and down
    threshold: 0.2,  // Trigger when 30% of the card is in view
  });

  return (
    <section id="watch">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}  // Re-trigger the animation on scroll
        className="relative bg-[#1a1a1a] flex flex-col mb-8  shadow-lg max-w-2xl mx-auto z-20"
      >
        {/* Bandeau rouge */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#970000]"></div>

        {/* Event Title */}
        <div className="mt-10 text-center">
          <div className="text-white py-2 text-2xl mb-5">
          <p
  className="text-lg text-white uppercase"
  style={{
    fontFamily: 'Freeman, sans-serif',
    fontSize: '2.5rem',
   
    textAlign: 'center',
    lineHeight: '1.2',
    fontWeight: '550', // Si tu veux changer le poids, adapte cette valeur
  }}>
{eventTitle}
</p>
            
            </div>

          {/* Fight details */}
          <div className="flex flex-col justify-between items-center max-w-full relative border-t-[0.0625rem] border-t-[#272727] mt-6 mb-8 pt-7 px-4 pb-0">
          <p
  className="text-lg text-white uppercase"
  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500', fontSize: '1.3rem' }}
>
  {fightDetails}
</p>

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
  width={300}  // Ajuste à la taille souhaitée
  height={300}
  className="w-full object-cover"  // Cela s'étend sur toute la largeur du conteneur
/>

{fighter1.win && (
  <span className="absolute bg-[#c30000] text-white font-bold uppercase text-[1rem] leading-[0.8] px-3 py-1.5 right-0 bottom-0 z-20">
    WIN
  </span>
)}
              </div>
              <p className="mt-2 text-xl font-medium  uppercase">{fighter1.name}</p>
            </div>

            {/* VS */}
            <div className={`relative ${styles.fighters} flex-1 text-center top-[-2vh]  left-[-0.05vh] text-[#272727]`}></div>

      {/* Fighter 2 */}
{/* Fighter 2 */}
<div className="flex-1 text-center relative border-r border-r-[#272727] flex flex-col items-center md:w-full md:h-full"> {/* md:h-full ajouté pour garantir que ça prenne toute la hauteur */}
  <div className="relative border-b border-b-[#272727] w-full h-full">  {/* w-full et h-full ajoutés */}
    <Image
      src={fighter2.img}
      alt={fighter2.name}
      width={300}  // Taille souhaitée
      height={300}
      className="object-cover w-full h-full"  // w-full et h-full pour que l'image prenne tout l'espace
    />
    {fighter2.win && (
      <span className="absolute bg-[#c30000] text-white font-bold uppercase text-[1rem] leading-[0.8] px-3 py-1.5 left-0 bottom-0 z-20">
        WIN
      </span>
    )}
  </div>
  <p className="mt-2 text-xl font-medium uppercase">{fighter2.name}</p>
</div>



          </div>

          {/* Buttons under Fighters */}
          <div className="flex flex-col mb-7 items-center border-t-[0.0625rem] border-t-[#272727] space-y-[0.75rem] mt-2">
          <a
  href={watchUrl}
  className="inline-flex items-center justify-center mt-5 h-12 w-[14rem] bg-[#b1100f] text-white rounded-[0.125rem] text-[0.875rem] font-extrabold uppercase cursor-pointer transition-colors transition-bg transition-border duration-[0.37s] ease-[cubic-bezier(.39,.575,.565,1)]"
>
  Watch
</a>
<a
  href={boxscoreUrl}
  className="inline-flex items-center justify-center h-12 w-[14rem] bg-transparent border-[0.0625rem] text-white rounded-[0.125rem] text-[0.875rem] font-extrabold uppercase cursor-pointer transition-colors transition-bg transition-border duration-[0.37s] ease-[cubic-bezier(.39,.575,.565,1)] "
>
  Boxscore
</a>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Animation keyframes for the scrolling text in the background
const keyframesStylex = `
  @keyframes scrollTextx {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-scrollTextx {
  opacity:1;
    animation: scrollTextx 40s linear infinite;
  }
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = keyframesStylex;
  document.head.appendChild(style);
}

export default Cards;
