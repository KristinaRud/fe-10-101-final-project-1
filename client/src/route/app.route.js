import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import LoginPage from "../pages/Login/Login";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Product from "../components/Product/Product";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Product />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
