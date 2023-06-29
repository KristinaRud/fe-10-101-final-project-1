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
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import ScrollToTop from "./utils/scrollToTop/scrollToTopFunc";
import PageLoader from "./components/PageLoader/PageLoader";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <PageLoader />
              <Header />
              <BackToTopButton />
              <ScrollToTop />
              <AppRoute />
              <Footer />
            </StyledEngineProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
