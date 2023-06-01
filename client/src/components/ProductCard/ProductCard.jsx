import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import PropTypes from "prop-types";

const ProductCard = ({
  image,
  alt,
  title,
  description,
  oldPrice,
  currentPrice,
  available,
  rating,
}) => {
  return (
    <Card sx={{ maxWidth: 235 }}>
      <CardContent>
        <Typography
          variant="caption"
          color={available ? "green" : "error"}
          mt={1}
        >
          {available ? (
            <Box display="flex" alignItems="center" mt={2}>
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
        <CardMedia component="img" height="200" image={image} alt={alt} />
        <Box display="flex" alignItems="center" mt={2}>
          <Rating name="products-small" value={+rating} readOnly size="small" />
          <Typography variant="body2" ml={1}>
            Reviews (4)
          </Typography>
        </Box>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box display="flex" flexDirection="column" mt={2}>
          {oldPrice && (
            <Typography
              variant="body2"
              color="text.secondary"
              textDecoration="line-through"
              mr={2}
            >
              ${oldPrice}.00
            </Typography>
          )}
          <Typography variant="h6" component="div">
            ${currentPrice}.00
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  currentPrice: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  rating: PropTypes.string.isRequired,
};
