"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <h1 className="text-4xl mb-10 z-10"></h1>

      {/* Card 1: Pereira vs Vakhitov */}
      <div className="bg-[#1a1a1a] rounded-lg mb-8 p-5 shadow-lg max-w-3xl mx-auto z-20">
        <div className="bg-[#b1100f] text-white py-2 rounded-t-lg text-2xl mb-5 text-center">
          GLORY 78
        </div>
        <div className="flex justify-between items-center max-w-full">
          <div className="flex-1 text-center">
            <Image
              src="/path-to-image/perreira.png"
              alt="Pereira"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">Pereira</p>
          </div>
          <div className="text-xl font-bold mx-5">VS</div>
          <div className="flex-1 text-center">
            <Image
              src="/path-to-image/vakhitov.png"
              alt="Vakhitov"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">
              Vakhitov <span className="bg-[#b1100f] text-white px-2 py-1 rounded-lg ml-2">WIN</span>
            </p>
          </div>
        </div>
        <div className="mt-5 text-center">
          <div className="flex justify-center gap-5">
            <button className="px-5 py-2 text-lg bg-[#b1100f] text-white rounded-md">Fight Card</button>
            <button className="px-5 py-2 text-lg bg-[#b1100f] text-white rounded-md">Watch</button>
          </div>
          <p className="text-lg text-white mt-5">
            Light Heavyweight World Title Fight - MD 03:00 Round 5
          </p>
        </div>
      </div>

      {/* Card 2: Adesanya vs Blachowicz */}
      <div className="bg-[#1a1a1a] rounded-lg mb-8 p-5 shadow-lg max-w-3xl mx-auto z-20">
        <div className="bg-[#b1100f] text-white py-2 rounded-t-lg text-2xl mb-5 text-center">
          UFC 259
        </div>
        <div className="flex justify-between items-center max-w-full">
          <div className="flex-1 text-center">
            <Image
              src="/path-to-image/adesanya.png"
              alt="Adesanya"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">Adesanya</p>
          </div>
          <div className="text-xl font-bold mx-5">VS</div>
          <div className="flex-1 text-center">
            <Image
              src="/path-to-image/blachowicz.png"
              alt="Blachowicz"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">
              Blachowicz <span className="bg-[#b1100f] text-white px-2 py-1 rounded-lg ml-2">WIN</span>
            </p>
          </div>
        </div>
        <div className="mt-5 text-center">
          <div className="flex justify-center gap-5">
            <button className="px-5 py-2 text-lg bg-[#b1100f] text-white rounded-md">Fight Card</button>
            <button className="px-5 py-2 text-lg bg-[#b1100f] text-white rounded-md">Watch</button>
          </div>
          <p className="text-lg text-white mt-5">
            Light Heavyweight Championship - UD 05:00 Rounds
          </p>
        </div>
      </div>

      {/* Card 3: Nurmagomedov vs McGregor */}
      <div className="bg-[#1a1a1a] rounded-lg mb-8 p-5 shadow-lg max-w-3xl mx-auto z-20">
        <div className="bg-[#b1100f] text-white py-2 rounded-t-lg text-2xl mb-5 text-center">
          UFC 229
        </div>
        <div className="flex justify-between items-center max-w-full">
          <div className="flex-1 text-center">
            <Image
              src="/path-to-image/nurmagomedov.png"
              alt="Nurmagomedov"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">Nurmagomedov</p>
          </div>
          <div className="text-xl font-bold mx-5">VS</div>
          <div className="flex-1 text-center">
            <Image
              src="/path-to-image/mcgregor.png"
              alt="McGregor"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <p className="mt-2 text-xl font-bold">
              McGregor <span className="bg-[#b1100f] text-white px-2 py-1 rounded-lg ml-2">LOSS</span>
            </p>
          </div>
        </div>
        <div className="mt-5 text-center">
          <div className="flex justify-center gap-5">
            <button className="px-5 py-2 text-lg bg-[#b1100f] text-white rounded-md">Fight Card</button>
            <button className="px-5 py-2 text-lg bg-[#b1100f] text-white rounded-md">Watch</button>
          </div>
          <p className="text-lg text-white mt-5">
            Lightweight Championship - Submission 04:00 Rounds
          </p>
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

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = keyframesStyle;
  document.head.appendChild(style);
}

export default Cards;
