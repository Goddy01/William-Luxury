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
        navy: {
          DEFAULT: "#0A1628",
          soft: "#122236",
          mid: "#1A2F45",
        },
        cream: {
          DEFAULT: "#F7F2EA",
          muted: "#E8E0D4",
          ivory: "#FBF8F3",
        },
        brass: {
          DEFAULT: "#C4A574",
          light: "#E0CBA0",
          deep: "#9A7B4A",
        },
        terracotta: {
          DEFAULT: "#B8785C",
          soft: "#D4A08A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.5rem, 10vw, 7.5rem)",
          { lineHeight: "0.92", letterSpacing: "0.04em" },
        ],
      },
      letterSpacing: {
        brand: "0.18em",
        royal: "0.32em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
        royal: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      backgroundImage: {
        "royal-fade":
          "linear-gradient(180deg, rgba(10,22,40,0.45) 0%, rgba(10,22,40,0.2) 40%, rgba(10,22,40,0.88) 100%)",
        "gold-shine":
          "linear-gradient(105deg, transparent 40%, rgba(224,203,160,0.15) 50%, transparent 60%)",
        "amalfi-glow":
          "radial-gradient(ellipse at 50% 80%, rgba(196,165,116,0.12) 0%, transparent 55%)",
      },
      boxShadow: {
        royal: "0 24px 80px rgba(10, 22, 40, 0.18)",
        "gold-glow": "0 0 40px rgba(196, 165, 116, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
