import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper, #121212)",
        "paper-2": "var(--color-surface, #1a1a1a)",
        surface: "var(--color-surface, #1a1a1a)",
        "surface-2": "#222222",
        shade: "var(--color-shade, #101010)",
        void: "var(--color-void, #000000)",
        ink: "var(--color-ink, #f4f4f4)",
        "ink-2": "var(--color-ink-2, #c6c6c6)",
        muted: "var(--color-muted, #8e8e8e)",
        line: "var(--color-line, #2a2a2a)",
        "line-2": "var(--color-line-2, #3a3a3a)",
        "line-bright": "var(--color-line-2, #3a3a3a)",
        accent: "var(--color-accent, #ff6100)",
        "accent-strong": "var(--color-accent-strong, #ff7a24)",
        "accent-soft": "var(--color-accent-soft, #ff8e10)",
        "accent-tint": "var(--color-accent-tint, #24140a)",
        ok: "var(--color-ok, #4cc26b)",
        "segmented-track": "var(--color-segmented-track, #262626)",
        "segmented-thumb": "var(--color-segmented-thumb, #161616)",
        "segmented-line": "var(--color-segmented-line, #333333)",
        vertra: {
          orange: "#ff6100",
          green: "#4cc26b",
          cyan: "#38bdf8",
          violet: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--f-geist)", "Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--f-geist-mono)", "Geist Mono", "JetBrains Mono", "monospace"],
        serif: ["var(--f-display)", "Source Serif 4", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "sheen-glide": "sheen 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sheen: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
