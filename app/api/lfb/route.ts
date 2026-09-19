import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return new NextResponse("URL manquante", { status: 400 });
    }

    console.log("=== PROXY START ===");
    console.log("TARGET :", targetUrl);

    const response = await fetch(targetUrl, {
      method: "GET",
      cache: "no-store",
    });

    console.log("GENIUS STATUS :", response.status);

    const body = await response.text();

    console.log("GENIUS BODY LENGTH :", body.length);

    // On cherche combien d'éléments pbp sont présents
    try {
      const parsed = JSON.parse(body);

      console.log(
        "GENIUS PBP LENGTH :",
        Array.isArray(parsed.pbp) ? parsed.pbp.length : "PAS DE PBP"
      );

      console.log("GENIUS PERIOD :", parsed.period);
      console.log("GENIUS CLOCK :", parsed.clock);
    } catch {
      console.log("Impossible de parser le JSON");
    }

    console.log("=== PROXY END ===");

    return new NextResponse(body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("PROXY ERROR :", error);

    return new NextResponse("Erreur proxy", {
      status: 500,
    });
  }
}