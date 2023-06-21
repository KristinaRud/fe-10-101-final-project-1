import styles from "./ShopInfoStatic.module.scss";
import LocationLogo from "../../assets/images/shopInfoStatic/static__location.svg";
import PhoneLogo from "../../assets/images/shopInfoStatic/static__phone.svg";
import TimeLogo from "../../assets/images/shopInfoStatic/static__time.svg";
import EmailLogo from "../../assets/images/shopInfoStatic/static__email.svg";

const ShopInfoStatic = () => {
  return (
    <div className={styles.staticInfo}>
      <div className={styles.staticInfo__wrapper}>
        <div className={styles.staticInfo__contactsContainer}>
          <img
            className={styles.staticInfo__locationLogo}
            src={LocationLogo}
            alt="Location Logo"
          />
          <span className={styles.staticInfo__contactsWrapper}>
            <b className={styles.staticInfo__contactsTitle}>Address:</b>
            <br />
            <text className={styles.staticInfo__adressText}>
              1234 Street Adress City Address, 1234
            </text>
          </span>
        </div>
        <div className={styles.staticInfo__contactsContainer}>
          <img
            className={styles.staticInfo__phoneLogo}
            src={PhoneLogo}
            alt="Phone Logo"
          />
          <span className={styles.staticInfo__contactsWrapper}>
            <b className={styles.staticInfo__contactsTitle}>Phone:</b>
            <br />
            <a className={styles.staticInfo__phone} href="tel:(00)1234 5678">
              (00)1234 5678
            </a>
          </span>
        </div>
        <div className={styles.staticInfo__contactContainer}>
          <img
            className={styles.staticInfo__timeLogo}
            src={TimeLogo}
            alt="Time Logo"
          />
          <div className={styles.staticInfo__contactsWrapper}>
            <b className={styles.staticInfo__contactsTitle}>We are open:</b>
            <br />
            <div className={styles.staticInfo__scheduleText}>
              Monday - Thursday: 9:00 AM - 5:30 PM <br /> Friday 9:00 AM - 6:00
              PM <br />
              Saturday: 11:00 AM - 5:00 PM
            </div>
          </div>
        </div>
        <div className={styles.staticInfo__contactsContainer}>
          <img
            className={styles.staticInfo__emailLogo}
            src={EmailLogo}
            alt="Email Logo"
          />
          <span className={styles.staticInfo__contactsWrapper}>
            <b className={styles.staticInfo__contactsTitle}>E-mail:</b>
            <br />
            <a
              className={styles.staticInfo__email}
              href="mailto:shop@email.com"
            >
              onlinestoredanit@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopInfoStatic;
