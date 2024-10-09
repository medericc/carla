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
      style={{
        marginTop: '20px',
        display: 'flex',  // Flexbox for left-right layout
        gap: '20px', // Adds space between image and details
        alignItems: 'center', // Centers content vertically
        color: '#fff', // Text color, can be customized
         // Background color for entire section
        padding: '20px', // Padding around the whole section
        borderRadius: '10px' // Rounds corners for aesthetics
      }}
    >
      {/* Image Section on the left */}
      <div style={{ flex: '1' }}>
        {/* Replace '/path/to/your-image.png' with your actual image path */}
        <Image
          src="/perso.png"
          alt="Character Image"
          width={300} // Adjust width as necessary
          height={450} // Adjust height as necessary
          style={{ borderRadius: '10px' }} // Adds a rounded corner to the image
        />
      </div>

      {/* Biography Info on the right */}
      <div style={{ flex: '1.5', fontSize: '1.2rem', lineHeight: '1.5' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>The Greatness</h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Division:</span>
          <span>Light Heavyweight</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Status:</span>
          <span>Retired</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Age:</span>
          <span>37</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Height:</span>
          <span>1.94m</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Weight:</span>
          <span>85kg</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Nationality:</span>
          <span>Brazil</span>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Biography;
