"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const mobileConnectors = [
  "",                // premier paragraphe → rien
  "Ensuite, ",
  "Puis, ",
  "Pour sa dernière saison avec le TGB, ",
  "Désormais, ",
  "Après cela, ",
  "Le 16 octobre 2024, ",
   "À Lille, ",
   "",
   "Ensuite, ",
   "",
   "Au printemps 2025, ",
];


export const timeline = [
  {
    year: "2019–2022",
    text: "En tant que cadette à Lyon, Carla est devenue championne de France espoir et a mené son équipe à Bercy grâce à un run à plus de 30 points de moyenne en Coupe de France."
  },
  {
    year: "2022-2024",
    text: "Elle signe à Tarbes et devient la plus jeune joueuse à terminer joueuse la plus décisive de la saison et à intégrer la First Team de la LFB après une saison à 15 points et 5 passes (un exploit jamais réalisé par une Européenne)."
  },
  
   {
    year: "2023",
    text: "Pour sa première sélection en équipe de France, Carla est championne d'Europe avec le MVP, meilleure moyenne de points pour une française championne, elle est aussi la meilleure scoreuse par minutes de l'histoire de l'EuroBasket U20 Féminin."
  },
  {
    year: "2024",
    text: "Carla élimine en quart de finale la meilleure équipe de l'histoire du championnat français, invaincue à ce stade dans toute son histoire, par une performance inédite."
  },
    {
    year: "2024",
    text: "Carla a la meilleure évaluation et le meilleure scoring de l'histoire en une campagne de PO LFB."
  },
  {
    year: "2024",
    text: "Elle dispute deux matchs avec l’équipe de France, qui sont remportés avec brio. Puis sans elle, l'équipe de France subit deux défaites et échoue aux Jeux olympiques de Paris."
  },
  {
    year: "16 oct. 2024",
    text: "Elle devient la Française la plus rapide à franchir la barre des 1000 points."
  },
   {
    year: "2024-2025",
    text: "Carla devient la plus jeune joueuse à terminer meilleure marqueuse de la saison régulière de LFB avec 40 % à 3 Points (du jamais vu pour une européenne) et est une deuxième fois joueuse la plus décisive (record)."
  },
   {
    year: "6 fév. 2025",
    text: "Face à l'Irlande, Carla remporte la victoire la plus large de l\'histoire de l\'équipe de France (+101)."
  },
   {
    year: "2025",
    text: "Carla est championne d'Europe avec l'ESBVA avec le MVP, le PO Scoring Title (plus jeune de l'histoire), en combinant 160+ points à 55% (record), avec 228 Pts + Ast (record pour une européenne) ou encore avec le record de points pour une française en finale aller."
  },
    {
    year: "2022-2025",
    text: "Carla quitte la LFB en étant la meilleure moyenne de points + passes à 20 ans, l'européenne la plus rapide à atteindre 975 points, la meilleure moyenne de points sur 3 saisons en LFB ou encore le meilleur total points + passes sur 3 saisons en LFB  "
  },
 
   {
    year: "2025",
    text: "Carla devient la première personne française à être meilleure marqueuse d'une franchise NBA/WNBA."
  },
];
function normalizeDate(year: string): string {
  if (year.includes("16 oct")) return "2024-10-16";
  if (year.includes("6 fév")) return "2025-02-06";
  if (year === "2024") return "2024-03-15";
  if (year === "2023") return "2023-07-15";
  if (year === "2019–2022") return "2022-06-30";
  if (year === "2022-2024") return "2024-05-01";
  if (year === "2024-2025") return "2025-04-15";
  return "2024-01-01";
}


export default function News() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);

  /* ===== Desktop scroll ===== */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /* ===== Mobile background scroll ===== */
  useEffect(() => {
    if (mobileTextRef.current) {
      mobileTextRef.current.style.animation = "scrollCarla 40s linear infinite";
    }
  }, []);
const timelineArticlesSchema = timeline.map((item) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": item.text.slice(0, 110),
  "description": item.text,
  "datePublished": normalizeDate(item.year),
  "author": {
    "@type": "Person",
    "name": "Carla Leite"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Carla Leite – Site non officiel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://carlaleitefan.com/logo.png"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://carlaleitefan.com/carla-leite-discover.jpg",
    "width": 1200,
    "height": 675
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://carlaleitefan.com/#timeline"
  }
}));

  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(timelineArticlesSchema)
    }}
  />
    <section id="news" className="relative w-full overflow-hidden">

      {/* ======================================================
          ===================== MOBILE ========================
          ====================================================== */}
      <div className="md:hidden relative min-h-screen bg-white text-black">
        {/* Scrolling background text */}
        <div
          ref={mobileTextRef}
          className="absolute top-0 left-0 whitespace-nowrap text-[12rem] opacity-10 font-bold uppercase"
        >
          <span>CARLA ABOUT&nbsp;CARLA ABOUT&nbsp;CARLA ABOUT&nbsp;</span>
          <span className="ml-[100vw]">CARLA ABOUT&nbsp;CARLA ABOUT</span>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-24 space-y-8 text-gray-800 text-lg leading-7">
      {timeline.map((item, i) => {
  const connector = mobileConnectors[i] ?? "Puis, ";
  const hasConnector = connector !== "";

  let text = item.text;

  if (hasConnector) {
    if (text.startsWith("Carla")) {
      text = text;
    } else {
      text = text.charAt(0).toLowerCase() + text.slice(1);
    }
  }

  return (
    <motion.div
      key={i}
      id={`news-${i}`}
      className="relative"
    >
      <p className="text-gray-800 text-lg leading-7">
        {connector}{text}
      </p>
    </motion.div>
  );
})}




        </div>
      </div>

      {/* ======================================================
          =============== DESKTOP / TABLETTE ==================
          ====================================================== */}
      <div
        ref={containerRef}
        className="hidden md:block relative min-h-[200vh] bg-gradient-to-b from-black via-gray-900 to-black text-white"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-red-400 tracking-widest uppercase text-sm">
              Parcours
            </span>
            <h2 className="text-6xl font-bold mt-4">
              L&apos;Ascension
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              De Lyon à de Multiples Records
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-800" />

            <div className="space-y-32">
            {timeline.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.8 }}
    className={`relative flex ${
      i % 2 === 0 ? "flex-row" : "flex-row-reverse"
    }`}
  >
    {/* Dot */}
    <div className="absolute left-1/2 -translate-x-1/2">
      <div className="w-5 h-5 bg-red-600 rounded-full" />
    </div>

    {/* Card */}
    <div className={`w-1/2 ${i % 2 === 0 ? "pr-16 text-right" : "pl-16"}`}>
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-800">
        <span className="text-red-400 font-bold tracking-widest">
          {item.year}
        </span>
        <p className="mt-4 text-gray-300 leading-relaxed">
          {item.text}
        </p>
      </div>
    </div>
  </motion.div>
))}

            </div>
          </div>
        </div>

        {/* Decorative rings */}
        <div className="fixed top-1/3 left-10 w-32 h-32 border border-red-500/10 rounded-full animate-spin-slow" />
        <div className="fixed bottom-1/4 right-10 w-24 h-24 border border-red-500/5 rounded-full" />
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes scrollCarla {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section></>
  );
}
