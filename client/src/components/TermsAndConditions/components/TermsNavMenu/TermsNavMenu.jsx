import styles from "./TermsNavMenu.module.scss";

const TermsNavMenu = () => {
  return (
    <div className={styles["nav__menu-wrapper"]}>
      <ul className={styles["nav__menu-list"]}>
        <li className={styles["nav__menu-item"]}>
          <a
            className={styles["nav__menu-link"]}
            href="#Definitions & Interpretation"
          >
            Definitions & Interpretation
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#General">
            General
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#Quotations">
            Quotations
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#Prices / Taxes">
            Prices / Taxes
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#Terms of Payment">
            Terms of Payment
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#Credit Accounts">
            Credit Accounts
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#Change of Ownership">
            Change of Ownership
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a
            className={styles["nav__menu-link"]}
            href="#Information on the Products supplied"
          >
            Information on the Products supplied
          </a>
        </li>
        <li className={styles["nav__menu-item"]}>
          <a className={styles["nav__menu-link"]} href="#Delivery">
            Delivery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TermsNavMenu;
