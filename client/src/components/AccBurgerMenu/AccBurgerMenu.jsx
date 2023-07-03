import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Divider } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Button from "../Button/Button";
import styles from "./AccBurgerMenu.module.scss";
import { selectCustomers } from "../../store/selectors/customers.selector";
import SignInButton from "../Checkout/SignInButton/SignInButton";
import {
  getCustomer,
  logout,
} from "../../store/actionCreator/customers.actionCreator";
import AlertDialog from "../Header/AlertDialog/AlertDialog";
import { stringAvatar } from "../../utils/avatar/stringAvatar";
import { deleteCart } from "../../store/slices/shoppingCart.slice";
import {
  fetchShoppingCart,
  putProductsToCartLogin,
} from "../../store/actionCreator/shoppingCart.actionCreator";
import {
  fetchWishList,
  updateWishListLogin,
} from "../../store/actionCreator/wishList.actionCreator";
import { fetchComparisonProducts } from "../../store/actionCreator/comparison.actionCreator";
import { selectComparison } from "../../store/selectors/comparison.selector";
import { deleteComparison } from "../../store/slices/comparison.slice";

const AccBurgerMenu = ({ counterWishList }) => {
  const [anchorAccBurgMenu, setAnchorAccBurgMenu] = useState(null);
  const { isLogin, data } = useSelector(selectCustomers);
  const { comparison } = useSelector(selectComparison);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAnchorAccBurgMenu(null);
  };

  const handleActionDialog = () => {
    dispatch(logout());
    dispatch(deleteComparison());
    setOpenDialog(false);
    setAnchorAccBurgMenu(null);
    dispatch(deleteCart());
    navigate("/");
  };

  const handleOpenAccMenu = (event) => {
    setAnchorAccBurgMenu(event.currentTarget);
  };

  const handleCloseAccMenu = () => {
    setAnchorAccBurgMenu(null);
  };

  const handleClickCompare = () => {
    setAnchorAccBurgMenu(null);
    navigate("/compare-products");
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(getCustomer());
      dispatch(fetchShoppingCart());
      dispatch(fetchWishList());
      dispatch(updateWishListLogin());
      dispatch(fetchComparisonProducts());

      if (window.localStorage.getItem("shoppingCart")) {
        dispatch(putProductsToCartLogin());
      }
    }
  }, [dispatch, isLogin]);

  return (
    <>
      {isLogin ? (
        <>
          <Box display={"flex"} gap={2}>
            <Button
              className={styles["btn-account"]}
              open={Boolean(anchorAccBurgMenu)}
              onClose={handleCloseAccMenu}
              onClick={handleOpenAccMenu}
            >
              {Object.keys(data).length !== 0 ? (
                <Avatar
                  {...stringAvatar(`${data.firstName} ${data.lastName}`)}
                  sx={{ width: 34, height: 34, fontSize: 16 }}
                />
              ) : (
                <PersonIcon
                  sx={{
                    color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" },
                  }}
                />
              )}
            </Button>
            {Object.keys(data).length > 0 && data.isAdmin && (
              <Button
                onClick={() => navigate("/admin")}
                className={styles.adminBtn}
              >
                <AdminPanelSettingsIcon />
              </Button>
            )}
          </Box>
          <Menu
            anchorEl={anchorAccBurgMenu}
            id="account-menu"
            open={Boolean(anchorAccBurgMenu)}
            onClose={handleCloseAccMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 2,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={() => {
                handleCloseAccMenu();
                navigate("/account");
              }}
            >
              <SettingsSuggestIcon sx={{ marginRight: "5px" }} />
              My Settings
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseAccMenu();
                navigate("/wishlist");
              }}
            >
              <FavoriteBorderIcon sx={{ marginRight: "5px" }} />
              My Wish List {`(${counterWishList})`}
            </MenuItem>
            <MenuItem onClick={handleClickCompare}>
              <BarChartIcon sx={{ marginRight: "5px" }} />
              Compare ({comparison.count})
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClickOpenDialog}>
              <LogoutIcon sx={{ marginRight: "5px" }} />
              Log Out
            </MenuItem>
          </Menu>
        </>
      ) : (
        <SignInButton className={styles.btnSignIn} to="/login" />
      )}
      <AlertDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleAction={handleActionDialog}
      />
    </>
  );
};

AccBurgerMenu.propTypes = {
  counterWishList: PropTypes.number,
};

AccBurgerMenu.defaultProps = {
  counterWishList: 0,
};
export default AccBurgerMenu;
