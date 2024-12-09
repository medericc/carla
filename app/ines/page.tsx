// app/page.tsx

import Header from "./components/Header";


import Biography from "./components/Biography";
import Footer  from "./components/Footer";
import Travel from "./components/Travel";
import SwipeCarousel from "./components/Scroll";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="flex flex-col p-0">
      
      {/* Header avec nom et drapeau */}
      <Header />
      <Travel />
{/* Biographie */}
<Biography />
<Stats />
      {/* Statistiques */}
      <SwipeCarousel />

 
     


      {/* News */}
    
      <Footer  />
    </main>
  );
}
