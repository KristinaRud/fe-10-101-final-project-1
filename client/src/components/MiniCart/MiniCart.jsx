import PropTypes from "prop-types";
import { uid } from "react-uid";
import { Typography } from "@mui/material";
import MiniCartItem from "./components/MiniCart-item";
import styles from "./MiniCart.module.scss";
import paypal from "../../assets/images/minicart/paypal icon.svg";

const MiniCart = ({ products }) => {
  return (
    <div className={styles.cart}>
      <div>
        <Typography variant="h6" component="p" fontSize={18} fontWeight={600}>
          My Cart
        </Typography>
        <Typography
          className={styles.cart__subtitle}
          component="p"
          fontSize={12}
        >
          {products.length} item in cart
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.cart__link} href="#">
          View or Edit Your Cart
        </a>
      </div>
      {products.map((item) => {
        return (
          <MiniCartItem
            key={uid(item)}
            url="https://c.ua/image/cache/catalog/PosokhovRoman/sonyPS/microsoft-xbox-series-x-1tb-500x500.jpg"
            title={item.title}
            count={3}
          />
        );
      })}
      <div>
        <p className={styles.cart__price}>
          <Typography component="span" fontSize={14} color="#A2A6B0">
            Subtotal:
          </Typography>
          {" $"}0
        </p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.cart__link} href="#">
          Go to Checkout
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.cart__link} href="#">
          Check out with
          <img src={paypal} alt="paypal logo" />
        </a>
      </div>
    </div>
  );
};

MiniCart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array.isRequired,
};

export default MiniCart;
