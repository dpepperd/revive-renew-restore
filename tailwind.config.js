/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2C2C2C",
        "electric-blue": "#00A3E0",
        "metallic-silver": "#A8A9AD",
        "safety-orange": "#FF5F15",
        "deep-gold": "#C5B358",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        tech: ["var(--font-orbitron)"],
        heading: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};