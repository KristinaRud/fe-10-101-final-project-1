import cx from "classnames";
import { Container, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./AboutUs.module.scss";
import KeyboardImg from "../../assets/images/aboutUs/keyboard.png";
import AboutShopImg from "../../assets/images/aboutUs/shop.png";
import SafeImg from "../../assets/images/aboutUs/safe.png";
import QualityImg from "../../assets/images/aboutUs/quality.png";
import DeliveryImg from "../../assets/images/aboutUs/delivery.png";
import { ReactComponent as DropIcon } from "./icons/drop.svg";
import { ReactComponent as VecIcon } from "./icons/vec.svg";

const AboutUsPage = () => {
  return (
    <>
      <Box sx={{ margin: "0 auto", maxWidth: "1400px" }}>
        <h1 className={styles.title}>About Us</h1>
      </Box>
      <section className={styles.black}>
        <Container sx={{ margin: "0 auto", maxWidth: "1400px" }}>
          <div className={cx(styles.section, styles.reverse)}>
            <img src={AboutShopImg} className={styles.full} alt="shop" />
            <div className={styles.container}>
              <h2 className={styles.top}>A Family That Keeps On Growing</h2>
              <p>
                We always aim to please the home market, supplying great
                computers and hardware at great prices to non-corporate
                customers, through our large Melbourne CBD showroom and our
                online store. Shop management approach fosters a strong customer
                service focus in our staff. We prefer to cultivate long-term
                client relationships rather than achieve quick sales,
                demonstrated in the measure of our long-term success.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Container sx={{ margin: "0 auto", maxWidth: "1400px" }}>
        <section className={styles.section}>
          <img src={KeyboardImg} alt="keyboard" />
          <div className={styles.container}>
            <div className={styles.wrapperIcon}>
              <VecIcon className={styles.icon} />
              <DropIcon className={styles.iconDrop} />
            </div>

            <h2>shop.com</h2>
            <p>
              Shop is a proudly Australian owned, Melbourne based supplier of
              I.T. goods and services, operating since 1991. Our client base
              encompasses individuals, small business, corporate and government
              organisations. We provide complete business IT solutions, centred
              on high quality hardware and exceptional customer service.
            </p>
          </div>
        </section>
      </Container>
      <section className={styles.black}>
        <Container sx={{ margin: "0 auto", maxWidth: "1400px" }}>
          <div className={cx(styles.section, styles.reverse)}>
            <img src={SafeImg} className={styles.top} alt="safe" />
            <div className={styles.container}>
              <div className={styles.wrapperIcon}>
                <FavoriteIcon className={styles.icon} />
                <DropIcon className={styles.iconDrop} />
              </div>

              <h2>You&apos;re In Safe Hands</h2>
              <p>
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience. *Performance compared to i7-9700. Specs varies by
                model.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container sx={{ margin: "0 auto", maxWidth: "1400px" }}>
        <section className={styles.section}>
          <img src={QualityImg} alt="quality" />
          <div className={styles.container}>
            <div className={styles.wrapperIcon}>
              <StarIcon className={styles.icon} />
              <DropIcon className={styles.iconDrop} />
            </div>

            <h2>The Highest Quality of Products</h2>
            <p>
              We guarantee the highest quality of the products we sell. Several
              decades of successful operation and millions of happy customers
              let us feel certain about that. Besides, all items we sell pass
              thorough quality control, so no characteristics mismatch can
              escape the eye of our professionals.
            </p>
          </div>
        </section>
      </Container>

      <section className={styles.black}>
        <Container sx={{ margin: "0 auto", maxWidth: "1400px" }}>
          <div className={cx(styles.section, styles.reverse)}>
            <img src={DeliveryImg} className={styles.top} alt="delivery" />
            <div className={styles.container}>
              <div className={styles.wrapperIcon}>
                <LocalShippingIcon className={styles.icon} />
                <DropIcon className={styles.iconDrop} />
              </div>

              <h2>Delivery to All Regions</h2>
              <p>
                We deliver our goods all across Australia. No matter where you
                live, your order will be shipped in time and delivered right to
                your door or to any other location you have stated. The packages
                are handled with utmost care, so the ordered products will be
                handed to you safe and sound, just like you expect them to be.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUsPage;
