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
import CheckoutConfirmPage from "../pages/CheckoutConfirm/CheckoutConfirmPage";
import NotFoundPage from "../pages/NotFound/NotFound";
import Layout from "../pages/Layout/Loyaut";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AdminCategories from "../pages/AdminPanel/Categories/AdminCategories";
import CollectionTable from "../components/Admin/Category/CollectionTable/CollectionTable";
import AddNewForm from "../components/Admin/Category/AddNewForm/AddNewForm";
import AdminProducts from "../pages/AdminPanel/Products/AdminProducts";
import ProductsTable from "../components/Admin/Products/ProductsTable/ProductsTable";
import AddNewProductForm from "../components/Admin/Products/AddNewProductForm/AddNewProductForm";
import AdminFilters from "../pages/AdminPanel/Filters/AdminFilters";
import FiltersTable from "../components/Admin/Filters/FiltersTable/FiltersTable";
import AddNewFiltersForm from "../components/Admin/Filters/AddNewFiltersForm/AddNewFiltersForm";
import AdminNews from "../pages/AdminPanel/News/AdminNews";
import NewsTable from "../components/Admin/News/NewsTable/NewsTable";
import AddNewsForm from "../components/Admin/News/AddNewsForm/AddNewsForm";
import AdminOrders from "../pages/AdminPanel/Orders/AdminOrders";
import UnsubscribePage from "../pages/Unsubscribe/UnsubscribePage";

const AppRoute = () => {
  const { isLogin } = useSelector(selectCustomers);
  const isAdmin = window.localStorage.getItem("isAdmin");
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
        <Route
          path="/checkout-confirm-page"
          element={isLogin ? <CheckoutConfirmPage /> : <Navigate to="/" />}
        />
        <Route path="/error" element={<NotFoundPage />} />
        <Route path="/unsubscribe" element={<UnsubscribePage />} />
      </Route>
      <Route
        path="/admin"
        element={isAdmin ? <AdminPanel /> : <Navigate to="/" />}
      >
        <Route path="categories" element={<AdminCategories />}>
          <Route path="" element={<CollectionTable />} />
          <Route path="new" element={<AddNewForm />} />
          <Route path=":category" element={<AddNewForm />} />
        </Route>
        <Route path="products" element={<AdminProducts />}>
          <Route path="" element={<ProductsTable />} />
          <Route path="new" element={<AddNewProductForm />} />
          <Route path=":product" element={<AddNewProductForm />} />
        </Route>
        <Route path={"filters"} element={<AdminFilters />}>
          <Route path="" element={<FiltersTable />} />
          <Route path="new" element={<AddNewFiltersForm />} />
          <Route path=":filter" element={<AddNewFiltersForm />} />
        </Route>
        <Route path={"news"} element={<AdminNews />}>
          <Route path="" element={<NewsTable />} />
          <Route path="new" element={<AddNewsForm />} />
          <Route path=":news" element={<AddNewsForm />} />
        </Route>
        <Route path={"orders"} element={<AdminOrders />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
