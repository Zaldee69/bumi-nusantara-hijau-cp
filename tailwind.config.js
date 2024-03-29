/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./molecules/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#333F4F",
          secondary: "#84716B"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
