import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

interface Play {
  period: string;
  time: string;
  action: string;
}

// 🧩 Parsing du XML PrestoSports
async function parsePlays(xml: string): Promise<Play[]> {
  const $ = cheerio.load(xml);
  const plays: Play[] = [];

  let currentPeriod = "1";

  // Chaque table représente souvent une période
  $("table").each((_, table) => {
    const caption = $(table).find("caption").text().trim();
    if (caption) {
      const num = caption.match(/\d+/);
      if (num) currentPeriod = num[0];
    }

    // Parcourt chaque ligne de jeu
    $(table)
      .find("tr")
      .each((_, tr) => {
        const time = $(tr).find("td.time").text().trim();
        const actionText = $(tr).find("td.play .text").text().trim();

        if (!time || !actionText) return;

        plays.push({
          period: currentPeriod,
          time,
          action: actionText,
        });
      });
  });

  // 🧹 Tri : par période puis par temps croissant
  const toSeconds = (t: string) => {
    const [m, s] = t.split(":").map(Number);
    return m * 60 + s;
  };
  plays.sort((a, b) => {
    const pOrder = parseInt(a.period) - parseInt(b.period);
    if (pOrder !== 0) return pOrder;
    return toSeconds(b.time) - toSeconds(a.time); // plus grand chrono d'abord
  });

  return plays;
}

// 🌍 API route
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const matchUrl = searchParams.get("url");

    if (!matchUrl) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    console.log("🔗 Fetch:", matchUrl);
  const res = await fetch(matchUrl, {
  cache: "no-store",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    Referer: "https://njcaastats.prestosports.com/",
  },
}); const xml = await res.text();

    const actions = await parsePlays(xml);

    console.log(`✅ ${actions.length} actions trouvées`);
    return NextResponse.json({ actions });
  } catch (err) {
    console.error("❌ Erreur backend:", err);
    return NextResponse.json(
      { error: "Scraping failed or bad XML structure" },
      { status: 500 }
    );
  }
}
