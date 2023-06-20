import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ListWrapper from "../ListWrapper/ListWrapper";
import CompareProductsItem from "./CompareProductsItem/CompareProductsItem";

const CompareProducts = ({ isFavourite, data, classname }) => {
  return (
    <Link to={isFavourite ? "/wishList" : "/compare-products"}>
      <ListWrapper
        title={isFavourite ? "My Wish List" : "Compare Products"}
        className={classname}
      >
        {data?.length > 0 ? (
          data.map((item) => (
            <CompareProductsItem
              key={item.itemNo}
              name={isFavourite ? item.description : item.name}
              url={isFavourite ? item.image : item.imageUrls[0]}
            />
          ))
        ) : (
          <Typography
            marginTop="10px"
            variant="h6"
            component="span"
            fontSize={13}
            textAlign="center"
          >
            {isFavourite
              ? "You have no items in your wish list."
              : "You have no items to compare."}
          </Typography>
        )}
      </ListWrapper>
    </Link>
  );
};

CompareProducts.propTypes = {
  isFavourite: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  classname: PropTypes.string,
};

CompareProducts.defaultProps = {
  isFavourite: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  data: [],
  classname: "",
};

export default CompareProducts;
