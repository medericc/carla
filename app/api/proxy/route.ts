
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL est requise" },
      { status: 400 }
    );
  }

  try {
    console.log("========== PROXY GENIUS SPORTS ==========");
    console.log("URL :", url);

    // Vérification de l'adresse pour éviter les requêtes externes arbitraires.
    const targetUrl = new URL(url);

    if (
      targetUrl.hostname !==
      "fibalivestats.dcd.shared.geniussports.com" ||
      !targetUrl.pathname.endsWith("/data.json")
    ) {
      return NextResponse.json(
        { error: "URL Genius Sports non autorisée" },
        { status: 400 }
      );
    }

    // Requête vers Genius Sports avec les en-têtes de la deuxième méthode.
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0",
        Referer:
          "https://fibalivestats.dcd.shared.geniussports.com/",
      },
    });

    console.log("STATUS :", response.status);
    console.log(
      "CONTENT TYPE :",
      response.headers.get("content-type")
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("ERREUR GENIUS :", errorText);

      return NextResponse.json(
        {
          error: "Genius Sports refuse la requête",
          status: response.status,
          details: errorText.substring(0, 500),
        },
        { status: response.status }
      );
    }

    // Lecture du contenu brut avant de le convertir en JSON.
    const text = await response.text();

    console.log("TAILLE :", text.length);
    console.log("DÉBUT :", text.substring(0, 500));

    const data = JSON.parse(text);

    console.log("NOMBRE D'ACTIONS :", data?.pbp?.length);

    if (!Array.isArray(data?.pbp)) {
      console.error("Le JSON ne contient pas de tableau pbp.");

      return NextResponse.json(
        { error: "Les données reçues ne contiennent pas de tableau pbp." },
        { status: 502 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur du proxy :", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}

