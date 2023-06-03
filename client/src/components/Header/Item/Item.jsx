import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Item.module.scss";

const Item = ({ title }) => {
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
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className={styles.item} onClick={handleClose}>
          Category
        </MenuItem>
        <MenuItem className={styles.item} onClick={handleClose}>
          Category
        </MenuItem>
        <MenuItem className={styles.item} onClick={handleClose}>
          Category
        </MenuItem>
      </Menu>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Item;
