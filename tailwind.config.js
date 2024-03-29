module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        summonersRift: "url('./assets/images/summoners_rift.webp')"
      },
    },
    fontFamily: {
      BeaufortforLOL: ["BeaufortforLOL"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
