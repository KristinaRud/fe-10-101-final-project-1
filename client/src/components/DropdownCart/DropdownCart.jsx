import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import styles from "./DropdownCart.module.scss";
import MiniCart from "../MiniCart/MiniCart";

const DropdownCart = ({ cartCounter }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ShoppingCartOutlinedIcon
          sx={{
            color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" },
            transform: "rotateY(180deg)",
          }}
        />
        {cartCounter !== 0 && (
          <div className={styles["wrapper-counter"]}>
            <p>{cartCounter}</p>
          </div>
        )}
      </Button>
      <Menu
        id={styles["basic-menu"]}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MiniCart onClick={handleClose} />
      </Menu>
    </div>
  );
};

DropdownCart.propTypes = {
  cartCounter: PropTypes.number.isRequired,
};

export default DropdownCart;
