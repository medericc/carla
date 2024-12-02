"use client";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      {/* Texte principal */}
      <p style={footerTextStyle}>Carla Leite Fan</p>

      {/* Section des icônes de réseaux sociaux */}
      <div style={socialIconsStyle}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={iconStyle} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={iconStyle} />
        </a>
      </div>

      {/* Copyright ou autres informations supplémentaires */}
      <p style={copyRightStyle}>© 2024 Carla Leite Fan. All Rights Reserved.</p>
    </footer>
  );
};

// Styles en JavaScript
const footerStyle: React.CSSProperties = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const socialIconsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '20px',
};

const iconStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  color: '#fff',
  cursor: 'pointer',
  transition: 'color 0.3s',
};

// Change la couleur des icônes au hover
const iconHoverStyle: React.CSSProperties = {
  color: '#eaeaea',
};

const copyRightStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#aaa',
};

export default Footer;
