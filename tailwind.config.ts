import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F3563",
          dark: "#142348",
          light: "#2A4580",
        },
        steel: {
          DEFAULT: "#7B8FB5",
          light: "#A8B7D2",
          soft: "#DCE3F0",
        },
        accent: {
          DEFAULT: "#C9A96E",
          dark: "#A38450",
        },
        cream: {
          DEFAULT: "#F4F1EC",
          light: "#FAF8F4",
          warm: "#F4F1EC",
          blush: "#EFF2F8",
          mist: "#EFF2F8",
        },
        mist: "#EFF2F8",
        ink: "#1A1F2E",
        stone: {
          DEFAULT: "#5A6072",
          light: "#8A91A4",
        },
        // Legacy aliases pointing to brand palette
        navy: {
          DEFAULT: "#1F3563",
          light: "#2A4580",
          dark: "#142348",
        },
        teal: {
          DEFAULT: "#2A4580",
          light: "#7B8FB5",
        },
        sage: {
          DEFAULT: "#1F3563",
          dark: "#142348",
          light: "#2A4580",
          soft: "#A8B7D2",
        },
        gold: {
          DEFAULT: "#C9A96E",
          dark: "#A38450",
          light: "#DCC79A",
          soft: "#EAD9B6",
        },
        charcoal: "#1A1F2E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
        script: ["var(--font-script)", "Italianno", "cursive"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1280px" },
      },
      boxShadow: {
        card: "0 4px 24px rgba(31,53,99,0.08)",
        "card-hover": "0 12px 40px rgba(31,53,99,0.16)",
        soft: "0 2px 12px rgba(31,53,99,0.06)",
      },
    },
  },
  plugins: [typography],
};

export default config;
