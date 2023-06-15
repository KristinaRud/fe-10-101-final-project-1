import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandItem from "./BrandItem/BrandItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import FilterButton from "../FilterList/FilterButton/FilterButton";
import { selectPartners } from "../../../store/selectors/partners.selector";
import s from "./BrandList.module.scss";
import { fetchPartners } from "../../../store/actionCreator/partners.actionCreator";

const BrandList = () => {
  const [limit, setLimit] = useState(6);
  const [isShowAll, setIsShowAll] = useState(false);
  const dispatch = useDispatch();
  const partners = useSelector(selectPartners);

  const handleShowAllBrands = () => {
    if (isShowAll) {
      setLimit(6);
      setIsShowAll(false);
    } else {
      setLimit(partners.length);
      setIsShowAll(true);
    }
  };

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <ListWrapper title="Partners">
        <FilterButton onClick={handleShowAllBrands}>
          {isShowAll ? "Hide all partners" : "Show all Partners"}
        </FilterButton>
      </ListWrapper>
      <div className={s.brands}>
        {partners.map((item, index) => {
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
