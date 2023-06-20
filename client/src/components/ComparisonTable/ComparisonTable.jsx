import { useSelector } from "react-redux";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import PropTypes from "prop-types";
import { selectComparison } from "../../store/selectors/comparison.selector";
import ComparisonRow from "./ComparisonRow/ComparisonRow";
import ComparisonHeader from "./ComparisonHeader/ComparisonHeader";
import s from "./ComparisonTable.module.scss";

const ComparisonTable = ({ category }) => {
  const { comparison } = useSelector(selectComparison);

  return (
    <Paper sx={{ width: "100%", margin: "10px auto" }}>
      <TableContainer sx={{ maxHeight: 700 }} className={s.table}>
        <Table stickyHeader aria-label="sticky table">
          {Object.keys(comparison).length > 0 && (
            <>
              <ComparisonHeader data={comparison.products[category]} />
              <TableBody>
                <ComparisonRow
                  title={"brand"}
                  data={comparison.products[category]}
                />
                <ComparisonRow
                  title={"color"}
                  data={comparison.products[category]}
                />
                <ComparisonRow
                  title={"manufacturerCountry"}
                  data={comparison.products[category]}
                />
                <ComparisonRow
                  title={"rating"}
                  data={comparison.products[category]}
                />
                <ComparisonRow
                  title={"completeSet"}
                  data={comparison.products[category]}
                />
                {Object.entries(
                  comparison.products[category][0].characteristics,
                ).map((item) => (
                  <ComparisonRow
                    key={item[1]}
                    data={comparison.products[category]}
                    title={item[0]}
                  />
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
};

ComparisonTable.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ComparisonTable;
