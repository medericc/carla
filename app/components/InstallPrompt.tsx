"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2, Plus } from "lucide-react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIos, setIsIos] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isIOS =
      /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
      !("standalone" in window.navigator);

    setIsIos(isIOS);

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  if (!visible && !isIos) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    className="fixed bottom-6 left-0 right-0 flex justify-center z-40 px-4"
      >
         <div className="relative w-full max-w-sm bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-2xl shadow-2xl p-5">
           {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg flex items-center justify-center">
                  {isIos ? (
                    <Plus className="text-white" size={24} />
                  ) : (
                    <Download className="text-white" size={24} />
                  )}
                </div>
              </div>

              {/* Text and CTA */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                  {isIos ? "Ajouter à l'accueil" : "Installer l'application"}
                </h3>
                
                {isIos ? (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Appuie sur <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300">
                      <Share2 size={12} />
                      Partager
                    </span> puis <span className="inline-flex items-center gap-1">
                      <Plus size={12} />
                      Sur l'écran d'accueil
                    </span>
                  </p>
                ) : (
                  <div className="flex items-center justify-between gap-3 mt-2">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Carla Leite Fan
                    </p>
                    <button
                      onClick={async () => {
                        deferredPrompt.prompt();
                        await deferredPrompt.userChoice;
                        setVisible(false);
                      }}
                      className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-medium rounded-lg shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      Installer
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Progress bar decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-500/40 to-red-500/20 rounded-b-2xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}