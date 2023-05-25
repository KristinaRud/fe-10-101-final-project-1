import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import ListWrapper from "../ListWrapper/ListWrapper";
import CompareProductsItem from "./CompareProductsItem/CompareProductsItem";

const CompareProducts = ({ isFavourite }) => {
  const data = []; // дістаєм масив з файворіта з поміткою compare. так як такої колекції немає, або фейворіте. якщо є пропс тру
  return (
    <ListWrapper title={isFavourite ? "My Wish List" : "Compare Products"}>
      {data.length > 0 ? (
        data.map((item) => (
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
};

CompareProducts.defaultProps = {
  isFavourite: false,
};

export default CompareProducts;
