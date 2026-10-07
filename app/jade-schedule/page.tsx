"use client"; import { useEffect, useState } from "react"; import { Card, CardHeader, CardContent, CardFooter, } from "@/components/ui/carde"; import { Clock, CalendarPlus, ExternalLink } from "lucide-react"; import { Dialog, DialogPanel, DialogTitle, } from "@headlessui/react"; import { createEvents } from "ics"; import { DateTime } from "luxon"; 
type Match = { id: string; date: Date; opponent: string; opponentLogo: string; hasValidTime?: boolean; link: string | null; }; 

function shortOpponentName(name: string) {
  const clean = name
    .replace(/\s*\([^)]*\)/g, "")
    .trim();

  const replacements: Record<string, string> = {
    "Independence Community College": "Independence CC",
    "Garden City Community College": "Garden City CC",
    "Pratt Community College": "Pratt CC",
    "Northwestern Oklahoma State University (Scrimmage)": "NW oklahoma SU",
    "Coffeyville Community College": "Coffeyville CC",
    "Cowley College": "Cowley CC",
    "Seward County Community College": "Seward County CC",
    "Cloud County Community College": "Cloud County CC",
    "Butler Community College": "Butler CC",
    "Barton Community College": "Barton CC",
    "Hutchinson Community College": "Hutchinson CC",
    "Colby Community College": "Colby CC",
  };

  if (replacements[clean]) {
    return replacements[clean];
  }

  return clean
    .split(/\s+/)
    .slice(0, 2)
    .join(" ");
}
const translations = { fr: { addCalendarTitle: "Hourni tout las partides à lou bòste calandriè ?", appleOutlook: "📅 Apple / Outlook (.ics)", googleCalendar: "📆 Google Calendar", cancel: "Tourna", googleInstructions: [ "✅ Le fichier a été téléchargé !", "Voici comment l'importer dans Google Calendar :", "1. Ouvrez Google Calendar", "2. Cliquez sur la roue crantée en haut à droite → Paramètres", "3. Allez dans Importer et exporter", "4. Sélectionnez le fichier téléchargé : jade_2526.ics", "5. Importez-le dans le calendrier de votre choix", "🎉 Tous les matchs de Jade sont maintenant dans votre agenda !", ], iosInstructions: [ "✅ Le fichier a été téléchargé !", "Si pas déjà importer :", "1. Ouvrez l'application Fichiers", "2. Rendez-vous dans le dossier Téléchargements", "3. Appuyez sur le fichier jade_2526.ics", "4. Choisissez Ajouter à Calendrier si proposé", "📅 Tous les matchs de Jade sont maintenant ajoutés à votre calendrier !", ], close: "barra", }, }; 

const dayMapping: Record<string, string> = { LUNDI: "DILHÛS", MARDI: "DIMARS", MERCREDI: "DIMÈRS", JEUDI: "DIYAUS", VENDREDI: "DIBÉS", SAMEDI: "DISSÀTTE", DIMANCHE: "DIMÉNDYE", };

