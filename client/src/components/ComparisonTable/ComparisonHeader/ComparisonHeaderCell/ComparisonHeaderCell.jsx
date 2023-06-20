import { Link } from "react-router-dom";
import { Box, Button, TableCell, Typography } from "@mui/material";
import cx from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "../ComparisonHeader.module.scss";
import handleAddToCart, {
  handleAddToWishList,
} from "../../../../utils/cart/handleAddToCart";
import { IconCart, IconWishList } from "../../../../assets/images/products";
import LoginSnackbar from "../../../LoginForm/LoginSnackbar";
import { selectCustomers } from "../../../../store/selectors/customers.selector";
import { selectShoppingCart } from "../../../../store/selectors/shoppingCart.selector";
import { selectWishList } from "../../../../store/selectors/wishList.selector";
import IconComparisonProduct from "../../../IconComparisonProduct/IconComparisonProduct";

const ComparisonHeaderCell = ({ column }) => {
  const { isLogin } = useSelector(selectCustomers);
  const { itemsCart } = useSelector(selectShoppingCart);
  const { itemsWishList } = useSelector(selectWishList);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const isWishList = itemsWishList?.some((item) => item.id === column._id);
  const isAdded = itemsCart?.some((el) => el.id === column._id);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (isAdded || isWishList) {
      setStatus("success");
      setText("Product added successfully!");
    } else {
      setStatus("error");
      setError("Product not added");
    }
  }, [isAdded, isWishList]);
  return (
    <TableCell
      align="center"
      sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
    >
      <Link to={`/${column.categories.toLowerCase()}/${column._id}`}>
        <img
          alt={column.name}
          src={column.imageUrls[0]}
          className={styles.img}
        />
      </Link>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textDecoration: "line-through" }}
      >
        {column.previousPrice}.00 ₴
      </Typography>
      <Typography variant={"body1"}>{column.currentPrice}.00 ₴</Typography>
      <Link to={`/${column.categories.toLowerCase()}/${column._id}`}>
        <Typography variant={"body1"} className={styles.textLimit}>
          {column.name}
        </Typography>
      </Link>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          sx={{
            "&:hover": { backgroundColor: "rgb(1 86 255 / 20%)" },
          }}
          onClick={() => {
            dispatch(
              handleAddToCart(
                {
                  id: column._id,
                  image: column.imageUrls[0],
                  alt: column.name,
                  description: column.name,
                  currentPrice: column.currentPrice,
                  itemNo: column.itemNo,
                  categories: column.categories,
                },
                isLogin,
              ),
            );
            setOpenSnackbar(true);
          }}
        >
          <IconCart className={isAdded ? cx(styles.green) : ""} />
        </Button>
        <IconComparisonProduct
          categories={column.categories}
          id={column._id}
          setOpenSnackbar={setOpenSnackbar}
          setText={setText}
          setError={setError}
          setStatus={setStatus}
        />
        <Button
          sx={{
            "&:hover": { backgroundColor: "rgb(1 86 255 / 20%)" },
          }}
          onClick={() => {
            dispatch(
              handleAddToWishList(
                {
                  id: column._id,
                  image: column.imageUrls[0],
                  alt: column.name,
                  description: column.name,
                  currentPrice: column.currentPrice,
                  itemNo: column.itemNo,
                  categories: column.categories,
                  available: column.quantity > 5,
                  rating: column.rating,
                  oldPrice: column.previousPrice,
                },
                itemsWishList,
                isLogin,
              ),
            );
            setOpenSnackbar(true);
          }}
        >
          <IconWishList className={isWishList ? cx(styles.green) : ""} />
        </Button>
      </Box>
      <LoginSnackbar
        open={openSnackbar}
        status={status}
        handleClose={handleClose}
        textSuccess={text}
        textError={error}
      />
    </TableCell>
  );
};

ComparisonHeaderCell.propTypes = {
  column: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    previousPrice: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
};

export default ComparisonHeaderCell;
