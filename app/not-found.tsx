// app/error.tsx

import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 text-center p-6">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-6">
        <Image
          src="/bo.png"
          alt="CARLAAAAAAAA"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
        La meilleure n'est pas là ! 😢
      </h1>
      <p className="text-gray-800 font-bold text-lg sm:text-xl mb-6">
        Retournez à l'accueil pour
        continuer.
      </p>
      <Link href="/" passHref>
        <button className="px-6 py-3 text-gray-800 bg-yellow-700 rounded-lg hover:bg-blue-600 shadow-md">
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}
