import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allCategoriesSelector } from "../../../store/selectors/catalog.selector";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";

const CatalogComponent = () => {
  const dispatch = useDispatch();

  const catalog = useSelector(allCategoriesSelector);

  const navbarItems = catalog.map(({ name, id }) => {
    return {
      name,
      url: `${id}?categories=${id}&perPage=8&startPage=1&sort=-rating`,
    };
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return navbarItems.map(({ name, url }) => {
    return (
      <li key={name}>
        <Link to={url} color="inherit">
          {name}
        </Link>
      </li>
    );
  });
};

export default CatalogComponent;
