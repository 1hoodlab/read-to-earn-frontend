import { extendTheme, StyleConfig } from "@chakra-ui/react";

const components: Record<string, StyleConfig> = {
  Button: {
    variants: {
      black: {
        backgroundColor: "black",
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
    black: {
      100: "#000000",
      200: "#202226",
      300: "#B0B0B0",
    },
    white: {
      200: "#F1F1F1",
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