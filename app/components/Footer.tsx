"use client";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaBasketballBall } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/fan_carlaleite/", label: "Instagram" },
    { icon: FaTwitter, href: "https://x.com/leite_goat_fan", label: "Twitter" },
    { icon: FaYoutube, href: "https://www.youtube.com/@fan_goat_ines", label: "YouTube" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@fan_carlaleite", label: "TikTok" },
    { icon: FaBasketballBall, href: "https://carlaleitefan.com", label: "Statistiques" },
  ];

  const footerLinks = [
    { title: "Navigation", links: ["Accueil", "Biographie", "Records", "Actualités", "Matchs"] },
    { title: "Ressources", links: ["Statistiques", "Galeries", "Interviews", "Archives"] },
    { title: "Légal", links: ["Mentions légales", "Confidentialité", "Cookies", "Contact"] },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top section with logo and social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pb-12 border-b border-gray-800">
          {/* Logo and brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-full" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  #0
                </span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CARLA LEITE
              </h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Sur le Parcours de la Meilleure Joueuse de l'Histoire du Basketball Féminin
            </p>
          </motion.div>

          {/* Social links */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <h4 className="text-lg font-semibold tracking-wider text-gray-300">
              COMPTES FANS
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  aria-label={social.label}
                >
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-red-500/50 transition-all duration-300">
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Links grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-lg font-bold mb-6 text-gray-300 tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Carla Leite Fan. Tous droits réservés.
            </p>

            {/* Additional links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Plan du site
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Presse
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Partenariats
              </a>
            </div>

            {/* Basketball icon */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center animate-bounce">
                <FaBasketballBall className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-400">#GoatBasket</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;