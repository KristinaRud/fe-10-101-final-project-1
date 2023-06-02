import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "./NewProductsSliderConfig";
import styles from "./NewProductsSlider.module.scss";
import ProductCard from "../../ProductCard/ProductCard";
import { NewProductsConfig } from "../slidersConfig";

const NewProductSlider = () => {
  return (
    <div className={styles.new_products_slider}>
      <div className={styles.header}>
        <div className={styles.header_title}>New Products</div>
        <a className={styles.header_link} href="https://www.facebook.com">
          See All New Products
        </a>
      </div>
      <Slider {...NewProductsConfig}>
        {productsData.map((item) => (
          <div key={item.id} className={styles.card}>
            <ProductCard
              image={item.img_url}
              title={item.title}
              description={item.description}
              oldPrice={item.oldPrice}
              currentPrice={item.currentPrice}
              available={item.available}
              rating={item.rating}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProductSlider;
