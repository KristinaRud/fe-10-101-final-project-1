import { Card, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import s from "./CompareProductItem.module.scss";

const CompareProductsItem = ({ url, name }) => {
  return (
    <Card className={s.wrapper}>
      <CardMedia
        component="img"
        height="20"
        image={url}
        alt="product"
        sx={{ objectFit: "contain" }}
      />
      <Typography variant="h6" component="span" fontSize={12}>
        {name}
      </Typography>
    </Card>
  );
};

CompareProductsItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CompareProductsItem;
