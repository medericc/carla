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
    <>
      <header className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-8 text-4xl font-extrabold text-center shadow-md">
        LIVESTATS
      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main>
    </>
  );
}