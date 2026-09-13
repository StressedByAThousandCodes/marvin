import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-accent-1": "var(--bg-accent-1)",
        "bg-accent-2": "var(--bg-accent-2)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)",
        "accent-blue": "var(--accent-blue)",
        glass: "var(--surface-glass)",
        "glass-border": "var(--surface-glass-border)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backdropBlur: {
        glass: "16px",
      },
      keyframes: {
        blobDrift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "blob-drift": "blobDrift 22s ease-in-out infinite",
        "blob-drift-slow": "blobDrift 30s ease-in-out infinite reverse",
        "fade-up": "fadeUp 0.6s ease-out both",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;