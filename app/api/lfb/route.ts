import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return NextResponse.json(
        { error: "URL manquante" },
        { status: 400 }
      );
    }

    console.log("========== PROXY ==========");
    console.log("URL récupérée :", targetUrl);

    const response = await fetch(targetUrl, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    console.log("Statut Genius :", response.status);

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Erreur Genius Sports :",
        response.status,
        errorText
      );

      return NextResponse.json(
        {
          error: "Impossible de récupérer les données",
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    console.log(
      "Nombre de PBP reçus par le proxy :",
      data?.pbp?.length
    );

    console.log(
      "Premier PBP :",
      data?.pbp?.[0]
    );

    console.log(
      "Dernier PBP :",
      data?.pbp?.[data?.pbp?.length - 1]
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur proxy :", error);

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