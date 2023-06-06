import FilterList from "./FilterList/FilterList";
import BrandList from "./BrandList/BrandList";
import CompareProducts from "./CompareProducts/CompareProducts";
import CategoryImg from "./CategoryImg/CategoryImg";
import BackLink from "./BackLink/BackLink";
import s from "./LeftSidebar.module.scss";

const LeftSidebar = () => {
  const data = {};
  return (
    <div className={s.wrapper}>
      <BackLink />
      <FilterList />
      <BrandList />
      <CompareProducts data={data} />
      <CompareProducts isFavourite data={data} />
      <CategoryImg />
    </div>
  );
};

export default LeftSidebar;

// TODO: замінити заглушки на реальні дані і взагалі відображати фаворити тільки при залогіненому користувачеві
