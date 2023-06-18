import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import AppRoute from "./route/app.route";
import store from "./store";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import theme from "./theme/createTheme";
import "./App.scss";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <Header />
          <AppRoute />
          <Footer />
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
