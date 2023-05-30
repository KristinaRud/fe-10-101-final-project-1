import CompareProducts from "../CompareProducts/CompareProducts";
import CategoryImg from "../CategoryImg/CategoryImg";
import s from "./MobileSidebar.module.scss";

const MobileCompareProducts = () => {
  return (
    <div className={s.wrapper}>
      <CompareProducts />
      <CompareProducts isFavourite />
      <CategoryImg />
    </div>
  );
};

export default MobileCompareProducts;

// TODO: вставити вниз під продукти для мобілки
