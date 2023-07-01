import {
  Box,
  Button,
  Card,
  CardMedia,
  Rating,
  Typography,
  Skeleton,
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
import { fetchCommentsByProduct } from "../../../store/actionCreator/comments.actionCreator";
import { calculateAverageRating } from "../../../utils/comments";

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
  enabled,
}) => {
  const dispatch = useDispatch();
  const { itemsWishList } = useSelector(selectWishList);
  const { isLogin, isLoading } = useSelector(selectCustomers);
  const { itemsCart } = useSelector(selectShoppingCart);
  const isAdded = itemsCart?.some((el) => el.id === id);
  const isWishList = itemsWishList?.some((item) => item.id === id);
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [comments, setComments] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    dispatch(fetchCommentsByProduct(id))
      .unwrap()
      .then((comments) => {
        setComments(comments);
      });
  }, [dispatch, id]);

  const averageRating = calculateAverageRating(comments);

  return (
  <>
    {enabled ? (
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
            {isLoading ? (
              <Skeleton variant="circular" width={24} height={24} />
            ) : (
              <CheckCircleIcon color="green" />
            )}
            <Typography variant="body2" color="green" ml={1}>
              {isLoading ? <Skeleton width={53} /> : "in stock"}
            </Typography>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" mt={2}>
            {isLoading ? (
              <Skeleton variant="circular" width={24} height={24} />
            ) : (
              <PhoneIcon color="red" />
            )}
            <Typography variant="body2" color="red" ml={1}>
              {isLoading ? <Skeleton width={80} /> : "check availablity"}
            </Typography>
          </Box>
        )}
      </Typography>
      <Box display="flex" gap="50px">
        <Box display="flex" flexDirection="column">
          <Link to={`/${categories.toLowerCase()}/${id}`}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={250} height={250} />
            ) : (
              <CardMedia
                component="img"
                className={s.img}
                image={image}
                alt={alt}
              />
            )}
          </Link>
          <Box display="flex" alignItems="center" mt={2}>
            {isLoading ? (
              <Skeleton sx={{ width: "100%" }} />
            ) : (
              <>
                <Rating
                  name="products-small"
                  value={averageRating}
                  readOnly
                  size="small"
                />
                <Typography variant="body2" ml={1}>
                  Reviews ({comments.length})
                </Typography>
              </>
            )}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={s["content-wrapper"]}
        >
          <Typography variant="h6" mb={2} fontSize="13px">
            {isLoading ? <Skeleton width={150} /> : <>{name}</>}
          </Typography>
          <Box
            display="flex"
            justifyContent="end"
            alignItems="baseline"
            className={s["price-wrapper"]}
          >
            {oldPrice && oldPrice !== 0 ? (
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="13px"
                sx={{ textDecoration: "line-through" }}
                mr={2}
              >
                {isLoading ? (
                  <Skeleton width={62} />
                ) : (
                  <>{oldPrice.toLocaleString()}.00 ₴</>
                )}
              </Typography>
            ) : (
              <div />
            )}
            <Typography
              variant="h6"
              component="div"
              fontWeight={600}
              fontSize="14px"
            >
              {isLoading ? (
                <Skeleton width={66} />
              ) : (
                <>{currentPrice.toLocaleString()}.00 ₴</>
              )}
            </Typography>
          </Box>
          {isLoading ? (
            <Skeleton variant="rectangular" width={160} height={37} />
          ) : (
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
                      enabled,
                    },
                    isLogin,
                  ),
                );
              }}
            >
              <ShoppingCartOutlinedIcon
                className={isAdded ? styles.green : ""}
              />
              {isAdded ? "In cart" : "Add to cart"}
            </Button>
          )}
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          className={s.description}
        >
          {isLoading ? (
            <>
              <Skeleton width={400} />
              <Skeleton width={400} />
            </>
          ) : (
            <>{description}</>
          )}
        </Typography>
        <Box display="flex" className={s["btn-wrapper"]}>
          <Button>
            {isLoading ? (
              <Skeleton variant="circular" width={30} height={30} />
            ) : (
              <IconEmail />
            )}
          </Button>
          {isLoading ? (
            <Skeleton variant="circular" width={30} height={30} />
          ) : (
            <IconComparisonProduct
              setError={setError}
              id={id}
              categories={categories}
              setOpenSnackbar={setOpenSnackbar}
              setStatus={setStatus}
              setText={setText}
            />
          )}
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
                    enabled,
                  },
                  itemsWishList,
                  isLogin,
                ),
              );
            }}
          >
            {isLoading ? (
              <Skeleton variant="circular" width={30} height={30} />
            ) : (
              <IconWishList className={isWishList ? styles.green : ""} />
            )}
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
    ) : null}
    </>
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
  enabled: PropTypes.bool.isRequired,
};
export default ProductCardFull;
