import Link from "next/link";
import styles from "./lou.module.css"
export const metadata = {
  title: "LiveStats Louann",
  description: "Les stats détaillées en direct.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "apple-mobile-web-app-title": "Louann LiveStats",
  },
  openGraph: {
    title: "LiveStats Louann",
    description: "Le play by play en direct.",
    images: [
      {
        url: "https://lou-livestats.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LiveStats Louann",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveStats Louann",
    description: "Les stats détaillées en direct.",
    images: ["https://lou-livestats.vercel.app/preview.jpg"],
  },
};

export default function LouannLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className={styles.page}>
      <header className="bg-gradient-to-r from-[#001E5A] to-[#000814] text-white p-8 text-4xl font-extrabold text-center shadow-md tracking-wide">
       
        <Link href="/" className="cursor-pointer hover:opacity-80">
          LIVESTATS
        </Link>

      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main>
</div>
     
    </>
  );
}