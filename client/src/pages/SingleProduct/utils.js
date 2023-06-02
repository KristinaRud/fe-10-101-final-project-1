import styles from "./SingleProduct.module.scss";

export const getDetailsList = (data) => {
  const values = Object.values(data);
  const listItems = values.map((value) => (
    <li key={`${value}`} className={styles["details-list__item"]}>
      {value}
    </li>
  ));
  return [...listItems];
};
