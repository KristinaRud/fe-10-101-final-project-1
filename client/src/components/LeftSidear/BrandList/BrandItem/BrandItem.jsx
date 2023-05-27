import { Card, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import s from "./BrandItem.module.scss";

const BrandItem = ({ url }) => {
  const handeClickBrand = () => {}; // перехід на сторінку бренда або фільтр по бренду
  return (
    <Card className={s.wrapper} onClick={handeClickBrand}>
      <CardMedia
        component="img"
        height="46"
        image={url}
        alt="brand"
        sx={{ objectFit: "contain" }}
      />
    </Card>
  );
};

BrandItem.propTypes = {
  url: PropTypes.string.isRequired,
};
export default BrandItem;
