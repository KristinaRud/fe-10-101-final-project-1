import PropTypes from "prop-types";
import { TableBody } from "@mui/material";
import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";

const ProductsTableBody = ({ data }) => {
  return (
    <TableBody>
      {data?.length > 0 &&
        data?.map((row) => <ProductsTableRow key={row.itemNo} row={row} />)}
    </TableBody>
  );
};

ProductsTableBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};
export default ProductsTableBody;
