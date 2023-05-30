import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import AppRoute from "./route/app.route";
import store from "./store";
// import Footer from "./components/Footer/Footer";
import theme from "./theme/createTheme";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <AppRoute />
        </StyledEngineProvider>
      </ThemeProvider>
      {/* <Footer /> */}
    </BrowserRouter>
  </Provider>
);

export default App;
