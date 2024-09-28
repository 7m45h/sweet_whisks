/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/*.js"],
  theme: {
    extend: {
      fontSize: {
        //Text styles desktop
        "h1-desktop": ["3.81rem", { lineHeight: "1.1", fontWeight: 700 }],
        "h2-desktop": ["3.06rem", { lineHeight: "1.1", fontWeight: 600 }],
        "a-desktop": ["1.25rem", { lineHeight: "1.4" }],
        "p-desktop": ["1rem", { lineHeight: "1.5" }],
        "p-small-desktop": ["0.875rem", { lineHeight: "1.6" }],
        //Text styles tablet
        "h1-tablet": ["3rem", { lineHeight: "1.05", fontWeight: 700 }],
        "h2-tablet": ["2.5rem", { lineHeight: "1.05", fontWeight: 600 }],
        "a-tablet": ["1.19rem", { lineHeight: "1.35" }],
        "p-tablet": ["1rem", { lineHeight: "1.45" }],
        "p-small-tablet": ["0.875rem", { lineHeight: "1.55" }],
        //Text styles mobile
        "h1-mobile": ["2rem", { lineHeight: "1", fontWeight: 700 }],
        "h2-mobile": ["1.812rem", { lineHeight: "1", fontWeight: 600 }],
        "a-mobile": ["1.125rem", { lineHeight: "1.3" }],
        "p-mobile": ["1rem", { lineHeight: "1.4" }],
        "p-small-mobile": ["0.875rem", { lineHeight: "1.5" }],
      },
      fontFamily: {
        heading: ["Recursive"],
        body: ["Nunito"],
      },
      colors: {
        primary: "#5FCAC7",
        accent: "#4CA29F",
        secondary: "#FD78AD",
        "secondary-shade": "#CA608A",
        white: "#FFFFFF",
        background: "#F0FAFA",
        "txt-darkGray": "#3A4343",
        "txt-lightGray": "#777A7A",
      },
    },
  },
  plugins: [
    //primary button
    function ({ addComponents, theme }) {
      addComponents({
        ".btn-primary": {
          padding: `4px 16px`,
          backgroundColor: theme("colors.primary"),
          color: theme("colors.white"),
          borderRadius: "20px",
          height: "auto",
          transition: "background-color 300ms ease",
          fontWeight: "bold",
          boxSizing: "border-box",
          "&:hover": {
            backgroundColor: theme("colors.accent"),
            transform: "scale(1.05)",
          },
        },
        ".btn-secondary": {
          padding: `4px 15px`,
          backgroundColor: theme("colors.white"),
          color: theme("colors.primary"),
          border: "2px solid",
          borderColor: theme("colors.primary"),
          borderRadius: "20px",
          height: "auto",
          transition: "background-color 300ms ease",
          fontWeight: "bold",
          boxSizing: "border-box",
          "&:hover": {
            backgroundColor: theme("colors.primary"),
            color: theme("colors.white"),
            transform: "scale(1.05)",
          },
        },
      });
    },
  ],
};
