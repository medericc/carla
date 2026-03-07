import "../../globals.css";


export const metadata = {
  title: "LiveStats Jade Celerier",
  description: "Les livestats des matchs de Jade Celerier",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function JadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-linear-to-r from-purple-700 to-purple-800 text-white p-8 text-4xl font-extrabold text-center shadow-md tracking-wider">
        LIVESTATS
      </header>

      <main className="container mx-auto mt-4">
        {children}
      </main>

    </>
  );
}