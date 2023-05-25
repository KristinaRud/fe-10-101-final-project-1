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

const Footer = () => {
  const data = [
    {
      title: `Information`,
      details: (
        <>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">About Zip</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
          <li>
            <Link to="/">Orders and Returns</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Advanced Search</Link>
          </li>
          <li>
            <Link to="/">Newsletter Subscription</Link>
          </li>
        </>
      ),
    },
    {
      title: `PC Parts`,
      details: (
        <>
          <li>
            <Link to="/">CPUS</Link>
          </li>
          <li>
            <Link to="/">Add On Cards</Link>
          </li>
          <li>
            <Link to="/">Hard Drives (Internal)</Link>
          </li>
          <li>
            <Link to="/">Graphic Cards</Link>
          </li>
          <li>
            <Link to="/">Keyboards / Mice</Link>
          </li>
          <li>
            <Link to="/">Cases / Power Supplies / Cooling</Link>
          </li>
          <li>
            <Link to="/">RAM (Memory)</Link>
          </li>
          <li>
            <Link to="/">Software</Link>
          </li>
          <li>
            <Link to="/">Speakers / Headsets</Link>
          </li>
          <li>
            <Link to="/">Motherboards</Link>
          </li>
        </>
      ),
    },
    {
      title: `Desktop PCs`,
      details: (
        <>
          <li>
            <Link to="/">Custom PCs</Link>
          </li>
          <li>
            <Link to="/">Servers</Link>
          </li>
          <li>
            <Link to="/">MSI All-In-One PCs</Link>
          </li>
          <li>
            <Link to="/">HP/Compaq PCs</Link>
          </li>
          <li>
            <Link to="/">ASUS PCs</Link>
          </li>
          <li>
            <Link to="/">Tecs PCs</Link>
          </li>
        </>
      ),
    },
    {
      title: `Laptops`,
      details: (
        <>
          <li>
            <Link to="/">Everyday Use Notebooks</Link>
          </li>
          <li>
            <Link to="/">MSI Workstation Series</Link>
          </li>
          <li>
            <Link to="/">MSI Prestige Series</Link>
          </li>
          <li>
            <Link to="/">Tablets and Pads</Link>
          </li>
          <li>
            <Link to="/">Netbooks</Link>
          </li>
          <li>
            <Link to="/">Infinity Gaming Notebooks</Link>
          </li>
        </>
      ),
    },
    {
      title: `Address`,
      details: (
        <>
          <li>
            <Link to="/">Address: 1234 Street Adress City Address, 1234</Link>
          </li>
          <li>
            <Link to="/">Phones: (00) 1234 5678</Link>
          </li>
          <li>
            <Link to="/">We are open: Monday-Thursday: 9:00 AM - 5:30 PM</Link>
          </li>
          <li>
            <Link to="/">Friday: 9:00 AM - 6:00 PM</Link>
          </li>
          <li>
            <Link to="/">Saturday: 11:00 AM - 5:00 PM</Link>
          </li>
          <li>
            <Link to="/">E-mail: shop@email.com</Link>
          </li>
        </>
      ),
    },
  ];

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const linkItems = data.map(({ title, details }) => {
    const result =
      windowSize.current[0] <= 768 ? (
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
