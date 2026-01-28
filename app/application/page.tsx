'use client'
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Calendar, Video, Globe, LinkIcon, BarChart } from "lucide-react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
const categories = ["Site", "Schedule", "StatsCenter", "LiveStats",  "Instagram", "TikTok", "YouTube"];

// const categories = ["Site", "Schedule", "StatsCenter", "LiveStats", "Instagram", "TikTok", "YouTube"];

const links = [
  // {
  //   title: "Calendrier de Jade",
  //   url: "https://monsite.com/calendrier",
  //   icon: <Calendar className="w-5 h-5 mr-4" />,
  // },
 
   { title: "Site de Carla", url: "https://www.carlaleitefan.com/", icon: <Globe className="w-5 h-5 mr-4" />, category: "Site" },
      { title: "Site d'Inès", url: "https://ines-debroise.com/", icon: <Globe className="w-5 h-5 mr-4" />, category: "Site" },
    
    //  { title: "Site de Maëlys", url: "https://www.maelys-faurat-fan.com/", icon: <Globe className="w-5 h-5 mr-4" />, category: "Site" },
    
      { title: "Ranking LFB & LF2", url: "https://www.lfbfantasy.com/", icon: <Globe className="w-5 h-5 mr-4" />, category: "Site" },
     { title: "Fantasy League", url: "", icon: <Globe className="w-5 h-5 mr-4" />, category: "Site" },
  
  
   { title: "StatsCenter de Carla", url: "https://www.carlaleitefan.com/directory", icon: <BarChart className="w-5 h-5 mr-4" />, category: "StatsCenter" },
  { title: "LiveStats de Carla", url: "https://carla-lucile.vercel.app/", icon: <BarChart className="w-5 h-5 mr-4" />, category: "LiveStats" },
  { title: "StatsCenter de Lucile", url: "https://www.carlaleitefan.com/lucile", icon: <BarChart className="w-5 h-5 mr-4" />, category: "StatsCenter" },
    { title: "StatsCenter d'Inès", url: "https://www.carlaleitefan.com/ines", icon: <BarChart className="w-5 h-5 mr-4" />, category: "StatsCenter" },
     { title: "StatsCenter de Léna", url: "https://www.carlaleitefan.com/lena", icon: <BarChart className="w-5 h-5 mr-4" />, category: "StatsCenter" },
 
    { title: "LiveStats de Lucile", url: "https://carla-lucile.vercel.app/", icon: <BarChart className="w-5 h-5 mr-4" />, category: "LiveStats" },
    { title: "LiveStats de Léna", url: "https://lenastats.vercel.app/", icon: <BarChart className="w-5 h-5 mr-4" />, category: "LiveStats" },
   { title: "LiveStats de Jade", url: "https://jade-livestats.vercel.app/", icon: <BarChart className="w-5 h-5 mr-4" />, category: "LiveStats" },
  
    { title: "LiveStats de Louann", url: "https://lou-livestats.vercel.app/", icon: <BarChart className="w-5 h-5 mr-4" />, category: "LiveStats" },
  { title: "LiveStats LFB & LF2", url: "https://www.lfbfantasy.com/livestats", icon: <BarChart className="w-5 h-5 mr-4" />, category: "LiveStats" },
  
  { title: "Calendrier d'Inès", url: "https://ines-agenda.vercel.app/", icon: <Calendar className="w-5 h-5 mr-4" />, category: "Schedule" },
  { title: "Calendrier de Jade", url: "https://jade-application.vercel.app/", icon: <Calendar className="w-5 h-5 mr-4" />, category: "Schedule" },
  { title: "Calendrier de Louann", url: "https://schedule-lou.vercel.app/", icon: <Calendar className="w-5 h-5 mr-4" />, category: "Schedule" },
 
  { title: "Instagram d'Inès", url: "https://www.instagram.com/ines_debroise_fan/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },
  { title: "Tiktok d'Inès", url: "https://www.tiktok.com/@ines_debroise_fan", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
  { title: "Youtube de Inès & Carla", url: "https://www.youtube.com/channel/UCivgGgfOz1Rn9DYXvN5jFkA", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
  { title: "Youtube de Maëlys", url: "https://www.youtube.com/@fan_maefau", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
  { title: "Youtube de Lucile", url: "https://www.youtube.com/channel/UC-7WPErAKZnjCOtbY8vWbUQ", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
  // { title: "Youtube de Léna & Jade", url: "https://www.youtube.com/@mona_lisa_bk", icon: <FaYoutube className="w-5 h-5 mr-4" />, category: "YouTube" },
 
  { title: "Tiktok de Carla", url: "https://www.tiktok.com/@fan_carlaleite", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
  { title: "Tiktok de Lucile", url: "https://www.tiktok.com/@fan_lucilej", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
 { title: "Tiktok de Louann", url: "https://www.tiktok.com/@louann_rice_fan", icon: <FaTiktok className="w-5 h-5 mr-4" />, category: "TikTok" },
 
  { title: "Instagram de Carla", url: "https://www.instagram.com/fan_carlaleite/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },
  { title: "Instagram de Lucile", url: "https://www.instagram.com/fan_lucilej/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },
 { title: "Instagram de Léna & Jade", url: "https://www.instagram.com/lena_jade_backcourt/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },
{ title: "Instagram de Louann", url: "https://www.instagram.com/louann_rice_fan/", icon: <FaInstagram className="w-5 h-5 mr-4" />, category: "Instagram" },

 
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Site");
const [modalOpen, setModalOpen] = useState(false);

  const filteredLinks = links.filter(link => link.category === selectedCategory);

  return (
    <main className="min-h-screen flex flex-col justify-between items-center bg-[#ad2424] px-6 pt-6 text-neutral-100">
      {/* Header */}
      <div className="w-full max-w-md mb-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-neutral-100">App Carla & Co</h1>

        {/* Menu déroulant */}
        <div className=" mt-8 mb-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full bg-white text-neutral-900 font-semibold">
              <SelectValue placeholder="Choisis une catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Liste des liens */}
   <div className="w-full max-w-md space-y-4 flex-grow">
  {filteredLinks.map((link, i) => {
    const isDisabled = !link.url;

    return isDisabled ? (
      <button
        key={i}
        onClick={() => setModalOpen(true)}
        className="flex items-center bg-[#c22525] hover:bg-red-700 transition rounded-xl px-4 py-3 text-lg font-medium shadow-sm w-full"
      >
        {link.icon}
        {link.title}
      </button>
    ) : (
      <a
        key={i}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#c22525] hover:bg-red-700 transition rounded-xl px-4 py-3 text-lg font-medium shadow-sm"
      >
        {link.icon}
        {link.title}
      </a>
    );
  })}
</div>



      {/* Footer */}
      <footer className="w-screen bg-gradient-to-b from-[#ad2424] to-[#a11d1d] py-6 mt-10">
        <p className="text-sm text-white text-opacity-70 text-center mx-auto w-full max-w-none">
          Fait avec{" "}
         <span className="text-2xl mr-1 ml-1 inline-block relative top-1 text-neutral-800 heartbeat">
  &hearts;
</span>

{" "}
          par <strong>Carla Fan Account</strong>
        </p>
      </footer>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-red-700">Patiente...</DialogTitle>
    </DialogHeader>
    <p>Pas encore disponible.</p>
  </DialogContent>
</Dialog>

    </main>
  );
}