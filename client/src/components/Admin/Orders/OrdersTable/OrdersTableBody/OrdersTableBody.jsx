import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import OrdersTableRow from "./OrdersTableRow/OrdersTableRow";

const OrdersTableBody = ({ selected, setSelected }) => {
  const { orders } = useSelector((state) => state.orders);
  return (
    <TableBody>
      {Object.keys(orders).length > 0 &&
        orders.orders.map((row, index) => (
          <OrdersTableRow
            key={row.orderNo}
            row={row}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
    </TableBody>
  );
};

OrdersTableBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.arrayOf(PropTypes.any).isRequired,
  setSelected: PropTypes.func.isRequired,
};
export default OrdersTableBody;
