/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F0712",
        panel: "#19101E",
        panel2: "#231627",
        cream: "#F4E8C6",
        cream2: "#E5D5A2",
        lime: "#C8E03A",
        flame: "#FF3340",
        flame2: "#DC2933",
        grape: "#5C2D8F",
        grape2: "#7B45B2",
        pitch: "#007A4D",
        pitch2: "#006847",
        maroon: "#6F1922",
        gold: "#FAE042"
      },
      fontFamily: {
        display: ['"Archivo Black"', "system-ui", "sans-serif"],
        block: ['"Bowlby One SC"', "system-ui", "sans-serif"],
        sans: ["Archivo", "system-ui", "sans-serif"],
        narrow: ['"Archivo Narrow"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"]
      },
      boxShadow: {
        hard: "6px 6px 0 0 #0F0712",
        "hard-flame": "6px 6px 0 0 #FF3340"
      }
    }
  },
  plugins: []
};
