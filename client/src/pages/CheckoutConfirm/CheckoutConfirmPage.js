import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import KittyImg from "./icons/kitty.png";
import styles from "./CheckoutConfirmPage.module.scss";

const CheckoutConfirmPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.checkout}>
      <Box className={styles.checkout__wrapper}>
        <Typography className={styles.checkout__text} color="green">
          <CheckCircleIcon color="green" /> Your order was successful! Thanks
          for Choosing Us!
        </Typography>
        <Box className={styles.checkout__container}>
          <img
            className={styles.checkout__img}
            src={KittyImg}
            alt="kitty.png"
          />
          <Typography className={styles.checkout__text}>
            <Link
              className={styles.checkout__link}
              to="/account"
              onClick={() => navigate("/")}
            >
              Click here to check your orders
            </Link>
            <Typography className={styles.checkout__text}>
              <Link
                className={styles.checkout__link}
                to="/"
                onClick={() => navigate("/")}
              >
                Here you can find more products
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutConfirmPage;
