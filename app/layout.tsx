// app/layout.tsx

import localFont from "next/font/local";
import "./globals.css";

// Charger les polices locales
const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: '/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Définir les métadonnées de base
export const metadata = {
  title: "Carla Leite #0",
  description: "Fan Account de Carla Leite, la basketteuse de Villeneuve d'Ascq en LFB et des Dallas Wings en WNBA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
