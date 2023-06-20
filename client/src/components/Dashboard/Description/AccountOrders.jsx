import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./AccountOrders.module.scss";
import { selectOrders } from "../../../store/selectors/orders.selector";

const AccountOrders = () => {
  const { orders } = useSelector(selectOrders);
  let itemMenu;
  if (orders.length) {
    itemMenu = orders?.map((el) => {
      return (
        <li key={el._id} className={styles.item}>
          <p>{el.date.replace(/T.*/, "")}</p>
          <p>{el._id}</p>
          <p>${el.totalSum}</p>
        </li>
      );
    });
  }

  return (
    <Box>
      <h3 className={styles.title}>Order history</h3>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h4 className={styles.description}>Date ordered</h4>
        <h4 className={styles.description}>Order No</h4>
        <h4 className={styles.description}>Total amount</h4>
      </Box>
      <ul>{itemMenu}</ul>
    </Box>
  );
};
export default AccountOrders;
