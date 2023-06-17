import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../store/selectors/products.selector";
import ProductCard from "../../ProductCard/ProductCard";
import { NewProductsConfig } from "../slidersConfig";
import styles from "./NewProductsSlider.module.scss";

const NewProductSlider = () => {
  const [newProducts, setNewProducts] = useState([]);
  const { products } = useSelector(selectProducts);

  useEffect(() => {
    if (products?.length > 0) {
      const lastProducts = products.slice(-10);
      setNewProducts(lastProducts);
    }
  }, [products]);

  return (
    <div className={styles.new_products_slider}>
      <div className={styles.header}>
        <div className={styles.header_title}>New Products</div>
      </div>
      <Slider {...NewProductsConfig}>
        {newProducts.map((item) => (
          <div key={item.itemNo} className={styles.card}>
            <ProductCard
              id={item._id}
              image={item.imageUrls[0]}
              title=""
              description={item.name}
              oldPrice={item.previousPrice}
              currentPrice={item.currentPrice}
              available={item.quantity > 5}
              rating={item.rating}
              alt={item.name}
              categories={item.categories}
              name={item.name}
              itemNo={item.itemNo}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProductSlider;
