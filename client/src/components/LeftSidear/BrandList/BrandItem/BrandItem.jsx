import { Card, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./BrandItem.module.scss";

const BrandItem = ({ url, href, heightImg, className = "" }) => {
  return (
    <Card className={cn(s.wrapper, className)}>
      <a href={href} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          height={heightImg}
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
  heightImg: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default BrandItem;
