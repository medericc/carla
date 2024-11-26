// app/error.tsx
"use client"
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Image de Messi */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-6">
        <Image
          src="/bo.png"
          alt="Messi avec le Ballon d'Or"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* Message principal */}
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
        Oups... La meilleure n'est pas là ! 😢
      </h1>
      <p className="text-gray-600 text-lg sm:text-xl mb-8">
        Il semblerait qu'une erreur se soit produite. Retournez à l'accueil pour
        continuer.
      </p>

      {/* Bouton pour revenir à la page d'accueil */}
      <Link href="/" passHref>
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 shadow-md">
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}
