import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import styles from "./MiniCart-item.module.scss";

const MiniCartItem = ({ title, url, count }) => {
  return (
    <div className={styles["card-wrapper"]}>
      <Typography
        component="p"
        fontSize={18}
        className={styles["card-wrapper__counter"]}
      >
        {count}
        <span>x</span>
      </Typography>
      <img className={styles["card-wrapper__img"]} src={url} alt="link" />
      <Typography
        component="p"
        fontSize={13}
        className={styles["card-wrapper__title"]}
      >
        {title.slice(0, 50)}...
      </Typography>
      <div className={styles["card-wrapper__icons-wrapper"]}>
        <CancelOutlinedIcon />
        <div>
          <CreateOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

MiniCartItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default MiniCartItem;
