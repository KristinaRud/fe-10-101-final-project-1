import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import { headers } from "./utils";

const OrdersTableHeader = ({ numSelected, rowCount, onSelectAllClick }) => {
  const [orderBy, setOrderBy] = useState("date");
  const [direction, setDirection] = useState("-");
  const [initialDirection, setInitialDirection] = useState("-");
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleClickSort = (field) => () => {
    let newDirection;
    if (orderBy === field) {
      newDirection = direction === "-" ? "+" : "-";
    } else {
      newDirection = initialDirection;
      setInitialDirection("-");
    }
    setDirection(newDirection);
    setOrderBy(field);
    params.set("sort", `${newDirection}${field}`);
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    const sort = params.get("sort");
    if (sort) {
      const [newDirection, ...newOrderBy] = sort.split("");
      setDirection(newDirection);
      setOrderBy(newOrderBy.join(""));
    }
  }, [params]);

  return (
    <TableHead>
      <TableRow>
        <TableCell
          padding="checkbox"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          <Checkbox
            color="secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all orders",
            }}
          />
        </TableCell>
        {headers.map(({ field, name, sortable }) => {
          const sortDirection =
            // eslint-disable-next-line no-nested-ternary
            orderBy === field ? (direction === "-" ? "asc" : "desc") : false;
          if (sortable) {
            return (
              <TableCell
                key={field}
                align="center"
                sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                sortDirection={sortDirection}
              >
                <TableSortLabel
                  active={orderBy === field}
                  direction={direction === "-" ? "asc" : "desc"}
                  onClick={handleClickSort(field)}
                >
                  {name}
                </TableSortLabel>
              </TableCell>
            );
          }
          return (
            <TableCell
              key={field}
              align="center"
              sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
            >
              {name}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

OrdersTableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
};

export default OrdersTableHeader;
