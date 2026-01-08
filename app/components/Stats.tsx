"use client";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaTrophy, 
  FaChartLine, 
  FaStar, 
  FaFire,
  FaCrown,
  FaMedal,
  FaAward,
  FaBasketballBall,
  FaRocket,
  FaHistory,
  FaGlobeEurope,
  FaBullseye,
  FaLightbulb,
  FaRunning,
  FaUsers,
  FaCalendarAlt,
  FaTicketAlt,
  FaUserNinja,
  FaFlag,
  FaChartBar
} from 'react-icons/fa';

const statsData = [
  { 
    label: 'Premier Français Meilleur Marqueur d\'une franchise', 
    value: '06/05',
    icon: FaTrophy,
    color: 'from-yellow-500 to-amber-400',
    category: 'WNBA'
  },
  { 
    label: 'Meilleure Evaluation de l\'histoire des PO LFB', 
    value: '21',
    icon: FaChartLine,
    color: 'from-emerald-500 to-green-400',
    category: 'Playoffs'
  },
  { 
    label: 'Meilleure Evaluation sur une campagne de PO LFB', 
    value: '21',
    icon: FaChartBar,
    color: 'from-teal-500 to-cyan-400',
    category: 'Playoffs'
  },
  { 
    label: 'Meilleur marqueur jeune français en compétition internationale', 
    value: '18.4',
    icon: FaGlobeEurope,
    color: 'from-blue-500 to-indigo-400',
    category: 'International'
  },
  { 
    label: 'Seul Français Meilleur Marqueur d\'une franchise', 
    value: '06/05',
    icon: FaUserNinja,
    color: 'from-purple-500 to-pink-400',
    category: 'Exclusivité'
  },
  { 
    label: "Meilleure moyenne de points à 20 ans en LFB", 
    value: "15",
    icon: FaStar,
    color: 'from-amber-500 to-orange-400',
    category: 'Jeunesse'
  },
  { 
    label: "Plus jeune à atteindre 975 points en LFB", 
    value: "20",
    icon: FaRocket,
    color: 'from-red-500 to-rose-400',
    category: 'Jeunesse'
  },
  { 
    label: "Seule européenne meilleure scoreuse avec 40% à 3pts", 
    value: "16.4",
    icon: FaBullseye,
    color: 'from-violet-500 to-purple-400',
    category: 'Précision'
  },
  { 
    label: "Plus grand nombre de trophées de joueuse la plus décisive", 
    value: "2",
    icon: FaAward,
    color: 'from-rose-500 to-pink-400',
    category: 'Distinctions'
  },
  { 
    label: "Plus grand nombre de points par une européenne avec 40%+ à 3pts", 
    value: "16.4",
    icon: FaFire,
    color: 'from-orange-500 to-yellow-400',
    category: 'Précision'
  },
  { 
    label: "Meilleure moyenne de points + passes à 20 ans en LFB", 
    value: "20.3",
    icon: FaLightbulb,
    color: 'from-lime-500 to-green-400',
    category: 'Polyvalence'
  },
  { 
    label: "Européenne la plus rapide à 975 points en LFB", 
    value: "20",
    icon: FaRunning,
    color: 'from-cyan-500 to-blue-400',
    category: 'Rapidité'
  },
  { 
    label: "Meilleure moyenne de points sur 3 saisons en LFB", 
    value: "15",
    icon: FaChartLine,
    color: 'from-emerald-600 to-teal-500',
    category: 'Consistance'
  },
  { 
    label: "Meilleur total points + passes sur 3 saisons en LFB", 
    value: "20.3",
    icon: FaBasketballBall,
    color: 'from-fuchsia-500 to-purple-400',
    category: 'Consistance'
  },
  { 
    label: 'Meilleure PPG de l\'histoire des PO LFB', 
    value: '20',
    icon: FaCrown,
    color: 'from-amber-600 to-yellow-500',
    category: 'Playoffs'
  },
  { 
    label: 'Meilleure Marqueuse sur une campagne de PO LFB', 
    value: '20',
    icon: FaMedal,
    color: 'from-red-600 to-orange-500',
    category: 'Playoffs'
  },
  { 
    label: 'Plus Jeune Meilleure Marqueuse de l\'histoire de la LFB', 
    value: '20',
    icon: FaHistory,
    color: 'from-blue-600 to-cyan-500',
    category: 'Jeunesse'
  },
  { 
    label: 'Première à éliminer l\'équipe MVP invaincue en quart', 
    value: '26 pts',
    icon: FaFire,
    color: 'from-rose-600 to-pink-500',
    category: 'Exploits'
  },
  { 
    label: 'Joueuse la plus décisive sur une campagne de PO LFB', 
    value: '25.6',
    icon: FaAward,
    color: 'from-violet-600 to-purple-500',
    category: 'Playoffs'
  },
  { 
    label: 'PPM Record de l\'Eurobasket U20', 
    value: '0.8',
    icon: FaStar,
    color: 'from-green-600 to-emerald-500',
    category: 'International'
  },
  { 
    label: 'Meilleure marqueuse française championne', 
    value: '18.4',
    icon: FaFlag,
    color: 'from-yellow-600 to-amber-500',
    category: 'International'
  },
  { 
    label: 'Seule européenne à finir une saison en 15-5 en LFB', 
    value: '15-5',
    icon: FaUserNinja,
    color: 'from-indigo-600 to-blue-500',
    category: 'Exclusivité'
  },
  { 
    label: 'Seule joueuse des Playoffs LFB à finir à +20 ppg', 
    value: '21',
    icon: FaHistory,
    color: 'from-teal-600 to-cyan-500',
    category: 'Exclusivité'
  },
  { 
    label: 'Joueuse française la plus rapide à 1000 points', 
    value: '64',
    icon: FaRocket,
    color: 'from-orange-600 to-red-500',
    category: 'Rapidité'
  },
  { 
    label: 'Meilleure marqueuse française en finale aller', 
    value: '25',
    icon: FaCrown,
    color: 'from-purple-600 to-pink-500',
    category: 'Finales'
  },
  { 
    label: 'Plus jeune joueuse à scorer 176 pts en PO', 
    value: '20',
    icon: FaStar,
    color: 'from-rose-600 to-amber-500',
    category: 'Jeunesse'
  },
  { 
    label: 'Plus jeune meilleure marqueuse des Eurocup PO', 
    value: '20',
    icon: FaGlobeEurope,
    color: 'from-blue-600 to-indigo-500',
    category: 'International'
  },
  { 
    label: 'Plus jeune joueuse la plus décisive des Eurocup PO', 
    value: '20',
    icon: FaAward,
    color: 'from-green-600 to-teal-500',
    category: 'International'
  },
  { 
    label: 'Plus jeune joueuse la plus décisive de la LFB', 
    value: '21.3',
    icon: FaChartLine,
    color: 'from-cyan-600 to-blue-500',
    category: 'Jeunesse'
  },
  { 
    label: 'Première européenne à 228 Pts + Ast en PO', 
    value: '228',
    icon: FaUserNinja,
    color: 'from-violet-600 to-purple-500',
    category: 'Exclusivité'
  },
  { 
    label: 'Première joueuse à +160 pts à 55 % en Coupe d\'Europe', 
    value: '176',
    icon: FaBullseye,
    color: 'from-amber-600 to-yellow-500',
    category: 'Précision'
  },
  { 
    label: 'Seule joueuse des PO LFB à 26 points à 90%', 
    value: '26 pts',
    icon: FaLightbulb,
    color: 'from-emerald-600 to-green-500',
    category: 'Précision'
  },
  { 
    label: 'Plus large victoire de l\'histoire de la Team France', 
    value: '101',
    icon: FaUsers,
    color: 'from-red-600 to-rose-500',
    category: 'Équipe'
  },
 
  { 
    label: 'Draft WNBA la plus suivie de l\'histoire', 
    value: '2024',
    icon: FaTrophy,
    color: 'from-purple-600 to-pink-500',
    category: 'WNBA'
  },
  { 
    label: 'Plus grosse vente d\'abonnements de la WNBA', 
    value: '2025',
    icon: FaTicketAlt,
    color: 'from-green-600 to-emerald-500',
    category: 'WNBA'
  },
  { 
    label: 'Plus grosse affluence pour un premier match WNBA', 
    value: '18,064',
    icon: FaUsers,
    color: 'from-orange-600 to-yellow-500',
    category: 'Affluence'
  },
  { 
    label: 'Joueuse la plus rapide en First Team LFB', 
    value: '2ème',
    icon: FaRocket,
    color: 'from-cyan-600 to-blue-500',
    category: 'Rapidité'
  }
];

