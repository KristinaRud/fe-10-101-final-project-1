import { Box } from "@mui/material";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuDashboard from "./MenuDashboard";
import CompareProducts from "../../LeftSidear/CompareProducts/CompareProducts";
import styles from "./LeftSideMenu.module.scss";

const LeftSideMenu = ({ onItemClick }) => {
  const mediaMobile = useMediaQuery("(max-width: 480px)");
  return (
    <Box className={styles.container}>
      <MenuDashboard onItemClick={onItemClick} />
      {!mediaMobile && (
        <CompareProducts classname={styles["wrapper-compare"]} />
      )}
      {!mediaMobile && (
        <CompareProducts isFavourite classname={styles["wrapper-compare"]} />
      )}
    </Box>
  );
};

LeftSideMenu.propTypes = {
  onItemClick: PropTypes.func,
};

LeftSideMenu.defaultProps = {
  onItemClick: () => {},
};

export default LeftSideMenu;
