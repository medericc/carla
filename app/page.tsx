// app/page.tsx

import Header from "./components/Header";
import Headers from "./components/Headers";

import Stats from "./components/Stats";
import Biography from "./components/Biography";
import News from "./components/News";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col p-0">
       <Headers />
      {/* Header avec nom et drapeau */}
      <Header />

{/* Biographie */}
<Biography />
      {/* Statistiques */}
      <Stats />

      

      {/* News */}
      <Cards />
      <Footer />
    </main>
  );
}
