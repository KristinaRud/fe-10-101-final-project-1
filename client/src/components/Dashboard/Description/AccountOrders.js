import { Box } from "@mui/material";
import styles from "./AccountOrders.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { selectOrders } from "../../../store/selectors/orders.selector";
// import { useEffect } from "react";
// import { fetchOrders } from "../../../store/actionCreator/orders.actionCreator";

const AccountOrders = () => {
  // const dispatch = useDispatch();
  // const orders = useSelector(selectOrders)
  // useEffect(() => {
  //   dispatch(fetchOrders());
  // }, [dispatch]);
  //
  const orders = [
    { number: 11111, date: "11.01.12.24", total: "$253.00", quantity: 5 },
    { number: 22222, date: "11.01.12.24", total: "$22.00", quantity: 2 },
  ];

  const itemMenu = orders.map((el) => (
    <li key={el.number} className={styles.item}>
      <p>{el.date}</p>
      <p>{el.number}</p>
      <p>{el.quantity}</p>
      <p>{el.total}</p>
    </li>
  ));

  return (
    <Box>
      <h3 className={styles.title}>Order history</h3>
      <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <h4 className={styles.description}>Date ordered</h4>
        <h4 className={styles.description}>Order No</h4>
        <h4 className={styles.description}>Items</h4>
        <h4 className={styles.description}>Total amount</h4>
      </Box>
      <ul>{itemMenu}</ul>
    </Box>
  );
};
export default AccountOrders;
