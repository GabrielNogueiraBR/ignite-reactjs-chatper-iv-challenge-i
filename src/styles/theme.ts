import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    yellow: {
      "300": "#FFBA08",
    },
    gray: {
      "700": "#1D1D1D",
      "600": "#47585B",
      "400": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
