import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions légales - Site Fan Carla Leite | Janvier 2026",
  description:
    "Mentions légales du site fan dédié à Carla Leite. Site non officiel géré par des fans. Hébergement Vercel. Conforme RGPD 2026.",
  keywords:
    "mentions légales, Carla Leite, site fan, basketball féminin, RGPD, cookies, 2026",
  authors: [{ name: "Fans de Carla Leite" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "Mentions légales - Site Fan Carla Leite",
    description:
      "Informations légales du site fan dédié à la joueuse de basketball Carla Leite",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
