// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Roboto, sans-serif",
    mainTitle: "Montserrat, sans-serif",
  },

  colors: {
    primaryWhite: "#ffffff",
    primaryBlue: "#385095",
    primaryRed: "#e83636",
    primaryGrey: "#d8d7dd",
  },
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  },
});

export default theme;
