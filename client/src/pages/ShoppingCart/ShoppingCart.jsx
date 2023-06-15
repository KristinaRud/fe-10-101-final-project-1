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
} from "../../store/slices/shoppingCart.slice";
import { selectShoppingCart } from "../../store/selectors/shoppingCart.selector";
import { selectCustomers } from "../../store/selectors/customers.selector";
import useStyles from "./useStyles";
import GetDataCart from "../../utils/cart/getDataCart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { itemsCart } = useSelector(selectShoppingCart);
  const classes = useStyles();
  const [cartItems, setCartItems] = useState(itemsCart);
  const { isLogin } = useSelector(selectCustomers);

  const handleQuantityChange = async (data, newQuantity) => {
    console.log(data);
    const isIncrement =
      newQuantity > cartItems.find((item) => item.id === data.id)?.count;

    await dispatch(
      isIncrement ? incrementCartItem(data) : decrementCartItem(data),
    );

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === data.id ? { ...item, count: newQuantity } : item,
      ),
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.currentPrice * item.count,
      0,
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateShipping = () => {
    return 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };
  const handleDeleteItem = async (id) => {
    dispatch(deleteCartItem({ id, isLogin }));
  };

  const handleUpdateCart = async () => {};

  const handleClearCart = async () => {
    dispatch(deleteCart(isLogin));
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(GetDataCart(isLogin));
  }, [isLogin]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        className={isMobile ? classes.tabletTitle : classes.desktopTitle}
      >
        Shopping Cart
      </Typography>
      <Box className={classes.box} flexDirection={isMobile ? "column" : "row"}>
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
                <Typography align="right">{item.currentPrice}.00 ₴</Typography>
                <TextField
                  type="number"
                  value={item.count}
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
                        count: item.count,
                      },
                      parseInt(e.target.value, 10),
                      e.target.value > item.count,
                    )
                  }
                />
                <Typography align="right">
                  {item.currentPrice * item.count}.00 ₴
                </Typography>
                <IconButton
                  aria-label="Delete"
                  className={classes.deleteButton}
                >
                  <HighlightOffIcon onClick={() => handleDeleteItem(item.id)} />
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
              {`${calculateSubtotal()}.00 ₴`}
            </Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Tax
            </Typography>
            <Typography className={classes.subtitle}>
              {`${calculateTax()}.00 ₴`}
            </Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Shipping
            </Typography>
            <Typography className={classes.subtitle}>
              {`${calculateShipping()}.00 ₴`}
            </Typography>
          </div>
          <Divider />
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Order Total
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              {`${calculateTotal()}.00 ₴`}
            </Typography>
          </div>
          <Button variant="contained" className={classes.checkoutButton}>
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
