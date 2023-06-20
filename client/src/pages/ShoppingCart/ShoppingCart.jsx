import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Step,
  StepLabel,
  Stepper,
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
} from "../../store/actionCreator/shoppingCart.actionCreator";
import LoginSnackbar from "../../components/LoginForm/LoginSnackbar";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import s from "../../components/Checkout/OrderSummary/OrderSummary.module.scss";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { itemsCart } = useSelector(selectShoppingCart);
  const classes = useStyles();
  const [cartItems, setCartItems] = useState(itemsCart);
  const { isLogin } = useSelector(selectCustomers);
  const [status, setStatus] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
    setIsUpdate(false);
  };

  const handleQuantityChange = (data, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    const isIncrement = newQuantity > data.cartQuantity;

    if (isLogin) {
      if (isIncrement) {
        dispatch(editProductFromCart(data.id));
      } else {
        dispatch(decreaseProductFromCart(data.id));
      }
    } else {
      dispatch(isIncrement ? incrementCartItem(data) : decrementCartItem(data));
    }

    const updatedItems = cartItems.map((item) =>
      item.id === data.id ? { ...item, cartQuantity: newQuantity } : item,
    );

    setCartItems(updatedItems);
    setIsUpdate(true);
  };

  const handleQuantityKeyDown = (data, e) => {
    if (e.key === "+") {
      if (isLogin) {
        dispatch(editProductFromCart(data.id));
      } else {
        dispatch(incrementCartItem(data));
      }
    }
  };

  const subtotalAmount =
    itemsCart?.length > 0
      ? itemsCart
          .map(({ currentPrice, cartQuantity }) => currentPrice * cartQuantity)
          .reduce((prev, curr) => prev + curr, 0)
      : 0;

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

  const handleClearCart = async () => {
    if (isLogin) {
      await dispatch(deleteShoppingCart());
    } else {
      dispatch(deleteCart());
    }
    setIsUpdate(true);
  };

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
          <Grid container className={classes.container}>
            {subtotalAmount === 0 && (
              <Typography variant="subtitle1" className={classes.title}>
                Your shopping cart is empty.
              </Typography>
            )}
            {itemsCart?.map((item) => (
              <Grid item key={item.id} xs={12} sm={12} md={12}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Link to={`/${item.categories}/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={classes.image}
                    />
                  </Link>
                  <div>
                    <Link to={`/${item.categories}/${item.id}`}>
                      <Typography variant="subtitle1">
                        {item.description}
                      </Typography>
                    </Link>
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
                    onKeyDown={(e) =>
                      handleQuantityKeyDown(
                        {
                          id: item.id,
                          image: item.image,
                          alt: item.alt,
                          description: item.description,
                          currentPrice: item.currentPrice,
                          cartQuantity: item.cartQuantity,
                          itemNo: item.itemNo,
                        },
                        e,
                      )
                    }
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
                        e,
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
            </Grid>
          </Grid>
          <Box className={classes.summaryWrapper}>
            <Stepper alternativeLabel className={s.stepper}>
              <Step>
                <StepLabel className={s.stepLast} sx={{ cursor: "pointer" }}>
                  Shipping
                </StepLabel>
              </Step>
              <Step>
                <StepLabel className={s.stepLast}>Review & Payments</StepLabel>
              </Step>
            </Stepper>
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
                <Typography className={classes.subtitle}>{`${tax
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₴`}</Typography>
              </div>
              <div className={classes.summaryItem}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Shipping
                </Typography>
                <Typography className={classes.subtitle}>
                  {`${shipping
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}.00 ₴`}
                </Typography>
              </div>
              <Divider />
              <div className={classes.summaryItem}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Order Total
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                  {`${totalAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₴`}
                </Typography>
              </div>
              <Button
                variant="contained"
                className={classes.checkoutButton}
                disabled={!itemsCart}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </Box>
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
