"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation pour chaque élément
const itemVariants = {
  hidden: { opacity: 0, transform: 'translateY(20px)' }, // Point de départ hors écran
  visible: (index: number) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      delay: index * 0.2, // Décalage pour échelonner l'apparition des éléments
      duration: 1.08, // Durée de l'animation
      ease: [0.19, 1, 0.22, 1], // Bézier pour la transformation
      opacity: {
        duration: 0.68,
        ease: [0.39, 0.575, 0.565, 1], // Bézier pour l'opacité
      },
    },
  }),
};


const Biography = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Utiliser IntersectionObserver pour détecter quand un élément est visible dans la fenêtre
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
        if (entry.isIntersecting) {
          setVisibleItems((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        } else {
          setVisibleItems((prev) => prev.filter((i) => i !== index));
        }
      });
    },
    { threshold: 0.1 } // L'élément est considéré visible quand 10% est dans la fenêtre
  );

  itemsRef.current.forEach((item) => {
    if (item) observer.observe(item);
  });

  return () => {
    itemsRef.current.forEach((item) => {
      if (item) observer.unobserve(item);
    });
  };
}, []);
 // Garder cette dépendance vide pour éviter de réinitialiser à chaque rendu

  return (
    <section id="biography">
    <div
    id="he"
      className=" p-5 rounded-lg text-white flex flex-col items-center"
      style={{ minHeight: '100vh', color: '#fff' }}
    >
      {/* Titre avec styles */}
      <h2
  className="text-4xl font-bold mb-10 text-center"
  style={{
    fontFamily: 'Oswald, sans-serif',
    fontSize: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.2',
    fontWeight: '700',
    letterSpacing: '0',
  }}
>
  THE GREATNESS
</h2>


      {/* Section avec Image et Biographie */}
      <div className="flex items-center w-full max-w-6xl mx-auto mt-5">
        {/* Section Image à gauche */}
        <div className="flex-shrink-0 w-1/3  ">
        <Image
        id="ing"
  src="/img.png" // Assure-toi que le chemin de l'image est correct
  alt="Carla Leite WNBA Player Basketball Women ESBVA Dallas Wings"
  width={335}
  height={470}
  className="rounded-lg right-[119.5%] md:right-[42.5%]"
  style={{ maxWidth: 'none', width: '335px', position: 'relative'}} // Ajout de position: relative
/>

        </div>

        {/* Informations biographiques */}
        <div className="flex-grow pl-[8rem] md:pl-[6rem] mt-20">
          <div className=" mt-5 mb-1 w-full">
            {[
              { label: 'Club', value: 'ESBVA-LM' },
              { label: 'Poste', value: 'Small Guard' },
              { label: 'Age', value: '20' },
              { label: 'Height', value: '1.74m' },
              { label: 'Nationality', value: 'French' },
              { label: 'WNBA Team', value: 'Valkyries' },
            ].map((info, idx) => (
              <motion.div
              key={idx}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              data-index={idx}
              initial="hidden"
              animate={visibleItems.includes(idx) ? 'visible' : 'hidden'}
              custom={idx}
              variants={itemVariants}
              className="flex flex-col justify-between pb-2 border-gray-600"
            >
              {/* Label stylé */}
              <span className="uppercase font-semibold mt-2"
                style={{
                  fontFamily: 'Industry, Helvetica, Arial, sans-serif',
                  fontSize: '.875rem',
                  opacity: 0.7,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {info.label}
              </span>
              {/* Valeur stylée */}
              <span
                style={{
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontSize: '1rem',
                  paddingRight: '1rem',
                  paddingBottom: '0.6rem',
                  textTransform: 'none',
                  fontWeight: 400,
                  borderBottom: '.0625rem solid #3c3c3c',
                }}
              >
                {info.value}
              </span>
            </motion.div>
            
            ))}
          </div>
        </div>
      </div>
    </div></section>
  );
};

export default Biography;
