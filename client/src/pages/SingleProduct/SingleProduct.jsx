import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsList } from "./utils";
import styles from "./SingleProduct.module.scss";
import { fetchProducts } from "../../store/actionCreator/products.actionCreator";
import { selectProducts } from "../../store/selectors/products.selector";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";
import AboutProductSlider from "../../components/Sliders/AboutProductSlider/AboutProductSlider";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [detailsList, setDetailsList] = useState(null);
  const [isActiveTab, setIsActiveTab] = useState({
    status: true,
    title: "About Product",
  });

  useEffect(() => {
    dispatch(fetchProducts(""));
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      const currentProduct = products.find((product) => product._id === id);
      const list = getDetailsList(currentProduct.characteristics);
      setCurrentProduct(currentProduct);
      setDetailsList(list);
    }
  }, [id, products]);

  if (!currentProduct) return "Loading...";
  const { name, categories, currentPrice, description, itemNo } =
    currentProduct;

  const breadcrumbsCustomData = [
    { label: "Home", url: "/" },
    {
      label: categories,
      url: `/${categories}?categories=${categories}&perPage=8&startPage=1&sort=-rating`,
    },
    { label: name },
  ];

  const productCounterHandler = () => {};

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
                <span className={styles["count__text--bold"]}>
                  ${currentPrice}
                </span>
              </p>
              <TextField
                type="number"
                defaultValue={1}
                className={styles.count__field}
                InputProps={{
                  inputProps: {
                    max: 20,
                    min: 1,
                  },
                }}
                onChange={productCounterHandler}
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
              <div className={styles["product-info__breadcrumbs"]}>
                <BreadcrumbsApp breadcrumbsCustomData={breadcrumbsCustomData} />
              </div>
              <h1 className={styles["product-info__title"]}>
                {currentProduct.name}
              </h1>
              <p className={styles["product-info__subtitle"]}>
                Be the first to review this product
              </p>
              {isActiveTab.title === "About Product" ? (
                <p className={styles["product-info__description"]}>
                  {description[0].title}
                </p>
              ) : (
                <ul className={styles["details-list"]}>{detailsList}</ul>
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
                <p className={styles["product-info__code"]}>{itemNo}</p>
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
                src={description[0].image}
                alt={name}
                className={styles["product-picture__image"]}
              />
            </div>
          </div>
        </div>
      </div>
      <AboutProductSlider data={description} />;
    </div>
  );
};

export default SingleProduct;
