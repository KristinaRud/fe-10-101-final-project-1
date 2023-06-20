import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuDashboard from "./MenuDashboard";
import CompareProducts from "../../LeftSidear/CompareProducts/CompareProducts";
import styles from "./LeftSideMenu.module.scss";
import { selectWishList } from "../../../store/selectors/wishList.selector";
import { selectComparison } from "../../../store/selectors/comparison.selector";

const LeftSideMenu = ({ onItemClick }) => {
  const { itemsWishList } = useSelector(selectWishList);
  const { comparison } = useSelector(selectComparison);
  const mediaMobile = useMediaQuery("(max-width: 480px)");

  return (
    <Box className={styles.container}>
      <MenuDashboard onItemClick={onItemClick} />
      {!mediaMobile && (
        <CompareProducts
          classname={styles["wrapper-compare"]}
          data={
            Object.keys(comparison).length > 0
              ? Object.values(comparison?.products).flat(1)
              : []
          }
        />
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
