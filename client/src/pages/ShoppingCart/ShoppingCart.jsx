import { useState } from "react";
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
import { makeStyles } from "@mui/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1160px",
    margin: "0 auto",
    flexDirection: "column",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  box: {
    display: "flex",
    gap: "35px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  boxContainer: {
    paddingBottom: "18px",
  },
  deleteButton: {
    marginRight: theme.spacing(1),
  },
  summary: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    background: "#F5F7FF",
    width: "65.66%",
    padding: "18px 35px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  subtitle: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "210%",
    color: "#000000",
  },
  image: {
    width: "80px",
    marginRight: theme.spacing(2),
  },
  quantityInput: {
    width: "70px",
    background: "#F5F7FF",
    border: "none", // Видаляємо межу
    padding: 0, // Видаляємо відступи
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      width: "56px",
      height: "42.4px",
    },
  },
  notchedOutline: {
    border: "none", // Видаляємо межу
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
    height: "50px",
    background: "#0156FF",
    borderRadius: "50px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      height: "37px",
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  btnButton: {
    marginTop: theme.spacing(4),
    width: "200px",
    height: "37px",
    background: "#000000",
    borderRadius: "50px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 61px",
      width: "308px",
      height: "38px",
      fontSize: "13px",
      lineHeight: "20px",
    },
  },
  clearContBtnBox: {
    display: "flex",
    gap: "7px",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "0",
    },
  },
  continueButton: {
    border: "2px solid #A2A6B0",
    background: "none",
    color: "#A2A6B0",
  },
  desktopTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "1.37",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  tabletTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  desktopSummaryTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  tabletSummaryTitle: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.between("sm", "md")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const ShoppingCart = () => {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 1,
      image: "/static/media/product_3.9bd7c0c8e8146a6a4b64.png",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 2,
      image: "/static/media/product_3.9bd7c0c8e8146a6a4b64.png",
      description: "Consectetur adipiscing elit",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      quantity: 3,
      image: "/static/media/product_3.9bd7c0c8e8146a6a4b64.png",
      description: "Sed do eiusmod tempor incididunt",
    },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleItemDelete = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // Assuming tax rate is 10%
  };

  const calculateShipping = () => {
    return 5; // Assuming flat shipping rate of $5
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
          {cartItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={12} md={12}>
              <Box display="flex" alignItems="center" mb={2}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={classes.image}
                />
                <div>
                  <Typography variant="subtitle1">{item.name}</Typography>
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
                <Typography align="right">${item.price}</Typography>
                <TextField
                  type="number"
                  value={item.quantity}
                  InputProps={{
                    inputProps: { min: 1 },
                    classes: { notchedOutline: classes.notchedOutline },
                  }}
                  className={classes.quantityInput}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <Typography align="right">
                  ${item.price * item.quantity}
                </Typography>
                <IconButton
                  aria-label="Delete"
                  className={classes.deleteButton}
                  onClick={() => handleItemDelete(item.id)}
                >
                  <HighlightOffIcon />
                </IconButton>
              </Box>
              <Divider />
            </Grid>
          ))}
          <Grid className={classes.btnContainer}>
            <Box className={classes.clearContBtnBox}>
              <Button
                variant="contained"
                className={`${classes.btnButton} ${classes.continueButton}`}
              >
                Continue Shopping
              </Button>
              <Button variant="contained" className={classes.btnButton}>
                Clear Shopping Cart
              </Button>
            </Box>
            <Button variant="contained" className={classes.btnButton}>
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
            <Typography
              className={classes.subtitle}
            >{`$${calculateSubtotal()}`}</Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Tax
            </Typography>
            <Typography
              className={classes.subtitle}
            >{`$${calculateTax()}`}</Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Shipping
            </Typography>
            <Typography
              className={classes.subtitle}
            >{`$${calculateShipping()}`}</Typography>
          </div>
          <Divider />
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Order Total
            </Typography>
            <Typography
              variant="h6"
              className={classes.subtitle}
            >{`$${calculateTotal()}`}</Typography>
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
