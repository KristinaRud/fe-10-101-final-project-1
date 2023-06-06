import { useState } from "react";
import Menu from "@mui/material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import Button from "../Button/Button";
import styles from "./AccBurgerMenu.module.scss";

const AccBurgerMenu = () => {
  const [anchorAccBurgMenu, setanchorAccBurgMenu] = useState(null);
  const handleOpenAccMenu = (event) => {
    setanchorAccBurgMenu(event.currentTarget);
  };
  const handleCloseAccMenu = () => {
    setanchorAccBurgMenu(null);
  };

  return (
    <>
      <Button className={styles["btn-account"]}>
        <PersonIcon
          sx={{
            color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" },
          }}
          open={Boolean(anchorAccBurgMenu)}
          onClose={handleCloseAccMenu}
          onClick={handleOpenAccMenu}
        />
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
        <MenuItem onClick={handleCloseAccMenu}>My Account</MenuItem>
        <MenuItem onClick={handleCloseAccMenu}>My Wish List (0)</MenuItem>
        <MenuItem onClick={handleCloseAccMenu}>Compare (0)</MenuItem>
        <MenuItem onClick={handleCloseAccMenu}>Create an Account</MenuItem>
        <MenuItem onClick={handleCloseAccMenu}>Sign In</MenuItem>
      </Menu>
    </>
  );
};

export default AccBurgerMenu;
