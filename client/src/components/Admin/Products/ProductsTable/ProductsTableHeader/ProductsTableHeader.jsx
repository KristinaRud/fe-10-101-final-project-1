import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { headers } from "./utils";

const ProductsTableHeader = () => {
  const [orderBy, setOrderBy] = useState("itemNo");
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

  const renderOptions = (product) => {
    const { field, name, sortable } = product;
    if (sortable) {
      const sortDirection =
        // eslint-disable-next-line no-nested-ternary
        orderBy === field ? (direction === "-" ? "asc" : "desc") : false;
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
        {headers.map((product) => renderOptions(product))}
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)", width: "50px" }}
        />
      </TableRow>
    </TableHead>
  );
};

export default ProductsTableHeader;
