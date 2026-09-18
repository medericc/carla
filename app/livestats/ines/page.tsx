'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import VideoHeader from '../../double-components/VideoHeader';
import InputForm from '../../double-components/InputForm';
import MatchTable from '../../double-components/MatchTableE';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// 🕒 Convertit les secondes en format mm:ss
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

export default function Home() {
  const [csvGenerated, setCsvGenerated] = useState(false);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [selectedLink, setSelectedLink] = useState<string>('');
  const [customUrl, setCustomUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(false);

  const matchLinks = [

      { name: "Voiron", url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2879363/bs.html" },
     
//  { name: "Alabama CT", url: "/api/espn?gameId=401856513" },
    
//      { name: "Finale A10", url: "/api/espn?gameId=401851271" },
   
//      { name: "Davidson", url: "/api/espn?gameId=401851267" },
   
//      { name: "Loyola CR", url: "/api/espn?gameId=401851259" },
   
//  { name: "George Washington", url: "/api/espn?gameId=401829158" },
   
//       { name: "Richmond", url: "/api/espn?gameId=401829153" },
   
//      { name: "Fordham", url: "/api/espn?gameId=401829143" },
   
//      { name: "La Salle", url: "/api/espn?gameId=401829140" },
   
//      { name: "George Mason", url: "/api/espn?gameId=401829132" },
   
//  { name: "VCU Rams", url: "/api/espn?gameId=401829129" },
   
//        { name: "Saint Louis", url: "/api/espn?gameId=401829123" },
   
//     { name: "St Joseph's", url: "/api/espn?gameId=401829116" },
   
    //  { name: "Fordham", url: "/api/espn?gameId=401829106" },
   
      // { name: "Dayton", url: "/api/espn?gameId=401829096" },
   
  // { name: "Davidson", url: "/api/espn?gameId=401829086" },
   
  //      { name: "Duquesne", url: "/api/espn?gameId=401829082" },
   
      // { name: "VCU Rams", url: "/api/espn?gameId=401829076" },
   
      // { name: "Saint Bonaventure", url: "/api/espn?gameId=401829068" },
   
//      { name: "George Washington", url: "/api/espn?gameId=401829061" },
//       { name: "Loyola", url: "/api/espn?gameId=401829034" },
 
//      { name: "Richmond", url: "/api/espn?gameId=401829029" },
 
//     { name: "Wagner", url: "/api/espn?gameId=401825008" },
 
// { name: "Providence", url: "/api/espn?gameId=401825007" },
 
// { name: "Black Bears", url: "/api/espn?gameId=401822844" },
 
// { name: "Saint Joseph's", url: "/api/espn?gameId=401829021" },
//     { name: "Princeton", url: "/api/espn?gameId=401825006" },
// { name: "NC State", url: "/api/espn?gameId=401817578" },
// { name: "Holy Cross", url: "/api/espn?gameId=401823108" },
 


// { name: "UAlbany", url: "/api/espn?gameId=401825005" },
//   { name: "Rutgers", url: "/api/espn?gameId=401813740" },
 

//         { name: "Emmanuel", url: "/api/espn?gameId=401825004" },
//    { name: "Merrimack", url: "/api/espn?gameId=401825003" },
 

//         { name: "Manhattan", url: "/api/espn?gameId=401813825" },
  ];

  // 🔁 Fonction principale

const handleGenerate = async () => {
  if (selectedLink === "none") {
    setModalMessage("Inès s’échauffe 🏀");
    setIsWaitingModalOpen(true);

    setTimeout(() => {
      setIsWaitingModalOpen(false);
    }, 3000);

    return;
  }

  const url =
    selectedLink ||
    customUrl ||
    "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2879363/bs.html";

  try {
    // URL LFB / Genius Sports
    // /u/FFBB/2879363/bs.html
    // devient
    // /data/2879363/data.json

    const jsonUrl = url
      .replace(/\/u\/FFBB\//, '/data/')
      .replace(/\/bs\.html\/?/, '/')
      .replace(/\/$/, '') + '/data.json';

    console.log("🏀 URL LFB :", jsonUrl);

    // Proxy pour éviter le problème CORS
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(jsonUrl)}`;

    const response = await fetch(proxyUrl);

    if (!response.ok) {
      console.error(
        "Erreur récupération LFB :",
        response.status,
        await response.text()
      );

      setModalMessage("Inès s’échauffe 🏀");
      setIsWaitingModalOpen(true);

      setTimeout(() => {
        setIsWaitingModalOpen(false);
      }, 3000);

      return;
    }

    const data = await response.json();

    console.log("✅ Données LFB récupérées :", data);

    // L'API Genius Sports renvoie les actions dans pbp
    const plays = Array.isArray(data?.pbp)
      ? data.pbp
      : [];

    if (!plays.length) {
      console.error("Aucune donnée LFB trouvée :", data);

      setModalMessage("Inès s’échauffe 🏀");
      setIsWaitingModalOpen(true);

      setTimeout(() => {
        setIsWaitingModalOpen(false);
      }, 3000);

      return;
    }

    console.log("🏀 Actions LFB :", plays.length);
    console.log("👀 Première action :", plays[0]);

    // Format attendu par MatchTableE :
    // [période, chrono, action, réussite]

    const rows: string[][] = plays.map((action: any) => [
      action.period ?? '',
      action.gt ?? '',
      action.actionType ?? '',
      action.success ? '1' : '0',
    ]);

    setCsvData(rows);
    setCsvGenerated(true);

  } catch (error) {
    console.error("Erreur dans handleGenerate :", error);

    setModalMessage("Erreur pendant le chargement des données 😅");
    setIsModalOpen(true);
  }
};



  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 gap-8 bg-gray-100  text-gray-900 ">
      <VideoHeader src="/ines.mp4" className="absolute top-0 left-0 w-full" />

      <main className="flex flex-col items-center gap-6 w-full max-w-lg sm:max-w-2xl md:max-w-4xl">
        <Select value={selectedLink} onValueChange={setSelectedLink}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionne un match" />
          </SelectTrigger>
          <SelectContent>
            {matchLinks.map((link) => (
              <SelectItem key={link.url} value={link.url}>
                {link.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <InputForm 
          value={customUrl} 
          onChange={(e) => setCustomUrl(e.target.value)} 
          onGenerate={handleGenerate} 
        />

        {csvGenerated && (
          <div className="w-full overflow-x-auto">
            <MatchTable data={csvData} />
          </div>
        )}
      </main>

      {/* ⚠️ Modale d'erreur */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[80%] max-w-xs rounded-lg shadow-lg bg-white  p-6">
          <DialogHeader>
            <DialogTitle className="text-center mb-4">⚠️ Erreur</DialogTitle>
            <DialogDescription className="text-center mt-4">{modalMessage}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* ⏳ Modale d’attente */}
      <Dialog open={isWaitingModalOpen} onOpenChange={setIsWaitingModalOpen}>
        <DialogContent className="w-[80%] max-w-xs rounded-lg shadow-lg bg-white  p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2 mb-2 text-black">⏳ Patiente</DialogTitle>
            <DialogDescription className="text-center mt-2 text-black">{modalMessage}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <footer className="text-sm text-gray-900 mt-8">
        <a
          href="https://www.youtube.com/@fan_goat_ines"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Produit par @fan_carlaleite
        </a>
      </footer>
    </div>
  );
}
