import { ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./SearchItem.module.scss";

const SearchItem = ({
  categories,
  id,
  image,
  name,
  currentPrice,
  handleClickItem,
}) => {
  return (
    <Link to={`/${categories.toLowerCase()}/${id}`} onClick={handleClickItem}>
      <ListItem className={s.card}>
        <img src={image} alt={name} className={s.img} />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="12px"
          className={s.name}
        >
          {name}
        </Typography>
        <Typography variant="h5" component="div" fontSize="12px">
          {currentPrice}.00 ₴
        </Typography>
      </ListItem>
    </Link>
  );
};

SearchItem.propTypes = {
  categories: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  handleClickItem: PropTypes.func.isRequired,
};

export default SearchItem;
