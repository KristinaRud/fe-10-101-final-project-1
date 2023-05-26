import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoute from "./route/app.route";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>
);

export default App;
