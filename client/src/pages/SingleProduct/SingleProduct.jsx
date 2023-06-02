import { useState } from "react";
import { Breadcrumbs, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import cn from "classnames";
import { getDetailsList } from "./utils";
import styles from "./SingleProduct.module.scss";
import productImg from "../../assets/images/single-product.png";

const characteristics = {
  typeOfWorkingSurface: "Graphics tablet",
  size: "200 х 160 х 8.8 mm",
  weight: "230 g",
  activeArea: "152 х 95 mm",
  resolution: "2540 lpi",
  numberOfButtons: "4",
  readingSpeed: "133 pps",
  connectionInterface: "micro USB",
  numberOfButtonsOnThePen: "1",
  material: "ABS plastic",
  typeOfPowerSupply: "accumulator",
  batteryCapacity: "1100 mAh",
  technology: "Electromagnetic resonance",
  powerConsumption: "0.35 W",
  more: "OS support: Windows 7, mac OS 10.1 2 and above",
};

const SingleProduct = () => {
  const [isActiveTab, setIsActiveTab] = useState({
    status: true,
    title: "About Product",
  });

  const list = getDetailsList(characteristics);

  const tabToggle = (event) => {
    const title = event.target.innerText;
    setIsActiveTab({
      status: true,
      title,
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <div className={styles.inner}>
          <ul className={styles.tabs}>
            <li
              className={cn(styles.tabs__item, {
                [styles["tabs__item--active"]]:
                  isActiveTab.status && isActiveTab.title === "About Product",
              })}
              onClick={(event) => tabToggle(event)}
            >
              About Product
            </li>
            <li
              className={cn(styles.tabs__item, {
                [styles["tabs__item--active"]]:
                  isActiveTab.status && isActiveTab.title === "Details",
              })}
              onClick={(event) => tabToggle(event)}
            >
              Details
            </li>
          </ul>
          <div className={styles.control}>
            <div className={styles.count}>
              <p className={styles.count__text}>
                On Sale from{" "}
                <span className={styles["count__text--bold"]}>$3,299.00</span>
              </p>
              <TextField
                type="number"
                value={1}
                className={styles.count__field}
                InputProps={{
                  inputProps: {
                    max: 10,
                    min: 1,
                  },
                }}
              />
            </div>
            <Button variant="contained" size="large" className={styles.button}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.col}>
          <div className={styles["product-info"]}>
            <div className={styles["product-info__inner"]}>
              <Breadcrumbs
                aria-label="breadcrumb"
                className={styles.breadcrumb}
              >
                <Link to="/" className={styles.breadcrumb__item}>
                  MUI
                </Link>
                <Link
                  to="/material-ui/getting-started/installation/"
                  className={styles.breadcrumb__item}
                >
                  Core
                </Link>
                <Typography
                  color="text.primary"
                  className={styles.breadcrumb__item}
                >
                  Breadcrumbs
                </Typography>
              </Breadcrumbs>
              <h1 className={styles["product-info__title"]}>
                MSI MPG Trident 3
              </h1>
              <p className={styles["product-info__subtitle"]}>
                Be the first to review this product
              </p>
              {isActiveTab.title === "About Product" ? (
                <p className={styles["product-info__description"]}>
                  MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB
                  RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and
                  Mouse 3 Mouse 3 Years Warranty Gaming Desktop
                </p>
              ) : (
                <ul className={styles["details-list"]}>{list}</ul>
              )}
              <div className={styles["product-info__footer"]}>
                <p className={styles["product-info__support"]}>
                  Have a Question?{" "}
                  <a
                    href="mailto:"
                    className={styles["product-info__support-link"]}
                  >
                    Contact Us
                  </a>
                </p>
                <p className={styles["product-info__code"]}>SKU D5515AI</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles["product-picture"]}>
            <div className={styles["product-picture__inner"]}>
              <ul className={styles.actions}>
                <li className={styles.actions__item}>
                  <FavoriteBorderIcon className={styles.actions__icon} />
                </li>
              </ul>
              <img
                src={productImg}
                alt="MSI MPG Trident 3"
                className={styles["product-picture__image"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