export default function PhoenixSchedulePage() { const [matches, setMatches] = useState<Match[]>([]); const [loading, setLoading] = useState(true); const [isModalOpen, setIsModalOpen] = useState(false); const [showGoogleInstructions, setShowGoogleInstructions] = useState(false); const [showiOSInstructions, setShowiOSInstructions] = useState(false); const [userZone, setUserZone] = useState("Europe/Paris"); const [userCountryCode, setUserCountryCode] = useState("fr"); const [showOccitanDay, setShowOccitanDay] = useState(true); const [showLocalTimes, setShowLocalTimes] = useState<{ [key: string]: boolean }>({}); const [isNoLinkModalOpen, setIsNoLinkModalOpen] = useState(false); /* * Détection du fuseau horaire et du pays */ useEffect(() => { const tz = Intl.DateTimeFormat().resolvedOptions().timeZone; setUserZone(tz); let country = "fr"; if (tz.startsWith("America")) { country = "us"; } else if (tz.startsWith("Europe/")) { country = "fr"; } else if (tz.startsWith("Asia")) { country = "jp"; } setUserCountryCode(country); }, []); /* * Récupération des matchs depuis notre API Next.js */ 


useEffect(() => {
  console.log("========================================");
  console.log("🏀 [FRONT] Chargement des matchs...");
  console.log("========================================");

  const loadMatches = async () => {
    try {
      setLoading(true);

      console.log("📡 [FRONT] Fetch /api/matches...");

      const response = await fetch("/api/matches");

      console.log(
        "📡 [FRONT] Status API :",
        response.status
      );

      console.log(
        "📡 [FRONT] response.ok :",
        response.ok
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          "❌ [FRONT] Réponse API incorrecte :",
          errorText
        );

        throw new Error(
          `API error ${response.status}`
        );
      }

      const rawData = await response.json();

      console.log("📦 [FRONT] Données reçues :", rawData);
      console.log(
        "📦 [FRONT] Nombre de données :",
        Array.isArray(rawData)
          ? rawData.length
          : "CE N'EST PAS UN TABLEAU"
      );

      if (!Array.isArray(rawData)) {
        console.error(
          "❌ [FRONT] L'API ne retourne pas un tableau !"
        );
        return;
      }

      // --------------------------------------------
      // Parsing des matchs
      // --------------------------------------------

      const parsedMatches = rawData
        .map((match: any, index: number) => {
          console.log("----------------------------------------");
          console.log(
            `🏀 [FRONT] Parsing match #${index}`
          );

          console.log(
            "➡️ match reçu :",
            match
          );

          const dayLabel =
            match.dayLabel?.trim();

          const hourLabel =
            match.hourLabel?.trim();

          const opponent =
            match["match.opponent"]?.trim();

          console.log("👤 opponent :", opponent);
          console.log("📅 dayLabel :", dayLabel);
          console.log("⏰ hourLabel:", hourLabel);

          if (!dayLabel) {
            console.error(
              "❌ Pas de dayLabel"
            );
            return null;
          }

          if (!opponent) {
            console.error(
              "❌ Pas d'opponent"
            );
            return null;
          }

          // --------------------------------------------
          // Date
          // --------------------------------------------

          const dateParts =
            dayLabel.split("/");

          console.log(
            "📅 dateParts :",
            dateParts
          );

          if (dateParts.length !== 3) {
            console.error(
              "❌ Format de date inattendu :",
              dayLabel
            );
            return null;
          }

          const [month, day, year] =
            dateParts.map(Number);

          console.log({
            month,
            day,
            year,
          });

          if (
            !month ||
            !day ||
            !year
          ) {
            console.error(
              "❌ Date invalide :",
              dayLabel
            );
            return null;
          }

          // --------------------------------------------
          // Heure
          // --------------------------------------------

         let hour = 0;
let minute = 0;

if (
  hourLabel &&
  hourLabel.toUpperCase() !== "TBD"
) {
  const timeMatch = hourLabel.match(
    /(\d{1,2})[:h](\d{2})\s*(am|pm)?/i
  );

  console.log("⏰ timeMatch :", timeMatch);

  if (timeMatch) {
    hour = Number(timeMatch[1]);
    minute = Number(timeMatch[2]);

    const period = timeMatch[3]?.toLowerCase();

    // Conversion 12h → 24h
    if (period === "pm" && hour !== 12) {
      hour += 12;
    }

    if (period === "am" && hour === 12) {
      hour = 0;
    }
  } else {
    console.warn(
      "⚠️ Heure non reconnue :",
      hourLabel
    );
  }
}

          console.log(
            "⏰ Heure parsée :",
            {
              hour,
              minute,
            }
          );

          // --------------------------------------------
          // DateTime
          // --------------------------------------------

          const dateTime =
            DateTime.fromObject(
              {
                year,
                month,
                day,
                hour,
                minute,
              },
              {
                zone: "America/Chicago",
              }
            );

          console.log(
            "🕐 DateTime Chicago :",
            dateTime.toISO()
          );

          console.log(
            "🕐 DateTime valide :",
            dateTime.isValid
          );

          if (!dateTime.isValid) {
            console.error(
              "❌ DateTime invalide :",
              dateTime.invalidReason
            );

            return null;
          }

          const parisDate =
            dateTime.setZone(
              "Europe/Paris"
            );

          console.log(
            "🇫🇷 Date Paris :",
            parisDate.toISO()
          );

          const parsed = {
            id: `${year}-${month}-${day}-${index}`,

            date: parisDate.toJSDate(),

            opponent,

            opponentLogo:
              match[
                "match.opponentLogo"
              ],

            link:
              match[
                "match.link"
              ],

            hasValidTime:
              hourLabel !== "TBD",
          };

          console.log(
            "✅ [FRONT] Match parsé :",
            parsed
          );

          return parsed;
        })
        .filter(Boolean);

      console.log(
        "========================================"
      );

      console.log(
        "🏀 [FRONT] MATCHS PARSÉS :",
        parsedMatches
      );

      console.log(
        "🏀 [FRONT] NOMBRE MATCHS PARSÉS :",
        parsedMatches.length
      );

      // --------------------------------------------
      // Filtre des matchs passés
      // --------------------------------------------

      const nowMinus5Hours =
        DateTime.now()
          .minus({ hours: 5 });

      console.log(
        "🕐 Maintenant - 5h :",
        nowMinus5Hours.toISO()
      );

      const filteredMatches =
        parsedMatches.filter(
          (match: any) => {
            const keep =
              match.date >=
              nowMinus5Hours;

            console.log(
              keep
                ? "🟢 MATCH CONSERVÉ"
                : "🔴 MATCH FILTRÉ",
              match.opponent,
          match.date.toISOString()
            );

            return keep;
          }
        );

      console.log(
        "========================================"
      );

      console.log(
        "🏀 [FRONT] MATCHS APRÈS FILTRE :",
        filteredMatches
      );

      console.log(
        "🏀 [FRONT] TOTAL APRÈS FILTRE :",
        filteredMatches.length
      );

      setMatches(
        filteredMatches as Match[]
      );

      // --------------------------------------------
      // État affichage heure locale
      // --------------------------------------------

      const localTimeState: {
        [key: string]: boolean;
      } = {};

      filteredMatches.forEach(
        (match: any) => {
          localTimeState[
            match.id
          ] = false;
        }
      );

      setShowLocalTimes(
        localTimeState
      );

      console.log(
        "✅ [FRONT] setMatches effectué"
      );
    } catch (error) {
      console.error(
        "========================================"
      );

      console.error(
        "❌ [FRONT] ERREUR CHARGEMENT MATCHS"
      );

      console.error(error);

      console.error(
        "========================================"
      );
    } finally {
      console.log(
        "🏁 [FRONT] Fin chargement"
      );

      setLoading(false);
    }
  };

  loadMatches();
}, []);


