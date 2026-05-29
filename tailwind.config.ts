import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080b10",
        ink2: "#0b0f15",
        surface: "#10161f",
        surface2: "#161f2a",
        surface3: "#1d2835",
        brand: "#1fd98a",
        brand2: "#16b673",
        gold: "#efc15c",
        blue: "#4d9dff",
        txt: "#eef3f8",
        muted: "#98a6b5",
        dim: "#5e6b79",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
