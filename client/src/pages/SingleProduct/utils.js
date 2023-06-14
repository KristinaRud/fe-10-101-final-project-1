import styles from "./SingleProduct.module.scss";

export const getDetailsList = (data) => {
  const values = Object.entries(data);
  const listItems = values.map(([key, value]) => (
    <li key={`${key}`} className={styles["details-list__item"]}>
      <strong>{key.toUpperCase()}</strong> {value}
    </li>
  ));
  return [...listItems];
};
