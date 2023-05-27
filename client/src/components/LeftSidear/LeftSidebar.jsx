import FilterList from "./FilterList/FilterList";
import BrandList from "./BrandList/BrandList";
import CompareProducts from "./CompareProducts/CompareProducts";
import CategoryImg from "./CategoryImg/CategoryImg";
import s from "./LeftSidebar.module.scss";

const LeftSidebar = () => {
  return (
    <div className={s.wrapper}>
      <FilterList />
      <BrandList />
      <CompareProducts />
      <CompareProducts isFavourite />
      <CategoryImg />
    </div>
  );
};

export default LeftSidebar;
