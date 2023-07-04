import { Box, Button, Paper, Table, TableContainer } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BreadcrumbsApp from "../../BreadcrumbsApp/BreadcrumbsApp";
import s from "../../ComparisonTable/ComparisonTable.module.scss";

const BasicTableStructure = ({
  breadcrumbs,
  linkToNew,
  addNew,
  toggleBtn = null,
  children,
}) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginBottom={2}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <BreadcrumbsApp
          breadcrumbsCustomData={breadcrumbs}
          sx={{ padding: "0px 20px 0" }}
        />
        <Link to={`/admin/${linkToNew}/new`}>
          <Button
            variant={"outlined"}
            sx={{
              border: "2px solid #0156FF",
              borderRadius: "50px",
              color: "#0156FF",
              width: "fit-content",
              "&:hover": {
                border: "2px solid #0156FF",
                backgroundColor: "#0156FF",
                color: "white",
              },
            }}
          >
            Add new {addNew}
          </Button>
        </Link>
      </Box>
      {toggleBtn}
      <TableContainer component={Paper} className={s.table}>
        <Table aria-label="collapsible table" size={"small"}>
          {children}
        </Table>
      </TableContainer>
    </>
  );
};

BasicTableStructure.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  linkToNew: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  addNew: PropTypes.string.isRequired,
  toggleBtn: PropTypes.node,
};

export default BasicTableStructure;
