import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoute from "./route/app.route";
import store from "./store";
import Footer from "./components/Footer/Footer";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoute />
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
