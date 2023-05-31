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

const ProductCard = ({
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  alt,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  description,
  // eslint-disable-next-line react/prop-types
  oldPrice,
  // eslint-disable-next-line react/prop-types
  currentPrice,
  // eslint-disable-next-line react/prop-types
  available,
  // eslint-disable-next-line react/prop-types
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
          <Rating name="products-small" value={rating} readOnly size="small" />
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
