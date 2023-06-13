import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconCompare,
  IconWishList,
  IconCart,
} from "../../assets/images/products";
import styles from "./ProductCard.module.scss";

const ProductCard = ({
  image,
  alt,
  description,
  oldPrice,
  currentPrice,
  available,
  rating,
  categories,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/${categories.toLowerCase()}/${id}`}>
      <Card
        className={styles.card}
        sx={{ width: 235, height: 346, position: "relative" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          className={styles.menu}
          style={{ right: isHovered ? "0" : "-40%" }}
        >
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
          >
            <IconCart />
          </Button>
        </Box>
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
          <CardMedia
            className={styles.picture}
            component="img"
            height="150"
            width="150"
            image={image}
            alt={alt}
            mt={1}
          />
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
          <Typography
            variant="body2"
            color="text.secondary"
            height="60px"
            className={styles.description}
          >
            {description}
          </Typography>
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
    </Link>
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
  id: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
};
