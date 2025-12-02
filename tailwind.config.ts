import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        "netflix-red": "#E50914",
        "gaming-neon": "#00FFC6",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top, rgba(148, 163, 184, 0.25), transparent 60%), radial-gradient(circle at bottom, rgba(56, 189, 248, 0.18), transparent 60%)",
      },
      boxShadow: {
        "glow-red": "0 0 25px rgba(239, 68, 68, 0.6)",
        "glow-neon": "0 0 24px rgba(34, 211, 238, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
