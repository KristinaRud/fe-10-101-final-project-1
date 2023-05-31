import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { selectProducts } from "../../../../store/slices/products.slice";
import { fetchProducts } from "../../../../store/actionCreator/products.actionCreator";
import Product from "../../../Product/Product";
import s from "./ProductsList.module.scss";

const ProductsList = ({ category }) => {
  const [limit] = useState(5);
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
    <List className={s.wrapper}>
      {productsCategory.length > 0 &&
        productsCategory.map(
          (product, index) =>
            index < limit && (
              <Product
                key={product.name}
                imageUrl={product.imageUrls[0]}
                {...product}
              />
            ),
        )}
    </List>
  );
};

ProductsList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductsList;
