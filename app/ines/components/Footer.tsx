"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Typage des props pour le composant Card
interface CardProps {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string; // Optionnel
}

export const DragCards: React.FC = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[15vw] font-black text-neutral-800 md:text-[200px]">
        DEBROISE<span className="text-blue-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/innes.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/inesss.jpg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-33 md:w-42"
      />
      <Card
        containerRef={containerRef}
      src="/iness.png"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
       src="/iness.jpg"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
      src="/inesd.jpg"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/ines.jpg"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-40 md:w-64"
      />
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const currentZIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
        10
      );

      if (!isNaN(currentZIndex) && currentZIndex > maxZIndex) {
        maxZIndex = currentZIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default DragCards;