import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import IconView from "../components/SortList/IconView/IconView";

const AppRoute = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <IconView />
        </div>
      }
    />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
