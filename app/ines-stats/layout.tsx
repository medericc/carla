export const metadata = {
    title: "Inès LiveStats",
    description: "Les stats détaillées en direct.",
    icons: {
        icon: "/favicon.ico", // Pour le favicon par défaut
        shortcut: "/favicon.ico", // Pour les navigateurs type iOS
        apple: "/apple-touch-icon.png", // iPhone/iPad
    },
    other: {
"apple-mobile-web-app-title": "InèsSchedule",
},
    openGraph: {
      title: "Inès LiveStats",
      description: "Le play by play en direct.",
      images: [
        {
          url: "https://ines-livestats.vercel.app/ines-debroise-og.jpg",
          width: 1200,
          height: 630,
          alt: "LiveStats d'Inès",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image", // ✅ Correction ici
      title: "Inès LiveStats",
      description: "Les stats détaillées en direct.",
    images: ["https://ines-livestats.vercel.app/preview.jpg"],
  },
  };
  


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (


 <>
      <header className="bg-gradient-to-r from-[#08618a] to-[#054a79] text-white p-8 text-4xl font-extrabold text-center shadow-md tracking-wide">
        LIVESTATS
      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main>
    </>

);
}