import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoute from "./route/app.route";
import store from "./store";
import theme from "./theme/createTheme";
import "./App.scss";

const App = () => (
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <AppRoute />
          </StyledEngineProvider>
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);

export default App;
