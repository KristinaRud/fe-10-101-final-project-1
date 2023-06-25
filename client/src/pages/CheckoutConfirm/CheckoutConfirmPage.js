import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import KittyImg from "./icons/kitty.png";
import styles from "./CheckoutConfirmPage.module.scss";

const CheckoutConfirmPage = () => {
  return (
    <div className={styles.checkout}>
      <Box className={styles.checkout__wrapper}>
        <Typography className={styles.checkout__text}>
          Thanks for your order! Your order is received!
          <br />
          Thank You for Choosing Us!
          <Typography className={styles.checkout__text}>
            You can check your orders{" "}
            <Link className={styles.checkout__link} to="/account">
              here
            </Link>
          </Typography>
        </Typography>
        <img className={styles.checkout__img} src={KittyImg} alt="kitty.png" />
        <Typography className={styles.checkout__text}>
          You can find more products{" "}
          <Link className={styles.checkout__link} to="/">
            here
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default CheckoutConfirmPage;
