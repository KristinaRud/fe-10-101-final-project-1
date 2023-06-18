import { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as VecIcon } from "../../pages/AboutUs/icons/vec.svg";
import { ReactComponent as LogoBlue } from "./icons/logo-blue.svg";
import Button from "../Button/Button";
import ShopInfoDropDown from "../ShopInfoDropDown/ShopInfoDropDown";
import AccBurgerMenu from "../AccBurgerMenu/AccBurgerMenu";
import styles from "./Header.module.scss";
import { selectShoppingCart } from "../../store/selectors/shoppingCart.selector";
import Search from "./Search/Search";
import DropdownCart from "../DropdownCart/DropdownCart";
import { allCategoriesSelector } from "../../store/selectors/catalog.selector";
import { fetchCategories } from "../../store/actionCreator/catalog.actionCreator";
import { selectWishList } from "../../store/selectors/wishList.selector";

const Header = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { itemsCart } = useSelector(selectShoppingCart);
  const { itemsWishList } = useSelector(selectWishList);
  const [counterCart, setCounterCart] = useState(0);
  const catalog = useSelector(allCategoriesSelector);

  const mediaDesktop = useMediaQuery("(min-width: 1200px)");
  const mediaTablet = useMediaQuery("(min-width: 768px)");
  const counterWishlist = itemsWishList.length;
  const navbarItems = catalog.map(({ name, id }) => {
    return {
      name,
      url: `${id}?categories=${id}&perPage=8&startPage=1&sort=-rating`,
    };
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const counter = itemsCart
      ? itemsCart
          .map(({ cartQuantity }) => cartQuantity)
          .reduce((prev, curr) => prev + curr, 0)
      : 0;
    setCounterCart(counter);
  }, [itemsCart]);
  return (
    <>
      <header className={styles.header}>
        <Box sx={{ margin: "0 auto", maxWidth: "1400px" }}>
          <ul className={styles.menu}>
            {!mediaDesktop && (
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
                  !mediaTablet ? styles.border : null,
                )}
              >
                <span className={styles.gray}>Mon-Thu:</span> 9:00 AM - 5:30 PM{" "}
                <ShopInfoDropDown />
              </li>
            </Box>
            {mediaDesktop ? (
              <li className={cx(styles.menu__item, styles.end)}>
                <span className={styles.gray}>
                  Visit our showroom in 1234 Street Adress City Address, 1234
                </span>
                <Button to="/contact" className={styles.underline}>
                  Contact Us
                </Button>
              </li>
            ) : (
              <li className={cx(styles.menu__item, styles.end)}>
                <Button to="/contact" className={styles.underline}>
                  Contact Us
                </Button>
              </li>
            )}
            {mediaDesktop ? (
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
              <li className={cx(styles.menu__item)}>
                <a href="tel:+(00) 1234 5678"> Call Us: (00) 1234 5678</a>
              </li>
            )}
          </ul>
        </Box>
      </header>

      <div className={styles.navbar}>
        <Box
          sx={{ margin: "0 auto", maxWidth: "1400px" }}
          className={styles.headerWrapper}
        >
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
                  <Link
                    to={item.url}
                    key={item.name}
                    onClick={handleCloseNavMenu}
                    className={styles["navbar__link-mobile"]}
                  >
                    {item.name}
                    <ArrowForwardIosIcon
                      sx={{ marginLeft: "30px", height: "8px" }}
                    />
                  </Link>
                ))}
              </Menu>
            </Box>

            {(!mediaTablet || mediaDesktop) && (
              <Button to="/" className={styles["icon-logo"]}>
                {mediaDesktop ? (
                  <LogoBlue />
                ) : (
                  <VecIcon className={styles.icon} />
                )}
              </Button>
            )}

            {mediaDesktop && (
              <ul className={styles["navbar-menu"]}>
                {navbarItems.map((item) => (
                  <NavLink
                    to={item.url}
                    key={item.name}
                    onClick={handleCloseNavMenu}
                    className={styles["navbar__link-desktop"]}
                    activeClassName={"active"}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            )}

            <Search />
            <DropdownCart cartCounter={counterCart} />
            {/* <<<<<<< HEAD */}
            {/*             <Button className={styles["wrapper-shop"]} to={"/shopping-cart"}> */}
            {/*               <ShoppingCartOutlinedIcon */}
            {/*                 sx={{ */}
            {/*                   color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" }, */}
            {/*                   transform: "rotateY(180deg)", */}
            {/*                 }} */}
            {/*               /> */}
            {/*               {counterCart !== 0 && ( */}
            {/*                 <div className={styles["wrapper-counter"]}> */}
            {/*                   <p>{counterCart}</p> */}
            {/*                 </div> */}
            {/*               )} */}
            {/*             </Button> */}
            <Button className={styles["wrapper-shop"]} to={"/wishlist"}>
              <FavoriteBorderIcon
                sx={{
                  color: { xs: "#FFFFFF", md: "#FFFFFF", lg: "#000000" },
                }}
              />
              {counterWishlist !== 0 && (
                <div className={styles["wrapper-counter"]}>
                  <p>{counterWishlist}</p>
                </div>
              )}
            </Button>

            <Box>
              <AccBurgerMenu />
            </Box>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Header;
