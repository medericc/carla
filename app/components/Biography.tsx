"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Crée un composant dynamique pour motion
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

const Biography = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="mt-5 p-5 bg-gray-900 rounded-lg text-white flex flex-col items-center"
    >
      {/* The Greatness Title */}
      <h2 className="text-4xl mb-8 text-center">The Greatness</h2>

     {/* Main content section with flexbox layout */}
<div className="flex items-center w-full max-w-6xl mx-auto">
  {/* Image Section on the left */}
  <div className="flex-shrink-0 w-1/4 md:w-1/3"> {/* Image section plus petite */}
    <Image
      src="/path/to/your-image.png"
      alt="Character Image"
      width={300}
      height={450}
      className="rounded-lg"
    />
  </div>

  {/* Biography Info on the right */}
  <div className="flex-grow pl-[30vw]"> {/* Ajout de flex-grow et de padding à gauche */}
    <div className="space-y-4 mt-5 w-full md:w-full"> {/* Largeur maximale ici */}
      {[
        { label: 'Club', value: 'ESBVA-LM' },
        { label: 'Poste', value: 'Small Guard' },
        { label: 'Age', value: '20' },
        { label: 'Height', value: '1.74m' },
        { label: 'Nationality', value: 'French' },
        { label: 'WNBA Team', value: 'Dallas' },
      ].map((info, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between pb-2 border-b border-gray-600"
        >
          <span>{info.label}</span>
          <span>{info.value}</span>
        </div>
      ))}
    </div>
  </div>
</div>

    </MotionDiv>
  );
};

export default Biography;
