import Link from "next/link";
import styles from "./lou.module.css"

export const metadata = {
  title: "LiveStats Carla",
  description: "Les stats détaillées en direct.",
  alternates: {
    canonical: "/livestats/carla",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LiveStats Carla",
    description: "Les stats détaillées en direct.",
    images: [
      {
        url: "https://carlaleitefan.com/carla-leite-basket.png",
        width: 1200,
        height: 630,
        alt: "LiveStats Carla",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveStats Carla",
    description: "Les stats détaillées en direct.",
    images: ["https://carlaleitefan.com/carla-leite-basket.png"],
  },
};
  


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (


 <>   <div className="ines-page">  <div className={styles.page}> 
      <header className="bg-gradient-to-r from-[#8a081e] to-[#790518] text-white p-8 text-4xl font-extrabold text-center shadow-md tracking-wide">
        
 <Link href="/" className="cursor-pointer hover:opacity-80">
          LIVESTATS
        </Link>

      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main>  </div> </div> 
    </>

);
}