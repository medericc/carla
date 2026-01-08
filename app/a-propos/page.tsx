"use client";
import { motion } from 'framer-motion';
import { 
  FaBasketballBall, 
  FaHeart, 
  FaUsers, 
  FaTrophy,
  FaRocket,
  FaStar,
  FaChartLine,
  FaGlobe
} from 'react-icons/fa';

const AboutPage = () => {
  const aboutSections = [
    {
      title: "Notre Passion",
      icon: FaHeart,
      content: "Site 100% fan dédié à Carla Leite, créé par un passionné de basketball français. Objectif : célébrer le parcours exceptionnel de Carla, joueuse de basket féminin français.",
      color: "from-red-500 to-rose-400"
    },
    {
      title: "Notre Mission",
      icon: FaBasketballBall,
      content: "Partager des statistiques, actualités et highlights de Carla Leite de manière centralisée et accessible. Créer une communauté de fans autour d'une joueuse qui marque l'histoire du basket français.",
      color: "from-orange-500 to-amber-400"
    },
    {
      title: "Notre Équipe",
      icon: FaUsers,
      content: "Je ne suis pas affiliés officiellement à Carla Leite, à ses clubs ou à la WNBA - juste dévoué.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Notre Vision",
      icon: FaRocket,
      content: "Devenir la référence francophone sur Carla Leite. Documenter chaque étape de sa carrière exceptionnelle, des débuts à Lyon à la WNBA et au-delà.",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const stats = [
    { icon: FaTrophy, label: "Records documentés", value: "40+" },
    { icon: FaStar, label: "Matchs analysés", value: "50+" },
    { icon: FaChartLine, label: "Statistiques", value: "1000+" },
    { icon: FaGlobe, label: "Fans dans le monde", value: "10K+" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 whitespace-nowrap text-[12rem] md:text-[18rem] opacity-[0.02] uppercase font-black tracking-widest"
        >
          CARLA LEITE • FAN • PASSION • CARLA LEITE •
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 md:gap-4 mb-6">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="text-red-400 text-sm md:text-base font-semibold tracking-widest uppercase">
              À Propos de Nous
            </span>
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Passion & Basketball
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Site fan dédié à Carla Leite • Janvier 2026
          </p>
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border-l-4 border-red-500 rounded-r-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                <FaBasketballBall className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-100">
                  💎 Site 100% Fan - 0% Officiel
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  je ne suis pas un représentant officiel. 
                  Ce site est né d&apos;une admiration pour le talent exceptionnel de Carla Leite 
                  et du désir de partager cette passion avec le plus grand nombre.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all duration-500"
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {aboutSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl border border-gray-800 group-hover:border-gray-700 transition-all duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-5 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-all duration-500`} />
                  
                  <div className="relative p-6 md:p-8 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-100 pt-2">
                        {section.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-100">
            Nos Valeurs
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "📊 Exactitude",
                  description: "Statistiques vérifiées et actualisées régulièrement"
                },
                {
                  title: "❤️ Passion",
                  description: "Amour authentique de Carla"
                },
                {
                  title: "🔓 Transparence",
                  description: "Clarté sur notre statut de site fan non officiel"
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-700"
                >
                  <div className="text-2xl mb-3">{value.title.split(' ')[0]}</div>
                  <h4 className="text-lg font-bold text-gray-100 mb-2">
                    {value.title.split(' ').slice(1).join(' ')}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
              Rejoignez-nous
            </span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Passionné de basket ? Fan de Carla Leite ? Explorez le site et découvrez son parcours exceptionnel !
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#biography"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              Découvrir la biographie
            </a>
            <a
              href="/#records"
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
            >
              Voir les records
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;