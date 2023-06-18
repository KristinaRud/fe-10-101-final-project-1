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
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import s from "./ProductCardFull.module.scss";
import {
  IconCompare,
  IconEmail,
  IconWishList,
} from "../../../assets/images/products";

const ProductCardFull = ({
  available,
  image,
  alt,
  rating,
  name,
  oldPrice,
  currentPrice,
  description,
  categories,
  id,
}) => {
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
          <Link to={`/${categories.toLowerCase()}/${id}`}>
            <Typography variant="h6" mb={2} fontSize="13px">
              {name}
            </Typography>
          </Link>
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
          <Button>
            <IconCompare />
          </Button>
          <Button>
            <IconWishList />
          </Button>
        </Box>
      </Box>
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
