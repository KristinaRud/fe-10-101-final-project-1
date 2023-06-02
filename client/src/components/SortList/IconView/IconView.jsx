import AppsIcon from "@mui/icons-material/Apps";
import SortIcon from "@mui/icons-material/Sort";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import s from "./IconView.module.scss";
import {
  selectProductsView,
  setProductsView,
} from "../../../store/slices/products.slice";

const IconView = () => {
  const iconView = useSelector(selectProductsView);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery("(max-width:665px)");

  useEffect(() => {
    if (isSmallScreen) {
      dispatch(setProductsView("grid"));
      window.localStorage.setItem("productsView", "grid");
    }
  }, [isSmallScreen, dispatch]);

  const handleGrid = () => {
    dispatch(setProductsView("grid"));
    window.localStorage.setItem("productsView", "grid");
  };

  const handleList = () => {
    dispatch(setProductsView("list"));
    window.localStorage.setItem("productsView", "list");
  };

  return (
    <div className={s.wrapper}>
      <AppsIcon
        className={iconView === "grid" ? s.active : s.icon}
        onClick={handleGrid}
      />
      <SortIcon
        className={iconView === "list" ? s.active : s.icon}
        onClick={handleList}
      />
    </div>
  );
};

export default IconView;
