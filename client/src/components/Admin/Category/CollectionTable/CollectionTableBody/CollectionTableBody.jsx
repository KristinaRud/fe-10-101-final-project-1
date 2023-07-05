import { TableBody } from "@mui/material";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { stableSort, getComparator } from "../../../utils";
import CollectionTableRow from "./CollectionTableRow/CollectionTableRow";

const CollectionTableBody = ({ data, order, orderBy }) => {
  const tableData = useMemo(() => {
    if (data.length > 0) {
      return stableSort(data, getComparator(order, orderBy));
    }
  }, [data, order, orderBy]);
  return (
    <TableBody>
      {data.length > 0 &&
        tableData.map((row) => <CollectionTableRow key={row.id} row={row} />)}
    </TableBody>
  );
};

CollectionTableBody.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default CollectionTableBody;
