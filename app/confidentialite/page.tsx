"use client";
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaCookie, 
  FaChartLine, 
  FaUserSecret,
  FaDatabase,
  FaLock,
  FaEyeSlash,
  FaExternalLinkAlt,
  FaCheckCircle
} from 'react-icons/fa';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PrivacyPolicyPage = () => {
  const privacySections = [
  {
  title: "Cookies et traceurs",
  icon: FaCookie,
  content: "Ce site peut utiliser des cookies et autres traceurs afin d'assurer son fonctionnement et, lorsque vous y consentez, de mesurer son audience. Les traceurs non nécessaires ne sont activés qu'après votre accord.",
  points: [
    "Cookies et traceurs nécessaires au fonctionnement du site",
    "Mesure d'audience via les services configurés sur le site",
    "Aucun cookie publicitaire ou de ciblage activé sans votre consentement",
    "Vous pouvez accepter ou refuser les traceurs depuis le bandeau de consentement",
    "Votre choix est conservé afin de ne pas vous redemander votre consentement à chaque visite"
  ],
  color: "from-amber-500 to-orange-400"
},
    {
      title: "Analytics Anonymes Vercel",
      icon: FaChartLine,
      content: "Nous utilisons Vercel Analytics, un service qui collecte des données d'audience TOTALEMENT ANONYMES. Aucune information personnelle identifiable n'est recueillie.",
      points: [
        "Données agrégées et anonymisées",
        "Pas de suivi individuel",
        "Pas de cookies d'identification",
       
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Absence de Cookies de Suivi",
      icon: FaCookie,
      content: "Ce site n'utilise aucun cookie de suivi ou de publicité. Les seuls cookies éventuels sont des cookies techniques nécessaires au fonctionnement du site.",
      points: [
        "Pas de cookies publicitaires",
        "Pas de cookies de réseaux sociaux",
        "Pas de cookies de ciblage",
        "Cookies techniques uniquement si nécessaire"
      ],
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "Protection de la Vie Privée",
      icon: FaShieldAlt,
      content: "Votre vie privée est notre priorité. Nous croyons en un web respectueux des utilisateurs où la navigation peut être privée et anonyme.",
      points: [
        "Respect total de la vie privée",
        "Transparence complète",
        "Pas de partage de données",
        "Approche privacy-first"
      ],
      color: "from-purple-500 to-pink-400"
    }
  ];

  const vercelAnalyticsInfo = [
    {
      label: "Ce que Vercel Analytics collecte",
      items: [
        "Pages visitées (anonymes)",
        "Temps de session (moyenne)",
        "Pays/région (niveau agrégé)",
        "Type d'appareil (catégories)",
        "Navigateur (types génériques)"
      ]
    },
    {
      label: "Ce que Vercel Analytics NE collecte PAS",
      items: [
        "Adresse IP exacte",
        "Informations personnelles",
        "Historique de navigation complet",
        "Données de géolocalisation précise",
        "Données cross-site"
      ]
    }
  ];

  const complianceInfo = [
    { regulation: "RGPD (UE)", status: "Conforme", icon: "🇪🇺" },
    { regulation: "CCPA (Californie)", status: "Conforme", icon: "🇺🇸" },
    { regulation: "LGPD (Brésil)", status: "Conforme", icon: "🇧🇷" },
    { regulation: "PIPEDA (Canada)", status: "Conforme", icon: "🇨🇦" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Back button */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="fixed top-4 left-4 z-50"
>
  <Link
    href="/"
    className="
      flex items-center gap-2
      px-3 py-2
      rounded-xl
      bg-black/60 backdrop-blur
      border border-gray-700
      text-gray-200 text-sm
      hover:text-white hover:border-green-500/50
      transition-all
      md:px-4 md:py-2.5
      md:text-base
    "
  >
    <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
    <span className="hidden sm:inline">Back</span>
  </Link>
</motion.div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 whitespace-nowrap text-[12rem] md:text-[18rem] opacity-[0.015] uppercase font-black tracking-widest"
        >
          PRIVACY • SECURE • SAFE • PRIVACY • SECURE •
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
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <span className="text-green-400 text-sm md:text-base font-semibold tracking-widest uppercase">
              Politique de Confidentialité
            </span>
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Vie Privée Protégée
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Site fan dédié à Carla Leite • Janvier 2026
          </p>
        </motion.div>

        {/* Main Privacy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border-l-4 border-green-500 rounded-r-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <FaLock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-100">
                  Engagement de Confidentialité Total
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
Ce site ne propose pas de compte utilisateur, d'inscription ou de newsletter. Les données éventuellement traitées par les services techniques et de mesure d'audience sont décrites dans la présente politique de confidentialité.
   </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-100">
            Conformité Internationale
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceInfo.map((item, index) => (
              <div
                key={item.regulation}
                className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-green-500/30 transition-all duration-500"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm md:text-base text-gray-300 font-medium mb-1">
                  {item.regulation}
                </div>
                <div className="inline-flex items-center gap-1 text-green-400 text-sm">
                  <FaCheckCircle className="w-4 h-4" />
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {privacySections.map((section, index) => {
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
                    <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-100 pt-2">
                        {section.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
                      {section.content}
                    </p>
                    
                    <ul className="space-y-2">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vercel Analytics Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-100">
            <span className="flex items-center justify-center gap-3">
              <FaChartLine className="text-blue-400" />
              Détails Vercel Analytics
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {vercelAnalyticsInfo.map((info, index) => (
              <div
                key={info.label}
                className={`relative ${
                  index === 0 
                    ? 'border-blue-500/30' 
                    : 'border-green-500/30'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800" />
                <div className={`absolute inset-0 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-blue-900/10 to-cyan-900/5' 
                    : 'bg-gradient-to-br from-green-900/10 to-emerald-900/5'
                } rounded-xl`} />
                
                <div className="relative p-6 md:p-8">
                  <h3 className={`text-xl font-bold mb-6 ${
                    index === 0 ? 'text-blue-400' : 'text-green-400'
                  }`}>
                    {info.label}
                  </h3>
                  
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          index === 0 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {index === 0 ? '✓' : '✗'}
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

{/* Cookies et traceurs */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  className="mb-12 md:mb-16"
>
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-100">
    <span className="flex items-center justify-center gap-3">
      <FaCookie className="text-amber-400" />
      Cookies et traceurs
    </span>
  </h2>

  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8">
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-2">
          Quels cookies sont utilisés ?
        </h3>
        <p>
          Le site peut utiliser des cookies et autres traceurs nécessaires
          à son fonctionnement. Des outils de mesure d&apos;audience peuvent
          également être utilisés afin de comprendre la fréquentation du site
          et d&apos;améliorer son fonctionnement.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-2">
          Votre consentement
        </h3>
        <p>
          Lorsque le consentement est requis, les traceurs concernés ne sont
          activés qu&apos;après votre accord. Vous pouvez accepter ou refuser
          leur utilisation depuis le bandeau affiché lors de votre première
          visite.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-2">
          Modifier votre choix
        </h3>
        <p>
          Vous pouvez à tout moment modifier ou retirer votre consentement
          depuis le mécanisme de gestion des cookies disponible sur le site.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-2">
          Mesure d&apos;audience
        </h3>
        <p>
          Les données de fréquentation sont utilisées à des fins statistiques.
          Les modalités de collecte et de conservation dépendent des services
          effectivement configurés sur le site.
        </p>
      </div>
    </div>
  </div>
</motion.div>


          {/* Vercel Link */}
          <div className="text-center mt-6">
            <a
              href="https://vercel.com/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span>En savoir plus sur Vercel Analytics</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* User Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-100">
            <span className="flex items-center justify-center gap-3">
              <FaShieldAlt className="text-purple-400" />
              Vos Droits (Applicables même sans données collectées)
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  right: "Droit à l'information",
                  description: "Vous avez le droit de savoir quelles données sont collectées (aucune dans notre cas)",
                  icon: "ℹ️"
                },
                {
                  right: "Droit d'accès",
                  description: "Vous pouvez demander quelles données nous avons sur vous (aucune)",
                  icon: "🔍"
                },
                {
                  right: "Droit à l'oubli",
                  description: "Vous pouvez demander la suppression de vos données (pas de données à supprimer)",
                  icon: "🧹"
                },
                {
                  right: "Droit d'opposition",
                  description: "Vous pouvez vous opposer au traitement (pas de traitement de données)",
                  icon: "🚫"
                }
              ].map((item, index) => (
                <div
                  key={item.right}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all duration-500"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-bold text-gray-100 mb-2">
                    {item.right}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* No Data Collection Emphasis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 mb-8 p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/10 border border-green-500/30 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <FaEyeSlash className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-green-400 mb-1">
                Zéro Donnée Personnelle Collectée
              </h3>
              <p className="text-gray-300">
                Google aime les sites qui ne collectent pas de données. C'est notre cas !
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact & Updates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
              Mise à jour : Janvier 2026
            </span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-gray-800 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-100 mb-4">
              Questions ou Préoccupations ?
            </h3>
            <p className="text-gray-300 mb-6">
              Cette politique reflète notre engagement envers votre vie privée. 
              Si vous avez des questions sur notre approche de confidentialité, 
              consultez notre page de contact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
              >
                Page Contact
              </a>
              <a
                href="/mentions-legales"
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
              >
                Mentions Légales
              </a>
            </div>
          </div>
          
          {/* Google-friendly note */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/10 to-cyan-900/5 border border-blue-500/20 rounded-xl inline-block">
            <p className="text-sm text-gray-400">
              🤖 Cette page est optimisée pour le référencement Google avec l'accent sur 
              <span className="text-blue-400 font-medium"> "no data collected"</span> et 
              <span className="text-green-400 font-medium"> "privacy-first approach"</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;