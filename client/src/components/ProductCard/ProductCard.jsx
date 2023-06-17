import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Rating,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import {
  IconCompare,
  IconWishList,
  IconCart,
} from "../../assets/images/products";
import styles from "./ProductCard.module.scss";
import { selectCustomers } from "../../store/selectors/customers.selector";
import { selectShoppingCart } from "../../store/selectors/shoppingCart.selector";
import LoginSnackbar from "../LoginForm/LoginSnackbar";
import handleAddToCart from "../../utils/cart/handleAddToCart";

const ProductCard = ({
  image,
  alt,
  description,
  oldPrice,
  currentPrice,
  available,
  rating,
  id,
  categories,
  itemNo,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectCustomers);
  const { itemsCart } = useSelector(selectShoppingCart);
  const isAdded = itemsCart?.some((el) => el.id === id);

  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isAdded) {
      setStatus("success");
      setText("Product added successfully!");
    } else {
      setStatus("error");
      setError("Product not added");
    }
  }, [isAdded]);

  return (
    <>
      <Card
        className={styles.card}
        sx={{ width: 235, height: 346, position: "relative" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <Box className={styles.menu}>
            <Box className={styles.menu_top}>
              <Button
                sx={{
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <IconWishList />
              </Button>
              <Button
                sx={{
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                <IconCompare />
              </Button>
            </Box>
            <Button
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                marginBottom: 2,
              }}
              onClick={() => {
                dispatch(
                  handleAddToCart(
                    {
                      id,
                      image,
                      alt,
                      description,
                      currentPrice,
                      itemNo,
                    },
                    isLogin,
                  ),
                );
                setOpenSnackbar(true);
              }}
            >
              <IconCart className={isAdded && cx(styles.green)} />
            </Button>
          </Box>
        )}

        <CardContent sx={{ paddingTop: 1 }}>
          <Typography variant="caption" color={available ? "green" : "error"}>
            {available ? (
              <Box display="flex" alignItems="center">
                <CheckCircleIcon
                  className={styles.caption_icon}
                  color="green"
                />
                <Typography
                  className={styles.caption_text}
                  variant="body2"
                  color="green"
                  ml={1}
                >
                  in stock
                </Typography>
              </Box>
            ) : (
              <Box display="flex" alignItems="center">
                <PhoneIcon className={styles.caption_icon} color="red" />
                <Typography
                  className={styles.caption_text}
                  variant="body2"
                  color="red"
                  ml={1}
                >
                  check availability
                </Typography>
              </Box>
            )}
          </Typography>
          <Link to={`/${categories.toLowerCase()}/${id}`}>
            <CardMedia
              className={styles.picture}
              component="img"
              height="150"
              width="150"
              image={image}
              alt={alt}
              mt={1}
            />
          </Link>
          <Box display="flex" alignItems="center" mt={1}>
            <Rating
              className={styles.rating}
              name="products-small"
              value={rating}
              readOnly
              size="small"
            />
            <Typography className={styles.reviews} variant="body2" ml={1}>
              Reviews (4)
            </Typography>
          </Box>
          <Link to={`/${categories.toLowerCase()}/${id}`}>
            <Typography
              variant="body2"
              color="text.secondary"
              height="60px"
              className={styles.description}
            >
              {description}
            </Typography>
          </Link>
          <Box
            className={styles.price}
            display="flex"
            flexDirection="column"
            mt={2}
          >
            {oldPrice && (
              <Typography
                className={styles.price_old}
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
                mr={2}
              >
                {oldPrice}.00 ₴
              </Typography>
            )}
            <Typography
              className={styles.price_new}
              variant="h6"
              component="div"
            >
              {currentPrice}.00 ₴
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess={text}
        textError={error}
      />
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  oldPrice: PropTypes.number,
  currentPrice: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  rating: PropTypes.number,
  id: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  itemNo: PropTypes.number,
};
