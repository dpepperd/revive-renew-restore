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
        
        // Semantic names mapped to CSS variables
        primary: "var(--primary-color)",
        "primary-hover": "var(--primary-hover)",
        "bg-main": "var(--background-main)",
        "bg-section": "var(--background-section)",
        "card-bg": "var(--card-background)",
        "txt-primary": "var(--text-primary)",
        "txt-secondary": "var(--text-secondary)",
        "txt-light": "var(--text-light)",
        "border-theme": "var(--border-color)",
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