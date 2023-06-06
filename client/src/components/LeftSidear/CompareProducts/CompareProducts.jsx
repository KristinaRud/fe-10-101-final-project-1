import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ListWrapper from "../ListWrapper/ListWrapper";
import CompareProductsItem from "./CompareProductsItem/CompareProductsItem";
import { selectWishList } from "../../../store/selectors/wishList.selector";

const CompareProducts = ({ isFavourite }) => {
  const data = useSelector(selectWishList); // TODO: коли визначимось з механізмом отримання товарів для повірняння
  return (
    <ListWrapper title={isFavourite ? "My Wish List" : "Compare Products"}>
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
};

CompareProducts.defaultProps = {
  isFavourite: false,
};

export default CompareProducts;
