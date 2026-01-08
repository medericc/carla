import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À Propos - Site Fan Carla Leite | Passion, Basketball & Communauté",
  description: "Découvrez l'équipe de fans passionnés derrière ce site dédié à Carla Leite.",
  keywords: "à propos Carla Leite, site fan, passion basket",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
