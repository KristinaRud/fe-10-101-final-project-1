import CategoriesList from "./CategoriesList/CategoriesList";
import s from "./CategoriesProducts.module.scss";
import PartnersList from "./PartnersList/PartnersList";

const CategoriesProducts = () => {
  return (
    <div className={s.wrapper}>
      <CategoriesList />
      <PartnersList />
    </div>
  );
};

export default CategoriesProducts;
