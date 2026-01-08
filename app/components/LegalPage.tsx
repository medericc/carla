"use client";

import { motion } from 'framer-motion';
import { FaBalanceScale, FaShieldAlt, FaCookieBite, FaUserShield, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const LegalPage = () => {
  const sections = [
    {
      icon: FaBalanceScale,
      title: "Informations légales",
      content: (
        <>
          <p className="mb-4">
            Ce site web, accessible à l&apos;adresse <span className="text-red-400">www.carlaleitefan.com</span>, 
            est un site non officiel dédié à la joueuse professionnelle de basketball Carla Leite.
          </p>
          <p className="mb-4">
            Ce site est entièrement géré par un fan et n&apos;est affilié ni à Carla Leite, 
            ni à ses clubs (ESBVA-LM, Dallas Wings/Valkyries, Saragosse), ni à la WNBA, ni à la FFBB, 
            ni à aucune organisation officielle.
          </p>
          <p className="mb-4">
            Les images, vidéos et contenus multimédias sont utilisés dans le cadre du droit à 
            l&apos;information et de la liberté d&apos;expression, conformément aux principes du 
            fair use (usage équitable).
          </p>
        </>
      )
    },
    {
      icon: FaShieldAlt,
      title: "Éditeur & Hébergement",
      content: (
        <>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Éditeur du site :</h4>
              <p className="text-gray-400">
                Site administré par un fans de Carla Leite
                <br />
                Contact : <a href="mailto:zodubde00@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">mailto:zodubde00@gmail.com</a>
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Hébergement :</h4>
              <p className="text-gray-400">
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                États-Unis
                <br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
                  https://vercel.com
                </a>
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      icon: FaCookieBite,
      title: "Cookies & Données personnelles",
      content: (
        <>
          <p className="mb-4">
            Ce site utilise des cookies essentiels au fonctionnement technique. 
            Aucun cookie de suivi ou publicitaire n&apos;est utilisé.
          </p>
          <p className="mb-4">
            Nous ne collectons aucune donnée personnelle identifiable. 
            Aucun formulaire d&apos;inscription ou de newsletter n&apos;est présent sur le site.
          </p>
          <p className="mb-4">
            Les statistiques de fréquentation sont anonymisées et ne permettent pas 
            d&apos;identifier les visiteurs individuellement.
          </p>
        </>
      )
    },
    {
      icon: FaUserShield,
      title: "Propriété intellectuelle",
      content: (
        <>
          <p className="mb-4">
            Tous les droits d&apos;auteur et marques déposées mentionnés sur ce site 
            appartiennent à leurs propriétaires respectifs.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-400 space-y-2">
            <li>Le nom &quot;Carla Leite&quot; est utilisé à des fins informatives</li>
            <li>Les logos WNBA, LFB, ESBVA sont la propriété de leurs détenteurs</li>
            <li>Les images sont créditées à leurs sources lorsque cela est possible</li>
            <li>Le contenu éditorial original est protégé par le droit d&apos;auteur</li>
          </ul>
          <p className="text-sm text-gray-500 italic">
            Si vous êtes titulaire de droits et souhaitez faire retirer un contenu, 
            contactez-nous à l&apos;adresse email indiquée ci-dessus.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Informations Légales
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Mentions Légales
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Informations importantes concernant ce site fan dédié à Carla Leite
          </p>
        </motion.div>

        {/* Mise en garde importante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-6 md:p-8 bg-gradient-to-br from-red-900/10 to-transparent border border-red-500/20 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">!</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Site non officiel - Fans uniquement
              </h3>
              <p className="text-gray-300">
                Ce site est géré par un fan indépendant et n&apos;a aucun lien officiel avec 
                Carla Leite, ses clubs, ou les organisations sportives mentionnées.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections des mentions légales */}
        <div className="space-y-8 md:space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-all duration-300"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-xl`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="text-gray-300 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Date de mise à jour */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            Dernière mise à jour : <span className="text-gray-400">Janvier 2026</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ces mentions légales sont susceptibles d&apos;être modifiées
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-center"
          >
            ← Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 text-center"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>

      {/* SEO Metadata invisible */}
      <div className="hidden" aria-hidden="true">
        <h2>Mentions légales site Carla Leite</h2>
        <p>Site fan dédié à la joueuse de basketball Carla Leite - Informations légales 2026</p>
        <p>Éditeur: fans de Carla Leite - Hébergement: Vercel - Données personnelles: non collectées</p>
        <p>Carla Leite fan site - ESBVA - WNBA - LFB - Basketball féminin France</p>
        <p>Mentions légales conformes RGPD - Cookies essentiels uniquement - Fair use</p>
      </div>
    </section>
  );
};

export default LegalPage;