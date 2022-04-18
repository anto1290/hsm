const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-page": "url('/img/loginPage.jpg')",
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    require("tw-elements/dist/plugin"),
  ],
};
