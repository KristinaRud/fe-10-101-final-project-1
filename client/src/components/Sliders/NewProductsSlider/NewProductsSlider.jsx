import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";
import { selectProducts } from "../../../store/slices/products.slice";
import ProductCard from "../../ProductCard/ProductCard";
import { NewProductsConfig } from "../slidersConfig";
import styles from "./NewProductsSlider.module.scss";

const NewProductSlider = () => {
  const [newProducts, setNewProducts] = useState([]);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(""));
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      const allProducts = products.products;
      const lastProducts = allProducts.slice(-10);
      setNewProducts(lastProducts);
    }
  }, [products]);

  return (
    <div className={styles.new_products_slider}>
      <div className={styles.header}>
        <div className={styles.header_title}>New Products</div>
        <a className={styles.header_link} href="/">
          See All New Products
        </a>
      </div>
      <Slider {...NewProductsConfig}>
        {newProducts.map((item) => (
          <div key={item.itemNo} className={styles.card}>
            <ProductCard
              image={item.imageUrls[0]}
              title=""
              description={item.name}
              oldPrice={item.previousPrice.toString()}
              currentPrice={item.currentPrice.toString()}
              available={item.quantity > 5}
              rating={item.rating.toString()}
              alt={item.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProductSlider;
