import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
  "2k": "2048px",
  "4k": "3840px",
},
      fontFamily: {
        heroic: ['Heroic', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': 'rgb(26, 26, 26)',
      },
      animation: {
        scrollText: 'scrollText 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
