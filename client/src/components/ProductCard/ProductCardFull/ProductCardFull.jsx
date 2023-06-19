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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import s from "./ProductCardFull.module.scss";
import {
  IconCompare,
  IconEmail,
  IconWishList,
} from "../../../assets/images/products";
import {
  addComparisonProduct,
  removeComparisonProduct,
} from "../../../store/actionCreator/comparison.actionCreator";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import { selectComparison } from "../../../store/selectors/comparison.selector";
import styles from "../ProductCard.module.scss";
import LoginSnackbar from "../../LoginForm/LoginSnackbar";

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
  categories,
}) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectCustomers);
  const { comparison, operationSuccess, errorComparison } =
    useSelector(selectComparison);
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isInComparison, setIsInComparison] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleClickCompare = () => {
    if (isLogin) {
      setIsInComparison(!isInComparison);
      if (isInComparison) {
        dispatch(removeComparisonProduct(id));
      } else {
        dispatch(addComparisonProduct(id));
      }
      if (operationSuccess) {
        setOpenSnackbar(true);
        setStatus("success");
        setText("Operation success!");
      } else {
        setOpenSnackbar(true);
        setStatus("error");
        setError(errorComparison);
      }
    } else {
      setOpenSnackbar(true);
      setStatus("error");
      setError("Please, log in to add product to comparison");
    }
  };

  useEffect(() => {
    const allProductsComparison = comparison?.products;
    const categoriesComparison = Object.keys(allProductsComparison);
    if (categoriesComparison.length > 0) {
      categoriesComparison.forEach((category) => {
        if (category.toLowerCase() === categories.toLowerCase()) {
          const productsComparison = allProductsComparison[category];
          const isAddedComparison = productsComparison.some(
            (el) => el._id === id,
          );
          if (isAddedComparison) {
            setIsInComparison(true);
          } else {
            setIsInComparison(false);
          }
        }
      });
    }
  }, [comparison, categories, id]);
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
          <Button className={s.btn}>
            <ShoppingCartOutlinedIcon />
            Add to cart
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
          <Button
            sx={{
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
            onClick={handleClickCompare}
          >
            <IconCompare className={isInComparison && cx(styles.green)} />
          </Button>
          <Button>
            <IconWishList />
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
};
export default ProductCardFull;
