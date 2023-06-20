import { TableCell, TableRow, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import theme from "../../../theme/createTheme";
import { formatString } from "../../../utils/string/formatString";
import { selectComparison } from "../../../store/selectors/comparison.selector";
import { checkRow, checkRowDifference } from "./utils";

const ComparisonRow = ({ title, data }) => {
  const [different, setDifferent] = useState(false);
  const { showDifference } = useSelector(selectComparison);

  useEffect(() => {
    if (showDifference) {
      const values = data.map((item) => checkRow(item, title, data));
      const isDifferent = checkRowDifference(values);
      setDifferent(isDifferent);
    } else {
      setDifferent(false);
    }
  }, [data, showDifference, title]);

  return (
    <>
      {!different && !!data && (
        <>
          <TableRow hover sx={{ backgroundColor: theme.palette.action.hover }}>
            <TableCell align="center" colSpan={data.length}>
              <Typography variant="h6">{formatString(title)}</Typography>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.02)",
              },
            }}
          >
            {data.map((item) => (
              <TableCell
                align="center"
                key={item.itemNo}
                sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
              >
                <Typography variant="body1">
                  {checkRow(item, title, data)}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </>
      )}
    </>
  );
};

ComparisonRow.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default ComparisonRow;
