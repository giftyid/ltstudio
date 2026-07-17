/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Retro-Futuristic "Cinematic Neon" anchor tokens
        bg: "#0A0014",
        "bg-soft": "#12002a",
        "bg-panel": "#17042f",
        ink: "#EDE6FF",
        "ink-dim": "#A99CC9",
        magenta: "#FF006E",
        cyan: "#00FFFF",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "system-ui", "sans-serif"],
        accent: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}

