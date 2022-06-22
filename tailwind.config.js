/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      softred: "hsl(var(--soft-red) / <alpha-value>)",
      cyan: "hsl(var(--cyan) / <alpha-value>)",
      darkbrown: "hsl(var(--dark-brown) / <alpha-value>)",
      mediumbrown: "hsl(var(--medium-brown) / <alpha-value>)",
      cream: "hsl(var(--cream) / <alpha-value>)",
      paleorange: "hsl(var(--pale-orange) / <alpha-value>)",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
