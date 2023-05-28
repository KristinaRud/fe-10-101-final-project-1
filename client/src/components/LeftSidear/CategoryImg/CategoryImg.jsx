import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { catalogSelector } from "../../../store/slices/catalog.slice";
import { fetchCategory } from "../../../store/actionCreator/catalog.actionCreator";
import s from "./CategoryImg.module.scss";

const CategoryImg = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categories = searchParams.get("categories");
  const category = useSelector(catalogSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory(categories));
  }, [dispatch, categories]);

  return (
    <div className={s.wrapper}>
      {category.length > 0 && (
        <img className={s.img} src={category.imgUrl} alt="category" />
      )}
    </div>
  );
};

export default CategoryImg;
