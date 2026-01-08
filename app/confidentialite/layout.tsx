// Dans votre app/politique-confidentialite/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Site Fan Carla Leite | Aucune donnée collectée",
  description: "Ce site fan ne collecte AUCUNE donnée personnelle. Aucun tracking, aucun cookie de suivi. Utilisation de Vercel Analytics anonyme. Politique de confidentialité transparente.",
  keywords: "politique confidentialité Carla Leite, aucune donnée collectée, vie privée, RGPD, Vercel Analytics, cookies, site fan, protection données, privacy-first",
  openGraph: {
    title: "Politique de Confidentialité - Site Fan Carla Leite",
    description: "Engagement total de confidentialité : aucune donnée personnelle collectée",
    type: "website",
    url: "https://www.carlaleitefan.com/politique-confidentialite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité - Site Fan Carla Leite",
    description: "100% privacy-first : aucune donnée personnelle collectée",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.carlaleitefan.com/politique-confidentialite",
  }
};