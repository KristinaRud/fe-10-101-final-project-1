import { useSelector } from "react-redux";
import { TableBody } from "@mui/material";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { selectColors } from "../../../../../store/selectors/colors.selector";
import { selectFilters } from "../../../../../store/selectors/filters.selector";
import { getComparator, stableSort } from "../../../utils";
import FilterTableRow from "./FilterTableRow/FilterTableRow";

const FiltersTableBody = ({ order, orderBy }) => {
  const colors = useSelector(selectColors);
  const filters = useSelector(selectFilters);

  const tableData = useMemo(() => {
    const data = [];
    if (colors.length > 0 && filters.filtersData.length > 0) {
      colors.forEach((color) => data.push({ type: "color", ...color }));
    }
    if (filters.filtersData.length > 0) {
      filters.filtersData.forEach((filter) => {
        filter.forEach((obj) => data.push(obj));
      });
    }
    return stableSort(data, getComparator(order, orderBy));
  }, [colors, filters, order, orderBy]);

  return (
    <TableBody>
      {tableData.length > 0 &&
        tableData.map((row) => {
          return <FilterTableRow key={row._id} row={row} />;
        })}
    </TableBody>
  );
};

FiltersTableBody.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};
export default FiltersTableBody;
