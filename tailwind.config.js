module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        summonersRift: "url('./assets/summoners_rift.webp')"
      },
    },
    fontFamily: {
      OAGothicExtraBold: ["OAGothic-ExtraBold"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
