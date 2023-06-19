import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { selectProducts } from "../../../../store/selectors/products.selector";
import { fetchProducts } from "../../../../store/actionCreator/products.actionCreator";
import ProductCard from "../../../ProductCard/ProductCard";
import { CategoriesProducts } from "../../../Sliders/slidersConfig";
import s from "./ProductsList.module.scss";

const ProductsList = ({ category }) => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts(""));
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      const allProductsCategory = products.products.filter(
        (product) => product.categories === category,
      );
      setProductsCategory(allProductsCategory);
    }
  }, [category, products]);

  return (
    <Slider className={s.slider} {...CategoriesProducts}>
      {productsCategory.length > 0 &&
        productsCategory.map((item) => (
          <div key={item._id}>
            <ProductCard
              id={item._id}
              image={item.imageUrls[0]}
              title=" "
              description={item.name}
              oldPrice={item.previousPrice}
              currentPrice={item.currentPrice}
              available={item.quantity > 5}
              rating={Number(item.rating)}
              alt={item.name}
              categories={item.categories}
              name={item.name}
              itemNo={item.itemNo}
            />
          </div>
        ))}
    </Slider>
  );
};

ProductsList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductsList;
