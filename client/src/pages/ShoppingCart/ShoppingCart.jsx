import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Divider,
  TextField,
  useMediaQuery,
  Grid,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  deleteCartItem,
  incrementCartItem,
  decrementCartItem,
  deleteCart,
  setItems,
} from "../../store/slices/shoppingCart.slice";
import { selectShoppingCart } from "../../store/selectors/shoppingCart.selector";
import { selectCustomers } from "../../store/selectors/customers.selector";
import useStyles from "./useStyles";
import {
  deleteProductFromCart,
  deleteShoppingCart,
  fetchShoppingCart,
  editProductFromCart,
  decreaseProductFromCart,
  editShoppingCart,
} from "../../store/actionCreator/shoppingCart.actionCreator";
import { updateShoppingCart } from "../../utils/cart/updateCart";
import LoginSnackbar from "../../components/LoginForm/LoginSnackbar";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { itemsCart } = useSelector(selectShoppingCart);
  const classes = useStyles();
  const [cartItems, setCartItems] = useState(itemsCart);
  const { isLogin } = useSelector(selectCustomers);
  const [status, setStatus] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
    setIsUpdate(false);
  };

  const handleQuantityChange = async (data, newQuantity) => {
    const isIncrement =
      newQuantity >
      cartItems?.find((item) => item.id === data.id)?.cartQuantity;

    if (isLogin) {
      if (isIncrement) {
        await dispatch(editProductFromCart(data.id));
      } else {
        await dispatch(decreaseProductFromCart(data.id));
      }
    } else {
      dispatch(isIncrement ? incrementCartItem(data) : decrementCartItem(data));
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === data.id ? { ...item, cartQuantity: newQuantity } : item,
      ),
    );
    setIsUpdate(true);
  };

  const subtotalAmount = itemsCart
    ?.map(({ currentPrice, cartQuantity }) => currentPrice * cartQuantity)
    .reduce((prev, curr) => prev + curr, 0);

  const tax = subtotalAmount * 0.08;
  const shipping = 100;
  const totalAmount = subtotalAmount + tax + shipping;

  const handleDeleteItem = async (id) => {
    if (isLogin) {
      await dispatch(deleteProductFromCart(id));
    } else {
      dispatch(deleteCartItem(id));
    }
    setIsUpdate(true);
  };

  const handleUpdateCart = async () => {
    if (isLogin) {
      await dispatch(updateShoppingCart(editShoppingCart));
    } else {
      localStorage.setItem("shoppingCart", JSON.stringify(itemsCart));
    }
    setIsUpdate(true);
  };

  const handleClearCart = async () => {
    if (isLogin) {
      await dispatch(deleteShoppingCart());
    } else {
      dispatch(deleteCart());
    }
    setIsUpdate(true);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchShoppingCart());
    } else {
      dispatch(setItems(JSON.parse(localStorage.getItem("shoppingCart"))));
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    if (isUpdate) {
      setStatus("success");
      setOpenSnackbar(true);
    } else {
      setStatus("error");
    }
  }, [isUpdate]);

  return (
    <Box
      sx={{
        margin: "10px auto",
        maxWidth: "1400px",
        padding: { xs: "0 15px", sm: "0 15px", xlg: "0" },
      }}
    >
      <BreadcrumbsApp />
      <Container maxWidth="lg" className={classes.root}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          className={isMobile ? classes.tabletTitle : classes.desktopTitle}
        >
          Shopping Cart
        </Typography>
        <Box
          className={classes.box}
          flexDirection={isMobile ? "column" : "row"}
        >
          <Grid container>
            {itemsCart?.map((item) => (
              <Grid item key={item.id} xs={12} sm={12} md={12}>
                <Box display="flex" alignItems="center" mb={2}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={classes.image}
                  />
                  <div>
                    <Typography variant="subtitle1">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                  </div>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  className={classes.boxContainer}
                >
                  <Typography align="right">
                    {item.currentPrice}.00 ₴
                  </Typography>
                  <TextField
                    type="number"
                    value={item.cartQuantity}
                    InputProps={{
                      inputProps: { min: 1 },
                      classes: { notchedOutline: classes.notchedOutline },
                    }}
                    className={classes.quantityInput}
                    onChange={(e) =>
                      handleQuantityChange(
                        {
                          id: item.id,
                          image: item.image,
                          alt: item.alt,
                          description: item.description,
                          currentPrice: item.currentPrice,
                          cartQuantity: item.cartQuantity,
                          itemNo: item.itemNo,
                        },
                        parseInt(e.target.value, 10),
                        e.target.value > item.count,
                      )
                    }
                  />
                  <Typography align="right">
                    {item.currentPrice * item.cartQuantity}.00 ₴
                  </Typography>
                  <IconButton
                    aria-label="Delete"
                    className={classes.deleteButton}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
                <Divider />
              </Grid>
            ))}
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
                  onClick={handleClearCart}
                >
                  Clear Shopping Cart
                </Button>
              </Box>
              <Button
                variant="contained"
                className={classes.btnButton}
                onClick={handleUpdateCart}
              >
                Update Shopping Cart
              </Button>
            </Grid>
          </Grid>
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
                {`${subtotalAmount}.00 ₴`}
              </Typography>
            </div>
            <div className={classes.summaryItem}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Tax
              </Typography>
              <Typography className={classes.subtitle}>{`${tax} ₴`}</Typography>
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
                {`${totalAmount} ₴`}
              </Typography>
            </div>
            <Button variant="contained" className={classes.checkoutButton}>
              Proceed to Checkout
            </Button>
          </Box>
          <LoginSnackbar
            open={openSnackbar}
            status={status}
            handleClose={handleClose}
            textSuccess="Update successes!"
            textError={"Your cart is not change"}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ShoppingCart;
