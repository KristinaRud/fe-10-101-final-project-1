import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import LoginPage from "../pages/Login/Login";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import CategoriesList from "../components/CategoriesProducts/CategoriesList/CategoriesList";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<CategoriesList />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
