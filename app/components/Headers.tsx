"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // État pour le menu déroulant "OTHERS"
  const [searchOpen, setSearchOpen] = useState(false); // État pour le champ de recherche
  const [searchQuery, setSearchQuery] = useState("");
  // Fonction pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen); // Ouvre/ferme le champ de recherche
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Met à jour l'état en fonction de la saisie
  };
  
  const handleLinkClick = () => {
    // Ferme le menu après un clic
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header
    className={`w-full py-4 fixed top-0 left-0 z-[100] transition-colors duration-300 ${scrolled || isOpen ? "bg-black" : "bg-transparent"}`}

    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Image
            src="/logo.png" // Remplace par le chemin de ton logo
            alt="Glory Logo"
            width={40}
            height={15}
          />
        </div>

        {/* Hamburger Icon for Mobile and Tablet */}
        <div className="lg:hidden flex items-center"> {/* Change md:hidden to lg:hidden */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <ul className="hidden lg:flex space-x-8 text-white uppercase text-sm">
          <li className="hover:text-gray-300">
            <a href="#biography" onClick={handleLinkClick}>Biography</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#" onClick={handleLinkClick}>Records</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#" onClick={handleLinkClick}>News</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#" onClick={handleLinkClick}>Watch</a>
          </li>
        </ul>

        {/* Right Side - Shop and Tickets */}
        <div className="hidden lg:flex items-center space-x-6 relative">
          <a
            href="/directory"
            className="text-white uppercase text-sm hover:text-gray-300"
            onClick={handleLinkClick}
          >
            Stats ↗
          </a>

          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="border border-white text-white px-4 py-1 text-sm uppercase hover:bg-white hover:text-black transition"
            >
              OTHERS
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-white text-white text-sm">
                <a
                  href="/lena"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                  onClick={handleLinkClick}
                >
                  Lena
                </a>
                <a
                  href="/lucile"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                  onClick={handleLinkClick}
                >
                  Lucile
                </a>
              </div>
            )}
          </div>

         {/* Search Icon */}
         <FaSearch onClick={toggleSearch} className="text-white hover:text-gray-300 cursor-pointer" />

{/* Search Field */}
{searchOpen && (
  <input
    type="text"
    value={searchQuery}
    onChange={handleSearchChange}
    className="ml-2 px-4 py-2 text-black rounded"
    placeholder="Search..."
  />
)}      </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black text-white uppercase text-sm space-y-4 py-4">
          <a href="#biography" className="hover:text-gray-300" onClick={handleLinkClick}>
            Biography
          </a>
          <a href="#records" className="hover:text-gray-300" onClick={handleLinkClick}>
            Records
          </a>
          <a href="#news" className="hover:text-gray-300" onClick={handleLinkClick}>
            News
          </a>
          <a href="#watch" className="hover:text-gray-300" onClick={handleLinkClick}>
            Watch
          </a>
          <a href="/directory" className="text-sm hover:text-gray-300" onClick={handleLinkClick}>
            Stats ↗
          </a>

          {/* Mobile Dropdown Button */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={toggleDropdown}
              className="border border-white text-white px-4 py-1 text-sm uppercase hover:bg-white hover:text-black transition"
            >
              OTHERS
            </button>
            {dropdownOpen && (
              <div className="w-full mt-2 flex flex-col items-center bg-black border border-white text-white text-sm">
                <a
                  href="/lena"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                  onClick={handleLinkClick}
                >
                  Lena
                </a>
                <a
                  href="/lucile"
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                  onClick={handleLinkClick}
                >
                  Lucile
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
