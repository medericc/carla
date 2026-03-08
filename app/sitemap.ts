import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carlaleitefan.com";
  const now = new Date();

  return [
    // Home
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },

    // Directory
    {
      url: `${baseUrl}/directory`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // App
    {
      url: `${baseUrl}/application`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

 

    // Stats joueurs
    {
      url: `${baseUrl}/stats/ines`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stats/jade`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stats/lena`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stats/lucile`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

   
    // LiveStats joueurs
    {
      url: `${baseUrl}/livestats/ines`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/livestats/jade`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/livestats/lena`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/livestats/lou`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/livestats/lucile`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Schedule
    {
      url: `${baseUrl}/jade-schedule`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Légal
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
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}