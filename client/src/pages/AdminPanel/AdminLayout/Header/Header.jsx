import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Notification from "./Notification/Notification";

const Header = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const iconBackColor = "grey.100";
  const iconBackColorOpen = "grey.200";

  const mainHeader = (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{
          color: "text.primary",
          bgcolor: open ? iconBackColorOpen : iconBackColor,
          "&:hover": {
            bgcolor: open ? iconBackColorOpen : iconBackColor,
          },
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!open ? <FormatIndentDecreaseIcon /> : <FormatIndentIncreaseIcon />}
      </IconButton>
      <Box display="flex" gap="20px">
        <Notification />
        <Link to={"/"}>
          <Button
            variant={"outlined"}
            sx={{
              border: "2px solid #0156FF",
              borderRadius: "50px",
              color: "#0156FF",
              "&:hover": {
                border: "2px solid #0156FF",
                backgroundColor: "#0156FF",
                color: "white",
              },
            }}
          >
            Go to website
          </Button>
        </Link>
      </Box>
    </Toolbar>
  );

  const appBar = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBar open={open} {...appBar}>
          {mainHeader}
        </AppBar>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};

export default Header;
