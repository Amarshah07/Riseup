/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Base System
        bg: "#f6fafe",
        surface: "#ffffff",
        surfaceSoft: "#e7eff5",
        surfaceLow: "#eef4fa",

        // 🌊 Primary (Calm Blue)
        primary: "#535c8f",
        primaryLight: "#bac3fd",

        // 🌿 Secondary (Calm Green)
        secondary: "#466562",
        secondaryLight: "#c7e9e6",

        // 📝 Text
        textMain: "#2a343a",
        textSoft: "#566167",
      },

      // 🌙 Soft Shadows (NO harsh shadows)
      boxShadow: {
        soft: "0 12px 32px rgba(83, 92, 143, 0.06)",
      },

      // 🔵 Rounded System (important for your UI)
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
    },
  },
  plugins: [],
};