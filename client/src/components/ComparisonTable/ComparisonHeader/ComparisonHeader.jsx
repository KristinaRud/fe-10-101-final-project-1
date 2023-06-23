import { TableHead, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import ComparisonHeaderCell from "./ComparisonHeaderCell/ComparisonHeaderCell";

const ComparisonHeader = ({ data }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          {data?.map((column) => (
            <ComparisonHeaderCell key={column._id} column={column} />
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

ComparisonHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default ComparisonHeader;
