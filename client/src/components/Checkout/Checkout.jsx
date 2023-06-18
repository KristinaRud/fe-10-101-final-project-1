import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SignInButton from "./SignInButton/SignInButton";
import s from "./Checkout.module.scss";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import { selectCustomers } from "../../store/selectors/customers.selector";

const Checkout = () => {
  const { isLogin } = useSelector(selectCustomers);
  return (
    <div className={s.wrapper}>
      <div className={s["form-wrapper"]}>
        <div className={s["title-wrapper"]}>
          <Typography variant="h5" component="h4" className={s.title}>
            Checkout
          </Typography>
          {!isLogin && <SignInButton />}
        </div>
        <Typography variant="h6" component="h5" className={s["form-title"]}>
          Shipping Address
        </Typography>
        <CheckoutForm />
      </div>
      <OrderSummary />
    </div>
  );
};

export default Checkout;
