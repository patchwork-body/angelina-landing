/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const tailwindConfig = {
  darkMode: "media",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },

      boxShadow: {
        "spread": "0 0.1rem 0.5rem 0.5rem rgb(248 250 252 / 0.3)",
      },

      scale: {
        "mirror": "-1",
      },

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

        "appearance-75": {
          "0%": { opacity: 0.0 },
          "100%": { opacity: 0.75 },
        },

        "comics-appearance": {
          "0%": { opacity: 0.0, transform: "scaleX(1) scaleY(1)" },
          "50%": { opacity: 0.5, transform: "scaleX(1.2) scaleY(1.2)" },
          "100%": { opacity: 1.0, transform: "scaleX(1) scaleY(1)" },
        },

        "comics-appearance-mirror": {
          "0%": { opacity: 0.0, transform: "scaleX(-1) scaleY(1)" },
          "50%": { opacity: 0.5, transform: "scaleX(-1.2) scaleY(1.2)" },
          "100%": { opacity: 1.0, transform: "scaleX(-1) scaleY(1)" },
        },
      },

      animation: {
        appearance: "appearance 1s ease-in-out",
        "comics-appearance": "comics-appearance 1s ease-in-out forwards",
        "comics-appearance-mirror": "comics-appearance-mirror 1s ease-in-out forwards",
        "comics-appearance-mirror-with-delay":
          "comics-appearance-mirror 1s ease-in-out 1s forwards",
        "appearance-75": "appearance-75 1s ease-in-out",
        disappearance: "appearance 1s ease-in-out reverse",
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
