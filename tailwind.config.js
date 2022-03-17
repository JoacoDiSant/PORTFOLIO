module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      phone: "375px",

      tablet: "600px",

      laptop: "1024px",

      desktop: "1280px",
    },

    extend: {

      margin:{
        '500': '500px'
      },

      colors: {
        "dark-violet": "#88ACC2",
        "btn-violet": "#e05757",
        "btn-violet-hover": "#cb4343",
      },

      keyframes: {
        scrolls: {
          "0%": {
            transform: "translateY(-100rem)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },

        colors: {
          "0%": {
            color: "#4C5745",
          },
          "33%": {
            color: "#4BBD6A",
          },
          "66%": {
            color: "#573763",
          },
          "100%": {
            color: "#73608A",
          },
        },

        subrallado: {
          "0%": {
            "border-bottom-color": "rgb(76, 87, 69, 1)",
          },
          "33%": {
            "border-bottom-color": "#rgb(75, 189, 106, 0.8)",
          },
          "66%": {
            "border-bottom-color": "rgb(87, 55, 99, 0.5)",
          },
          "100%": {
            "border-bottom-color": "rgb(115, 96, 138, 0.3)",
          },
        },

        bordeado: {
          "0%": {
            "border-color": "rgb(76, 87, 69, 1)",
          },
          "33%": {
            "border-color": "#rgb(75, 189, 106, 0.8)",
          },
          "66%": {
            "border-color": "rgb(87, 55, 99, 0.5)",
          },
          "100%": {
            "border-color": "rgb(115, 96, 138, 0.3)",
          },
        },

        movePlaneSend: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(50px)",
          },
        },
      },

      animation: {
        scrolls: "scrolls 1s ease 0s 1 ",
        colors: "colors 5s infinite alternate-reverse both",
        subrallado: "subrallado 5s infinite alternate-reverse both",
        bordeado: "bordeado 5s infinite alternate-reverse both",
        movePlaneSend: "movePlaneSend 5s infinite alternate-reverse both",
      },
    },
  },
  plugins: [],
};
