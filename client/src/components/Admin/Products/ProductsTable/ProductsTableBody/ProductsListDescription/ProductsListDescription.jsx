import PropTypes from "prop-types";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";

const ProductsListDescription = ({ arr }) => {
  const renderOptions = (obj, index) => {
    const { title, image } = obj;
    return (
      <Box key={image}>
        <ListItem
          sx={{ padding: "5px 0 0 16px", justifyContent: "space-between" }}
        >
          <Typography variant={"body1"} mr={1}>
            Slide {index + 1}:
          </Typography>
          <Typography variant={"body2"} mr={1}>
            {title}
          </Typography>
          <img
            src={image}
            alt={title}
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </ListItem>
        <Divider />
      </Box>
    );
  };

  return (
    <List>
      <Typography variant={"body1"} fontWeight={500}>
        Product Slider:
      </Typography>
      {arr?.map((item, index) => renderOptions(item, index))}
    </List>
  );
};
ProductsListDescription.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
export default ProductsListDescription;
