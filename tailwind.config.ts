import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "off-white": "#f9f7f4",
        surface: "#f2efe9",
        "surface-deep": "#e8e3da",
        ink: "#1a1814",
        "ink-secondary": "#6b6560",
        "ink-tertiary": "#a09890",
        gold: "#9a7c4f",
        "gold-light": "#f5ede0",
        "gold-hover": "#7d6338",
        success: "#4a7c5a",
        error: "#8c3a2e",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
        wide: "1320px",
        narrow: "680px",
      },
      spacing: {
        "section-y": "clamp(80px, 10vw, 160px)",
        "section-x": "clamp(20px, 5vw, 80px)",
      },
      borderColor: {
        DEFAULT: "rgba(26,24,20,0.1)",
        strong: "rgba(26,24,20,0.2)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drawCheck: {
          from: { strokeDashoffset: "100" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "draw-check": "drawCheck 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
