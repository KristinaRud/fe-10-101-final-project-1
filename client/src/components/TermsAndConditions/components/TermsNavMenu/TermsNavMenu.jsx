import styles from "./TermsNavMenu.module.scss";

const TermsNavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <ul className={styles.navMenu__list}>
        <li className={styles.navMenu__item}>
          <a
            className={styles.navMenu__link}
            href="#Definitions & Interpretation"
          >
            Definitions & Interpretation
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#General">
            General
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#Quotations">
            Quotations
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#Prices / Taxes">
            Prices / Taxes
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#Terms of Payment">
            Terms of Payment
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#Credit Accounts">
            Credit Accounts
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#Change of Ownership">
            Change of Ownership
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a
            className={styles.navMenu__link}
            href="#Information on the Products supplied"
          >
            Information on the Products supplied
          </a>
        </li>
        <li className={styles.navMenu__item}>
          <a className={styles.navMenu__link} href="#Delivery">
            Delivery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TermsNavMenu;
