import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import Home from "../pages/Home/Home";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
