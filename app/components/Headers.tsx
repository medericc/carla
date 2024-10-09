"use client"; 

// app/components/Header.tsx
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-black py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Image
            src="/logo.png" // Remplace par le chemin de ton logo
            alt="Glory Logo"
            width={40}
            height={15}
          />
          {/* Menu Links */}
          <ul className="hidden md:flex space-x-8 text-white uppercase text-sm">
            <li className="hover:text-gray-300">
              <a href="#">Events</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#">Fighters</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#">News</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#">Watch</a>
            </li>
          </ul>
        </div>

        {/* Right Side - Shop and Tickets */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-white uppercase text-sm hover:text-gray-300"
          >
            Shop ↗
          </a>
          <a
            href="#"
            className="border border-white text-white px-4 py-1 text-sm uppercase hover:bg-white hover:text-black transition"
          >
            Tickets
          </a>
          {/* Search Icon */}
          <FaSearch className="text-white hover:text-gray-300 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
