/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const tailwindConfig = {
  darkMode: "media",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "serif": "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
