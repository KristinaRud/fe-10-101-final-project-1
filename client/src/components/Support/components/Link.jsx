import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Link.module.scss";

const LinkItem = ({ title }) => {
  return (
    <Link className={styles.link} to="/">
      <span className={styles.link__title}>{title}</span>
      <ArrowRightAltIcon className={styles.link__arrow} />
    </Link>
  );
};

LinkItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LinkItem;
