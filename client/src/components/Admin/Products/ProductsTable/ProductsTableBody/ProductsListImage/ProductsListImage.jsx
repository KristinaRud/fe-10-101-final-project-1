import PropTypes from "prop-types";
import { Box, List, ListItem, Typography } from "@mui/material";

const ProductsListImage = ({ arr }) => {
  return (
    <List>
      <Typography variant={"body1"} fontWeight={500}>
        Images:
      </Typography>
      <Box display={"flex"} gap={1}>
        {arr?.map((item) => (
          <ListItem key={item} sx={{ padding: "0 0 0 16px" }}>
            <img
              src={item}
              alt={item}
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
          </ListItem>
        ))}
      </Box>
    </List>
  );
};
ProductsListImage.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ProductsListImage;
