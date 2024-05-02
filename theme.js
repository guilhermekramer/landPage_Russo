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
});

export default theme;
