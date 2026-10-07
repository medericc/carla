import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  console.log("========================================");
  console.log("🏀 [API] GET /api/matches");
  console.log("========================================");

  try {
    const url =
      "https://goconqs.com/sports/womens-basketball/schedule/2026-27";

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      },
      cache: "no-store",
    });

    console.log("📡 [API] HTTP status :", response.status);
    console.log("📡 [API] response.ok :", response.ok);

    if (!response.ok) {
      throw new Error(
        `GoConqs ${response.status} ${response.statusText}`
      );
    }

    const html = await response.text();

    console.log("📄 [API] Taille HTML :", html.length);
    console.log(
      "🔍 [API] TABLE :",
      html.includes("<table")
    );
    console.log(
      "🔍 [API] JUCO Jamboree :",
      html.includes("JUCO Jamboree")
    );
    console.log(
      "🔍 [API] October 3 :",
      html.includes("October 3")
    );
    console.log(
      "🔍 [API] sidearm-schedule-game :",
      html.includes("sidearm-schedule-game")
    );

    const $ = cheerio.load(html);
console.log("========================================");
console.log("🔎 RECHERCHE STRUCTURE JUCO");
console.log("========================================");

console.log(
  "🔢 Nombre .sidearm-schedule-game :",
  $(".sidearm-schedule-game").length
);

console.log(
  "🔢 Nombre tr :",
  $("tr").length
);

console.log(
  "🔢 tr contenant JUCO :",
  $("tr")
    .filter((_, el) =>
      $(el).text().includes("JUCO Jamboree")
    )
    .length
);

console.log(
  "🔢 .sidearm-schedule-game contenant JUCO :",
  $(".sidearm-schedule-game")
    .filter((_, el) =>
      $(el).text().includes("JUCO Jamboree")
    )
    .length
);

$(".sidearm-schedule-game")
  .filter((_, el) =>
    $(el).text().includes("JUCO Jamboree")
  )
  .each((i, el) => {
    console.log("🔥🔥 ELEMENT JUCO TROUVÉ");
    console.log("TAG :", el.tagName);
    console.log("CLASSES :", $(el).attr("class"));
    console.log("TEXTE :", $(el).text().replace(/\s+/g, " ").trim());
    console.log(
      "HTML :",
      $.html(el).substring(0, 5000)
    );
  });

$("tr")
  .filter((_, el) =>
    $(el).text().includes("JUCO Jamboree")
  )
  .each((i, el) => {
    console.log("🔥🔥 TR JUCO TROUVÉ");
    console.log("HTML :", $.html(el).substring(0, 5000));
  });

