import { Typography } from "@mui/material";
import SignInButton from "./SignInButton/SignInButton";
import s from "./Checkout.module.scss";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSummary from "./OrderSummary/OrderSummary";

const Checkout = () => {
  return (
    <div className={s.wrapper}>
      <div className={s["form-wrapper"]}>
        <div className={s["title-wrapper"]}>
          <Typography variant="h5" component="h4" className={s.title}>
            Checkout
          </Typography>
          <SignInButton />
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
