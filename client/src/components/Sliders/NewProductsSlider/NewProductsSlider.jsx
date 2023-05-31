import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsData } from "./NewProductsSliderConfig";
import styles from "./NewProductsSlider.module.scss";
import ProductCard from "../../ProductCard/ProductCard";

const NewProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.new_products_slider}>
      <div className={styles.header}>
        <div className={styles.header_title}>New Products</div>
        <a className={styles.header_link} href="https://www.facebook.com">
          See All New Products
        </a>
      </div>
      <Slider {...settings}>
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
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProductSlider;
