import localFont from "next/font/local";
import "./globals.css";
import CookieBanner from "./components/CookieBanner"
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
  metadataBase: new URL("https://www.carlaleitefan.com"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Carla Leite",
    template: "%s | Carla Leite",
  },
  description:
    "Carla Leite, championne de France espoir, meilleure joueuse des Playoffs LFB, championne d’Europe U20 et joueuse WNBA au Portland Fire. Actualités, carrière et performances.",
  keywords: [
    "Carla Leite",
    "basketball féminin",
    "WNBA",
    "Golden State Valkyries",
    "Portland Fire",
    "France",
    "ESBVA-LM",
    "Casademont Zaragoza",
    "équipe de France U20",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.carlaleitefan.com",
    title: "Carla Leite – Basketteuse professionnelle",
    description:
      "Carla Leite, joueuse française de basketball, championne d’Europe U20 et membre de la WNBA.",
    images: [
      {
        url: "https://www.carlaleitefan.com/carla-leite-basket.png",
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
    images: [
      "https://www.carlaleitefan.com/carla-leite-basket.png",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "gcLOv5jbeLOiLYtLYc45Fq24q_89NCpsYNO9wc8APgM",
  },
  other: {
    "google-adsense-account": "ca-pub-6915108633693700",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carla Leite",
    jobTitle: "Basketteuse professionnelle",
    nationality: "Française",
    url: "https://www.carlaleitefan.com",
    image:
      "https://www.carlaleitefan.com/carla-leite-basket.png",
    sameAs: [
      "https://www.instagram.com/fan_carlaleite/",
    ],
    affiliation: [
      {
        "@type": "SportsTeam",
        name: "Golden State Valkyries",
      },
      {
        "@type": "SportsTeam",
        name: "Portland Fire",
      },
      {
        "@type": "SportsTeam",
        name: "Casademont Zaragoza Femenino",
      },
      {
        "@type": "SportsTeam",
        name: "ESBVA-LM (Villeneuve d'Ascq)",
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
       
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  

        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {children}

        <PWAClient />
  <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}