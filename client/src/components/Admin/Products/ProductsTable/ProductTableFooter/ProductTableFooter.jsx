import { TableFooter, TablePagination, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TablePaginationActions from "./TablePaginationActions";

const ProductTableFooter = ({ productsQuantity }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    query.set("startPage", newPage + 1);
    navigate(`?${query.toString()}`);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    query.set("startPage", 1);
    query.set("perPage", event.target.value);
    navigate(`?${query.toString()}`);
  };

  useEffect(() => {
    const startPage = query.get("startPage");
    const perPage = query.get("perPage");
    if (startPage && perPage) {
      setPage(+startPage - 1);
      setRowsPerPage(+perPage);
    }
  }, [query]);
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[
            10,
            20,
            30,
            { label: "All", value: productsQuantity },
          ]}
          colSpan={10}
          count={productsQuantity}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};

ProductTableFooter.propTypes = {
  productsQuantity: PropTypes.number.isRequired,
};

export default ProductTableFooter;
