module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled:true,
    content:["./src/**/*.{js,ts,jsx,tsx}"]},
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      spacing: { 58: "240 px" },
    },
  },
  variants: {},
  plugins: [],
};
