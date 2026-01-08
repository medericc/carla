"use client";

import { useEffect, useState } from "react";

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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/90 text-white p-4 rounded-xl shadow-lg z-50 max-w-sm text-center">
      {isIos ? (
        <>
          <p className="text-sm">
            Pour installer l’app :
            <br />
            appuie sur <b>Partager</b> puis <b>Ajouter à l’écran d’accueil</b>
          </p>
        </>
      ) : (
        <>
          <p className="text-sm mb-2">Installer l’application Carla Leite Fan ?</p>
          <button
            className="bg-red-600 px-4 py-2 rounded-lg text-white"
            onClick={async () => {
              deferredPrompt.prompt();
              await deferredPrompt.userChoice;
              setVisible(false);
            }}
          >
            Installer
          </button>
        </>
      )}
    </div>
  );
}
