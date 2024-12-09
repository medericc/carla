"use client"
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model"; // Vérifie le chemin du modèle

const Travel: React.FC = () => (
  <section id="stats">
    <div className="mx-auto mt-8 md:mt-16 px-4 md:px-0 container">
      <div className="flex md:flex-row flex-col">
        {/* Section gauche */}
        <div className="mb-8 md:mb-0 w-full md:w-1/2">
          <div className="flex flex-col justify-center">
          <h1 className="relative mb-4 font-bold text-4xl md:text-5xl text-white">
  <span className="block title-line">
    Découvrez le <span className="text-blue-500"> parcours</span>{' '}
  </span>
  <span className="block title-line">
    de la <span className="text-white">meneuse</span>
  </span>
  <span className="block title-line">
    et capitaine de <span className="text-blue-500">Rhody</span>.
  </span>
</h1>

            <p className="mb-8 w-full md:w-[90%] text-gray-300 text-lg md:text-xl description">
              De son entrée au Pole Espoir à son titre de MVP de la finale de l'EuroBasket en
              2023, en continuant d'évoluer à Rhode Island.
            </p>
            <div className="flex md:flex-row flex-col space-y-4 md:space-x-9 md:space-y-0">
              {/* Boutons avec navigation */}
              <Link
                href="/stats"
                className="button relative bg-blue-500 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl text-center transition-all duration-300"
              >
                STATSCENTER
              </Link>
              <button className="button relative border-2 border-blue-500 hover:bg-blue-500 px-6 py-2 rounded-lg w-full md:w-[200px] font-medium text-xl transition-all duration-300">
                SON ÉQUIPE
              </button>
            </div>
           
          </div>
        </div>
        <section id="globe">
          {/* Section droite */}
          <div className="relative right-section w-full md:w-1/2 h-[400px] md:h-[600px]">
            <Canvas
              camera={{
                position: [0, 0, 3],
                fov: 50,
              }}
              style={{
                background: "transparent",
                height: "100%",
              }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Model />
                <OrbitControls enableZoom={false} autoRotate={false} enablePan={false} />
              </Suspense>
            </Canvas>
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default Travel;
