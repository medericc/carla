import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return new NextResponse("URL manquante", { status: 400 });
    }

    const response = await fetch(targetUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      return new NextResponse("Erreur Genius", {
        status: response.status,
      });
    }

    // IMPORTANT : on récupère le JSON BRUT
    const body = await response.text();

    console.log("TAILLE REPONSE GENIUS :", body.length);

    // On ne parse PAS le JSON.
    // On le renvoie tel quel.
    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error(error);

    return new NextResponse("Erreur proxy", {
      status: 500,
    });
  }
}