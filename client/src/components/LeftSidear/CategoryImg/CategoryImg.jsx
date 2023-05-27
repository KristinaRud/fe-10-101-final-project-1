import { useState } from "react";
import s from "./CategoryImg.module.scss";

const CategoryImg = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState({}); // зчитуєм з url категорію і робим гет на отримання її з бекенду
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={category.img} alt="category" />
    </div>
  );
};

export default CategoryImg;
