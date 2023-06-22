import {
  Box,
  Button,
  Card,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import s from "./ProductCardFull.module.scss";
import { IconEmail, IconWishList } from "../../../assets/images/products";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import styles from "../ProductCard.module.scss";
import LoginSnackbar from "../../LoginForm/LoginSnackbar";
import handleAddToCart, {
  handleAddToWishList,
} from "../../../utils/cart/handleAddToCart";
import { selectWishList } from "../../../store/selectors/wishList.selector";
import { selectShoppingCart } from "../../../store/selectors/shoppingCart.selector";
import IconComparisonProduct from "../../IconComparisonProduct/IconComparisonProduct";

const ProductCardFull = ({
  available,
  image,
  alt,
  rating,
  name,
  oldPrice,
  currentPrice,
  description,
  id,
  itemNo,
  categories,
}) => {
  const dispatch = useDispatch();
  const { itemsWishList } = useSelector(selectWishList);
  const { isLogin } = useSelector(selectCustomers);
  const { itemsCart } = useSelector(selectShoppingCart);
  const isAdded = itemsCart?.some((el) => el.id === id);
  const isWishList = itemsWishList?.some((item) => item.id === id);
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

  return (
    <Card
      sx={{
        maxWidth: 1166,
        display: "flex",
        flexDirection: "column",
        padding: "14px 25px",
        position: "relative",
      }}
    >
      <Typography
        variant="caption"
        color={available ? "green" : "error"}
        alignSelf="end"
      >
        {available ? (
          <Box display="flex" alignItems="center">
            <CheckCircleIcon color="green" />
            <Typography variant="body2" color="green" ml={1}>
              in stock
            </Typography>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" mt={2}>
            <PhoneIcon color="red" />
            <Typography variant="body2" color="red" ml={1}>
              check availablity
            </Typography>
          </Box>
        )}
      </Typography>
      <Box display="flex" gap="50px">
        <Box display="flex" flexDirection="column">
          <Link to={`/${categories.toLowerCase()}/${id}`}>
            <CardMedia
              component="img"
              className={s.img}
              image={image}
              alt={alt}
            />
          </Link>
          <Box display="flex" alignItems="center" mt={2}>
            <Rating
              name="products-small"
              value={rating}
              readOnly
              size="small"
            />
            <Typography variant="body2" ml={1}>
              Reviews (4)
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={s["content-wrapper"]}
        >
          <Typography variant="h6" mb={2} fontSize="13px">
            {name}
          </Typography>
          <Box display="flex" className={s["price-wrapper"]}>
            {oldPrice && (
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="13px"
                sx={{ textDecoration: "line-through" }}
                mr={2}
              >
                {oldPrice}.00 ₴
              </Typography>
            )}
            <Typography
              variant="h6"
              component="div"
              fontWeight={600}
              fontSize="14px"
            >
              {currentPrice}.00 ₴
            </Typography>
          </Box>
          <Button
            className={cx(s.btn, isAdded ? s.green : "")}
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
                    categories,
                  },
                  isLogin,
                ),
              );
            }}
          >
            <ShoppingCartOutlinedIcon className={isAdded ? styles.green : ""} />
            {isAdded ? "In cart" : "Add to cart"}
          </Button>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          className={s.description}
        >
          {description}
        </Typography>
        <Box display="flex" className={s["btn-wrapper"]}>
          <Button>
            <IconEmail />
          </Button>
          <IconComparisonProduct
            setError={setError}
            id={id}
            categories={categories}
            setOpenSnackbar={setOpenSnackbar}
            setStatus={setStatus}
            setText={setText}
          />
          <Button
            onClick={() => {
              dispatch(
                handleAddToWishList(
                  {
                    id,
                    image,
                    alt,
                    description,
                    currentPrice,
                    itemNo,
                    categories,
                    available,
                    rating,
                    oldPrice,
                  },
                  itemsWishList,
                  isLogin,
                ),
              );
            }}
          >
            <IconWishList className={isWishList ? styles.green : ""} />
          </Button>
        </Box>
      </Box>
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess={text}
        textError={error}
      />
    </Card>
  );
};

ProductCardFull.propTypes = {
  available: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  itemNo: PropTypes.string,
};
export default ProductCardFull;
