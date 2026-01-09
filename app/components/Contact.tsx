"use client";
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaTiktok,
  FaPaperPlane,
  FaUserFriends,
  FaHeart,
  FaComments,
  FaRocket
} from 'react-icons/fa';
import { useState } from 'react';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      platform: 'Email',
      icon: FaEnvelope,
      value: 'zodubde00@gmail.com',
      color: 'from-red-500 to-red-600',
      description: 'Pour les questions générales',
      link: 'mailto:zodubde00@gmail.com'
    },
    {
      platform: 'Instagram',
      icon: FaInstagram,
      value: '@carlaleite_fan',
      color: 'from-pink-500 to-purple-600',
      description: 'Actualités et updates',
      link: 'https://www.instagram.com/fan_carlaleite/'
    },
    {
      platform: 'Twitter/X',
      icon: FaTwitter,
      value: '@CarlaLeiteFan',
      color: 'from-blue-400 to-blue-500',
      description: 'Discussions en direct',
      link: 'https://x.com/leite_goat_fan'
    },
    {
      platform: 'YouTube',
      icon: FaYoutube,
      value: 'Carla Leite Fan',
      color: 'from-red-600 to-red-700',
      description: 'Highlights et analyses',
      link: 'https://www.youtube.com/@fan_goat_ines'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', subject: 'general' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      hover:text-white hover:border-red-500/50
      transition-all
      md:px-4 md:py-2.5
      md:text-base
    "
  >
    <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
    <span className="hidden sm:inline">Back</span>
  </Link>
</motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-red-900/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-l from-blue-900/10 to-transparent rounded-full blur-2xl"
        />
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
              Contact & Support
            </span>
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Contactez-nous
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Site fan dédié à Carla Leite • Contactez moi
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border-l-4 border-red-500 rounded-r-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                <FaUserFriends className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-100">
                  Site 100% Fan & Passion
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ce site est géré par un fan et n&apos;est pas affilié officiellement à Carla Leite, 
                  à ses clubs ou à la WNBA. Il est partagé la passion pour le basketball et le parcours 
                  exceptionnel de Carla.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100">
              <span className="flex items-center gap-3">
                <FaPaperPlane className="text-red-400" />
                Nos canaux de contact
              </span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.platform}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group block"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 group-hover:border-gray-700 transition-all duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5 group-hover:opacity-10 rounded-xl transition-all duration-500`} />
                      
                      <div className="relative p-4 md:p-6 flex items-center gap-4 md:gap-6">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg md:text-xl font-bold text-gray-100">
                              {method.platform}
                            </h3>
                            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                              Cliquez pour contacter
                            </span>
                          </div>
                          <p className="text-gray-300 text-base md:text-lg font-medium mb-1">
                            {method.value}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 md:mt-12"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                { label: 'Fans actifs', value: '10K+', icon: FaHeart },
                 { label: 'Moi', value: 'Passionné', icon: FaUserFriends },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-500"
                    >
                      <div className="flex justify-center mb-2">
                        <Icon className="w-5 h-5 text-red-400" />
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100">
              <span className="flex items-center gap-3">
                <FaEnvelope className="text-red-400" />
                Formulaire de contact
              </span>
            </h2>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl border border-gray-800" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-blue-900/5 rounded-xl md:rounded-2xl" />
              
              <div className="relative p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <FaPaperPlane className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Merci pour votre message.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Votre nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                          placeholder="Votre nom ou pseudo"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Votre email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                          placeholder="carla@lameilleure.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Sujet
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all appearance-none"
                        >
                          <option value="general">Question générale</option>
                          <option value="suggestion">Suggestion</option>
                          <option value="correction">Correction</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Votre message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                          placeholder="Votre message..."
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                          isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-500/25'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="w-5 h-5" />
                            Envoyer le message
                          </>
                        )}
                      </motion.button>
                      
                      <p className="text-xs text-gray-500 mt-4 text-center">
                        Merci de votre patience !
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 md:mt-12"
            >
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-100 mb-4">
                  💡 Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Proposer une collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Signaler une erreur ou une mise à jour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Partager du contenu intéressant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Poser une question sur les statistiques</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 md:mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-100">
            Questions Fréquentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Êtes-vous affiliés à Carla Leite ?",
                answer: "Non, je ne suis pas affilié officiellement à Carla Leite, à ses clubs ou à la WNBA."
              },
              {
                question: "Quel est votre délai de réponse ?",
                answer: "Nous répondons généralement sous 48 heures. Les réseaux sociaux peuvent avoir des réponses plus rapides."
              },
              {
                question: "Puis-je proposer du contenu ?",
                answer: "Absolument ! Nous sommes toujours ouverts aux collaborations et aux suggestions de contenu de la part d'autres fans."
              },
              {
                question: "Les données sont-elles mises à jour ?",
                answer: "Oui, nous mettons régulièrement à jour les statistiques et les informations en fonction des matchs et des annonces officielles."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-gray-100 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
              Rejoignez la communauté
            </span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Passionné de basketball ? Fan de Carla Leite ? Rejoignez la communauté !
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.platform}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
                >
                  <Icon className="w-5 h-5" />
                  <span>{method.platform}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;