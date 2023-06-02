import { Typography } from "@mui/material";
import styles from "./ShopInfoDropDown.module.scss";
import TimerLogo from "../../assets/images/shopInfo/dropdown__timer.svg";
import LocationLogo from "../../assets/images/shopInfo/dropdown__location.svg";

const ShopInfoDropDown = () => {
  return (
    <div className={styles["shop__info-wrapper"]}>
      <div className={styles["shop__time-wrapper"]}>
        <img className={styles.timer__logo} src={TimerLogo} alt="Timer Logo" />
        <div className={styles["shop__working-time"]}>
          <Typography
            component="p"
            fontSize={12}
            fontWeight={400}
            lineHeight="16.8px"
          >
            We are open:
          </Typography>
          <Typography component="span" fontSize={12} color="#A2A6B0">
            Mon-Thu: <b>9:00 AM - 5:30 PM</b>
            <br />
            Fr: <b>9:00 AM - 6:00 PM</b>
            <br />
            Sat: <b>11:00 AM - 5:00 PM</b>
          </Typography>
        </div>
      </div>
      <div className={styles["shop-adress"]}>
        <img
          className={styles.location__logo}
          src={LocationLogo}
          alt="Timer Logo"
        />
        <div className={styles["shop__adress-info"]}>
          <Typography fontSize={13} fontWeight={400} color="#000">
            Address: 1234 Street Adress, <br /> City Address, 1234
          </Typography>
        </div>
      </div>

      <div className={styles["shop__contacts-info"]}>
        <Typography
          fontSize={13}
          fontWeight={400}
          color="#000"
          align="left"
          component="span"
        >
          Phones:{" "}
          <a href="(00) 1234 5678" style={{ color: "#0156FF" }}>
            (00) 1234 5678
          </a>{" "}
          <br /> E-mail:{" "}
          <a href="shop@email.com" style={{ color: "#0156FF" }}>
            shop@email.com
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default ShopInfoDropDown;
