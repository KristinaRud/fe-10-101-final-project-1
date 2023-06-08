import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NotPage from "../pages/NotPage/NotPage";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Category from "../pages/Category/Category";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import { selectCustomers } from "../store/selectors/customers.selector";

const AppRoute = () => {
  const { isLogin } = useSelector(selectCustomers);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

export default AppRoute;
