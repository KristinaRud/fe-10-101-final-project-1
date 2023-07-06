import PropTypes from "prop-types";
import { Divider, IconButton, List, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TocIcon from "@mui/icons-material/Toc";
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
        <Typography
          variant="body2"
          noWrap
          component="div"
          marginLeft={1}
          marginTop={2}
        >
          Admin panel
        </Typography>
        <Divider />
        <SidebarListItem
          title="Categories"
          open={open}
          link="/categories"
          icon={<CategoryIcon />}
        />
        <SidebarListItem
          title="Products"
          open={open}
          link="/products?perPage=10&startPage=1&sort=-itemNo&enabled=true"
          icon={<WebStoriesIcon />}
        />
        <SidebarListItem
          title="Filters"
          open={open}
          link="/filters"
          icon={<FilterAltIcon />}
        />
        <SidebarListItem
          title="News"
          open={open}
          link="/news"
          icon={<NewspaperIcon />}
        />
        <Typography
          variant="body2"
          noWrap
          component="div"
          marginLeft={1}
          marginTop={2}
        >
          Orders & Reports
        </Typography>
        <Divider />
        <SidebarListItem
          title="Orders"
          open={open}
          link="/orders?perPage=10&startPage=1&sort=-date"
          icon={<TocIcon />}
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
