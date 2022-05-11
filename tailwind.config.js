/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const tailwindConfig = {
  darkMode: "media",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "460px",
      },

      fontFamily: {
        "serif": "'Montserrat', sans-serif",
      },

      keyframes: {
        appearance: {
          "0%": { opacity: 0.0 },
          "100%": { opacity: 1.0 },
        },
      },

      animation: {
        appearance: "appearance 1s ease-in-out",
        disappearance: "appearance 1s ease-in-out reverse",
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
