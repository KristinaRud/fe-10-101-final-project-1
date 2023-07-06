import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./WishList.module.scss";
import useStyle from "./useStyle";
import { selectWishList } from "../../store/selectors/wishList.selector";
import ProductCard from "../../components/ProductCard/ProductCard";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import { setItems, deleteWish } from "../../store/slices/wishList.slice";
import { addAllToCart } from "../../store/slices/shoppingCart.slice";
import { selectCustomers } from "../../store/selectors/customers.selector";
import {
  fetchWishList,
  deleteWishList,
} from "../../store/actionCreator/wishList.actionCreator";
import { putProductsToCartLogin } from "../../store/actionCreator/shoppingCart.actionCreator";

const WishList = () => {
  const dispatch = useDispatch();
  const { itemsWishList } = useSelector(selectWishList);
  const { isLogin } = useSelector(selectCustomers);
  const classes = useStyle();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const subtotalAmount =
    itemsWishList?.length > 0
      ? itemsWishList
          .map(({ currentPrice }) => currentPrice)
          .reduce((prev, curr) => prev + curr, 0)
      : 0;
  const tax = subtotalAmount * 0.08;
  const shipping = 100;
  const totalAmount = subtotalAmount + tax + shipping;

  const handleClearWishList = async () => {
    if (isLogin) {
      await dispatch(deleteWishList());
    } else {
      dispatch(deleteWish());
    }
  };
  const handleAllToCart = async () => {
    if (isLogin) {
      await dispatch(putProductsToCartLogin(itemsWishList));
    } else {
      dispatch(addAllToCart(itemsWishList));
    }
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchWishList());
    } else {
      dispatch(setItems(JSON.parse(localStorage.getItem("wishList"))));
    }
  }, [isLogin, dispatch]);

  return (
    <Box
      sx={{
        margin: "10px auto",
        maxWidth: "1400px",
        padding: { xs: "0 15px", sm: "0 15px", xlg: "0" },
      }}
    >
      <BreadcrumbsApp />
      <Typography variant="h2" className={styles.title}>
        My Wish List
      </Typography>
      <Box className={classes.box} flexDirection={isMobile ? "column" : "row"}>
        <Box>
          <ul className={styles["list-wishlist"]}>
            {itemsWishList.length === 0 && "You have not a Wish List yet."}
            {itemsWishList?.map((el) => (
              <li key={el.id}>
                <ProductCard
                  id={el.id}
                  image={el.image}
                  alt={el.alt}
                  description={el.description}
                  currentPrice={el.currentPrice}
                  itemNo={el.itemNo}
                  categories={el.categories}
                  available={el.available}
                  rating={Number(el.rating)}
                  oldPrice={el.oldPrice}
                />
              </li>
            ))}
          </ul>
          <Grid className={classes.btnContainer}>
            <Box className={classes.clearContBtnBox}>
              <Link to={"/"}>
                <Button
                  variant="contained"
                  className={`${classes.btnButton} ${classes.continueButton}`}
                >
                  Continue Shopping
                </Button>
              </Link>
              <Button
                variant="contained"
                className={classes.btnButton}
                onClick={handleClearWishList}
              >
                Clear Wish List
              </Button>
            </Box>
          </Grid>
        </Box>
        <Box className={classes.summaryWrapper}>
          <Box className={classes.summary}>
            <Typography
              variant="h5"
              gutterBottom
              className={
                isMobile
                  ? classes.tabletSummaryTitle
                  : classes.desktopSummaryTitle
              }
            >
              Summary
            </Typography>
            <Divider />
            <div className={classes.summaryItem}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Subtotal
              </Typography>
              <Typography className={classes.subtitle}>
                {`${subtotalAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}.00 ₴`}
              </Typography>
            </div>
            <div className={classes.summaryItem}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Tax
              </Typography>
              <Typography className={classes.subtitle}>{`${tax.toFixed(
                2,
              )} ₴`}</Typography>
            </div>
            <div className={classes.summaryItem}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Shipping
              </Typography>
              <Typography className={classes.subtitle}>
                {`${shipping}.00 ₴`}
              </Typography>
            </div>
            <Divider />
            <div className={classes.summaryItem}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Order Total
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                {`${totalAmount
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₴`}
              </Typography>
            </div>

            <Button
              variant="contained"
              className={classes.checkoutButton}
              onClick={handleAllToCart}
            >
              Add all to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WishList;
