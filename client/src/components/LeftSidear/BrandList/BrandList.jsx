import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandItem from "./BrandItem/BrandItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import FilterButton from "../FilterList/FilterButton/FilterButton";
import { selectPartners } from "../../../store/selectors/partners.selector";
import s from "./BrandList.module.scss";
import { fetchPartners } from "../../../store/actionCreator/partners.actionCreator";
import { selectFilters } from "../../../store/selectors/filters.selector";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [limit, setLimit] = useState(6);
  const dispatch = useDispatch();
  const data = useSelector(selectPartners);
  const filterData = useSelector(selectFilters);
  const products = filterData.productsOfCategory;

  const handleShowAllBrands = () => setLimit(brands.length);

  useEffect(() => {
    const brandsData = [];
    if (data.length && Object.keys(products).length) {
      data.forEach((item) => {
        products.products.forEach((product) => {
          if (item.name.toLowerCase() === product.brand.toLowerCase()) {
            brandsData.push(item);
          }
        });
      });
      setBrands([...new Set(brandsData)]);
    }
  }, [data, products]);

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <ListWrapper title="Partners">
        <FilterButton onClick={handleShowAllBrands}>All Brands</FilterButton>
      </ListWrapper>
      <div className={s.brands}>
        {brands.map((item, index) => {
          if (index < limit) {
            return (
              <BrandItem
                key={item.name}
                url={item.imageUrl}
                href={item.url}
                heightImg="46"
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BrandList;
