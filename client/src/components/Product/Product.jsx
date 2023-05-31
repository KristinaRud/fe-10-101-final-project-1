import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropTypes from "prop-types";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconCompare, IconWishlist } from "../../assets/images/product";
import s from "./Product.module.scss";

const Product = ({
  imageUrl,
  name,
  quantity,
  rating,
  previousPrice,
  currentPrice,
}) => {
  return (
    <Card className={s.wrapper}>
      <div className={s.inner}>
        {quantity > 5 ? (
          <Typography className={s["quantity-stock"]}>
            <CheckCircleIcon />
            in stock
          </Typography>
        ) : (
          <Typography className={s["quantity-check"]}>
            <PhoneIcon />
            check availability
          </Typography>
        )}
        <div>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={name}
            className={s.img}
          />
          <div>
            <Button className={s["wish-btn"]}>
              <IconWishlist />
            </Button>
            <Button className={s["compare-btn"]}>
              <IconCompare />
            </Button>
          </div>
        </div>
        <CardContent sx={{ padding: 0 }}>
          <div className={s["rating-wrapper"]}>
            <Rating name="read-only" value={rating} readOnly />
            <Typography variant="subtitle2" className={s.reviews}>
              Reviews (4)
            </Typography>
          </div>
          <Typography variant="body2" className={s.name}>
            {name}
          </Typography>
          <Typography variant="body2" className={s["previous-price"]}>
            {previousPrice}₴
          </Typography>
          <Typography variant="body2" className={s["current-price"]}>
            {currentPrice}₴
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={s["add-btn"]}>
            <ShoppingCartOutlinedIcon />
            Add To Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

Product.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  previousPrice: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
};
export default Product;
