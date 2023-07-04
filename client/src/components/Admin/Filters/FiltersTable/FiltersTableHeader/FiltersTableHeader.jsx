import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import PropTypes from "prop-types";

const FiltersTableHeader = ({ orderBy, order, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
          sortDirection={orderBy === "type" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "type"}
            direction={orderBy === "type" ? order : "asc"}
            onClick={createSortHandler("type")}
          >
            Type
          </TableSortLabel>
        </TableCell>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
          sortDirection={orderBy === "name" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={createSortHandler("name")}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        />
      </TableRow>
    </TableHead>
  );
};

FiltersTableHeader.propTypes = {
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default FiltersTableHeader;
