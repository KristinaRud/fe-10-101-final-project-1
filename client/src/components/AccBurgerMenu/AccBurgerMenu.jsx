import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Divider } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
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

const AccBurgerMenu = () => {
  const [anchorAccBurgMenu, setAnchorAccBurgMenu] = useState(null);
  const { isLogin, data } = useSelector(selectCustomers);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAnchorAccBurgMenu(null);
  };

  const handleActionDialog = () => {
    dispatch(logout());
    setOpenDialog(false);
    setAnchorAccBurgMenu(null);
  };
  const handleOpenAccMenu = (event) => {
    setAnchorAccBurgMenu(event.currentTarget);
  };

  const handleCloseAccMenu = () => {
    setAnchorAccBurgMenu(null);
  };

  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  return (
    <>
      {isLogin ? (
        <>
          <Button
            className={styles["btn-account"]}
            open={Boolean(anchorAccBurgMenu)}
            onClose={handleCloseAccMenu}
            onClick={handleOpenAccMenu}
          >
            {Object.keys(data).length !== 0 ? (
              <Avatar
                {...stringAvatar(`${data.firstName} ${data.lastName}`)}
                sx={{ width: 34, height: 34 }}
              />
            ) : (
              <PersonIcon
                sx={{
                  color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" },
                }}
              />
            )}
          </Button>
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
            <MenuItem onClick={handleCloseAccMenu}>
              <SettingsSuggestIcon sx={{ marginRight: "5px" }} />
              My Settings
            </MenuItem>
            <MenuItem onClick={handleCloseAccMenu}>
              <FavoriteBorderIcon sx={{ marginRight: "5px" }} />
              My Wish List (0)
            </MenuItem>
            <MenuItem onClick={handleCloseAccMenu}>
              <BarChartIcon sx={{ marginRight: "5px" }} />
              Compare (0)
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

export default AccBurgerMenu;
