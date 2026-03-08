import Link from "next/link";
import styles from "./lou.module.css"
export const metadata = {
  title: "LiveStats Léna",
  description: "Les stats détaillées en direct.",
 alternates: {
    canonical: "/livestats/lena",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LiveStats Léna",
    description: "Le play by play en direct.",
    images: [
      {
        url: "https://lenastats.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LiveStats Léna",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveStats Léna",
    description: "Les stats détaillées en direct.",
    images: ["https://lenastats.vercel.app/preview.jpg"],
  },
};

export default function LenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>  <div className="lena-page"><div className={styles.page}>
      <header className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 text-4xl font-extrabold text-center shadow-md">
        
 <Link href="/" className="cursor-pointer hover:opacity-80">
          LIVESTATS
        </Link>

      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main>  </div></div> 
    </>
  );
}