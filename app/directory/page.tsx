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
  const [competitionFilter, setCompetitionFilter] = useState<string>("");
  // State pour stocker les totaux de PTS, AST, et RBD
  const [totals, setTotals] = useState({ PTS: 0, AST: 0, RBD: 0 });
  const [showCompetitionFilter, setShowCompetitionFilter] = useState(false);

  useEffect(() => {
    Papa.parse("/carla.csv", {
      header: true,
      download: true,
      complete: (result) => {
        const parsedData = result.data as MatchData[];
        setData(parsedData);

        // Calcul des totaux
        const ptsTotal = parsedData.reduce((sum, match) => sum + match.PTS, 0);
        const astTotal = parsedData.reduce((sum, match) => sum + match.AST, 0);
        const rbdTotal = parsedData.reduce((sum, match) => sum + match.RBD, 0);
        setTotals({ PTS: ptsTotal, AST: astTotal, RBD: rbdTotal });
      },
    });
  }, []);


  const toggleCompetitionFilter = () => {
    setShowCompetitionFilter(!showCompetitionFilter);
  };
  
  const filterByCompetition = (data: MatchData[]) => {
    switch (competitionFilter) {
      case "Championnat":
        return data.filter((match) => match.CHAMPIONNAT === "LFB");
      case "PlayOff":
        return data.filter(
          (match) => match.CHAMPIONNAT.includes("PO") || match.CHAMPIONNAT.includes("CDF")
        );
      case "National Team":
        return data.filter((match) => match.CHAMPIONNAT.includes("EURO"));
      case "Clubs":
        return data.filter((match) => !match.CHAMPIONNAT.includes("EURO"));
      default:
        return data;
    }
  };
  const handleFilter = () => {
    if (data.length === 0) return;
  
    const competitionFilteredData = filterByCompetition(data);
  
    const sortedData = [...competitionFilteredData].sort((a, b) => {
      const aValue = a[stat] as number;
      const bValue = b[stat] as number;
      return sortOrder === "top" ? bValue - aValue : aValue - bValue;
    });
  
    setFilteredData(sortedData.slice(0, numResults));
  };
  
  
  return (
    <div className="p-4 md:p-6">
    














    <ul className="flex w-full md:w-full justify-between p-4 bg-red-800 rounded-lg mt-4 mx-auto max-w-[90%] shadow-md">
    <li className="text-center flex-1 text-white border-r border-red-700 last:border-0">
      <p className="text-xs font-semibold uppercase opacity-70 mb-1">PTS</p>
      <p className="text-2xl font-bold tracking-wide">
        {data.reduce((total, match) => total + Number(match.PTS), 0)}
      </p>
    </li>

    <li className="text-center flex-1 text-white border-r border-red-700 last:border-0">
      <p className="text-xs font-semibold uppercase opacity-70 mb-1">AST</p>
      <p className="text-2xl font-bold tracking-wide">
        {data.reduce((total, match) => total + Number(match.AST), 0)}
      </p>
    </li>

    <li className="text-center flex-1 text-white">
      <p className="text-xs font-semibold uppercase opacity-70 mb-1">RBD</p>
      <p className="text-2xl font-bold tracking-wide">
        {data.reduce((total, match) => total + Number(match.RBD), 0)}
      </p>
    </li>
  </ul>



























      {/* Options de sélection et filtre */}
      <div className="mb-4 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 items-center">
        <div className="flex flex-col">
          <label htmlFor="stat-select" className="mb-1 text-sm">Statistiques :</label>
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
        <button
    onClick={toggleCompetitionFilter}
    className="w-full sm:w-auto bg-blue-700 text-white p-2 rounded mt-2 sm:col-span-3 mx-auto font-semibold"
  >
    {showCompetitionFilter ? "Cacher" : "Plus"}
  </button>

  {showCompetitionFilter && (
    <div className="flex flex-col mt-2">
      <label htmlFor="competition-filter" className="mb-1 text-sm">Compétition :</label>
      <select
        id="competition-filter"
        value={competitionFilter}
        onChange={(e) => setCompetitionFilter(e.target.value)}
        className="border p-2 text-black rounded"
      >
        <option value="">Sélectionner</option>
        <option value="Championnat">Championnat</option>
        <option value="PlayOff">PlayOff</option>
        <option value="National Team">National Team</option>
        <option value="Clubs">Clubs</option>
      </select>
    </div>
  )}
</div>
      

      <button
    onClick={handleFilter}
    className="w-full sm:w-auto bg-red-800 text-white p-2 rounded mt-2 sm:col-span-3 mx-auto font-bold"
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

      {filteredData.length === 0 && (
        <p className="mt-6 text-gray-500 text-center">Aucun match trouvé pour cette statistique.</p>
      )}
    </div>
  );
}
