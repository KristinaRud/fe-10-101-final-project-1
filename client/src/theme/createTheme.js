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
        sm: 480,
        md: 768,
        lg: 1200,
        xlg: 1400,
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
      MuiCssBaseline: {
        styleOverrides: `
        html, body, div, span, a, ul, li, header, footer, 
        h1, h2, h3, h4, h5, h6, p {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
        }
        a, 
        a:active {
          text-decoration: none;
          color: inherit;
        }
        ol, ul {
         list-style: none;
        }
        `,
      },
    },
  },
  enUS,
);

export default theme;
