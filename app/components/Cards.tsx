"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Crée un composant dynamique pour motion
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

const Cards = () => {
  return (
    <div style={containerStyle}>
      {/* Scrolling Text in the background */}
      <div style={scrollingTextContainerStyle}>
        <div style={scrollingTextStyle}>CARDS HISTORY FIGHT</div>
      </div>

      {/* Main content */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', zIndex: 2 }}></h1>

      {/* Card 1: Pereira vs Vakhitov */}
      <div style={cardStyle}>
        <div style={cardHeaderStyle}>GLORY 78</div>
        <div style={cardBodyStyle}>
          <div style={{ flex: 1, textAlign: 'center' as React.CSSProperties['textAlign'] }}>
            <Image
              src="/path-to-image/perreira.png"
              alt="Pereira"
              width={150}
              height={150}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p style={fighterNameStyle}>Pereira</p>
          </div>
          <div style={vsStyle}>VS</div>
          <div style={{ flex: 1, textAlign: 'center' as React.CSSProperties['textAlign'] }}>
            <Image
              src="/path-to-image/vakhitov.png"
              alt="Vakhitov"
              width={150}
              height={150}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p style={fighterNameStyle}>
              Vakhitov <span style={resultTagStyle}>WIN</span>
            </p>
          </div>
        </div>
        <div style={cardFooterStyle}>
          <div style={buttonGroupStyle}>
            <button style={buttonStyle}>Fight Card</button>
            <button style={buttonStyle}>Watch</button>
          </div>
          <p style={CardsInfoStyle}>Light Heavyweight World Title Fight - MD 0300 Rounds</p>
        </div>
      </div>

      {/* Card 2: Adesanya vs Blachowicz */}
      <div style={cardStyle}>
        <div style={cardHeaderStyle}>UFC 259</div>
        <div style={cardBodyStyle}>
          <div style={{ flex: 1, textAlign: 'center' as React.CSSProperties['textAlign'] }}>
            <Image
              src="/path-to-image/adesanya.png"
              alt="Adesanya"
              width={150}
              height={150}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p style={fighterNameStyle}>Adesanya</p>
          </div>
          <div style={vsStyle}>VS</div>
          <div style={{ flex: 1, textAlign: 'center' as React.CSSProperties['textAlign'] }}>
            <Image
              src="/path-to-image/blachowicz.png"
              alt="Blachowicz"
              width={150}
              height={150}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p style={fighterNameStyle}>
              Blachowicz <span style={resultTagStyle}>WIN</span>
            </p>
          </div>
        </div>
        <div style={cardFooterStyle}>
          <div style={buttonGroupStyle}>
            <button style={buttonStyle}>Fight Card</button>
            <button style={buttonStyle}>Watch</button>
          </div>
          <p style={CardsInfoStyle}>Light Heavyweight Championship - UD 0500 Rounds</p>
        </div>
      </div>

      {/* Card 3: Nurmagomedov vs McGregor */}
      <div style={cardStyle}>
        <div style={cardHeaderStyle}>UFC 229</div>
        <div style={cardBodyStyle}>
          <div style={{ flex: 1, textAlign: 'center' as React.CSSProperties['textAlign'] }}>
            <Image
              src="/path-to-image/nurmagomedov.png"
              alt="Nurmagomedov"
              width={150}
              height={150}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p style={fighterNameStyle}>Nurmagomedov</p>
          </div>
          <div style={vsStyle}>VS</div>
          <div style={{ flex: 1, textAlign: 'center' as React.CSSProperties['textAlign'] }}>
            <Image
              src="/path-to-image/mcgregor.png"
              alt="McGregor"
              width={150}
              height={150}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <p style={fighterNameStyle}>
              McGregor <span style={resultTagStyle}>LOSS</span>
            </p>
          </div>
        </div>
        <div style={cardFooterStyle}>
          <div style={buttonGroupStyle}>
            <button style={buttonStyle}>Fight Card</button>
            <button style={buttonStyle}>Watch</button>
          </div>
          <p style={CardsInfoStyle}>Lightweight Championship - Submission 0400 Rounds</p>
        </div>
      </div>
    </div>
  );
};

// CSS styles in JS
const resultTagStyle: React.CSSProperties = {
  color: '#fff',
  backgroundColor: '#b1100f',
  padding: '2px 6px',
  borderRadius: '5px',
  marginLeft: '8px',
  fontSize: '0.9rem',
};

const containerStyle: React.CSSProperties = {
  position: 'relative',
  backgroundColor: '#000',
  color: '#fff',
  padding: '40px',
  textAlign: 'center' as React.CSSProperties['textAlign'],
  overflow: 'hidden', // Important to hide the overflow of the text
};

const scrollingTextContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '7%',
  left: '-100%',
  whiteSpace: 'nowrap',
  zIndex: 1,
  fontSize: '6rem',
  opacity: 0.1,
  textTransform: 'uppercase',
  animation: 'scrollText 20s linear infinite',
};

const scrollingTextStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: '#fff',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#1a1a1a',
  borderRadius: '15px',
  marginBottom: '30px',
  padding: '20px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
  maxWidth: '800px',
  margin: 'auto',
  zIndex: 2, // Make sure cards are above the text
};

const cardHeaderStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  backgroundColor: '#b1100f',
  color: '#fff',
  padding: '10px',
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px',
  textAlign: 'center' as React.CSSProperties['textAlign'],
  marginBottom: '20px',
};

const cardBodyStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const fighterNameStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '1.25rem',
  fontWeight: 'bold',
};

const vsStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '0 20px',
};

const cardFooterStyle: React.CSSProperties = {
  marginTop: '20px',
  textAlign: 'center' as React.CSSProperties['textAlign'],
};

const buttonGroupStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#b1100f',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Add the missing CardsInfoStyle here
const CardsInfoStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#fff',
  marginTop: '15px',
};

// Add this keyframes animation in your global CSS (or you can add it in your component using @keyframes in a styled-jsx block if needed)
const keyframesStyle = `
  @keyframes scrollText {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default Cards;
