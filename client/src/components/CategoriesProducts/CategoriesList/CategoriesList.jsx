import { List, Box, CircularProgress } from "@mui/material";
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
    <>
      {catalog.length > 3 ? (
        <List className={s.list}>
          {catalog.map(({ id, name, imgUrl }) => (
            <div key={id} className={s.wrapper}>
              <CategoryItem name={name} imgUrl={imgUrl} id={id} />
              <ProductsList category={name} />
            </div>
          ))}
        </List>
      ) : (
        <Box sx={{ width: "50px", height: "50px" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default CategoriesList;
