'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import VideoHeader from '../../double-components/VideoHeader';
import InputForm from '../../double-components/InputForm';
import MatchTable from '../../double-components/MatchTableL';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
interface MatchData { pbp: MatchAction[]; }
interface MatchAction {
  period: string;
  gt: string;
  actionType: string;
  success: boolean;
  s1: string;
  s2: string;
  player?: string;
  familyName?: string;
  firstName?: string;
  subType?: string;
  scoring?: number;
  shirtNumber?: string;
}

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
 { name: "Montbrison", url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2875349/bs.html" },
     
      { name: "Voiron", url: "https://fibalivestats.dcd.shared.geniussports.com/u/FFBB/2879363/bs.html" },
     
 ];

  const handleGenerate = async () => {
    const url = selectedLink || customUrl;

    if (!url) {
      setModalMessage("Sélectionne un Match 😎");
      setIsModalOpen(true);
      return;
    }

    try {
      const jsonUrl = url
        .replace(/\/u\/FFBB\//, "/data/")
        .replace(/\/bs\.html\/?/, "/")
        .replace(/\/$/, "") + "/data.json";

      console.log("URL JSON :", jsonUrl);

      const proxyUrl =
        `/api/proxy?url=${encodeURIComponent(jsonUrl)}`;

      const response = await fetch(proxyUrl, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        console.error(
          "Erreur proxy :",
          response.status,
          await response.text()
        );

        setModalMessage("Léna s'échauffe 🏀");
        setIsWaitingModalOpen(true);
        return;
      }

      const data: MatchData = await response.json();

      console.log("DATA :", data);
      console.log("Nombre d'actions :", data.pbp?.length);

      if (!data.pbp) {
        console.error("Le JSON ne contient pas 'pbp' :", data);

        setModalMessage("Les données du match sont introuvables.");
        setIsModalOpen(true);
        return;
      }

      /*
       * Récupération de toutes les actions de Léna Monasse
       */
     const filteredData = data.pbp .filter((action: MatchAction) => { const familyName = action.familyName?.trim().toLowerCase() || ""; const firstName = action.firstName?.trim().toLowerCase() || ""; const player = action.player?.trim().toLowerCase() || ""; return ( familyName === "debroise" || player.includes("debroise") || (firstName === "ines" && familyName === "debroise") ); }) .sort((a: MatchAction, b: MatchAction) => { return b.gt.localeCompare(a.gt); });


      console.log(
        "========== ACTIONS DE LÉNA =========="
      );

      console.log(filteredData);

      console.log(
        "Nombre d'actions de Léna :",
        filteredData.length
      );

      /*
       * Génération du tableau
       */
      const csvContent = generateCSV(filteredData);

      console.log("CSV :", csvContent);

      const rows = csvContent
        .split("\n")
        .filter((row) => row.trim() !== "")
        .slice(1)
        .map((row) => row.split(","));

      setCsvData(rows);
      setCsvGenerated(true);

    } catch (error) {
      console.error("Erreur :", error);

      setModalMessage(
        "Une erreur est survenue lors de la récupération."
      );

      setIsModalOpen(true);
    }
  };

  const generateCSV = (data: MatchAction[]) => {
    let csv =
      "Période,Horodatage,Action,Réussite,Score\n";

    data.forEach((action) => {
      const actionName =
        action.actionType ||
        action.subType ||
        "";

      csv += [
        action.period,
        action.gt,
        actionName,
        action.success ? "1" : "0",
        `${action.s1}-${action.s2}`,
      ].join(",") + "\n";
    });

    return csv;
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
