import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import PWAClient from "./components/PWAClient";
import { Analytics } from "@vercel/analytics/react";


const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  metadataBase: new URL("https://carlaleitefan.com"),

  title: {
    default: "Carla Leite",
    template: "%s | Carla Leite",
  },

  description:
    "Carla Leite, championne de France espoir, meilleure joueuse des Playoffs LFB, championne d’Europe U20 et joueuse WNBA. Actualités, carrière et performances.",

  keywords: [
    "Carla Leite",
    "basketball féminin",
    "WNBA",
    "Golden State Valkyries",
    "ESBVA-LM",
    "Casademont Zaragoza",
    "équipe de France U20",
  ],

  alternates: {
    canonical: "https://carlaleitefan.com",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://carlaleitefan.com",
    title: "Carla Leite – Basketteuse professionnelle",
    description:
      "Carla Leite, joueuse française de basketball, championne d’Europe U20 et membre de la WNBA.",
    images: [
      {
        url: "https://carlaleitefan.com/carla-leite-basket.png",
        width: 1200,
        height: 630,
        alt: "Carla Leite basketteuse professionnelle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Carla Leite – Basketteuse professionnelle",
    description:
      "Carla Leite, championne d’Europe U20, joueuse WNBA et figure du basketball féminin français.",
    images: ["https://carlaleitefan.com/carla-leite-basket.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/icon-192x192.png",
  },

  manifest: "/manifest.json",

  verification: {
    google: "AxJDrbCgDWHBOIcKdtu0epbjppUL8VHs5t3XMhPJE5Y",
  },

  other: {
    "google-adsense-account": "ca-pub-6915108633693700",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ JSON-LD Schema.org (parfait pour Google Discover & Knowledge Graph)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carla Leite",
    jobTitle: "Basketteuse professionnelle",
    nationality: "Française",
    url: "https://carlaleitefan.com",
    image: "https://carlaleitefan.com/carla-leite-basket.png",
    sameAs: ["https://www.instagram.com/fan_carlaleite/"],
    affiliation: [
      { "@type": "SportsTeam", name: "Golden State Valkyries" },
      { "@type": "SportsTeam", name: "Dallas Wings" },
      { "@type": "SportsTeam", name: "Casademont Zaragoza Femenino" },
      { "@type": "SportsTeam", name: "ESBVA-LM (Villeneuve d'Ascq)" },
    ],
  };

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Google Analytics */}
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

        {children}
        <PWAClient />
        <Analytics />
      </body>
    </html>
  );
}
