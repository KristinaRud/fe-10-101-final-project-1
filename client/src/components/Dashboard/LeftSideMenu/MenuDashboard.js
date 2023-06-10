import { uid } from "react-uid";
import cx from "classnames";
import { useState } from "react";
import styles from "./LeftSideMenu.module.scss";
import { itemsDashboardConfig } from "./ItemsDashboardConfig";

const MenuDashboard = () => {
  const [activeItem, setActiveItem] = useState(itemsDashboardConfig[0]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const listDashboard = itemsDashboardConfig.map((el) => (
    <li
      key={uid(el)}
      className={cx(styles.item, el === activeItem && styles.active)}
      onClick={() => {
        el.onClick();
        handleItemClick(el);
      }}
    >
      {el.item}
    </li>
  ));

  return <ul className={styles["dashboard-list"]}>{listDashboard}</ul>;
};

export default MenuDashboard;
