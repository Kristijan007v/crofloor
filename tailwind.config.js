module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-bg": "#F4F5F4",
        "primary-yellow": "#F0EDE8",
        "primary-gray": "#C4C4C4",
        secondary: "#ff9800",
        tertiary: "#ff5722",
        quaternary: "#9c27b0",
        quinary: "#2196f3",
        "yellow-special": "#FFE1AE",
      },
      backgroundImage: {
        "hero-image": "url('/public/images/hero-image.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
