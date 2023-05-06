import { extendTheme, StyleConfig } from "@chakra-ui/react";

const components: Record<string, StyleConfig> = {
  Button: {
    variants: {
      black: {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
};

const theme = extendTheme({
  components,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  colors: {
    red: {
      500: "#FF6161",
    },
    black: {
      100: "#000000",
      200: "#202226",
      300: "#B0B0B0",
    },
    white: {
      200: "#F1F1F1",
      300: "#5A5A5A",
    },
    blue: {
      100: "#1463FF",
      200: "#1D90F4",
      300: "#C5EBFF",
      500: "#1463FF",
    },
  },
});

export default theme;
