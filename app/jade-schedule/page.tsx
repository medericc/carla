'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/carde";
import { Clock, CalendarPlus, ExternalLink } from "lucide-react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { createEvents } from "ics";
import { matches as rawMatches } from "../utils/data";
import { DateTime } from "luxon";

type Match = {
  id: string;
  date: Date;
  opponent: string;
  opponentLogo: string;
  hasValidTime?: boolean;
  link: string;
};

const translations = {
  fr: {
    addCalendarTitle: "Hourni tout las partides à lou bòstẹ calandriè ?",
    appleOutlook: "📅 Apple / Outlook (.ics)",
    googleCalendar: "📆 Google Calendar",
    cancel: "Tourna",
    googleInstructions: [
      "✅ Le fichier a été téléchargé !",
      "Voici comment l'importer dans Google Calendar :",
      "1. Ouvrez Google Calendar",
      "2. Cliquez sur la roue crantée en haut à droite → Paramètres",
      "3. Allez dans Importer et exporter",
      "4. Sélectionnez le fichier téléchargé : jade_2526.ics",
      "5. Importez-le dans le calendrier de votre choix",
      "🎉 Tous les matchs de Jade sont maintenant dans votre agenda !",
    ],
    iosInstructions: [
      "✅ Le fichier a été téléchargé !",
      "Si pas déjà importer :",
      "1. Ouvrez l'application Fichiers",
      "2. Rendez-vous dans le dossier Téléchargements",
      "3. Appuyez sur le fichier jade_2526.ics",
      "4. Choisissez Ajouter à Calendrier si proposé",
      "📅 Tous les matchs de Jade sont maintenant ajoutés à votre calendrier !",
    ],
    close: "barra",
  }
};

