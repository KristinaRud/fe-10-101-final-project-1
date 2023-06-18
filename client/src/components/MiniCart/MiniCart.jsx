import { uid } from "react-uid";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MiniCartItem from "./components/MiniCart-item";
import styles from "./MiniCart.module.scss";
import { selectShoppingCart } from "../../store/selectors/shoppingCart.selector";

const MiniCart = ({ onClick }) => {
  const { itemsCart } = useSelector(selectShoppingCart) ?? [];
  const subtotalAmount = itemsCart
    ?.map(({ currentPrice, cartQuantity }) => currentPrice * cartQuantity)
    .reduce((prev, curr) => prev + curr, 0);
  const itemsInCart = itemsCart
    ?.map(({ cartQuantity }) => cartQuantity)
    .reduce((prev, curr) => prev + curr, 0);
  const tax = subtotalAmount * 0.08;
  const shipping = 100;
  const totalAmount = (subtotalAmount + tax + shipping).toFixed(2);

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
          {itemsInCart}
          {itemsInCart > 1 ? " items" : " item"} in cart
        </Typography>
        <Link
          to={"/shopping-cart"}
          className={styles.cart__link}
          onClick={onClick}
        >
          View or Edit Your Cart
        </Link>
      </div>
      <div className={styles.cart__list}>
        {itemsCart.map((item) => {
          return (
            <MiniCartItem
              key={uid(item)}
              url={item.image}
              title={item.alt}
              count={item.cartQuantity}
              id={item.id}
            />
          );
        })}
      </div>
      <div>
        {itemsInCart ? (
          <>
            <p className={styles.cart__price}>
              <Typography component="span" fontSize={14} color="#A2A6B0">
                Subtotal:
              </Typography>
              {" $"}
              {totalAmount}
            </p>
            <Link to={"/"} className={styles.cart__link} onClick={onClick}>
              Proceed to Checkout
            </Link>
          </>
        ) : (
          <Typography
            component="p"
            fontSize={14}
            color="#A2A6B0"
            marginTop={"5px"}
          >
            No items has been added
          </Typography>
        )}
      </div>
    </div>
  );
};

MiniCart.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MiniCart;
