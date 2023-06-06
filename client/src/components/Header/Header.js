import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useMediaQuery from "@mui/material/useMediaQuery";
import cx from "classnames";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ReactComponent as VecIcon } from "../../pages/AboutUs/icons/vec.svg";
import { ReactComponent as LogoBlue } from "./icons/logo-blue.svg";
import Button from "../Button/Button";
import ShopInfoDropDown from "../ShopInfoDropDown/ShopInfoDropDown";
import AccBurgerMenu from "../AccBurgerMenu/AccBurgerMenu";
import styles from "./Header.module.scss";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";

const Header = () => {
  const [isOpenListItem, setIsOpenListItem] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const mediaDesktop = useMediaQuery("(min-width: 1200px)");
  const mediaTablet = useMediaQuery("(min-width: 768px)");

  const navbarItems = [
    "Laptops",
    "Desktop PCs",
    "Networking Devices",
    "Printers & Scanners",
    "PC Parts",
    "All Other Products",
    "Repairs",
  ];

  const openSearchInput = () => {
    setIsOpenListItem(true);
  };
  const closeSearchInput = () => {
    setIsOpenListItem(false);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <ul className={styles.menu}>
            {!mediaDesktop && !isOpenListItem && (
              <li className={styles.item__logo}>
                <Button to="/" className={styles["btn-logo"]}>
                  <VecIcon className={styles.logo} />
                </Button>
              </li>
            )}
            <Box>
              <li
                className={cx(
                  styles.menu__item,
                  isOpenListItem && !mediaTablet ? styles.border : null,
                )}
              >
                <span className={styles.gray}>Mon-Thu:</span> 9:00 AM - 5:30 PM{" "}
                <ShopInfoDropDown />
              </li>
            </Box>
            {(!isOpenListItem && mediaDesktop) || mediaDesktop ? (
              <li className={cx(styles.menu__item, styles.end)}>
                <span className={styles.gray}>
                  Visit our showroom in 1234 Street Adress City Address, 1234
                </span>
                <Button to="/contact" className={styles.underline}>
                  Contact Us
                </Button>
              </li>
            ) : (
              !isOpenListItem && (
                <li className={cx(styles.menu__item, styles.end)}>
                  <Button to="/contact" className={styles.underline}>
                    Contact Us
                  </Button>
                </li>
              )
            )}
            {(!isOpenListItem && mediaDesktop) || mediaDesktop ? (
              <li className={cx(styles.menu__item)}>
                <a href="tel:+(00) 1234 5678"> Call Us: (00) 1234 5678</a>
                <Button href="https://uk-ua.facebook.com/">
                  <FacebookIcon
                    className={styles.icon}
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Button>
                <Button href="https://www.instagram.com/">
                  <InstagramIcon
                    className={styles.icon}
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Button>
              </li>
            ) : (
              isOpenListItem && (
                <li className={cx(styles.menu__item)}>
                  <a href="tel:+(00) 1234 5678"> Call Us: (00) 1234 5678</a>
                </li>
              )
            )}
          </ul>
        </div>
      </header>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles["navbar-list"]}>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#FFFFFF", width: "26px", height: "20px" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                <div className={styles["wrapper-appbar__icons"]}>
                  <Button to="/">
                    <LogoBlue className={styles["icon-appbar"]} />
                  </Button>
                  <CloseRoundedIcon
                    onClick={handleCloseNavMenu}
                    sx={{ cursor: "pointer" }}
                  />
                </div>

                {navbarItems.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={handleCloseNavMenu}
                    sx={{
                      margin: "8px auto",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography textAlign="center">{item}</Typography>
                    <ArrowForwardIosIcon
                      sx={{ marginLeft: "30px", height: "8px" }}
                    />
                  </MenuItem>
                ))}

                <Button className={cx(styles["btn-deals"], styles.blue)}>
                  Our deals
                </Button>
              </Menu>
            </Box>

            {((isOpenListItem && !mediaTablet) || mediaDesktop) && (
              <Button to="/" className={styles["icon-logo"]}>
                {mediaDesktop ? (
                  <LogoBlue />
                ) : (
                  <VecIcon className={styles.icon} />
                )}
              </Button>
            )}

            {((!isOpenListItem && !mediaDesktop) ||
              (isOpenListItem && mediaDesktop)) && (
              <div className={styles["wrapper-input"]}>
                <input
                  placeholder={
                    mediaDesktop
                      ? " Search entiere store here..."
                      : " Search here"
                  }
                  name="search"
                  className={
                    mediaDesktop
                      ? cx(styles["input-search__desktop"])
                      : cx(styles["input-search"])
                  }
                  onFocus={() => {
                    if (!mediaTablet) {
                      openSearchInput();
                    }
                  }}
                />
                {mediaDesktop && (
                  <Button className={styles["btn-search__input"]}>
                    <SearchOutlinedIcon />
                  </Button>
                )}
              </div>
            )}

            {mediaDesktop && !isOpenListItem && (
              <ul className={styles["navbar-menu"]}>
                {navbarItems.map((item) => (
                  <li key={item} onClick={handleCloseNavMenu}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {((mediaDesktop && !isOpenListItem) ||
              (!mediaTablet && isOpenListItem)) && (
              <Button className={styles["btn-deals"]}>Our deals</Button>
            )}
            {!isOpenListItem && (
              <Button
                className={styles["btn-search"]}
                onClick={openSearchInput}
              >
                <SearchOutlinedIcon
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    mr: 1,
                  }}
                />
              </Button>
            )}
            {isOpenListItem && mediaDesktop && (
              <Button
                className={styles["btn-close"]}
                onClick={closeSearchInput}
              >
                <CloseRoundedIcon sx={{ fill: "#0156FF" }} />
              </Button>
            )}

            <Button className={styles["wrapper-shop"]}>
              <ShoppingCartOutlinedIcon
                sx={{
                  color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" },
                  transform: "rotateY(180deg)",
                }}
              />
              <div className={styles["wrapper-counter"]}>
                <p>10</p>
              </div>
            </Button>
            <Box>
              <AccBurgerMenu />
            </Box>
          </div>
          {isOpenListItem && !mediaTablet && (
            <input
              placeholder=" Search for goods"
              name="search"
              className={styles["input-search"]}
            />
          )}
        </div>
      </div>
      <TermsAndConditions />
    </>
  );
};

export default Header;
