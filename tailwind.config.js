/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const tailwindConfig = {
  darkMode: "media",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "eerie-black": "#212222",
      "vk-brand": "#0277ff",
      "white": "#fafafa",
      "atctic-lime": "#489DFF",
      "current": "currentColor",
    },

    boxShadow: {
      "main": "0px 0px 13px 0px rgba(33,34,34,0.15)",
    },

    dropShadow: {
      "main": "0px 0px 5px rgba(33,34,34,0.15)",
    },

    fontSize: {
      "xl": ["54px", "78px"],
      "lg": ["24px", "35px"],
      "sm": ["20px", "25px"],
      "logo/sm": [
        "36px",
        {
          letterSpacing: "24.5%",
          lineHeight: "24px",
        },
      ],
      "logo/md": [
        "24px",
        {
          letterSpacing: "24.5%",
          lineHeight: "24px",
        },
      ],
    },

    gridTemplateColumns: {
      "1fr/auto": "1fr,auto",
      "3/2": "3fr,2fr",
    },

    screens: {
      "sm": "768px",
      "md": "1024px",
    },

    backdropBlur: {
      "xs": "8px",
    },

    extend: {
      transitionProperty: {
        "colors/shadow":
          "color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow",

        "opacity/height": "opacity, max-height min-height",
        "backdrop/shadow": "backdrop-filter, box-shadow",
        "transform/shadow": "transform, box-shadow",
      },

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
        "serif-alternate": "'Montserrat Alternate', sans-serif",
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

        "appearance-modal": {
          "0%": { opacity: 0.0, transform: "scale(0.9)" },
          "50%": { opacity: 0.5, transform: "scale(1.1)" },
          "100%": { opacity: 1.0, transform: "scale(1.0)" },
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
        "appearance-modal": "appearance-modal .5s ease",
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
