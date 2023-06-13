import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import ListWrapper from "../ListWrapper/ListWrapper";
import CompareProductsItem from "./CompareProductsItem/CompareProductsItem";

const CompareProducts = ({ isFavourite, data, classname }) => {
  return (
    <ListWrapper
      title={isFavourite ? "My Wish List" : "Compare Products"}
      className={classname}
    >
      {Object.keys(data).length > 0 ? (
        data.products.map((item) => (
          <CompareProductsItem
            key={item.itemNo}
            name={item.name}
            url={item.imageUrls[0]}
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
  );
};

CompareProducts.propTypes = {
  isFavourite: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  classname: PropTypes.string,
};

CompareProducts.defaultProps = {
  isFavourite: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  data: {},
  classname: "",
};

export default CompareProducts;
