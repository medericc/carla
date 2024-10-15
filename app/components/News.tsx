"use client";
import { useEffect, useRef } from 'react';

const CarlaAbout = () => {
  const textRef = useRef<HTMLDivElement>(null);

  // Effet de défilement du texte "Carla About"
  useEffect(() => {
    const textEl = textRef.current;
    if (textEl) {
      textEl.style.animation = 'scrollText 15s linear infinite';
    }
  }, []);

  return (
    <div className="relative h-[155vh] w-full bg-white text-black"> {/* Hauteur augmentée */}   {/* Texte défilant en fond */}
      <div
        className="absolute top-[4%] left-0 whitespace-nowrap z-1 text-[5rem] opacity-10 uppercase font-bold text-black animate-scrollText"
        ref={textRef}
      >
        CARLA ABOUT CARLA ABOUT CARLA ABOUT
      </div>

      {/* Paragraphe de texte */}
      <div className="absolute top-[15%] left-[10%] right-[10%] z-10 text-lg leading-7 text-gray-800">
        <p className="mb-6">
          En tant que cadette à Lyon, Carla est devenue championne de France espoir 
          et a mené son équipe à Bercy grâce à un run à plus de 30 points 
          de moyenne en Coupe de France.
        </p>
        <p className="mb-6">
          En 2022, elle fait ses débuts professionnels à Tarbes, où elle devient la plus jeune 
          joueuse à terminer joueuse la plus décisive de la saison, et devient aussi la plus jeune 
          à intégrer la First Team de la LFB après une saison à 15 points, 5 passes, un exploit jamais réalisé 
          par une Européenne.
        </p>
        <p className="mb-6">
          Carla réalise aussi la meilleure campagne de playoffs de l’histoire de la LFB, éliminant en quart 
          de finale la meilleure équipe de l'histoire du championnat français en MVP, invaincue à ce stade dans 
          toute son histoire. Elle bat alors les records de points et d’évaluation sur une campagne de playoffs. 
          Malgré deux saisons assez satisfaisantes individuellement à Tarbes, l’expérience collective est un échec.
        </p>
        <p className="mb-6">
          Après cela, elle se dirige vers Villeneuve d'Ascq, mais avant de rejoindre son nouveau club, elle dispute 
          deux matchs avec l’équipe de France, remportés avec brio. Sans elle, l'équipe subit deux défaites et échoue 
          aux Jeux olympiques de Paris. Puis, le 16 octobre 2024, elle entre encore un peu plus dans l'histoire en devenant 
          la Française la plus rapide à franchir la barre des 1000 points.
        </p>
      </div>
    </div>
  );
};

export default CarlaAbout;
