import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import LeftSidebar from "../components/LeftSidear/LeftSidebar";

const AppRoute = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <LeftSidebar />
        </div>
      }
    />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
