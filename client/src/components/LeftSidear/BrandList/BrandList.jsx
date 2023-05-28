import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandItem from "./BrandItem/BrandItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import FilterButton from "../FilterList/FilterButton/FilterButton";
import { selectPartners } from "../../../store/slices/partners.slice";
import { selectProducts } from "../../../store/slices/products.slice";
import s from "./BrandList.module.scss";
import { fetchPartners } from "../../../store/actionCreator/partners.actionCreator";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [limit, setLimit] = useState(6);
  const dispatch = useDispatch();
  const data = useSelector(selectPartners);
  const products = useSelector(selectProducts);

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
    <>
      <ListWrapper title="Partners">
        <FilterButton onClick={handleShowAllBrands}>All Brands</FilterButton>
      </ListWrapper>
      <div className={s.wrapper}>
        {brands.map((item, index) => {
          if (index < limit) {
            return (
              <BrandItem key={item.name} url={item.imageUrl} href={item.url} />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default BrandList;
