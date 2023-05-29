import { Card, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import s from "./BrandItem.module.scss";

const BrandItem = ({ url, href }) => {
  return (
    <Card className={s.wrapper}>
      <a href={href} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          height="46"
          image={url}
          alt="brand"
          sx={{ objectFit: "contain" }}
        />
      </a>
    </Card>
  );
};

BrandItem.propTypes = {
  url: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default BrandItem;
