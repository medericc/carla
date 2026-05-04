'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import VideoHeader from '../../double-components/VideoC';
import InputForm from '../../double-components/InputFormLe';
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
     { name: "L.A. Prepa", url: "401866521" },
 { name: "Seattle Prepa", url: "401866516" },
    
    
  ];

  // 🔁 Fonction principale
 const handleGenerate = async () => {
  if (!selectedLink) {
    setModalMessage("Carla s’échauffe 🏀");
    setIsWaitingModalOpen(true);
    setTimeout(() => setIsWaitingModalOpen(false), 3000);
    return;
  }

  try {
    const response = await fetch(`/api/espnc?gameId=${selectedLink}`);
    const data = await response.json();

    if (!data.length) {
      setModalMessage("Carla s’échauffe 🏀");
      setIsWaitingModalOpen(true);
      setTimeout(() => setIsWaitingModalOpen(false), 3000);
      return;
    }

    setCsvData(data);
    setCsvGenerated(true);

  } catch (error) {
    console.error(error);
    setModalMessage("Erreur pendant le chargement 😅");
    setIsModalOpen(true);
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 gap-8 bg-gray-100  text-gray-900 ">
      <VideoHeader className="absolute top-0 left-0 w-full" />

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
          href="https://www.youtube.com/@fan_lucilej"
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
