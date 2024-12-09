"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/iness.jpg",
  "/ines_charnay.mp4",
  "/innes.jpg",
  "/ines_euro.mp4",
  "/iness.png",
  "/ines_three.mp4",
  "/inesss.jpg",
  "/ines_rhody.mp4",
  "/inesd.jpg",
  "/ines_edf.mp4",
  "/ines.jpg",
];

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel: React.FC = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imgs.length);
    }, 5000);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    const threshold = 50;

    if (x <= -threshold && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= threshold && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative overflow-hidden py-8 mt-4 mb-4">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing px-8"
      >
        {imgs.map((imgSrc, idx) => {
          const isVideo = imgSrc.endsWith(".mp4");
          return (
            <motion.div
              key={idx}
              className="aspect-video w-screen shrink-0 overflow-hidden  bg-neutral-800 ml-1"
            >
              {isVideo ? (
                <video
                  src={imgSrc}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <div
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-full w-full"
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

     
    </section>
  );
};

export default SwipeCarousel;
