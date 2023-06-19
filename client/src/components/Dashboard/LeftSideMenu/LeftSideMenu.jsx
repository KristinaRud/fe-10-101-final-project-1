import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuDashboard from "./MenuDashboard";
import CompareProducts from "../../LeftSidear/CompareProducts/CompareProducts";
import styles from "./LeftSideMenu.module.scss";
import { selectWishList } from "../../../store/selectors/wishList.selector";

const LeftSideMenu = ({ onItemClick }) => {
  const { itemsWishList } = useSelector(selectWishList);
  const mediaMobile = useMediaQuery("(max-width: 480px)");
  return (
    <Box className={styles.container}>
      <MenuDashboard onItemClick={onItemClick} />
      {!mediaMobile && (
        <CompareProducts classname={styles["wrapper-compare"]} />
      )}
      {!mediaMobile && (
        <CompareProducts
          isFavourite
          data={itemsWishList}
          classname={styles["wrapper-compare"]}
        />
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
