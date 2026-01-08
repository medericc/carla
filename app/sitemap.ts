import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carlaleitefan.com";
  const now = new Date();

  return [
    // 🏠 Page principale
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },

   

    // 📂 Directory (index interne)
    {
      url: `${baseUrl}/directory`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // 👤 Pages personnes
    {
      url: `${baseUrl}/lucile`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/jade`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ⚖️ Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
