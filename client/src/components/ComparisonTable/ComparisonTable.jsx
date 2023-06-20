import { useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import PropTypes from "prop-types";
import { selectComparison } from "../../store/selectors/comparison.selector";
import ComparisonRow from "./ComparisonRow/ComparisonRow";

const ComparisonTable = ({ category = "Monitors" }) => {
  const { comparison } = useSelector(selectComparison);
  console.log(comparison);
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead />
          <TableBody>
            {Object.keys(comparison).length > 0 && (
              <ComparisonRow
                key={comparison._id}
                title={"brand"}
                data={comparison.products[category]}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

ComparisonTable.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ComparisonTable;
