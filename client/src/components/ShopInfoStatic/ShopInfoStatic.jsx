import styles from "./ShopInfoStatic.module.scss";
import LocationLogo from "../../assets/images/shopInfoStatic/static__location.svg";
import PhoneLogo from "../../assets/images/shopInfoStatic/static__phone.svg";
import TimeLogo from "../../assets/images/shopInfoStatic/static__time.svg";
import EmailLogo from "../../assets/images/shopInfoStatic/static__email.svg";

const ShopInfoStatic = () => {
  return (
    <div className={styles["shop__info-container"]}>
      <div className={styles["shop__info-wrapper"]}>
        <div className={styles["shop__contacts-container"]}>
          <img
            className={styles.location__logo}
            src={LocationLogo}
            alt="Location Logo"
          />
          <span className={styles["shop__contacts-wrapper"]}>
            <b>Address:</b>
            <br />
            <text>1234 Street Adress City Address, 1234</text>
          </span>
        </div>
        <div className={styles["shop__contacts-container"]}>
          <img
            className={styles.phone__logo}
            src={PhoneLogo}
            alt="Phone Logo"
          />
          <span className={styles["shop__contacts-wrapper"]}>
            <b>Phone:</b>
            <br />
            <text>(00)1234 5678</text>
          </span>
        </div>
        <div className={styles["shop__contacts-container"]}>
          <img className={styles.time__logo} src={TimeLogo} alt="Time Logo" />
          <span className={styles["shop__contacts-wrapper"]}>
            <b>We are open:</b>
            <br />
            <text>
              Monday - Thursday: 9:00 AM - 5:30 PM <br /> Friday 9:00 AM - 6:00
              PM <br />
              Saturday: 11:00 AM - 5:00 PM
            </text>
          </span>
        </div>
        <div className={styles["shop__contacts-container"]}>
          <img
            className={styles.email__logo}
            src={EmailLogo}
            alt="Email Logo"
          />
          <span className={styles["shop__contacts-wrapper"]}>
            <b className={styles["shop__contacts-title"]}>E-mail:</b>
            <br />
            <a
              style={{
                color: "blue",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "19px",
                textDecoration: "none",
              }}
              href="shop@email.com"
            >
              shop@email.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopInfoStatic;
