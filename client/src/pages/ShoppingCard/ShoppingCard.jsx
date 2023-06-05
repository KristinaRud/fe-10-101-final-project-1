import { useState } from "react";
import {
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1160px",
    margin: "0 auto",
  },
  deleteButton: {
    marginRight: theme.spacing(1),
  },
  summary: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
    background: "#F5F7FF",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  image: {
    width: "80px",
    marginRight: theme.spacing(2),
  },
  quantityInput: {
    width: "50px",
    textAlign: "center",
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
  },
  tableContainer: {
    width: "100%",
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

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h5" component="div" gutterBottom>
        Shopping Cart
      </Typography>
      <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <Box display="flex" alignItems="center">
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
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={item.quantity}
                      inputProps={{ min: 1 }}
                      className={classes.quantityInput}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10),
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="right">
                    ${item.price * item.quantity}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="Delete"
                      className={classes.deleteButton}
                      onClick={() => handleItemDelete(item.id)}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.summary}>
          <Typography variant="h5" gutterBottom>
            Summary
          </Typography>
          <Divider />
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1">Subtotal</Typography>
            <Typography>{`$${calculateSubtotal()}`}</Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1">Tax</Typography>
            <Typography>{`$${calculateTax()}`}</Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1">Shipping</Typography>
            <Typography>{`$${calculateShipping()}`}</Typography>
          </div>
          <Divider />
          <div className={classes.summaryItem}>
            <Typography variant="subtitle1">Total</Typography>
            <Typography variant="h6">{`$${calculateTotal()}`}</Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.checkoutButton}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
