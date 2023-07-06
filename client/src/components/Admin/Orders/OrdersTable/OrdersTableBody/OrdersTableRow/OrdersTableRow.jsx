import { Checkbox, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { formatDate } from "../../../../../../utils/date/formatDate";
import { formatString } from "../../../../../../utils/string/formatString";

const OrdersTableRow = ({ row, selected, setSelected, index }) => {
  const labelId = `enhanced-table-checkbox-${index}`;
  const isSelected = (orderNo) => selected.indexOf(orderNo) !== -1;
  const isItemSelected = isSelected(row.orderNo);

  const handleClick = (event, orderNo) => {
    const selectedIndex = selected.indexOf(orderNo);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, orderNo);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.orderNo)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      selected={isItemSelected}
      sx={{ cursor: "pointer" }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="secondary"
          checked={isItemSelected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
        />
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        {row.orderNo}
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        {formatDate(row.date)}
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        {row.totalSum}
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        <div>{row.email}</div>
        <div>
          {row.firstName} {row.lastName}
        </div>
        <div>{row.mobile}</div>
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        <div>{formatString(row.postOffice)}</div>
        <div>
          {row.state.public_name.en}, {row.district.public_name.en},{" "}
          {row.city.public_name.en}
        </div>
        <div>
          {row.postOffice === "novaPoshta"
            ? `Branch ${row.postOfficeBranch.Number}`
            : `${row.postOfficeBranch.type_public} ${row.postOfficeBranch.num_showcase}`}
        </div>
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        {row.paymentMethod} / {row.deliveryDetails}
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        {row.products.map((product) => (
          <div key={product.product._id}>
            * Article {product.product.itemNo} ({product.product.name} -{" "}
            {product.cartQuantity} qty)
          </div>
        ))}
      </TableCell>
    </TableRow>
  );
};

OrdersTableRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  row: PropTypes.objectOf(PropTypes.any).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.arrayOf(PropTypes.any).isRequired,
  setSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrdersTableRow;
