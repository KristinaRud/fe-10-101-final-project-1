import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./AccountOrders.module.scss";
import { selectOrders } from "../../../store/selectors/orders.selector";

const AccountOrders = ({ title }) => {
  const { allOrders, isLoading } = useSelector(selectOrders);

  if (isLoading) {
    return (
      <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  let itemMenu;
  let arrayOrders;

  if (title === "Last order") {
    arrayOrders = allOrders.length > 0 ? [allOrders[allOrders.length - 1]] : [];
  } else {
    arrayOrders = allOrders.length > 0 ? allOrders : [];
  }

  if (arrayOrders.length > 0) {
    itemMenu = arrayOrders.map((el) => {
      return (
        <TableRow key={el._id}>
          <TableCell className={styles.noOrder}>{el.orderNo}</TableCell>
          <TableCell sx={{ color: "gray" }}>
            {el.date.replace(/T.*/, "")}
          </TableCell>
          <TableCell sx={{ color: "gray" }}>₴ {el.totalSum}</TableCell>
          <TableCell sx={{ color: "gray" }}>Sent</TableCell>
          <TableCell sx={{ color: "#0156ff" }}>
            <Link to={`/account/orders/${el.orderNo}`} className={styles.link}>
              Check the details
            </Link>
          </TableCell>
        </TableRow>
      );
    });
  } else {
    itemMenu = "No your order";
  }

  return (
    <Box sx={{ margin: 1 }}>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        className={styles.title}
      >
        {title}
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Order No</TableCell>
            <TableCell>Date ordered</TableCell>
            <TableCell>Total amount</TableCell>
            <TableCell>Status order</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{itemMenu}</TableBody>
      </Table>
    </Box>
  );
};
export default AccountOrders;

AccountOrders.propTypes = {
  title: PropTypes.string,
};

AccountOrders.defaultProps = {
  title: " ",
};
