import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import ContactUs from "../pages/ContactUs/ContactUs";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="*" element={<NotPage />} />
  </Routes>
);

export default AppRoute;