/* * Génération du fichier .ics */ const generateICS = () => { const events = matches.map((match) => { const dt = DateTime .fromJSDate(match.date) .setZone("Europe/Paris"); return { start: [ dt.year, dt.month, dt.day, dt.hour, dt.minute, ] as [ number, number, number, number, number ], duration: { hours: 2, }, title: `Match vs ${shortOpponentName(match.opponent)}`, description: `Match contre ${shortOpponentName(match.opponent)}`, location: "US GAME", url: match.link || "https://goconqs.com/sports/2018/8/17/live-video.aspx", }; }); const { error, value } = createEvents(events as any); if (!error && value) { const blob = new Blob( [value], { type: "text/calendar;charset=utf-8", } ); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "jade_2627.ics"; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); } }; /* * Import Apple / Outlook */ const handleAppleOutlookImport = () => { generateICS(); setShowiOSInstructions(true); }; /* * Import Google Calendar */ const handleGoogleCalendarImport = () => { generateICS(); setShowGoogleInstructions(true); }; /* * Loader */ 

if (loading) {
  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Ballon animé */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-purple-100" />

          <div
            className="
              absolute inset-2
              rounded-full
              bg-gradient-to-br from-purple-900 to-purple-700
              shadow-xl
              flex items-center justify-center
              animate-bounce
            "
          >
            <span className="text-4xl">🏀</span>
          </div>

          {/* Halo */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-300/40 animate-ping" />
        </div>

        {/* Texte */}
        <h2 className="text-xl font-bold text-purple-900 tracking-wide">
          Chargement des matchs
        </h2>

        <p className="mt-2 text-sm text-purple-500">
          Dodge City Community College
        </p>

        {/* Barre de chargement */}
        <div className="mt-6 w-48 h-1.5 bg-purple-100 rounded-full overflow-hidden">
          <div
            className="
              h-full
              w-1/2
              bg-gradient-to-r from-purple-900 to-purple-600
              rounded-full
              animate-[loading_1.4s_ease-in-out_infinite]
            "
          />
        </div>

        <style jsx>{`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(300%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}


const t = translations.fr; return ( <div className="mx-auto pb-20"> {/* En-tête */} <div className="text-center mb-6"> <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-700"> <div className="w-12 h-12 bg-gradient-to-r from-purple-800 to-purple-700 rounded-full flex items-center justify-center"> <span className="text-white font-bold text-lg"> DC </span> </div> <div> <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-purple-700 bg-clip-text text-transparent"> SESOÛ 2026-2027 </h1> <p className="text-purple-800 text-sm font-medium"> Dodge City Community </p> </div> </div> </div> {/* Liste des matchs */} <div className=" grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] p-4 " > {matches.map((match) => { const isLocal = showLocalTimes[match.id]; /* * Si l'utilisateur affiche l'heure locale, * on utilise son fuseau. * * Sinon on utilise Europe/Paris. */ const timeZone = isLocal ? userZone : "Europe/Paris"; const locale = "fr-FR"; const use12HourFormat = ["en-US", "en-GB"].includes( locale ); 
  
  const monthMapping: Record<string, string> = {
  JANVIER: "DE YAMBIÈ",
  FÉVRIER: "DE HEURÈ",
  MARS: "De MARS",
  AVRIL: "D'ABRIU",
  MAI: "DE MAY",
  JUIN: "De JUIN",
  JUILLET: "DE YULHÉT",
  AOÛT: "D'AOUST",
  SEPTEMBRE: "DE SETÉME",
  OCTOBRE: "D'OUCTOÙBRE",
  NOVEMBRE: "DE NOUBÉMBRE",
  DÉCEMBRE: "DE DECÉME",
};

const rawDay = new Date(match.date)
  .toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone,
  })
  .toUpperCase();

const [weekday, day, month] = rawDay.split(" ");

const occitanDay = dayMapping[weekday] || weekday;
const occitanMonth = monthMapping[month] || month;

const dayLabel = showOccitanDay
  ? `${occitanDay} ${day} ${occitanMonth}`
  : rawDay;

  
  const hourLabel = match.hasValidTime ? new Date( match.date ).toLocaleTimeString( locale, { hour: "2-digit", minute: "2-digit", hour12: use12HourFormat, timeZone, } ) : "?????"; 
  
 const flagSrc = isLocal
  ? `https://flagcdn.com/w40/${userCountryCode}.png`
  : "/bearn.jpg";
  
  return ( <div key={match.id} className="group" > <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:border-purple-300"> {/* Jour */} <CardHeader onClick={() => setShowOccitanDay( (prev) => !prev ) } className="bg-gradient-to-r from-purple-800 to-purple-700 text-white p-4 text-center cursor-pointer" > <p className="text-lg font-bold tracking-wider drop-shadow-sm"> {dayLabel} </p> </CardHeader> {/* Match */} <CardContent className="p-5"> <div className="flex items-center justify-between"> {/* Équipe adverse */} <div className="flex items-center gap-2 flex-1"> <div className="w-16 h-16 bg-white rounded-xl shadow-md border border-purple-100 flex items-center justify-center p-2"> <img src={ match.opponentLogo } alt={ match.opponent } className="object-contain w-12 h-12" /> </div> <div className="flex-1"> <p className="text-lg font-semibold text-purple-900 leading-tight"> {shortOpponentName(match.opponent)} </p> </div> </div> {/* Heure */} <div className="flex flex-col items-center ml-4"> <div className="flex items-center gap-2 mb-1">
<img
  src={flagSrc}
  alt={isLocal ? "Drapeau local" : "Béarn"}
  className="w-6 h-4 mb-1 rounded object-cover"
/>
     </div> <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors border border-purple-200" onClick={() => setShowLocalTimes( (prev) => ({ ...prev, [match.id]: !prev[ match.id ], }) ) } title="Cliquez pour changer le fuseau horaire" > <Clock className="w-4 h-4 text-purple-800" /> <span className="font-bold text-purple-800 text-sm"> {hourLabel} </span> </div> </div> </div> </CardContent> {/* Lien vidéo */} <CardFooter className="bg-gradient-to-r from-purple-800 to-purple-800 p-0"> {match.link && !match.link.includes( "aa.aa" ) ? ( <a href={ match.link } target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 text-white font-bold text-lg hover:bg-purple-800/90 transition-colors flex items-center justify-center gap-2" > <ExternalLink className="w-5 h-5" /> ESPIA LA PARTIDE </a> ) : ( <button onClick={() => setIsNoLinkModalOpen( true ) } className="w-full text-center py-3 text-white font-bold text-lg hover:bg-purple-800/90 transition-colors flex items-center justify-center gap-2" > <ExternalLink className="w-5 h-5" /> ESPIA LA PARTIDE </button> )} </CardFooter> </Card> </div> ); })} </div> {/* Bouton calendrier */} <button onClick={() => setIsModalOpen(true) } className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-800 hover:to-purple-800 text-white rounded-full p-4 shadow-2xl z-50 transition-all duration-300 hover:scale-110" title="Ajouter au calendrier" > <CalendarPlus className="w-6 h-6" /> </button> {/* Modal calendrier */} <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false) } className="relative z-50" > <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" /> <div className="fixed inset-0 flex items-center justify-center p-4"> <DialogPanel className="bg-white rounded-2xl p-6 max-w-sm mx-auto shadow-2xl border border-purple-200"> <DialogTitle className="text-xl font-bold text-purple-900 mb-4 text-center"> {t.addCalendarTitle} </DialogTitle> {!showGoogleInstructions && !showiOSInstructions ? ( <div className="flex flex-col gap-3"> <button onClick={ handleAppleOutlookImport } className="bg-purple-50 hover:bg-purple-100 text-purple-800 px-4 py-3 rounded-xl text-sm font-medium transition-colors border border-purple-200" > {t.appleOutlook} </button> <button onClick={ handleGoogleCalendarImport } className="bg-purple-50 hover:bg-purple-100 text-purple-800 px-4 py-3 rounded-xl text-sm font-medium transition-colors border border-purple-200" > {t.googleCalendar} </button> <button onClick={() => setIsModalOpen(false) } className="text-sm text-purple-800 hover:text-purple-800 mt-2 font-medium" > {t.cancel} </button> </div> ) : showGoogleInstructions ? ( <div className="space-y-3 text-center"> {t.googleInstructions.map( ( instruction, index ) => ( <p key={index} className={ index === 0 ? "text-green-800 font-semibold" : "text-purple-800 text-sm" } > {instruction} </p> ) )} <button onClick={() => { setIsModalOpen( false ); setShowGoogleInstructions( false ); }} className="mt-4 text-sm text-purple-800 font-semibold hover:text-purple-900" > {t.close} </button> </div> ) : ( <div className="space-y-3 text-center"> {t.iosInstructions.map( ( instruction, index ) => ( <p key={index} className={ index === 0 ? "text-green-800 font-semibold" : "text-purple-800 text-sm" } > {instruction} </p> ) )} <button onClick={() => { setIsModalOpen( false ); setShowiOSInstructions( false ); }} className="mt-4 text-sm text-purple-800 font-semibold hover:text-purple-900" > {t.close} </button> </div> )} </DialogPanel> </div> </Dialog> {/* Modal "Pas de lien" */} <Dialog open={isNoLinkModalOpen} onClose={() => setIsNoLinkModalOpen(false) } className="relative z-50" > <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" /> <div className="fixed inset-0 flex items-center justify-center p-4"> <DialogPanel className="bg-white rounded-3xl p-6 max-w-sm mx-auto shadow-2xl border border-purple-200 text-center"> <DialogTitle className="text-xl font-bold text-purple-900 mb-4"> Yade s’échauffe en dehors des projecteurs ✨ </DialogTitle> <p className="text-purple-700 text-sm mb-4"> Le lien du match n’est pas encore disponible, mais reste connecté, ça arrive bientôt ! </p> <button onClick={() => setIsNoLinkModalOpen( false ) } className="mt-2 bg-purple-800 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-xl transition-colors" > Fermer </button> </DialogPanel> </div> </Dialog> </div> ); }