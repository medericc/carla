
import Link from "next/link";
import styles from "./lou.module.css"
export const metadata = {
  title: "LiveStats Lucile & Carla",
  description: "Les stats détaillées en direct.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LiveStats Lucile & Carla",
    description: "Les stats détaillées en direct.",
    images: [
      {
        url: "https://carla-lucile.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LiveStats Lucile & Carla",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveStats Lucile & Carla",
    description: "Les stats détaillées en direct.",
    images: ["https://carla-lucile.vercel.app/preview.jpg"],
  },
};

export default function LucileCarlaLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <> <div className="lu-page">
    <div className={styles.page}>
      <header className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-8 text-4xl font-extrabold text-center shadow-md">
        <Link href="/" className="cursor-pointer hover:opacity-80">
        LIVESTATS
      </Link>
      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main></div></div>
    </>
  );
}