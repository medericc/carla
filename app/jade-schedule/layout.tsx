import Link from "next/link";
import "./lou.module.css";
export const metadata = {
  title: "Calendrier de Jade - Dodge City",
  description: "Le calendrier des matchs de Jade.",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Jade Schedule",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Calendrier de Jade - Dodge City",
    description: "Le calendrier des matchs de Jade.",
    url: "https://jade-calendrier.vercel.app/",
    siteName: "Jade Celerier Schedule",
    images: [
      {
        url: "https://jade-calendrier.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Calendrier de Jade - Dodge City",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendrier de Jade - Dodge City",
    description: "Le calendrier des matchs de Jade.",
    images: ["https://jade-calendrier.vercel.app/preview.jpg"],
  },
};

export default function JadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <div className="jade-page min-h-screen">
     <Link href="/" className="cursor-pointer hover:opacity-80">
        
      <header className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white p-6 md:p-8 text-3xl sm:text-3xl font-bold text-center shadow-lg tracking-wide">
        <span className="sm:hidden">🏀 JADE SCHEDULE</span>
        <span className="hidden sm:inline lg:hidden">🏀 CALENDRIER DE JADE</span>
        <span className="hidden lg:inline">
          🏀 CALENDRIER DE JADE - DODGE CITY
        </span>
      </header>
</Link>
      <main className="container mx-auto mt-6 px-4">{children}</main>
 </div>   </>
  );
}