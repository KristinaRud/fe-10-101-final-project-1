import PropTypes from "prop-types";
import { ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import s from "./CategoryItem.module.scss";

const CategoryItem = ({ imgUrl, name, id }) => {
  return (
    <ListItem className={s.wrapper} sx={{ backgroundImage: `url(${imgUrl})` }}>
      <Typography variant="h6" className={s.name}>
        {name}
      </Typography>
      <Link
        to={`${id}?categories=${id}&perPage=8&startPage=1&sort=-rating`}
        className={s.link}
      >
        See All Products
      </Link>
    </ListItem>
  );
};

CategoryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoryItem;
