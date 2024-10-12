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
      <div className="flex  items-center w-full max-w-5xl mx-auto">
        {/* Image Section on the left */}
        <div className="flex-1">
          <Image
            src="/path/to/your-image.png" // Remplace par le chemin réel de ton image
            alt="Character Image"
            width={300}
            height={450}
            className="rounded-lg"
          />
        </div>

        {/* Biography Info on the right */}
        <div className="flex-1 text-lg space-y-7">
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
    </MotionDiv>
  );
};

export default Biography;
