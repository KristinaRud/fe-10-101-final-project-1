import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles["header-title"]}>
            <h3>Sign Up To Our Newsletter.</h3>
            <p>Be the first to hear about the latest offers.</p>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.link}>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnewsletter.com%2F" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
  
        </div>

        <div className={styles.utility}>
          <div className={styles["utility-social"]}>
            <div className={styles["utility-social-item"]}>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.theguardian.com%2F2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f">&nbsp;</i>
              </a>
            </div>
            <div className={styles["utility-social-item"]}>
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.theguardian.com%2F2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter">&nbsp;</i>
              </a>
            </div>
          </div>
          <div className={styles["utility-payment"]}>
            <div className={styles["utility-payment-item"]}>
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=202000000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-paypal">&nbsp;jjj</i>
              </a>
            </div>
          </div>
          <div className={styles["utility-copy"]}>
            <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
