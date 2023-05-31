import { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SortIcon from "@mui/icons-material/Sort";
import s from "./IconView.module.scss";

const IconView = () => {
  const [iconView, setIconView] = useState("grid");

  return (
    <div className={s.wrapper}>
      <AppsIcon
        className={iconView === "grid" ? s.active : s.icon}
        onClick={() => setIconView("grid")}
      />
      <SortIcon
        className={iconView === "list" ? s.active : s.icon}
        onClick={() => setIconView("list")}
      />
    </div>
  );
};

export default IconView;
