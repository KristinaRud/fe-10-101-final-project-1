import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Category from "../pages/Category/Category";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import { selectCustomers } from "../store/selectors/customers.selector";
import AccountPage from "../pages/Account/AccountPage";
import Registration from "../pages/Registration/Registration";
import WishList from "../pages/WishList/WishList";
import ContactUs from "../pages/ContactUs/ContactUs";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import ComparisonProducts from "../pages/ComparisonProducts/ComparisonProducts";
import NotFoundPage from "../pages/NotFound/NotFound";
import Layout from "../pages/Layout/Loyaut";
import AdminPanel from "../pages/AdminPanel/AdminPanel";

const AppRoute = () => {
  const { isLogin } = useSelector(selectCustomers);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/:category/:id" element={<SingleProduct />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-of-use" element={<TermsAndConditions />} />
        <Route
          path="/account/*"
          element={isLogin ? <AccountPage /> : <LoginPage />}
        />
        <Route
          path="/sign-up"
          element={isLogin ? <Navigate to="/" /> : <Registration />}
        />
        <Route path="/wishlist" element={<WishList />} />
        <Route
          path="/compare-products"
          element={isLogin ? <ComparisonProducts /> : <Navigate to="/" />}
        />
        <Route path="/error" element={<NotFoundPage />} />
      </Route>
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default AppRoute;
