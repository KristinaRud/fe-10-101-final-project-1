import PropTypes from "prop-types";
import { Divider, IconButton, List, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import { ReactComponent as Logo } from "../../../../components/Header/icons/logo-blue.svg";
import { DrawerHeader, Drawer } from "./DrawerStyle";
import SidebarListItem from "./SidebarListItem/SidebarListItem";

const DrawerApp = ({ open, handleDrawerToggle }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <>
            <Logo />
            <Typography variant="body1" noWrap component="div" marginLeft={1}>
              Techno Kit
            </Typography>
          </>
        )}
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <SidebarListItem
          title="Dashboard"
          open={open}
          link=""
          icon={<DashboardIcon />}
        />
        <SidebarListItem
          title="Products"
          open={open}
          link="/products"
          icon={<WebStoriesIcon />}
        />
        <SidebarListItem
          title="Categories"
          open={open}
          link="/categories"
          icon={<CategoryIcon />}
        />
      </List>
    </Drawer>
  );
};

DrawerApp.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};
export default DrawerApp;
