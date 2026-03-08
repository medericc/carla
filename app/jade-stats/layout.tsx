
import Link from "next/link";
import "./lou.module.css";
export const metadata = {
  title: "LiveStats Jade Celerier",
  description: "Les livestats des matchs de Jade Celerier",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
   openGraph: {
    title: "LiveStats Jade",
    description: "Le play by play en direct.",
    images: [
      {
        url: "https://jade-livestats.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LiveStats Jade",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveStats Jade",
    description: "Les stats détaillées en direct.",
    images: ["https://jade-livestats.vercel.app/preview.jpg"],
  },
};

export default function JadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <>
    <div className="jade-page">
     <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white p-8 text-4xl font-extrabold text-center shadow-md tracking-wider">
         <Link href="/" className="cursor-pointer hover:opacity-80">
          LIVESTATS
        </Link>
      </header>

      <main className="livestats-page container mx-auto mt-4">
        {children}
      </main>
   </div> </>
  );
}