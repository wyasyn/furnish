/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        black: "hsl(var(--black))",
        success: "hsl(var(--success))",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
