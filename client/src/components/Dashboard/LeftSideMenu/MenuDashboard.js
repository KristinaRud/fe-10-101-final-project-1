import { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { itemsDashboardConfig } from "./ItemsDashboardConfig";
import styles from "./LeftSideMenu.module.scss";

const MenuDashboard = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState(itemsDashboardConfig[0]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    onItemClick(item);
  };

  const listDashboard = itemsDashboardConfig.map((el) => (
    <li
      key={el.item}
      className={cx(styles.item, el === activeItem && styles.active)}
      onClick={() => handleItemClick(el)}
    >
      {el.item}
    </li>
  ));

  return <ul className={styles["dashboard-list"]}>{listDashboard}</ul>;
};

MenuDashboard.propTypes = {
  onItemClick: PropTypes.func,
};

MenuDashboard.defaultProps = {
  onItemClick: () => {},
};

export default MenuDashboard;
