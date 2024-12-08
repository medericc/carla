"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100); // Fixe le header après 100px de scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Stats", path: "/ines/stats" },
    { name: "Globe", path: "/ines/#globe" },
    { name: "Biography", path: "/ines/#biography" },
    { name: "Timeline", path: "/ines/#timeline" },
  ];

  return (
    <nav
      className={`${
        isFixed
          ? "fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50"
          : "relative"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center mx-auto container p-4">
        {/* Logo */}
        <div className="font-bold">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={75}
              height={25}
              className="w-[70px] md:w-[200px] hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden hover:bg-gray-800 p-2 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 h-screen w-full bg-black/90 backdrop-blur-md md:hidden z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center space-y-8 h-full text-2xl">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                className="hover:text-green-400 nav-link transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Close button for accessibility */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-xl"
          >
            <X size={28} />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-10 font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              className="hover:text-green-400 nav-link transition-colors duration-300"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
