/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        fellFrench:["IM Fell French Canon SC", "serif"],
        DancingScript:["Dancing Script","cursive"],
        monoSpace:["OpenSans"],
        openSans:["PtSerif"],
        ptSerif:["SpaceMono"]
      }
    },
  },
  plugins: [],
}

