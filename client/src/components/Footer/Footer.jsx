import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Footer.module.scss";
import Fb from "../../assets/images/footer/social/fb_icon.png";
import Insta from "../../assets/images/footer/social/in_icon.png";
import PayPal from "../../assets/images/footer/payment/paypal.png";
import Visa from "../../assets/images/footer/payment/visa.png";
import Master from "../../assets/images/footer/payment/maestro.png";
import Disc from "../../assets/images/footer/payment/discover.png";
import AmEx from "../../assets/images/footer/payment/american-express.png";
import data from "../../utils/footerData";
import SubscriberForm from "./SubscriberForm/SubscriberForm";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#020203",
    paddingTop: "47px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      paddingTop: "35px",
    },
  },
  wrapperSub: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  headerTitle: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "132.5%",
    marginBottom: "15px",
    [theme.breakpoints.up("md")]: {
      fontWeight: "500",
      lineHeight: "132.5%",
      marginBottom: "45px",
      fontSize: "38px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "132.5%",
      textAlign: "center",
    },
  },
  paragraph: {
    color: "#FFFFFF",
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "132.5%",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  list: {
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "140%",
    color: "#FFFFFF",
  },
  listItemTitle: {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "100%",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "16px",
    },
  },
}));

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderListItems = (details, margin) => (
    <ul style={{ marginLeft: margin }}>{details}</ul>
  );

  const getMargin = () => {
    if (isMobile) {
      return "8px";
    }
    if (window.innerWidth <= 1024) {
      return "15px";
    }
    return "0px";
  };

  function renderAccordionItems() {
    return data.map((item) => (
      <Accordion
        key={item.title}
        sx={{
          background: "transparent",
          border: "none",
          borderBottom: "1px solid #A2A6B0",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#E5ECF1" }} />}
        >
          <Typography
            variant="h6"
            color={isMobile ? "#E5ECF1" : "rgba(255, 255, 255, 0.5)"}
          >
            {item.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#FFF" }}>
          {renderListItems(item.details, getMargin())}
        </AccordionDetails>
      </Accordion>
    ));
  }

  const renderFooterContent = () => {
    if (isMobile) {
      return renderAccordionItems(data);
    }

    return (
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2.4}
            key={item.title}
            className={classes.list}
          >
            <Typography
              variant="h6"
              className={classes.listItemTitle}
              color={isMobile ? "#E5ECF1" : "rgba(255, 255, 255, 0.5)"}
              gutterBottom
            >
              {item.title}
            </Typography>
            {renderListItems(item.details, getMargin())}
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xlg">
        <div className={classes.wrapperSub}>
          <div className={classes.headerTitle}>
            <h3>Sign Up To Our Newsletter.</h3>
            <p className={classes.paragraph}>
              Be the first to hear about the latest offers.
            </p>
          </div>
          <SubscriberForm />
        </div>
        {renderFooterContent()}
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
            <p>Copyright © 2023 Shop Pty. Ltd.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