console.log("========================================");
    const matches: any[] = [];

    // ==================================================
    // TABLEAU DES MATCHS
    // ==================================================

  $(".sidearm-schedule-game").each((i, el) => {
  // ==================================================
  // DATE
  // ==================================================

  const dateRaw = $(el)
    .find(".sidearm-schedule-game-opponent-date")
    .text()
    .replace(/\s+/g, " ")
    .trim();

  // ==================================================
  // ADVERSAIRE
  // ==================================================

  const opponent = $(el)
    .find(".sidearm-schedule-game-opponent-name")
    .text()
    .replace(/\s+/g, " ")
    .trim();

  // ==================================================
  // DOMICILE / EXTÉRIEUR
  // ==================================================

  const atRaw = $(el)
    .find(".sidearm-schedule-game-away")
    .text()
    .replace(/\s+/g, " ")
    .trim();

  // ==================================================
  // HEURE
  // ==================================================

const gameText = $(el)
  .text()
  .replace(/\s+/g, " ")
  .trim();

const timeMatchRaw = gameText.match(
  /\b(\d{1,2}:\d{2}\s*(?:am|pm))\b/i
);

const timeRaw = timeMatchRaw
  ? timeMatchRaw[1]
  : "TBD";

  // ==================================================
  // LIEU
  // ==================================================

  const location = $(el)
    .find(".sidearm-schedule-game-location")
    .first()
    .text()
    .replace(/\s+/g, " ")
    .trim();

  // ==================================================
  // LOGO
  // ==================================================

  let logoSrc =
    $(el)
      .find(".sidearm-schedule-game-opponent-logo img")
      .attr("data-src") ||
    $(el)
      .find(".sidearm-schedule-game-opponent-logo img")
      .attr("src") ||
    `/${i + 1}.webp`;

  // Transformer les URLs relatives en URL GoConqs
  if (logoSrc.startsWith("/")) {
    logoSrc = `https://goconqs.com${logoSrc}`;
  }

  // ==================================================
  // LIEN VIDEO
  // ==================================================

  const link =
    $(el)
      .find(
        'a[href*="youtube"], a[href*="watch"], a[href*="live"]'
      )
      .first()
      .attr("href") || null;

  // ==================================================
  // LOGS
  // ==================================================

  console.log("========================================");
  console.log("🏀 MATCH", i);
  console.log("📅 Date :", dateRaw);
  console.log("🕐 Heure :", timeRaw);
  console.log("🏠/✈️ :", atRaw);
  console.log("🏀 Adversaire :", opponent);
  console.log("📍 Lieu :", location);

  // ==================================================
  // DATE
  // ==================================================

  const dateMatch = dateRaw.match(
    /([A-Za-z]+)\s+(\d{1,2})\s+\(.*?\)/
  );

  if (!dateMatch) {
    console.log(
      "⚠️ Date non reconnue :",
      dateRaw
    );
    return;
  }

  const [, monthName, day] = dateMatch;

  // L'année n'est pas affichée dans "Oct 3 (Sat)"
  // donc on récupère l'année depuis l'URL :
  // 2026-27
  const seasonYear = 2026;

  const months: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const month = months[monthName];

  if (!month) {
    console.log(
      "⚠️ Mois inconnu :",
      monthName
    );
    return;
  }

  const dayNumber = Number(day);

  // Pour les mois de janvier à juin,
  // on est dans l'année suivante.
  const year =
    Number(month) >= 8
      ? seasonYear
      : seasonYear + 1;

  const dayLabel =
    `${month}/${String(dayNumber).padStart(2, "0")}/${year}`;

  // ==================================================
  // HEURE
  // ==================================================

  let hourLabel = "TBD";

  const timeMatch = timeRaw.match(
    /^(\d{1,2}):(\d{2})\s*(am|pm)$/i
  );

  if (timeMatch) {
    let hour = Number(timeMatch[1]);
    const minute = timeMatch[2];
    const period = timeMatch[3].toLowerCase();

    if (period === "pm" && hour !== 12) {
      hour += 12;
    }

    if (period === "am" && hour === 12) {
      hour = 0;
    }

    hourLabel =
      `${String(hour).padStart(2, "0")}:${minute}`;
  }

  // ==================================================
  // VÉRIFICATION
  // ==================================================

  if (!opponent) {
    console.log(
      "⚠️ Aucun adversaire, match ignoré"
    );
    return;
  }

  // ==================================================
  // MATCH FINAL
  // ==================================================

  const match = {
    "match.opponent": opponent,
    dayLabel,
    hourLabel,
    "match.opponentLogo": logoSrc,
    "match.link": link,
  };
console.log("MATCH FINAL :", {
  dayLabel,
  hourLabel,
  opponent,
});
  console.log(
    "✅ [API] MATCH AJOUTÉ :",
    match
  );

  matches.push(match);
});

    console.log("========================================");
    console.log(
      "🏀 [API] TOTAL MATCHS :",
      matches.length
    );
    console.log("========================================");

    console.log(
      "🔥🔥🔥 MATCHES AVANT RETURN :",
      matches
    );

    console.log(
      "🔥🔥🔥 NOMBRE :",
      matches.length
    );

    return NextResponse.json(matches);

  } catch (error) {
    console.error(
      "❌ [API] ERREUR SCRAPING :",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to scrape schedule",
        details:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}