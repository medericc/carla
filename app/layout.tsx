import localFont from "next/font/local";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
