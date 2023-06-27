import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import styles from "./AccountOrders.module.scss";

// eslint-disable-next-line react/prop-types
const AccountOrders = ({ title, arrayOrders }) => {
  let itemMenu;

  // eslint-disable-next-line react/prop-types
  if (arrayOrders.length > 0) {
    // eslint-disable-next-line react/prop-types
    itemMenu = arrayOrders.map((el) => {
      return (
        <TableRow key={el._id}>
          <TableCell className={styles.noOrder}>{el.orderNo}</TableCell>
          <TableCell sx={{ color: "gray" }}>
            {el.date.replace(/T.*/, "")}
          </TableCell>
          <TableCell sx={{ color: "gray" }}>${el.totalSum}</TableCell>
          <TableCell sx={{ color: "gray" }}>Відправлене</TableCell>
          <TableCell sx={{ color: "#0156ff" }}>
            <Link to={`/account/orders/${el.orderNo}`} className={styles.link}>
              Перевірити деталі
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
