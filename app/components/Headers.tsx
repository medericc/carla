"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes, FaBasketballBall } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  const navItems = [
    { label: "Biographie", href: "#biography" },
    { label: "Records", href: "#records" },
 
    { label: "Actualités", href: "#news" },
       { label: "Matchs", href: "#watch" },
  ];

  const dropdownItems = [
    { label: "Lucile", href: "/lucile" },
    { label: "Jade", href: "/jade" },
 ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  };

  return (
    <div className="z-50">
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-12 h-12">
           
              <Image
                src="/logo.png"
                alt="Carla Leite Logo"
                width={60}
                height={60}
                className="relative p-2"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hidden md:block">
              CARLA LEITE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Navigation Items */}
            <ul className="flex gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <a
                    href={item.href}
                    className="relative text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-white transition-colors group"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-px h-6 bg-gradient-to-b from-gray-700 to-transparent" />

            {/* Stats Link */}
            <motion.a
              whileHover={{ x: 5 }}
              href="/directory"
              className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              <FaBasketballBall className="w-4 h-4" />
              Stats
              <span className="text-red-500">↗</span>
            </motion.a>

            {/* Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-5 py-2 border border-gray-700 text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-white hover:border-red-500 transition-all duration-300 rounded-lg bg-gradient-to-b from-gray-900/50 to-black/50"
              >
                Autres
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {dropdownItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/10 hover:to-transparent transition-all duration-300 group"
                        onClick={handleLinkClick}
                      >
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaSearch className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 240 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-full mt-2"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher..."
                      className="w-full px-4 py-2 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
             className="lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
            >
              <div className="pt-6 pb-8 space-y-6">
                {/* Mobile Navigation Items */}
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-lg font-semibold tracking-wider uppercase text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/10 hover:to-transparent rounded-lg transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

                {/* Mobile Stats Link */}
                <a
                  href="/directory"
                  className="flex items-center gap-3 px-4 py-3 text-lg font-semibold tracking-wider uppercase text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/10 hover:to-transparent rounded-lg transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  <FaBasketballBall className="w-5 h-5" />
                  Statistiques
                </a>

                {/* Mobile Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full px-4 py-3 text-lg font-semibold tracking-wider uppercase text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/10 hover:to-transparent rounded-lg transition-all duration-300 text-left"
                  >
                    Autres Joueurs
                  </button>
                  
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="ml-8 space-y-2"
                    >
                      {dropdownItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-gray-400 hover:text-white transition-colors"
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Mobile Search */}
                <div className="px-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher..."
                      className="w-full px-4 py-3 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header></div>
  );
}