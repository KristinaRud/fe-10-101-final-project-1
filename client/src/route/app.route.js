import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<div>Home Page</div>} />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
