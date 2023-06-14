import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allCategoriesSelector } from "../../../store/selectors/catalog.selector";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";
import CategoryItem from "./CategoryItem/CategoryItem";
import s from "./CategoriesList.module.scss";
import ProductsList from "./ProductsList/ProductsList";

const CategoriesList = () => {
  const catalog = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <List className={s.list}>
      {catalog.length > 0 &&
        catalog.map(({ id, name, imgUrl }) => (
          <div key={id} className={s.wrapper}>
            <CategoryItem name={name} imgUrl={imgUrl} id={id} />
            <ProductsList category={name} />
          </div>
        ))}
    </List>
  );
};

export default CategoriesList;
