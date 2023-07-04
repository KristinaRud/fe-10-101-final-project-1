import { List, ListItem, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ProductsListCompleteSet = ({ arr }) => {
  return (
    <List>
      <Typography variant={"body1"} fontWeight={500}>
        Complete Set:
      </Typography>
      {arr?.map((item) => (
        <ListItem key={item} sx={{ padding: "0 0 0 16px" }}>
          <Typography variant={"body2"}>{item}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

ProductsListCompleteSet.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductsListCompleteSet;
