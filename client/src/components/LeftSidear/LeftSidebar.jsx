import { useSelector } from "react-redux";
import FilterList from "./FilterList/FilterList";
import BrandList from "./BrandList/BrandList";
import CompareProducts from "./CompareProducts/CompareProducts";
import CategoryImg from "./CategoryImg/CategoryImg";
import BackLink from "./BackLink/BackLink";
import s from "./LeftSidebar.module.scss";
import { selectCustomers } from "../../store/selectors/customers.selector";
import { selectWishList } from "../../store/selectors/wishList.selector";
import { selectComparison } from "../../store/selectors/comparison.selector";
import { selectFilters } from "../../store/selectors/filters.selector";
import { replaceDashWithSpace } from "../../utils/string/replaceDashWithSpace";

const LeftSidebar = () => {
  const { isLogin } = useSelector(selectCustomers);
  const { itemsWishList } = useSelector(selectWishList);
  const { comparison } = useSelector(selectComparison);
  const { category } = useSelector(selectFilters);

  return (
    <div className={s.wrapper}>
      <BackLink />
      <FilterList />
      <BrandList />
      <CompareProducts
        isFavourite
        data={itemsWishList.filter(
          (item) => item.categories === replaceDashWithSpace(category),
        )}
      />
      {isLogin && (
        <CompareProducts
          data={
            Object.keys(comparison).length > 0
              ? comparison?.products[replaceDashWithSpace(category)]
              : []
          }
        />
      )}
      <CategoryImg />
    </div>
  );
};

export default LeftSidebar;
