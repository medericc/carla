// app/page.tsx

import Header from "./components/Header";


import Biography from "./components/Biography";
import DragCards  from "./components/Footer";
import Travel from "./components/Travel";
import SwipeCarousel from "./components/Scroll";

export default function Home() {
  return (
    <main className="flex flex-col p-0">
      
      {/* Header avec nom et drapeau */}
      <Header />
<Travel />
{/* Biographie */}
<Biography />
      {/* Statistiques */}
      <SwipeCarousel />

      

      {/* News */}
    
      <DragCards  />
    </main>
  );
}
