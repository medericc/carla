import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Site Fan Carla Leite | Équipe de passionnés",
  description:
    "Contactez l'équipe de fans dédiée à Carla Leite. Formulaire de contact, email, réseaux sociaux. Réponse sous 48h.",
  keywords:
    "contact Carla Leite, site fan, formulaire contact, email, réseaux sociaux, Instagram, Twitter, YouTube, communauté fans",
  openGraph: {
    title: "Contact - Site Fan Carla Leite",
    description: "Contactez notre équipe de fans passionnés dédiée à Carla Leite",
    type: "website",
    url: "https://www.carlaleitefan.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Site Fan Carla Leite",
    description: "Rejoignez notre communauté de fans passionnés",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
