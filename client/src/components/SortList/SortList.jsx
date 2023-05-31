import SortItem from "./SortItem/SortItem";
import ItemsPageInfo from "./ItemsPageInfo/ItemsPageInfo";
import PageParams from "./PageParams/PageParams";
import IconView from "./IconView/IconView";
import s from "./SortList.module.scss";

const SortList = () => {
  return (
    <div className={s.wrapper}>
      <ItemsPageInfo />
      <div className={s.sortWrapper}>
        <SortItem />
        <PageParams />
        <IconView />
      </div>
    </div>
  );
};

export default SortList;
