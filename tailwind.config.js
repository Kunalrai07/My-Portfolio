/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          background: "#050A10",
          card: "#0C1322",
          border: "#1F315E",
          cyan: "#00E5FF",
          fuchsia: "#D100D1",
          textMain: "#E2E8F0",
          textMuted: "#94A3B8"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right bottom, #050A10, #03060A)',
      }
    },
  },
  plugins: [],
}