const parsed = rawMatches.map((match, index) => {
  const [month, day, year] = match.dayLabel.split('/');
  const hourString = match.hourLabel;
  let hour = NaN;
  let minute = NaN;

  if (hourString && /[:hH]/.test(hourString)) {
    [hour, minute] = hourString.split(/[:hH]/).map(Number);
  }

  // Création du datetime en Central Time
  const dtCT = DateTime.fromObject(
    {
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hour: isNaN(hour) ? 0 : hour,
      minute: isNaN(minute) ? 0 : minute,
    },
    { zone: "America/Chicago" }
  );

  // Conversion en Europe/Paris (heure française par défaut)
  const dtParis = dtCT.setZone("Europe/Paris");

  return {
    id: `${index}-${match["match.opponent"]}`,
    date: dtParis.toJSDate(),
    opponent: match["match.opponent"],
    opponentLogo: `${match["match.opponentLogo"]}`,
    link: match["match.link"]?.startsWith('http')
      ? match["match.link"]
      : match["match.link"]?.trim()
      ? `https://${match["match.link"]}`
      : null,
    hasValidTime: !isNaN(hour) && !isNaN(minute),
  };
});
const dayMapping: Record<string, string> = {
  LUNDI: "DILHÛS",
  MARDI: "DIMARS",
  MERCREDI: "DIMÈRS",
  JEUDI: "DIYAUS",
  VENDREDI: "DIBÉS",
  SAMEDI: "DISSÀTTẸ",
  DIMANCHE: "DIMÉNDYẸ",
};
export default function PhoenixSchedulePage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGoogleInstructions, setShowGoogleInstructions] = useState(false);
  const [showiOSInstructions, setShowiOSInstructions] = useState(false);
  const [userZone, setUserZone] = useState("Europe/Paris");
  const [userCountryCode, setUserCountryCode] = useState("fr");

 const [showOccitanDay, setShowOccitanDay] = useState(true);

  const [showLocalTimes, setShowLocalTimes] = useState<{ [key: string]: boolean }>(() => {
  const initial: { [key: string]: boolean } = {};
  
  // Par défaut, on affiche les heures en local (pas en France)
  parsed.forEach(match => {
    initial[match.id] = true;
  });
  return initial;
});
const [isNoLinkModalOpen, setIsNoLinkModalOpen] = useState(false);

 useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserZone(tz);

    // petite détection du pays via le fuseau horaire
    let country = "fr";
    if (tz.startsWith("America")) country = "us";
    else if (tz.startsWith("Europe/")) country = "fr";
    else if (tz.startsWith("Asia")) country = "jp";
    setUserCountryCode(country);
  }, []); 
 useEffect(() => {
    const now = new Date();
    const nowMinus5h = new Date(now.getTime() - 5 * 60 * 60 * 1000);

    const filtered = parsed
      .filter(match => match.date > nowMinus5h)
      .map(match => ({
        ...match,
        opponent: match.opponent,
        link: match.link?.startsWith('http') ? match.link : `https://${match.link || 'aa.aa'}`,
      }));

    setMatches(filtered);
    setLoading(false);
  }, []);

  const generateICS = () => {
    const events = matches.map((match) => {
      const dt = DateTime.fromJSDate(match.date).setZone("Europe/Paris");
      return {
        start: [dt.year, dt.month, dt.day, dt.hour, dt.minute] as [number, number, number, number, number],
        duration: { hours: 2 },
        title: `Match vs ${match.opponent}`,
        description: `Match contre ${match.opponent}`,
        location: 'US GAME',
        url: match.link || "https://goconqs.com/sports/2018/8/17/live-video.aspx"
      };
    });

    const { error, value } = createEvents(events as any);
    if (!error && value) {
      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jade_2526.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleAppleOutlookImport = () => {
    generateICS();
    setShowiOSInstructions(true);
  };

  const handleGoogleCalendarImport = () => {
    generateICS();
    setShowGoogleInstructions(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-72px)] -mt-16">
        <div className="relative w-72 h-80 overflow-hidden">
          <img
            src="/loader.jpg"
            alt="Chargement des matchs"
            className="absolute top-0 left-0 w-full h-full object-contain object-center"
            style={{ 
              clipPath: 'inset(0 100% 0 0)', 
              transform: 'scale(1)', 
              opacity: 1, 
              animation: 'reveal-image 2.5s ease-out forwards' 
            }}
          />
        </div>
        <style jsx>{`
          @keyframes reveal-image {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 0 0 0); }
          }
        `}</style>
      </div>
    );
  }

  const t = translations.fr;
  
  return (
    <div className="mx-auto pb-20">
      {/* En-tête stylisé */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-700">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-800 to-purple-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">DC</span>
          </div>
          <div >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-purple-700 bg-clip-text text-transparent">
              SASOÛ 2025-2026
            </h1>
            <p className="text-purple-800 text-sm font-medium">Dodge City Community</p>
          </div>
        </div>
      </div>

      {/* Liste des matchs */}
      <div className="
      
       grid 
    gap-6
    grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
    p-4
    ">
        {matches.map((match) => {
          const isLocal = showLocalTimes[match.id];
        const timeZone = userZone;
  const locale = "fr-FR";
          const use12HourFormat = ['en-US', 'en-GB'].includes(locale);

       const rawDay = new Date(match.date).toLocaleDateString(locale, {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone,
}).toUpperCase();

const [weekday, ...rest] = rawDay.split(" ");

const occitanDay = dayMapping[weekday] || weekday;

const dayLabel = showOccitanDay
  ? `${occitanDay} ${rest.join(" ")}`
  : rawDay;

          const hourLabel = match.hasValidTime
            ? new Date(match.date).toLocaleTimeString(locale, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: use12HourFormat,
                timeZone,
              })
            : "?????";
 const flagCode = isLocal ? userCountryCode : "fr";

          return (
            <div key={match.id} className="group">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:border-purple-300">
             <CardHeader
  onClick={() => setShowOccitanDay(prev => !prev)}
  className="bg-gradient-to-r from-purple-800 to-purple-700 text-white p-4 text-center cursor-pointer"
>
  <p className="text-lg font-bold tracking-wider drop-shadow-sm">
    {dayLabel}
  </p>
</CardHeader>
                
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    {/* Équipe adverse */}
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-md border border-purple-100 flex items-center justify-center p-2">
                        <img
                          src={match.opponentLogo}
                          alt={match.opponent}
                          className="object-contain w-12 h-12"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-purple-900 leading-tight">
                          {match.opponent}
                        </p>
                      </div>
                    </div>

                    {/* Heure */}
                    <div className="flex flex-col items-center ml-4">
                      <div className="flex items-center gap-2 mb-1">
                        <img
src={`https://flagcdn.com/w40/${userCountryCode}.png`}
  alt="Flag"
                          className="w-6 h-4 rounded"
                        />
                      </div>
                      <div
                        className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors border border-purple-200"
                        onClick={() => setShowLocalTimes(prev => ({
                          ...prev,
                          [match.id]: !prev[match.id],
                        }))}
                        title="Cliquez pour changer le fuseau horaire"
                      >
                        <Clock className="w-4 h-4 text-purple-800" />
                        <span className="font-bold text-purple-800 text-sm">
                          {hourLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>

              <CardFooter className="bg-gradient-to-r from-purple-800 to-purple-800 p-0">
  {match.link && !match.link.includes("aa.aa") ? (
  <a
    href={match.link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full text-center py-3 text-white font-bold text-lg hover:bg-purple-800/90 transition-colors flex items-center justify-center gap-2"
  >
    <ExternalLink className="w-5 h-5" />
    ESPIA LA PARTIDE
  </a>
) : (
  <button
    onClick={() => setIsNoLinkModalOpen(true)}
    className="w-full text-center py-3 text-white font-bold text-lg hover:bg-purple-800/90 transition-colors flex items-center justify-center gap-2"
  >
    <ExternalLink className="w-5 h-5" />
    ESPIA LA PARTIDE
  </button>
)}

</CardFooter>

              </Card>
            </div>
          );
        })}
      </div>

      {/* Bouton flottant */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-800 hover:to-purple-800 text-white rounded-full p-4 shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        title="Ajouter au calendrier"
      >
        <CalendarPlus className="w-6 h-6" />
      </button>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="bg-white rounded-2xl p-6 max-w-sm mx-auto shadow-2xl border border-purple-200">
            <DialogTitle className="text-xl font-bold text-purple-900 mb-4 text-center">
              {t.addCalendarTitle}
            </DialogTitle>

            {!showGoogleInstructions && !showiOSInstructions ? (
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAppleOutlookImport}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-800 px-4 py-3 rounded-xl text-sm font-medium transition-colors border border-purple-200"
                >
                  {t.appleOutlook}
                </button>
                <button
                  onClick={handleGoogleCalendarImport}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-800 px-4 py-3 rounded-xl text-sm font-medium transition-colors border border-purple-200"
                >
                  {t.googleCalendar}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm text-purple-800 hover:text-purple-800 mt-2 font-medium"
                >
                  {t.cancel}
                </button>
              </div>
            ) : showGoogleInstructions ? (
              <div className="space-y-3 text-center">
                {t.googleInstructions.map((instruction, index) => (
                  <p key={index} className={index === 0 ? "text-green-800 font-semibold" : "text-purple-800 text-sm"}>
                    {instruction}
                  </p>
                ))}
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setShowGoogleInstructions(false);
                  }}
                  className="mt-4 text-sm text-purple-800 font-semibold hover:text-purple-900"
                >
                  {t.close}
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-center">
                {t.iosInstructions.map((instruction, index) => (
                  <p key={index} className={index === 0 ? "text-green-800 font-semibold" : "text-purple-800 text-sm"}>
                    {instruction}
                  </p>
                ))}
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setShowiOSInstructions(false);
                  }}
                  className="mt-4 text-sm text-purple-800 font-semibold hover:text-purple-900"
                >
                  {t.close}
                </button>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>

      {/* Modal "Pas de lien" */}
<Dialog open={isNoLinkModalOpen} onClose={() => setIsNoLinkModalOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <DialogPanel className="bg-white rounded-3xl p-6 max-w-sm mx-auto shadow-2xl border border-purple-200 text-center">
      <DialogTitle className="text-xl font-bold text-purple-900 mb-4">
        Jade s’échauffe en dehors des projecteurs ✨
      </DialogTitle>
      <p className="text-purple-700 text-sm mb-4">
        Le lien du match n’est pas encore disponible, mais reste connecté, ça arrive bientôt !
      </p>
      <button
        onClick={() => setIsNoLinkModalOpen(false)}
        className="mt-2 bg-purple-800 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-xl transition-colors"
      >
        Fermer
      </button>
    </DialogPanel>
  </div>
</Dialog>

    </div>
  );
}