// app/directory/page.tsx
"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";

interface MatchData {
  SAISON: string;
  ANNEE: string;
  CHAMPIONNAT: string;
  ADVERSAIRE: string;
  PTS: number;
  RBD: number;
  AST: number;
  STL: number;
  BLK: number;
  P: number;
  PA: number;
  "3P": number;
  "3PA": number;
  "1P": number;
  "1PA": number;
  TO: number;
  EFF: number;
  MIN: number;
}

export default function Directory() {
  const [data, setData] = useState<MatchData[]>([]);
  const [stat, setStat] = useState<keyof MatchData>("PTS");
  const [filteredData, setFilteredData] = useState<MatchData[]>([]);
  const [numResults, setNumResults] = useState(1);
  const [sortOrder, setSortOrder] = useState<"top" | "bottom">("top");

  useEffect(() => {
    Papa.parse("/carla.csv", {
      header: true,
      download: true,
      complete: (result) => {
        const parsedData = result.data as MatchData[];
        setData(parsedData);
      },
    });
  }, []);

  // Fonction pour filtrer et trier les données
  const handleFilter = () => {
    if (data.length === 0) return;

    // Trier les données selon la statistique et l'ordre choisi
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[stat] as number;
      const bValue = b[stat] as number;
      return sortOrder === "top" ? bValue - aValue : aValue - bValue;
    });

    // Limiter les résultats selon le nombre de résultats souhaité
    setFilteredData(sortedData.slice(0, numResults));
  };

  return (
    <div className="p-4 md:p-6">
    <h1 className="text-3xl font-bold mb-4 text-center">StatsCenter</h1>
  
    {/* Options de sélection et filtre */}
    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 items-center">
      {/* Statistique sélectionnée */}
      <div className="flex flex-col">
        <label htmlFor="stat-select" className="mb-1 text-sm">Sélectionnez une statistique :</label>
        <select
          id="stat-select"
          value={stat}
          onChange={(e) => setStat(e.target.value as keyof MatchData)}
          className="border p-2 text-black rounded"
        >
          <option value="PTS">Points</option>
          <option value="RBD">Rebonds</option>
          <option value="AST">Assists</option>
          <option value="STL">Steals</option>
          <option value="BLK">Blocks</option>
          <option value="EFF">Evaluation</option>
          <option value="3P">3 Points</option>
          <option value="1P">Lancer-Franc</option>
          <option value="P">Paniers</option>
          <option value="TO">Balles Perdues</option>
        </select>
      </div>
  
      {/* Nombre de résultats */}
      <div className="flex flex-col">
        <label htmlFor="num-results" className="mb-1 text-sm">Top :</label>
        <input
          id="num-results"
          type="number"
          value={numResults}
          onChange={(e) => setNumResults(Number(e.target.value))}
          className="border p-2 text-black rounded w-full"
          min={1}
        />
      </div>
  
      {/* Ordre de tri */}
      <div className="flex flex-col">
        <label htmlFor="sort-order" className="mb-1 text-sm">Rang :</label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "top" | "bottom")}
          className="border p-2 text-black rounded"
        >
          <option value="top">Meilleurs</option>
          <option value="bottom">Pires</option>
        </select>
      </div>
    </div>
  
    <button
      onClick={handleFilter}
      className="w-full sm:w-auto bg-red-800 text-white p-2 rounded mt-2 sm:col-span-3"
    >
      Filtrer
    </button>
  
    {/* Affichage des cartes de match */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {filteredData.map((match, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg bg-white text-center">
          <h3 className="text-lg font-bold text-black">{match.ADVERSAIRE}</h3>
          <p className="text-black">Saison : {match.SAISON} | Année : {match.ANNEE}</p>
          <p className="text-black">Championnat : {match.CHAMPIONNAT}</p>
          <p className="text-red-600 font-semibold">
            {stat} : {match[stat]}
          </p>
        </div>
      ))}
    </div>
  
    {/* Message si aucune donnée */}
    {filteredData.length === 0 && (
      <p className="mt-6 text-gray-500 text-center">Aucun match trouvé pour cette statistique.</p>
    )}
  </div>
  
  );
}