const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter stats by category
  const filteredStats = selectedCategory === 'all' 
    ? statsData 
    : statsData.filter(stat => stat.category === selectedCategory);

  // Get unique categories for filter
  const categories = ['all', ...Array.from(new Set(statsData.map(stat => stat.category)))];

  // Auto-play carousel
  useEffect(() => {
    if (viewMode !== 'carousel') return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredStats.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [viewMode, filteredStats.length]);

  // Handle scroll for carousel
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setCurrentIndex(newIndex);
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * index;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Navigation functions
  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % filteredStats.length;
    handleDotClick(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + filteredStats.length) % filteredStats.length;
    handleDotClick(prevIndex);
  };

  return (
    <section id="records" className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background text - Optimisé pour mobile et 4K */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 whitespace-nowrap text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem] opacity-[0.02] uppercase font-black tracking-widest animate-scrollText">
          RECORDS • RECORDS • RECORDS • RECORDS •
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          {/* Title */}
          <div className="inline-flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="text-red-400 text-sm md:text-base font-semibold tracking-widest uppercase">
              Palmarès Individuel
            </span>
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Records & Distinctions
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Découvrez les exploits qui ont marqué la carrière de la meneuse
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-6 md:mb-8 lg:mb-12">
          <div className="inline-flex rounded-lg border border-gray-800 bg-gray-900/50 p-1">
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 text-sm md:text-base rounded-md transition-all ${
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-red-600 to-red-800 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Diaporama
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 text-sm md:text-base rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-red-600 to-red-800 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Grille
            </button>
          </div>
        </div>

        {/* Category Filters - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex justify-center flex-wrap gap-2 md:gap-3 mb-8 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full border transition-all ${
                selectedCategory === category
                  ? 'border-red-500 bg-red-500/10 text-red-400'
                  : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        {/* CAROUSEL VIEW */}
        {viewMode === 'carousel' && (
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm">
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-full flex items-center justify-center hover:border-red-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Précédent"
              >
                <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-full flex items-center justify-center hover:border-red-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Suivant"
              >
                <FaChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-white" />
              </button>

              {/* Stats Cards */}
              <div
                ref={containerRef}
                className="h-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
                onScroll={handleScroll}
              >
                {filteredStats.map((stat, index) => {
                  const Icon = stat.icon;
                  
                  return (
                    <div
                      key={index}
                      className="min-w-full h-full flex-shrink-0 snap-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex items-center justify-center p-4 md:p-6 lg:p-8"
                      >
                        <div className="relative w-full max-w-4xl h-full">
                          {/* Card Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl border border-gray-800" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-2xl md:rounded-3xl`} />
                          
                          {/* Card Content */}
                          <div className="relative h-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 p-6 md:p-8 lg:p-12">
                            {/* Icon Section */}
                            <div className="relative order-2 lg:order-1">
                              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl blur-xl opacity-30`} />
                              <div className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center`}>
                                <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white" />
                              </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
                              {/* Category Badge */}
                              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-xs md:text-sm text-gray-400 font-semibold tracking-wider uppercase">
                                  {stat.category}
                                </span>
                              </div>

                              {/* Record Label */}
                              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 text-gray-100 leading-tight">
                                {stat.label}
                              </h3>

                              {/* Record Value */}
                              <div className="mb-4 md:mb-6">
                                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-2">
                                  <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.value}
                                  </span>
                                </div>
                              </div>

                              {/* Achievement Badge */}
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-700 rounded-xl">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-300">
                                  Record Historique
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Navigation - Optimisé pour mobile */}
            <div className="flex justify-center mt-6 md:mt-8">
              <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center max-w-full px-4">
                {filteredStats.slice(0, 10).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className="relative group"
                    aria-label={`Aller au record ${index + 1}`}
                  >
                    <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-gradient-to-r from-red-600 to-red-800 scale-125' 
                        : 'bg-gray-700 group-hover:bg-gray-600'
                    }`} />
                  </button>
                ))}
                {filteredStats.length > 10 && (
                  <div className="text-xs text-gray-500 ml-2 flex items-center">
                    +{filteredStats.length - 10}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="relative">
            {/* Stats Counter */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-xl">
                <span className="text-sm md:text-base text-gray-300">
                  <span className="text-red-400 font-bold">{filteredStats.length}</span> records affichés
                </span>
              </div>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {filteredStats.map((stat, index) => {
                const Icon = stat.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-full">
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl border border-gray-800 group-hover:border-red-500/50 transition-all duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-all duration-500`} />
                      
                      {/* Card Content */}
                      <div className="relative p-4 md:p-5 lg:p-6 h-full flex flex-col">
                        {/* Icon and Category */}
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className={`p-2 md:p-3 bg-gradient-to-br ${stat.color} rounded-lg md:rounded-xl`}>
                            <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                          </div>
                          <span className="text-xs md:text-sm text-gray-400 font-semibold tracking-wider uppercase">
                            {stat.category}
                          </span>
                        </div>

                        {/* Record Value */}
                        <div className="mb-3 md:mb-4">
                          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
                            <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </span>
                          </div>
                        </div>

                        {/* Record Label */}
                        <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-200 mb-3 md:mb-4 flex-grow line-clamp-3">
                          {stat.label}
                        </h3>

                        {/* Decorative Line */}
                        <div className="mt-auto pt-3 md:pt-4">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-red-500 transition-all duration-500" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quick Stats Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: 'Records Totaux', value: statsData.length.toString() },
            { label: 'Catégories', value: categories.length.toString() },
            { label: 'Records WNBA', value: statsData.filter(s => s.category === 'WNBA').length.toString() },
            { label: 'Records Internationaux', value: statsData.filter(s => s.category === 'International').length.toString() },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl hover:border-red-500/30 transition-all duration-500"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 tracking-wider uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Mobile Category Selector - Only shown on mobile */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg text-white text-sm appearance-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'Tous les records' : category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

// Add styles for animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes scrollText {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scrollText {
      animation: scrollText 60s linear infinite;
    }
    
    /* Hide scrollbar but keep functionality */
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    
    /* Line clamp utility */
    .line-clamp-3 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    
    /* Responsive text sizes for 4K */
    @media (min-width: 1536px) {
      .text-\[10rem\] { font-size: 10rem; }
      .text-\[15rem\] { font-size: 15rem; }
      .text-\[20rem\] { font-size: 20rem; }
      .text-\[25rem\] { font-size: 25rem; }
      .text-\[30rem\] { font-size: 30rem; }
    }
  `;
  document.head.appendChild(style);
}

export default Stats;