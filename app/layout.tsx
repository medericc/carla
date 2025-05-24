import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Carla Leite",
  description: "Carla Leite, championne de France espoir, meilleure joueuse des PO LFB, championne d'Europe u20 et membre des Valkyries en WNBA. Suivez ses exploits et sa carrière avec l'ESBVA-LM à Villeneuve d'Ascq.",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Schema.org Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Carla Leite",
    "jobTitle": "Basketteuse",
    "affiliation": [
      {
        "@type": "SportsTeam",
        "name": "Golden State Valkyries",
        "sport": "Basketball"
      },
      {
        "@type": "SportsTeam",
        "name": "ESBVA-LM (Villeneuve d'Ascq)",
        "sport": "Basketball"
      }
    ],
    "nationality": "Française",
    "url": "https://carla-leite-fan.com",
    "image": "https://carla-leite-fan.com/carla-leite-basket.png",
    "sameAs": [
      "https://www.instagram.com/fan_carlaleite/"
    ]
  };
  

  return (
    <html lang="fr">
      <Head>
      <meta name="google-adsense-account" content="ca-pub-6915108633693700"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/carla-leite-basket.png" />
        <meta property="og:url" content="https://carla-leite-fan.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/carla-leite-basket.png" />
<meta name="google-site-verification" content="AxJDrbCgDWHBOIcKdtu0epbjppUL8VHs5t3XMhPJE5Y" />

      
        {/* Ajout du JSON-LD pour Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
         </Head>
      {/* Google Analytics juste après le <head> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVWXT3GBXV"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVWXT3GBXV');
        `}
      </Script>
    
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
