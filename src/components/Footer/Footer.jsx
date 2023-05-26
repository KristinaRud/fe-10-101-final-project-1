import { useRef } from "react";
import { Link } from "react-router-dom";
import Accordion from "./componetns/Accordion/Accordion";
import styles from "./Footer.module.scss";
import Fb from "../../assets/images/footer/social/fb_icon.png";
import Insta from "../../assets/images/footer/social/in_icon.png";
import PayPal from "../../assets/images/footer/payment/paypal.png";
import Visa from "../../assets/images/footer/payment/visa.png";
import Master from "../../assets/images/footer/payment/maestro.png";
import Disc from "../../assets/images/footer/payment/discover.png";
import AmEx from "../../assets/images/footer/payment/american-express.png";
import data from "../../utils/footerData";

const Footer = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const linkItems = data.map(({ title, details }) => {
    const result =
      windowSize.current[0] <= 1397 ? (
        <Accordion
          key={title}
          title={
            <span className={styles["link-list-header"]}>
              <Link to="/">{title}</Link>
            </span>
          }
          details={<ul className={styles["link-list-group"]}>{details}</ul>}
        />
      ) : (
        <div key={title} className={styles["links-item"]}>
          <span className={styles["link-list-header"]}>
            <Link to="/">{title}</Link>
          </span>
          <ul className={styles["link-list-group"]}>{details}</ul>
        </div>
      );

    return result;
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles["header-title"]}>
            <h3>Sign Up To Our Newsletter.</h3>
            <p>Be the first to hear about the latest offers.</p>
          </div>
        </div>

        <div className={styles.links}>{linkItems}</div>

        <div className={styles.utility}>
          <div className={`${styles["utility-social"]} ${styles.social}`}>
            <div className={styles["utility-social-item"]}>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.theguardian.com%2F2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="facebook" src={Fb} />
              </a>
            </div>
            <div className={styles["utility-social-item"]}>
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.theguardian.com%2F2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="instagram" src={Insta} />
              </a>
            </div>
          </div>
          <div className={`${styles["utility-payment"]} ${styles.payment}`}>
            <div className={styles["utility-payment-item"]}>
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=202000000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="paypal" src={PayPal} />
              </a>
            </div>
            <div className={styles["utility-payment-item"]}>
              <a
                href="https://www.visa.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=202000000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="visa" src={Visa} />
              </a>
            </div>
            <div className={styles["utility-payment-item"]}>
              <a
                href="https://www.mastercard.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=202000000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="master" src={Master} />
              </a>
            </div>
            <div className={styles["utility-payment-item"]}>
              <a
                href="https://www.discover.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=202000000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="discover" src={Disc} />
              </a>
            </div>
            <div className={styles["utility-payment-item"]}>
              <a
                href="https://www.americanexpress.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=202000000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="american-express" src={AmEx} />
              </a>
            </div>
          </div>
          <div className={`${styles["utility-copy"]} ${styles.copy}`}>
            <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
