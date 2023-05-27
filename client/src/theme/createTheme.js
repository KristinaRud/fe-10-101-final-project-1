import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/700-italic.css";
import { createTheme } from "@mui/material/styles";
import { enUS } from "@mui/material/locale";

const theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1200,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: "Poppins",
      button: {
        textTransform: "initial",
      },
    },
    palette: {
      primary: {
        main: "#000",
        light: "#CACDD8",
        dark: "#666666",
        contrastText: "#A2A6B0",
      },
      secondary: {
        main: "#01A4FF",
        light: "#F5F7FF",
        dark: "#0156FF",
        contrastText: "#fff",
      },
      text: {
        main: "#000",
        secondary: "#A2A6B0",
      },
      background: {
        main: "#ECECEC",
        red: "#C94D3F",
        green: "#78A962",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            dashNumb: "p",
          },
        },
      },
    },
  },
  enUS,
);

export default theme;
