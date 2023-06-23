import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarListItem = ({ link, open, title, icon }) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <NavLink to={`/admin${link}`}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <Box
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  );
};

SidebarListItem.propTypes = {
  link: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default SidebarListItem;
